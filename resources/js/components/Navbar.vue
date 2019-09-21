<template>
    <nav>
        <!-- <v-toolbar >
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn>
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar> -->
        
    <!-- <v-card color="grey lighten-4" flat height="200px" tile> -->

    <v-toolbar dense>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        
        <v-spacer></v-spacer>
       

        <v-toolbar-items>
            <v-btn text>Link 1</v-btn>
            <v-btn text>Link 2</v-btn>
            <v-btn text>Link 3</v-btn>
        </v-toolbar-items>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <!-- <template v-if="$vuetify.breakpoint.smAndUp">
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

        </v-toolbar>
    <!-- </v-card> -->
        <v-navigation-drawer  app v-model="drawer">
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
        <!-- <v-navigation-drawer app v-model="drawer" class="indigo">
            <p>Test</p>
        </v-navigation-drawer> -->
    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            items:[
                {title: 'Test 1', icon: 'mdi-watch', route:'/'},
                {title: 'Test 2', icon: 'mdi-tennis', route:'/example'},
                {title: 'Test 3', icon: 'mdi-mouse', route:'/sample'},
            ]
        }
    },
    mounted() {
        console.log('Navbar Mounted...');
    }
}
</script>
<style scoped>

</style>