<template>
    <main>
        <top></top>
        <content>
            <router-view name="frontRouter"></router-view>
        </content>
        <footer></footer>
    </main>
</template>

<script>
    import top from './containers/top.vue'

    export default {
        name: 'front',
        components: {
            top
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>