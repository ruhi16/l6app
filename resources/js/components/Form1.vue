<template>
<v-container fluid>
<v-layout row wrap>


   <v-card
    max-width="800"
    class="mx-auto"
    >
    <v-img
        
        class="white--text"
        height="200px"
        width="800px"
        src="../assets/01.jpg"
      >
        <v-card-title class="align-end fill-height">New User Registration</v-card-title>
      </v-img>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                
                <v-card-text>

                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>
                  


                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>


                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'visibility' : 'visibility_off'"
                    :rules="[passRules.required, passRules.min]"
                    :type="show ? 'text' : 'password'"
                    name="password"
                    prepend-icon="watch"
                    label="Password"
                    hint="At least 4 characters"
                    counter
                    @click:append="show = !show"
                  ></v-text-field>

                  

            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>                  

                  <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                  >
                    Reset Form
                  </v-btn>

                  <v-btn
                    color="warning"
                    @click="resetValidation"
                  >
                    Reset Validation
                  </v-btn>

                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                  >
                    Register
                  </v-btn>

            </v-card-actions>
                </v-form>


      </v-card>          

      <v-snackbar v-model="snackbar">
        Form Saved Successfully
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

  </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      show:false,
      snackbar:false,

      name: '',
      
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      
      password:'',
        passRules: {
          required: v => !!v || 'Password is required',
          min: v => v.length >= 4 || 'Min 4 characters',
          // min: v => /.+@.+\..+/.test(v) || 'Password must be valid',
        },
      select: null,
 
      
    }),

    methods: {
      validate () {
        
        if (this.$refs.form.validate()) {
          this.$router.push("/sample");        
          this.snackbar = true
        }
        // this.$router.push("/search?"+this.foobar);
        
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
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
    }
  }
</script>