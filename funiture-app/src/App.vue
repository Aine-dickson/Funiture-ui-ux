<template>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

 nav {
  a {
    color: black;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
footer {
  a {
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.dark{
  nav {
    a {
      color: white;
  
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
.dark{
  footer {
    a {
      color: black;
  
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
