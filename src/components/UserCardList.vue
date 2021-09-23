<template>
  <div class="container" v-if="users.length > 0">
    <div class="wrapper">
      <router-link
        v-for="(item, idx) in users"
        :to="idx == 1 ? { name: 'User', params: { userId: idx } } : {}"
        :key="idx"
      >
        <div :class="idx == 1 ? 'selected' : ''" @click="setCurrentUser(item)">
          <UserCard :user="item" />
        </div>
      </router-link>
    </div>
    <div class="navigation">
      <button @click="this.toPrevious()">Previous</button>
      <button @click="this.toNext()">Next</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import UserCard from "./UserCard.vue";

export default {
  computed: {
    ...mapState("Users", ["users"]),
  },
  methods: {
    ...mapMutations("Users", ["toNext", "toPrevious", "setCurrentUser"]),
  },

  components: {
    UserCard,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 52%;
    padding: 20px;
    @media (max-width: 400px) {
      overflow: inherit;
      width: 100%;
      margin-left: -265px;
    }
    a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
    }
  }
}
.selected {
  div {
    background: aliceblue;
    width: 350px;
    height: 450px;
    opacity: 1;
    box-shadow: 6px 5px 7px #185252;
    cursor: pointer;
    @media (max-width: 400px) {
      width: 230px;
      height: 400px;
    }
  }
}
.navigation {
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  @media (max-width: 400px) {
    width: 100%;
  }

  button {
    border: none;
    background-color: cyan;
    color: #fff;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 2px 6px #1e8ea0;

    &:active {
      box-shadow: none;
      transform: scale(0.9);
    }
  }
}
</style>