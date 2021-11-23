<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/kategori" >Kategori</router-link> 
    <router-link to="/login">Sign In</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
//import Dropdown from './components/Dropdown.vue';
export default {
  name : 'nav',
  // components:{
  //   Dropdown
  // },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // data(){
  //   return{
  //     services :[
  //       {
  //         title : 'Brand',
  //         link : '#',
  //       },
  //       {
  //         title : 'Color',
  //         link : '#',
  //       }
  //     ]
  //   }
  // }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 15px;
  margin: 15px;
  font-family: Arial, Helvetica, sans-serif;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  background: #5A5A5A;
  padding: 9px;
  text-align: center;
  border-radius: 0.3rem;
  /*width: 100px;*/
}
</style>
