<template>
    <div>
        <h1>This is test for Vuetify Toolbar</h1>
        <h3>Sample Component <small>{{ msg }}</small></h3>
        <v-btn @click="updateMessage">Update Message</v-btn>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name}}</li>
        </ul>
        <v-btn @click="addUser({id: 4, name: 'Pradip Kumar', age: 70})">Add User</v-btn>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    
    export default {
        data(){
            return{

            }
        },
        computed: {
            ...mapState({ msg: 'message' }),
            ...mapGetters({users: 'getUsers'})
        },
        // computed: {
        //     msg() { 
        //         return this.$store.state.msg
        //     },
        //     getUsers(){
        //         return this.$store.getters.getUsers;
        //     }
        // },
        // methods: {
        //     updateMessage () {                
        //         this.$store.dispatch('updateMessageAction');
        //     }
        // }
        methods:{
            ...mapActions({ updateMessage: 'updateMessageAction'}),
            ...mapMutations(["addUser"])
        }
    }
</script>
