<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }">
      <div class="logo">
        <img src="@/assets/mylogo.png" alt="logo" />
        <h1>Users Managment</h1>
      </div>
    </router-link>
  </header>
  <router-view />
  <footer class="footer">
    <div>I'm the footer</div>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(138, 211, 211);
}
.header {
  display: flex;
  max-height: 50px;
  background-color: #fff;
  border-bottom: 1px solid lightcyan;
  padding: 1rem;

  a {
    text-decoration: none;
  }
  .logo {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    h1 {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      color: rgb(10, 139, 139);
    }
  }
}
footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 2rem;
  padding: 1rem;
  background-color: #fff;
  align-items: center;
}
</style>
