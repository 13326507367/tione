<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-button>默认按钮</t-button>
        <t-button icon="settings">默认按钮</t-button>
        <t-button icon="settings" iconPosition="right">默认按钮</t-button>
        <t-button :loading="true">默认按钮</t-button>
        <t-button disabled>默认按钮</t-button>

        <p>
            <strong>代码</strong>
        </p>
        <div class="code-content" v-highlight>
            <div class="code-content-height">
                <pre><code class="html">{{content}}</code></pre>
            </div>
        </div>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'

    export default {
        components: {
            't-button': Button
        },
        data() {
            return {
                content: `
          <t-button>默认按钮</t-button>
    <t-button icon="settings">默认按钮</t-button>
    <t-button :loading="true">默认按钮</t-button>
    <t-button disabled>默认按钮</t-button>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>