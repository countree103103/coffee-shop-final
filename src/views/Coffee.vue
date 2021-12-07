<template>
  <div>
    <coffe-cup :espVal="100" :milkVal="50"></coffe-cup>
  </div>
</template>

<script>
import CoffeCup from "../components/CoffeeCup.vue";

export default {
  data() {
    return {};
  },
  components: {
    CoffeCup,
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
