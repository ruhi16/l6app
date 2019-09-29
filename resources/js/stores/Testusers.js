export default{
    namespaced: true,

    state:{
        message:'Hello this is from Testusers vuex',
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

        addUserMutation(state, payload){
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
};


