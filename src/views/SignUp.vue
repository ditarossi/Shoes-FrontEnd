<template>
    <img class="bg" src="../assets/image/background.jpg" alt="Login using Facebook">    
    <div class="signup" :style="signup">
        <h3>Welcome!</h3>
        <input required type="text" v-model="posts.nama" id="username" placeholder="Nama Lengkap" :style="input">
        <br>
        <input required type="email" v-model="posts.email" id="email" placeholder="E-Mail" :style="input">
        <br>
        <input required type="password" v-model="posts.password" id="password" placeholder="Password" :style="input">
        <div v-if="posts.password.length >1 && posts.password.length <8 " class="text-danger">Password minimal 8 karakter</div>
        <br>
        <br>
        <a class="btn btn-primary" v-on:click="register">Create Account</a>
        <br>
        <img class="logo" src="../assets/image/google.svg" alt="Login using Google">
        <img class="logo" src="../assets/image/facebook.svg" alt="Login using Facebook">
        <img class="logo" src="../assets/image/twt.png" alt="Login using Twitter">
    </div>
</template>

<script>
    import axios from 'axios'
    //import Vue from 'vue'
    // import VueAxios from 'vue-axios'

    export default {
        
        name: 'SignUp',
        props: {
            signup: String,
            input: String
        },
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        data(){
            return {
                posts:{
                    nama:'',
                    email:'',
                    password:'',
                }
            }
        },
        
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        // mounted(){
        //     this.getRoles();
        // },
        methods:{

            // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            // register(e){
            //     e.preventDefault();
            //     axios
            //     .post('https://golang-bookstore-rest-api.herokuapp.com/api/auth/register', this.posts)
            //     .then(response => (console.log(response.data)))
            //     .catch(error => console.log(error))
            //     .finally(() => this.loading = false)
            // }

            // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            // register(){
            //     axios.post('https://golang-bookstore-rest-api.herokuapp.com/api/auth/register', this.posts)
            //      .then((res) => {
            //          //Perform Success Action
            //          console.log(res);
            //          //this.error = false;
            //      })
            //      .catch((error) => {
            //          // error.response.status Check status code
            //      }).finally(() => {
            //          //Perform action in always
            //      });
            // }
            
            // ALMIRA
            //eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            // register(e){
            //     this.axios
            //     .post('https://golang-bookstore-rest-api.herokuapp.com/api/auth/register', 
            //     this.posts)
            //     .then((result)=>{
            //         console.log(result);
            //         this.error = false;
            //     })

            //     .catch(()=>(this.error = true))
                
            //     e.preventDefault();
            // }

            //TESTING FUNCTION
            // register(){
            //     console.log("Hai kamu berhasil!")
            // }

            //SAMA KAYAK PERCOBAAN
            // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            async register(){
                    try{
                        const response = await axios.post('https://golang-bookstore-rest-api.herokuapp.com/api/auth/register', this.posts)
                        console.warn(response)
                        alert("Registrasi Berhasil !")
                    } catch(e){
                        console.log(e)
                        alert("Registrasi Gagal !")
                    }  
                }                
            }
        }
    
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    template{
        background-image: url("/assets/image/background.jpg");
    }
    .signup {
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
        background: #5a5a5a;
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

