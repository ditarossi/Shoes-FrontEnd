<template>
    <img class="bg" src="../assets/image/background.jpg" alt="Login using Facebook">
    <div class="signup" :style="signup">
        <h3>Welcome!</h3>
        <input type="text" name="username" id="username" placeholder="Nama Lengkap" :style="input">
        <br>
        <input type="email" name="email" id="email" placeholder="E-Mail" :style="input">
        <br>
        <input type="password" name="password" id="password" placeholder="Password" :style="input">
        <br>
        <br>
        <a class="btn btn-primary" href="/login">Create Account</a>
        <br>
        <img class="logo" src="../assets/image/google.svg" alt="Login using Google">
        <img class="logo" src="../assets/image/facebook.svg" alt="Login using Facebook">
        <img class="logo" src="../assets/image/twt.png" alt="Login using Twitter">
    </div>
</template>

<script>
    export default {
        name: 'SignUp',
        props: {
            signup: String,
            input: String
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

