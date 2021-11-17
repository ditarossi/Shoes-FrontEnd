<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col title">
                COMPANY
                <br>
                <br>
                    <div class="col content">
                    Who we are
                    </div>
                    <div class="col content">
                    Find Bliss Near You
                    </div>
                    <div class="col content">
                    Bliss Product
                    </div>
                    <div class="col content">
                    Shop
                    </div>
                </div>
                <div class="col title">
                CUSTOMER CARE 
                 <br>
                <br>
                    <div class="col content">
                    Gift Cards
                    </div>
                    <div class="col content">
                    Contact Us
                    </div>
                    <div class="col content">
                    Shipping
                    </div>
                    <div class="col content">
                    Returns
                    </div>
                    <div class="col content">
                    Ordering & Payment
                    </div>
                    <div class="col content">
                    Message
                    </div>
                </div>
                <div class="col title">
                THE DRY STUFF
                <br>
                <br>
                    <div class="col content">
                    Privacy Policy
                    </div>
                    <div class="col content">
                    Terms & Conditions
                    </div>
                    <div class="col content">
                    Accessibility Statement
                    </div>
                    <div class="col content">
                    Sitemap
                    </div>
                </div>
                <div class="col title">
                THE FUN STUFF
                <br>
                <br>
                <div class="row content-row">
                    <img class="logo" src="../assets/image/google.svg" alt="Login using Google">
                    <img class="logo" src="../assets/image/facebook.svg" alt="Login using Facebook">
                    <img class="logo" src="../assets/image/twt.png" alt="Login using Twitter">
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default{
    name : 'Footer',
}
</script>

<style>
    .footer{
        width: 100%;
        height: 30%;
        color: black;
    }

    .footer .container .row .title{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .footer .container .row .content{
        font-family: 'Arial Narrow ', sans-serif;
    }
    
    .footer .container .row .title .content-row .logo{
        width: 30%;
    }
</style>
