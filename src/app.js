import Vue from 'vue'
import tButton from './button'
import tIcon from './icon'
import tButtonGroup from './button-group'
import tInput from './input'

Vue.component('t-button', tButton)
Vue.component('t-icon', tIcon)
Vue.component('t-button-group', tButtonGroup)
Vue.component('t-input', tInput)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true
    }
});

//单元测试  chai库
import chai from 'chai'
import spies from 'chai-spies'//用于点击监听事件的库

chai.use(spies)

const expect = chai.expect

/** 单元测试必有的两步：
 * 1、作用域隔离
 * 2、断言**/

// icon
{
    const Constructor = Vue.extend(tButton)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    //断言href等于#i-settings,一个输入等于一个输出，没有报错则测试通过
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(tButton)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(tButton)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()

}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(tButton)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.equal('2')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(tButton)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount()
    let spy = chai.spy(()=>{})//间谍函数
    vm.$on('click', spy)//间谍函数劫持点击事件

    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()//当button click时，期待间谍函数被调用
    vm.$el.remove()
    vm.$destroy()

}


