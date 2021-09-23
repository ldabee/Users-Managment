<template>
  <UserCardList />
</template>

<script>
import UserCardList from "../components/UserCardList.vue";
import { mapActions } from "vuex";
export default {
  data() {},
  components: {
    UserCardList,
  },
  methods: {
    ...mapActions("Users", ["getRandomUsers"]),
  },
  created() {
    this.getRandomUsers();
  },
};
</script>

<style lang="scss" scoped>
</style>