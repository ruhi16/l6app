import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { resolve } from 'path';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const store = new Vuex.Store({
    state:{
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},



        message:'Hello this is from vuex',
        users: [
            {id:1, name:'Hari Narayan', age: 40},
            {id:2, name:'Ayantika', age: 7},
            {id:3, name:'Rakhi Sarkar', age: 38}
        ]
    },
    mutations:{
        auth_request(state){
            state.status = 'Loading....'
        },
        auth_success(state, data){
            state.state = 'Success...';            
            state.token = data.token;
            state.user = data.user;
            console.log('this is from mutations: successfully data assigneed to vuex store state');
            console.log(data.user);
        },
        auth_error(state){
            state.status = 'Error...';
        },
        logout(state){
            state.status = '';
            state.token = '';
            state.user = { };
        },

        updateMessageMutation(state){            
            state.message = "Vuex updated message from Mutations.";
            console.log('Sample Component mounted mutations: ' + state.message);
        },
        addUser(state, payload){
            state.users.push(payload);
        }
    },
    actions:{
        login({commit}, user){
            console.log('user received from vuex action: login()');
            console.log(user);
            axios({
                url: 'http://localhost:8000/api/auth/login',
                data: user,
                method: 'POST'
            }).then((resp)=>{
                
                console.log(resp);
                const token = resp.data.access_token;
                const user = resp.data.user;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                
                console.log('this is from action: response after successfull login, with user info:');
                console.log(user);
                commit('auth_success', {'token': token, 'user': user});
                // resolve(resp);

            }).catch((error)=>{
                console.log('this is from action: errors after unsuccessfull login')
                console.log(error);
            })
        },
        updateMessageAction(context){
            console.log('Sample Component from actions.');
            context.commit('updateMessageMutation');
        }
    },
    getters:{
        getAuthUser(state){
            console.log('this is from getters getAuthUser');
            console.log(state.user);
            return state.user;
        },
        getAuthToken(state) {
            return state.token;
        },
        getAuthStatus(state) {
            return state.status;
        },




        getUsers(state){
            return state.users.filter(user =>user.age > 0);

        }
    }
});


export default store;