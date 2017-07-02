import './bootstrap'
import router from './routes'

new Vue({
    el: '#app',
    router,
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});
