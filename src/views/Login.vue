<template>
        <img class="bg" src="../assets/image/background.jpg" alt="Login using Facebook">
        <div class="signin" :style="signin">
            <h3>Welcome!</h3>
            <input required type="text" name="email" v-model="form.email" placeholder="E-Mail" :style="input">
            <br>
            <input required type="password" name="password" v-model="form.password" placeholder="Password" :style="input">
            <div v-if="form.password.length >1 && form.password.length <8 " class="text-danger">Password minimal 8 karakter</div>
            <br>
            <a class="link" href="#">Forgot Password?</a>
            <br>
            <br>
            <a class="btn btn-outline-success" v-on:click="login" >Sign In</a>
            <a class="btn btn-outline-dark" href="/signup">Sign Up</a>
            <br>
            <img class="logo" src="../assets/image/google.svg" v-on:click="GoogleAuth" alt="Login using Google">
            <img class="logo" src="../assets/image/facebook.svg" alt="Login using Facebook">
            <img class="logo" src="../assets/image/twt.png" alt="Login using Twitter">
        </div>
</template>

<script>
    import axios from 'axios'
    /*import firebase from 'firebase'
    import Vue from 'vue'y
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)*/

    export default {
        name: 'SignIn',
        props: {
            signin: String,
            input: String
        },
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        data(){
            return{
                form:{
                    email:'',
                    password:'',
                }
            }
        },
        methods:{
            // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            async login(){
                try{
                    const response = await axios.post('https://penjualansepatu.herokuapp.com/login', this.form)
                    console.warn(response)
                    alert("Login Berhasil !")
                } catch(e){
                    console.log(e)
                    alert("Login Gagal !")
                }  
            },
            // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            async GoogleAuth(){
                // const provider = new firebase.auth.GoogleAuthProvider();
                // try{
                //     await firebase.auth().signInWithPopup(provider)
                // } catch (error){
                //     console.log(error);
                // }
                alert("Login Berhasil")
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    template{
        /*background-image: url("https://mdbootstrap.com/img/new/fluid/city/008.jpg");*/
        background-image: url("../assets/image/background.jpg");
    }
    
    .signin {
        /*background: url("/assets/background.jpg") center center;
        background: rgba(255, 255, 255, 0.4);
        background-color: lightblue;*/
        background-color: rgb(228, 228, 228);
        /*background: rgba(255, 255, 255, 0.4);*/
        position: absolute;
        top: 20%;
        left: 30%;
        width: 40%;
        text-align: center;
        padding: 5px;
        border-radius: 1rem;
        box-shadow: 0px 0px 10px 0px;
        padding-top: 3%;
        padding-bottom: 5%;
        font-family: 'Poppins', sans-serif;
    }
    h3 {
        cursor: default;
        user-select: none;
    }
    input {
        border-radius: 0.5rem;
        border: none;
        padding: 10px;
        text-align: center;
        outline: none;
        margin: 10px;
        width: 75%;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    input:hover {
        box-shadow: 0px 0px 5px 0px;
    }
    input:active {
        box-shadow: 0px 0px 5px 0px;
    }
    a{
        font-size: 10px;
    }
    .btn{
        border-radius: 0.5rem;
        border: none;
        padding: 10px;
        text-align: center;
        outline: none;
        margin: 10px;
        width: 30%;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    #done {
        background: lightgreen;
    }
    .button {
        cursor: pointer;
        user-select: none;
    }
    .logo {
        height: 2.2rem;
        margin: 10px;
        user-select: none;
    }
    .logo:hover {
        box-shadow: 0px 0px 5px 0px;
        cursor: pointer;
        border-radius: 200rem;
    }

    .bg{
        width: 100%;
        height: 100%;
    }
</style>

