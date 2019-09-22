<template>
    <v-container> 
        
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-center">
                <v-btn large class="info" router >Go to Example</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-center">
                <v-btn large class="info" router >Go to Sample</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 >
                <v-card elevation="200" max-width="400" class="mx-auto">
                    <v-system-bar lights-out></v-system-bar>
                <v-carousel cycle hide-delimiters :show-arrows="false">
                    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">

                    </v-carousel-item>
                </v-carousel>
                <v-card-actions>
                    <v-btn text color="orange">Click Me</v-btn>
                    <v-btn icon fab color="red"><v-icon>mdi-heart</v-icon></v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>            
        </v-layout>

    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                    {id:'1', title: 'First',  src: '../assets/01.jpg'},
                    {id:'2', title: 'Second', src: '../assets/02.jpg'},
                    {id:'3', title: 'Second', src: '../assets/03.jpg'}
                ]
            }
        },
        mounted() {
            console.log('Caraosal Component mounted.')
        }
    }
</script>
