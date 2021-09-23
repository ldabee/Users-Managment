export const usersModule = {
  namespaced: true,
  state: {
    users: [],
    currentUser: null
  },
  mutations: {
    fetchUsers(state, payload) {
      state.users = payload;
      console.log("from store", state.users);
    },
    toNext(state) {
      let allUsers = state.users;
      let first = allUsers.shift();
      allUsers.push(first);
      state.users = allUsers;
    },
    toPrevious(state) {
      let allUsers = state.users;
      let first = allUsers.pop();
      allUsers.unshift(first);
      state.users = allUsers;
    },
    setCurrentUser(state, payload) {
      state.currentUser = payload
    }

  },
  actions: {
    async getRandomUsers({ commit }) {
      const allUsers = await fetch('https://randomuser.me/api?results=10').then((results) => results.json());
      commit('fetchUsers', allUsers.results)
    }
  },
}