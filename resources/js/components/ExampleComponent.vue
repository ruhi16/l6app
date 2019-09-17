<template>
    <div>
    <h1>This is test for Vuetify Toolbar</h1>
    <p class="font-weight-black">Black text.</p>
    <p class="font-weight-bold">Bold text.</p>
    <p class="font-weight-medium">Medium weight text.</p>
    <p class="font-weight-regular">Normal weight text.</p>
    <p class="font-weight-light">Light weight text.</p>
    <p class="font-weight-thin">Thin weight text.</p>
    <p class="font-italic">Italic text.</p>
    <!-- <span class="material-icons">face</span> -->
    <v-alert type="success">
      I'm a success alert.
    </v-alert>

    <v-alert type="info">
      I'm an info alert.
    </v-alert>

    <v-alert type="warning">
      I'm a warning alert.
    </v-alert>

    <v-alert type="error">
      I'm an error alert.
    </v-alert>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Example Component mounted. after push up on heroku')
        }
    }
</script>
