<template>
    <div>
        <article class="doc" v-html="article"></article>
        <Select v-model="model1" style="width: 200px" size="large">
            <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
    </div>
</template>
<style lang="less">
</style>
<script>
    let tpl = require("../../doc/html/select.html");
    export default {
        data () {
            return {
                article:tpl,
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1:''
            }
        }
    }
</script>