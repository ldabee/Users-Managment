<template>
  <div class="title">
    <h1>Details of {{ selectedUser.name.first }}</h1>
  </div>
  <div class="container">
    <div class="form">
      <form>
        <div class="form_header">
          <img :src="selectedUser.picture.large" alt="profilepic" />
        </div>
        <div class="form_content">
          <div class="input_form">
            <label for="firstname">Firstname</label
            ><input
              disabled
              type="text"
              name="firstname"
              :value="selectedUser.name.first"
            />
          </div>
          <div class="input_form">
            <label for="lastname">Lastname</label
            ><input
              disabled
              type="text"
              name="lastname"
              :value="selectedUser.name.last"
            />
          </div>
          <div class="input_form">
            <label for="email">Email</label
            ><input
              disabled
              type="text"
              name="email"
              :value="selectedUser.email"
            />
          </div>
          <div class="input_form">
            <label for="country">Country</label
            ><input
              disabled
              type="text"
              name="country"
              :value="selectedUser.location.country"
            />
          </div>
          <div class="input_form">
            <label for="city">City</label
            ><input
              disabled
              type="text"
              name="city"
              :value="selectedUser.location.city"
            />
          </div>
          <div class="input_form">
            <label for="registred">Registerd in</label
            ><input
              disabled
              type="text"
              name="registred"
              :value="selectedUser.registered.date"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selectedUser: null,
    };
  },
  created() {
    this.selectedUser = this.currentUser;
  },

  computed: {
    ...mapState("Users", ["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    background: #fff;
    width: 80%;
    height: 65vh;
    box-shadow: 6px 5px 7px #185252;
    border-radius: 15px;
    padding: 1rem;

    .form_header {
      display: flex;
      margin-left: 35px;
      img {
        border-radius: 50%;
      }
    }
    .form_content {
      display: flex;
      flex-wrap: wrap;
      .input_form {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 2rem;

        label {
          font-weight: 600;
          margin-bottom: 5px;
          text-align: left;
        }
        input {
          border: none;
          padding: 10px;
          text-align: center;
          background-color: rgb(138, 211, 211);
          color: white;
          font-weight: 600;
          font-size: 1rem;
        }
      }
    }
  }
}
.title {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>