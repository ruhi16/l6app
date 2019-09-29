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
                    Login
                  </v-btn>

                  <v-btn                    
                    color="info"
                    class="mr-4"
                    @click="getLoginInfo"
                  >
                    Login Info
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
      config: { },
      user:{},
      uri : 'http://localhost:8000/api/auth',
      valid: true,
      show:false,
      snackbar:false,

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
      validate () {//login        
        if (this.$refs.form.validate()) { 
          let user = {
            email : this.email,
            password : this.password
          }
          // console.log('user info dispatched.... to vuex store');
          // console.log(user);          

          this.$store.dispatch('login', user)
              .then(response =>{
                  this.$router.push('/users');   
              })

          this.snackbar = true;
        }       


        if( this.$store.getters.getAuthToken !== '' ) {
          console.log('successful');
        }else{
          console.log('un-successful');
        }
      },


      getLoginInfo(){
        console.log('this is from Login.vue: user getLoginInfo:');
        console.log(this.$store.getters.getAuthUser);
        // console.log(this.$store.getters.user);
        
        // this.user = this.$store.getters
        this.user = JSON.stringify(this.$store.getters.user)
        console.log(this.user);
        this.$store.dispatch('refresh', this.$store.getters.getAuthToken);
      },

      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },     
    },
    created: function(){
        
    }
  }
</script>