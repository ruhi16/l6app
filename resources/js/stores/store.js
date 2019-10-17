import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

import Testusers from './Testusers';
// import Loginauth from './Loginauth';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const store = new Vuex.Store({

    modules: {
        testusers: Testusers,
        // loginauth: Loginauth
    },
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
    },


    mutations: {
        auth_request(state) {
            state.status = 'Loading....'
        },
        auth_success(state, data) {
            state.status = 'Success...';
            state.token = data.token;
            state.user = data.user;            
        },
        auth_refresh(state, data) {
            state.status = 'Refreshed...';
            state.user = data;
            console.log(state.status);
        },
        auth_error(state) {
            state.status = 'Error...';
        },
        auth_logout(state) {
            state.status = '';
            state.token = '';
            state.user = {};
        },
    },


    actions: {
        login({commit}, user) {            
            return new Promise((resolve, reject) => {
                axios({
                    url: 'http://localhost:8000/api/auth/login',
                    data: user,
                    method: 'POST'
                }).then((resp) => {

                    // console.log(resp);
                    const token = resp.data.access_token;
                    const user = resp.data.user;
                    localStorage.setItem('token', token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

                    // console.log('this is from action: response after successfull login, with user info:');
                    // console.log(user);
                    commit('auth_success', {
                        token,
                        user
                    });
                    resolve(resp);

                }).catch((error) => {
                    console.log('This is from action login: errors after unsuccessfull login')
                    console.log(error);
                    commit('auth_error');
                    reject(error);
                });


            });



        },
        refresh({
            commit
        }, token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios({
                url: 'http://localhost:8000/api/auth/user',
                method: 'GET'
            }).then((resp) => {
                const user = resp.data;
                commit('auth_refresh', user);

            }).catch((error) => {
                console.log('This is from action refresh: errors after unsuccessfull refresh')
                console.log(error);
                commit('auth_error');
            })
        },

        register({
            commit
        }, user) {
            console.log('user received from vuex action: register()');
            console.log(user);
            axios({
                url: 'http://localhost:8000/api/auth/signup',
                data: user,
                method: 'POST'
            }).then((resp) => {
                console.log('this is from action: register after successfull user registration:');
                console.log(resp);
                commit('auth_register', user);

                // resolve(resp);

            }).catch((error) => {
                console.log('This is from action register: errors after unsuccessfull register')
                console.log(error);
                commit('auth_error');
            })
        },





        logout({
            commit
        }, token) {
            console.log('action:logout', token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios({
                url: 'http://localhost:8000/api/auth/logout',
                method: 'GET'
            }).then((resp) => {
                console.log(resp.data);


            }).catch((error) => {
                console.log('This is from action logout: errors after unsuccessfull logout')
                console.log(error);
            })
            commit('auth_logout')
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
            console.log('Logout Action Clicked');

        },

    },

    
    getters: {
        user: state => {
            return state.user
        },
        getAuthUser(state) {
            console.log(state.user);
            return state.user;
        },
        getAuthToken(state) {
            return state.token;
        },
        getAuthStatus(state) {
            // console.log('Status: '+state.status);
            return state.status;
        },
    }
});

export default store;
