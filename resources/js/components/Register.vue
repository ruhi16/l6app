<template>
    <v-container>         
        <h1>This is Register Component</h1>
         <v-row align="center">
    
            <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
            class='px-3'
            >
                <input type='text' :value="csrfToken" name="_token"/>
                <v-text-field
                    v-model="name"                    
                    :counter="30"
                    :rules="nameRules"
                    prepend-icon="watch"
                    label="Name"
                    required
                ></v-text-field>
                
                <v-text-field
                    v-model="email"                    
                    :rules="emailRules"
                    prepend-icon="watch"
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

                <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must check to continue!']"
                    label="Remember Me"
                    required
                ></v-checkbox>

                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                >
                    Validate
                </v-btn>

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
            </v-form>
        </v-row>


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
    </v-container>
</template>

<script>
  import Axios from 'axios';
    export default {
    data () {
      return{
        
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
    //   items: [
    //     'Item 1',
    //     'Item 2',
    //     'Item 3',
    //     'Item 4',
    //   ],
      checkbox: false,
      lazy: false,
      }
    },

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          console.log(this.name, this.email, this.password);
          // const baseUrl = 'http://localhost/l6app/public/api/auth/';
          // const header = {
          //       'X-CSRF-TOKEN'     : this.csrfToken,
          //       'Content-Type'     : 'application/json', 
          //       'X-Requested-With' : 'XMLHttpRequest'
          //     };
          // const Parent = axios.create({baseUrl, header});
          // class Http {} extends Parent;
          // parent
          Axios.post('http://l6test.herokuapp.com/api/auth/shinup', {
                name	: this.name,
                email	: this.email,
                password		: this.password,
                password_confirmation: this.password 
          },{
                'X-CSRF-TOKEN'     : this.csrfToken,
                'Content-Type'     : 'application/json', 
                'X-Requested-With' : 'XMLHttpRequest'
              }).then(response => {
            console.log(response);
          }).catch(error => {
            console.log(error);
          });

          // Axios({            
          //     method: 'post',
          //     url: 'http://localhost/l6app/public/api/auth/signup',
          //     headers: {
            //     'X-CSRF-TOKEN'     : window.Laravel.csrfToken,
          //       'Content-Type'     : 'application/json', 
          //       'X-Requested-With' : 'XMLHttpRequest'
          //     },
          //     data:{
          //       name	: this.name,
          //       email	: this.email,
          //       password		: this.password,
          //       password_confirmation: this.password            
          //     }
          // this.Axios.post('http://localhost/l6app/public/api/auth/user' ,{
          //   name	: this.name,
          //   email	: this.email,
          //   password		: this.password,
          //   password_confirmation: this.password  
          // }).then(response => {
          //   console.log(response);
          // }).catch(error => {
          //   console.log(error);
          // });
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
