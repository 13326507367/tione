<template>
    <div class="t-table-wrapper" ref="wrapper">
        <div :style="{height, overflow:'auto'}" ref="tableWrapper">
            <table class="t-table" ref="table" :class="{bordered, compact, striped: striped}">
                <thead>
                <tr>
                    <th v-if="checkable" :style="{width: '50px'}" class="t-table-center">
                        <input ref="allChecked" type="checkbox" @change="onChangeAllItems"
                               :checked="areAllItemsSelected"/>
                    </th>
                    <th :style="{width: '50px'}" v-if="numberVisible">序号</th>
                    <th v-if="extendField" :style="{width: '50px'}" class="t-table-center">展开</th>
                    <th :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.field">
                        <div class="t-table-header">
                            {{column.text}}
                            <span v-if="column.field in orderBy" class="t-table-sorter"
                                  @click="changeOrderBy(column.field)">
                                <t-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"></t-icon>
                                <t-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"></t-icon>
                            </span>
                        </div>
                    </th>
                    <th ref="actionsHeader" v-if="$scopedSlots.default">操作</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item, index) in dataSource">
                    <tr :key="item.id">
                        <td v-if="checkable" :style="{width: '50px'}" class="t-table-center">
                            <input type="checkbox" @change="onChangeItem(item, index, $event)"
                                   :checked="inSelectedItems(item)">
                        </td>
                        <td :style="{width: '50px'}" v-if="numberVisible">{{index+1}}</td>
                        <td v-if="extendField" :style="{width: '50px'}" class="t-table-center" @click="expendItem(item.id)">
                            <t-icon class="t-table-expendIcon" name="right"></t-icon>
                        </td>
                        <template v-for="column in columns">
                            <td :style="{width: column.width + 'px'}" :key="column.field">
                                <template v-if="column.render">
                                    // 通过vnodes函数组件将对象转化为标签
                                    <vnodes :vnodes="column.render({value: item[column.field]})"></vnodes>
                                </template>
                                <template v-else>
                                    {{item[column.field]}}
                                </template>
                            </td>
                        </template>
                        <td v-if="$scopedSlots.default">
                            <div ref="actions" style="display: inline-block">
                                <slot :item="item"></slot>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="inExpendedIds(item.id)" :key="`${item.id}-expend`">
                        <td :colspan="columns.length + expendedCellColSpan">
                            {{item[extendField] || '无'}}
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
        <div v-if="loading" class="t-table-loading">
            <t-icon name="loading"></t-icon>
        </div>
    </div>
</template>

