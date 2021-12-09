<template>
  <div id="user-view">
    <div class="user-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#user-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 500px) {
    height: 100%;
  }
  background-color: var(--bgColor);
}
.user-wrapper {
  position: relative;
  height: 60vh;
  width: 80vw;
  box-shadow: 0 5px 10px 5px rgba($color: #000000, $alpha: 0.2);
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  display: grid;
  grid-template-areas: "";
}
</style>
