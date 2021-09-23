<template>
  <div class="card">
    <div class="title">
      <h2>{{ user.name.first }} {{ user.name.last }}</h2>
    </div>
    <div class="avatar">
      <img :src="user.picture.large" alt="userpic" />
    </div>
    <div class="description">
      <h3>{{ user.location.country }}</h3>
      <p>{{ user.location.city }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],

  setup() {
    const check = (user) => {
      console.log(user);
    };

    return {
      check,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  margin-right: 25px;
  border: 1px solid lightcyan;
  padding: 1rem;
  border-radius: 10%;
  background: aliceblue;
  height: 350px;
  opacity: 0.7;
  box-shadow: inset 0px 1px 20px #0cd4de;
  cursor: not-allowed;
  @media (max-width: 400px) {
    width: 130px;
    height: 300px;
  }

  .avatar {
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
}
</style>