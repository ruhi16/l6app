<template>
    <nav>
    <v-toolbar app dense float>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>
        
        <v-spacer></v-spacer>       

        <v-toolbar-items>

            <!-- <v-btn text v-if='!hasAuth' :to="{path:'/example'}">Example</v-btn> -->
            <v-btn text :to="{path:'/sample/example'}"     >Example</v-btn>
            <v-btn text :to="{path:'/sample'}"      >Sample</v-btn>
            <v-btn text :to="{path:'/registeruser'}">Register</v-btn>
            <v-btn text :to="{path:'/users'}"       >User</v-btn>


            <v-btn text v-if='!hasAuth' :to="{path:'/login'}">Login</v-btn>
            <v-btn text v-else @click="logout">Logout</v-btn>
        </v-toolbar-items>
        
        <!-- <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-btn icon>
                <v-icon>mdi-export-variant</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-delete-circle</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
        </template> -->

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        </v-toolbar>
    <!-- </v-card> -->
        <v-navigation-drawer temporary app v-model="drawer">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" router :to='item.route'>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title >{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
    </nav>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    data(){
        return{
            drawer: false,
            items:[
                {title: 'Test 1', icon: 'mdi-watch', route:'/'},
                {title: 'Test 2', icon: 'mdi-tennis', route:'/example'},
                {title: 'Test 3', icon: 'mdi-mouse', route:'/sample'},
            ],
            isAuth: true,
        }
    },
    
    methods:{
        // ...mapActions('loginauth', { logout : 'logout'}),
        // this.logout(this.$store.getters.getAuthToken);

        logout(){
            console.log('Logout Clicked');
            this.$store.dispatch('logout', this.$store.getters.getAuthToken);            
        }
    },
    mounted() {
        // console.log('Navbar Mounted...');
        // console.log(this.$root);
    },
    computed:{        
        // ...mapGetters('loginauth', { hasAuth: 'getAuthToken' }),
        hasAuth(){
            return this.$store.getters.getAuthToken;
        }
    },
}
</script>
<style scoped>

</style>