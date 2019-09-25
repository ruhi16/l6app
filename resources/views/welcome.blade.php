<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
        {{-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> --}}
        {{-- <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet"> --}}

        <link rel="stylesheet" href="{{ asset('css/material-icons.css') }}" />


        <link href="{{ asset('css/app.css')}}" rel="stylesheet">
        <link href="{{ asset('css/material-icons.min.css') }}" rel="stylesheet" />
       
    </head>
    <body>        
        <div id="app">            
            <v-app app> 
            {{-- <v-app color="grey" dark> --}}
                {{-- <nav-bar></nav-bar> --}}
                <Navbar></Navbar>
                


                <router-link to="/example">Example Link</router-link>
                <router-link to="/sample">Sample Link</router-link>                                                     
                <router-link to="/registeruser">Register User</router-link>   
            
                <router-view></router-view>
                {{-- <Carousel></Carousel> --}}
            </v-app>
            
        </div>

        <script src="{{ asset('js/app.js')}}" ></script>
    </body>
</html>
