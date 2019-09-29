<template>
    <v-container>         
        <h1>This is User's Home Component</h1>
        <h2>Welcome {{ getUser.name ? getUser.name : 'Uhh!! Not A Logged In User here.' }}</h2>
         
    </v-container>
</template>

<script>
import Axios from 'axios';

export default {
    data () {
      return{
        user: {}
      }
    },  
    mounted(){
        if(this.$store.getters.getAuthToken){
            this.$store.dispatch('refresh', this.$store.getters.getAuthToken);   
        }
    },
    computed: {
        getUser(){  
                   
            this.user = this.$store.getters.user;
            return this.user;
        }
    },
    methods: {
      
    }
}
</script>
