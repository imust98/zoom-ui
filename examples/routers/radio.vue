<template>
    <div>
        <article class="doc" v-html="article"></article>
        <div>
            <Radio-Group v-model="sex">
                <Radio label="male form"></Radio>
                <Radio label="female"></Radio>
            </Radio-Group>
            <Button @click="handleChange">change</Button>
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
                sex: '',
                article: tpl
            }
        },
        methods: {
            handleChange () {
                this.sex = 'male form';
            }
        }
    }
</script>