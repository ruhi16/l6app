<template>
    <v-container>         
        <h1>This is Register Component</h1>
         <v-row align="center">
           <v-layout row wrap>


   <v-card
    max-width="800"
    class="mx-auto"
    >
      <v-img
        
        class="white--text"
        height="200px"
        width="800px"
        src="../assets/03.jpg"
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
                    label="Your Name"
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
        {{ msgSnackbar }}
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

  </v-layout>




        </v-row>


      <v-snackbar v-model="snackbar" class="red--text">
        Form Saved Successfully
        <v-btn color="white--text" text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>

    </v-container>
</template>

<script>
  import Axios from 'axios';
    export default {
    data () {
      return{
        msgSnackbar:'',
        valid: true,
        show: false,
        snackbar: false,

        name: '',        
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 30) || 'Name must be less than 30 characters',
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
    
      checkbox: false,
      lazy: false,
      }
    },

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          console.log(this.name, this.email, this.password, this.csrfToken);
          let user = {
            name: this.name,
            email : this.email,
            password : this.password,
            password_confirmation: this.password
          }
          this.$store.dispatch('register', user);

          this.msgSnackbar = "User Registered Successfully!";
          this.snackbar = true;          
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
      created() {
          this.csrfToken = document.querySelector('meta[name="csrf-token"]').content
      }
    }
</script>
