<template>
  <div id="comm">
    <v-icon
      style="position: absolute; top: 7px; left: 15px"
      @click.native="animateLeave"
      >mdi-close</v-icon
    >
    <span class="self-end pb-2 pl-4" id="advertise_text"
      ><span>来杯咖啡吧~</span> <v-icon>mdi-arrow-right</v-icon></span
    >
    <coffe-cup
      id="coffee-cup"
      :espVal="espVal"
      :milkVal="milkVal"
      style="height: 100px; width: 80px"
      @click.native="onCupClick"
    ></coffe-cup>
    <!-- <v-img
      src="https://www.jiachong.com/uploads/allimg/211029/1455003M1-0.gif"
      height="70"
      width="70"
      contain
    ></v-img> -->
  </div>
</template>

<script>
import CoffeCup from "../components/CoffeeCup.vue";
import gsap from "gsap/all";

export default {
  data() {
    return {
      espVal: 0,
      milkVal: 0,
    };
  },
  components: {
    CoffeCup,
  },
  mounted() {
    this.$nextTick(() => {
      this.animateEnter();
    });
    setTimeout(() => {
      this.espVal = 100;
    }, 1100);
    setTimeout(() => {
      this.milkVal = 30;
    }, 1500);
  },
  methods: {
    onCupClick() {
      this.$emit("go-to-menu");
    },
    animateEnter() {
      gsap.from("#comm", {
        opacity: 0,
        right: -100,
        delay: 0.5,
        duration: 0.5,
      });
      gsap.from("#advertise_text", {
        opacity: 0,
        right: -100,
        delay: 0.5,
        duration: 1.5,
      });
    },
    animateLeave() {
      gsap.to("#comm", {
        opacity: 0,
        right: -100,
        duration: 0.5,
      });
      gsap.to("#advertise_text", {
        opacity: 0,
        right: -100,
        duration: 0.5,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// div {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// }
#advertise_text {
  position: relative;
  animation: wiggle infinite 1s;
}
#comm {
  @apply flex flex-row p-1 bg-opacity-90 rounded-tl-3xl rounded-bl-3xl backdrop-blur backdrop-filter;
  position: fixed;
  right: 1px;
  bottom: 10vh;
  // border-color: #512c1d;
  // border-width: 2px 0 2px 2px;
  // border-style: solid;
  box-shadow: 0px 2px 2px 0px #512c1d;
  background-color: #bfab9e;
}
#coffee-cup {
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  33.3% {
    transform: rotate(1deg);
  }
  66.66% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