<script>
    import tIcon from '../icon'

    export default {
        name: 't-table',
        components: {
            tIcon,
            Vnodes: {
                functional: true,
                render: (h, context) => context.props.vnode
            }
        },
        props: {
            height: {
              type: Number
            },
            extendField: {
                type: String
            },
            orderBy: {
                type: Object,
                default: ()=> {}
            },
            striped: {
                type: Boolean,
                default: true
            },
            selectedItems: {
                type: Array,
                default: () => []
            },
            compact: {
                type: Boolean,
                default: false
            },
            dataSource: {
                type: Array,
                required: true,
                validator(array) {
                    return !(array.filter(item => item.id === undefined).length > 0)
                }
            },
            loading: {
                type: Boolean,
                default: false
            },
            numberVisible: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: false
            },
            checkable: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                expendedIds: [],
                columns: []
            }
        },

        watch: {
            selectedItems() {
                if (this.selectedItems.length === this.dataSource.length) {
                    this.$refs.allChecked.indeterminate = false
                } else this.$refs.allChecked.indeterminate = this.selectedItems.length !== 0
            }
        },

        computed: {
            areAllItemsSelected() { //判断所有元素是否被选中
                const a = this.dataSource.map(item => item.id).sort()
                const b = this.selectedItems.map(item => item.id).sort()
                let equal = false
                if (a.length !== b.length) {
                    return equal
                }
                for (let i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) {
                        equal = false
                        break
                    }
                }
                return equal
            },
            expendedCellColSpan() {
                let result = 0
                if (this.checkable) {result += 1}
                if (this.numberVisible) {result += 1}
                if (this.extendField) {result += 1}
                if (this.$scopedSlots.default) {result += 1}
                return result
            }
        },

        mounted() {
            this.columns = this.$slots.default.map(node => {
                let {text, field, width} = node.componentOptions.propsData
                let render = node.data.scopedSlots && node.data.scopedSlots.default //将父组件标签转化为对象
                return {text, field, width, render}
            })

            let table2 = this.$refs.table.cloneNode(false)
            this.table2 = table2
            let tHead = this.$refs.table.children[0]
            let {height} = tHead.getBoundingClientRect()
            this.$refs.tableWrapper.style.height = this.height-height + 'px'
            table2.appendChild(tHead)
            this.$refs.wrapper.appendChild(table2)

            if (this.$scopedSlots.default) {
                let div = this.$refs.actions[0]
                let {width} = div.getBoundingClientRect()
                let parent = div.parentNode
                let styles = getComputedStyle(parent)
                let paddingLeft = styles.getPropertyValue('padding-left')
                let paddingRight = styles.getPropertyValue('padding-right')
                let borderLeft = styles.getPropertyValue('border-left-width')
                let borderRight = styles.getPropertyValue('border-right-width')
                let width2 = width + parseInt(paddingRight) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 'px'
                this.$refs.actionsHeader.style.width = width2
                this.$refs.actions.map(div => {
                    div.parentNode.style.width = width2
                })
            }
        },

        beforeDestroy() {
            this.table2.remove()
        },

        methods: {
            inExpendedIds(id) {
                return this.expendedIds.indexOf(id) > -1
            },
            expendItem(id) {
                if (this.inExpendedIds(id)) {
                    this.expendedIds.splice(this.expendedIds.indexOf(id), 1)
                } else {
                    this.expendedIds.push(id)
                }
            },
            changeOrderBy (key) {
                const copy = JSON.parse(JSON.stringify(this.orderBy))
                let oldValue = copy[key]
                if (oldValue === 'asc') {
                    copy[key] = 'desc'
                } else if (oldValue === 'desc') {
                    copy[key] = true
                } else {
                    copy[key] = 'asc'
                }
                this.$emit('update:orderBy', copy)
            },
            inSelectedItems(item) {
                return this.selectedItems.filter(value => value.id === item.id).length > 0
            },
            onChangeItem(item, index, e) {
                let selected = e.target.checked
                let copy = JSON.parse(JSON.stringify(this.selectedItems))
                if (selected) {
                    copy.push(item)
                } else {
                    copy = copy.filter(i => i.id !== item.id)
                }
                this.$emit('update:selectedItems', copy)
            },
            onChangeAllItems(e) {
                let selected = e.target.checked
                this.$emit('update:selectedItems', selected ? this.dataSource : [])
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'styles/var';
    $grey: darken($grey, 10%);
    .t-table-wrapper {
        position: relative;
      display: flex;
      flex-direction: column-reverse;
      .t-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid $grey;

        &.bordered {
          border: 1px solid $grey;

          td, th {
            border: 1px solid $grey;
          }
        }

        &.compact {
          td, th {
            padding: 4px;
          }
        }

        td, th {
          border-bottom: 1px solid $grey;
          text-align: left;
          padding: 8px;
        }

        &.striped {
          tbody {
            > tr {
              &:nth-child(odd) {
                background: white;
              }

              &:nth-child(even) {
                background: lighten($grey, 10%);
              }
            }
          }
        }

        &-sorter {
          display: inline-flex;
          flex-direction: column;
          margin: 0 4px;
          cursor: pointer;

          svg {
            width: 10px;
            height: 10px;
            fill: $grey;

            &.active {
              fill: darken($grey, 50%);
            }

            &:first-child {
              position: relative;
              bottom: -1px;
            }

            &:nth-child(2) {
              position: relative;
              top: -1px;
            }
          }
        }

        &-header {
          display: flex;
          align-items: center;
        }

        &-wrapper {
          position: relative;
          overflow: auto;
        }

        &-loading {
          background: rgba(255, 255, 255, 0.8);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            width: 50px;
            height: 50px;
            @include spin;
          }
        }

        &-copy {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: white;
        }

        &-expendIcon {
          width: 10px;
          height: 10px;
        }

        & &-center {
          text-align: center;
        }
      }
    }

</style>