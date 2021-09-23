import { createStore } from 'vuex'
import { usersModule } from './users';
import { counterModule } from './counter'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Users: usersModule,
    Counter: counterModule
  }
})
