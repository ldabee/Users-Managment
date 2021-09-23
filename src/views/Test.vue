<template>
  <div>Counter : {{ counter }}</div>
  <button @click="subtractFromCounter(value)">-</button>
  <input type="number" v-model="value" />
  <button @click="addToCounter(value)">+</button>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState("Counter", ["counter"]),
  },
  methods: {
    ...mapMutations("Counter", ["addToCounter", "subtractFromCounter"]),
  },
};
</script>

<style lang="scss" scoped>
</style>