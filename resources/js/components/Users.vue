<template>
    <v-container>         
        <h1>This is Users Component</h1>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
         
    </v-container>
</template>

<script>
import Axios from 'axios';

export default {
    data () {
      return{
        users: ''
      }
    },
    created: function(){
        let uri = 'http://localhost:8000/api/auth';
        
        this.axios.get(uri+'/user')
          .then((response)=>{
              this.users = response.data;
            console.log(response);
            
        }).catch((error)=>{
            console.log('Error: '+ error);
        });

        // this.axios.post(uri+'/signup' ,{ 
        //     name: 'abc'           ,
        //     email	: 'abc@ab.cd',
        //     password		: 'abcd',            
        //     password_confirmation : 'abcd'
        // }).then((response)=>{
        //     console.log(response);
            
        // }).catch((error)=>{
        //     console.log('Error: '+ error);
        // });


        this.axios.post(uri+'/login' ,{            
            email	: 'abcd@ab.cd',
            password		: 'abcd',            
        }).then((response)=>{
            console.log(response);
            
        }).catch((error)=>{
            console.log('Error: '+ error);
        });
    },

    methods: {
      
    }
}
</script>
