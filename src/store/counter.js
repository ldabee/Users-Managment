export const counterModule = {
  namespaced: true,
  state: {
    counter: 0
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter += payload;
    },
    subtractFromCounter(state, payload) {
      state.counter -= payload;
    }
  },
  actions: {

  },
}