<template>
    <div>
        <h1>Login</h1>
        <form method="POST" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="control">
                <label for="name" class="label">Login:</label>
                <input type="text" id="name" name="name" class="input" v-model="form.login">
                <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
            </div>

            <div class="control">
                <label for="description" class="label">Password:</label>
                <input type="password" id="description" name="description" class="input" v-model="form.password">
                <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            </div>
            <div class="control">
                <button class="button is-primary" :disabled="form.errors.any()">Create</button>
            </div>

        </form>
    </div>
</template>

<script>
    import authService from '../../../core/Auth'

    export default {
        name: 'login',
        components: {
        },
        data() {
            return {
                form: new Form({
                    login: '',
                    password: ''
                })
            }
        },
        methods: {
            onSubmit() {
                authService
                    .login('/login', data, '/admin')
                    .catch(errors => {
                        this.form.showErrors(errors);
                    });
            }
        }
    }
</script>