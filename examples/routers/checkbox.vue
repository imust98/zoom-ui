<template>
    <div>
        <article class="doc" v-html="article"></article>
        <Checkbox v-model="single" @on-change="changeHandle">Checkbox</Checkbox>
        {{ single }}
        <div @click="single = !single">single-change</div>
        <br>
        {{ social }}
        <Checkbox-group v-model="social" @on-change="changeHandle">
            <Checkbox label="twitter">
                <Icon type="social-twitter"></Icon>
                <span>Twitter</span>
            </Checkbox>
            <Checkbox label="facebook">
                <Icon type="social-facebook"></Icon>
                <span>Facebook</span>
            </Checkbox>
            <Checkbox label="github">
                <Icon type="social-github"></Icon>
                <span>Github</span>
            </Checkbox>
            <Checkbox label="snapchat">
                <Icon type="social-snapchat"></Icon>
                <span>Snapchat</span>
            </Checkbox>
        </Checkbox-group>
    </div>
</template>
<style lang="less">
</style>
<script>
    let tpl = require("../../doc/html/checkbox.html");
    export default {
        data () {
            return {
                article:tpl,
                social: ['facebook', 'github'],
                single: false
            }
        },
        methods: {
            changeHandle (d) {
                console.log(d)
            }
        }
    }
</script>