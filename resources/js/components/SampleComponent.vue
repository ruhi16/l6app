<template>
    <div>
        <h1>This is test for Vuetify Toolbar</h1>
        <h3>Sample Component <small>{{ msg }}</small></h3>
        <v-btn @click="updateMessage">Update Message</v-btn>
        <ul>
            <li v-for="user in getUsers" :key="user.id">{{ user.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{}

        },
        computed: {
            msg() { 
                return this.$store.state.msg
            },
            getUsers(){
                return this.$store.getters.getUsers;
            }
        },
        methods: {
            // console.log('Sample Component mounted.');
            updateMessage () {
                // console.log('Sample Component button clicked.');
                this.$store.dispatch('updateMessageAction');
            }
        }
    }
</script>
