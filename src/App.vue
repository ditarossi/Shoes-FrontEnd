<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/kategori">Kategori</router-link> 
    <router-link to="/login">Login</router-link>
  </div>
  <router-view/>
</template>

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
}
</style>
