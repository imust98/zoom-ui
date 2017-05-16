<template>
    <div>
        <article class="doc" v-html="article"></article>
        <p>单个Radio</p>
        <Radio r-model="single">选项一</Radio>
        <p>RadioGroup</p>
        <div>
            <Radio-Group v-model="vertical" @change="changeHandle">
                <Radio label="apple"><span>Apple</span></Radio>
                <Radio label="android"><span>Android</span></Radio>
                <Radio label="windows"><span>Windows</span></Radio>
            </Radio-Group>
        </div>
    </div>
</template>
<style lang="less">
</style>
<script>
    let tpl = require("../../doc/html/radio.html");
    export default {
        data () {
            return {
                vertical: 'apple',
                article: tpl,
                single:false
            }
        },
        methods: {
            changeHandle(value){
               // alert(value)
            }
        }
    }
</script>