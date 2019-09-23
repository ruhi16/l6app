import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        message:'Hello this is from vuex',
        users: [
            {id:1, name:'Hari Narayan', age: 40},
            {id:2, name:'Ayantika', age: 7},
            {id:3, name:'Rakhi Sarkar', age: 38}
        ]
    },
    mutations:{
        updateMessageMutation(state){            
            state.message = "Vuex updated message from Mutations.";
            console.log('Sample Component mounted mutations: ' + state.message);
        },
        addUser(state, payload){
            state.users.push(payload);
        }
    },
    actions:{
        updateMessageAction(context){
            console.log('Sample Component from actions.');
            context.commit('updateMessageMutation');
        }
    },
    getters:{
        getUsers(state){
            return state.users.filter(user =>user.age > 0);

        }
    }
});


export default store;