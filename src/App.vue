<template>
  <div>
    <v-app>
      <!-- <v-app-bar app color="primary" dark> </v-app-bar> -->
      <nav id="navbar">
        <ul>
          <li class="nav--item-left">
            <router-link to="/">首页</router-link>
          </li>
          <li class="nav--item-left">
            <router-link to="menu">菜单</router-link>
          </li>
          <li id="logo">
            <router-link to="Customize">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="图层_1"
                data-name="图层 1"
                height="40"
                viewBox="0 0 258.95 150.97"
              >
                <g>
                  <rect
                    class="cls-1"
                    x="1"
                    y="72.61"
                    width="68.94"
                    height="7.66"
                    rx="0.76"
                  />
                  <path
                    class="cls-1"
                    d="M179.35,363l8.6,69a.75.75,0,0,0,.75.66h37.88"
                    transform="translate(-169.41 -282.76)"
                  />
                </g>
                <g>
                  <path
                    class="cls-1"
                    d="M178.84,342.94c-2.42-6.74-4.54-16,0-22s12.42-4.46,14.81-9.19c1.81-3.59.43-10.73-15.32-26.56"
                    transform="translate(-169.41 -282.76)"
                  />
                  <path
                    class="cls-1"
                    d="M233.78,341.16c-2.42-6.73-4.54-16,0-22s12.42-4.46,14.81-9.2c1.81-3.58.43-10.73-15.32-26.55"
                    transform="translate(-169.41 -282.76)"
                  />
                  <path
                    class="cls-1"
                    d="M206.09,342.15c-2.42-6.74-4.54-16,0-22s12.42-4.46,14.8-9.19c1.82-3.59.44-10.73-15.31-26.56"
                    transform="translate(-169.41 -282.76)"
                  />
                </g>
                <g>
                  <path
                    class="cls-1"
                    d="M233,432.86l40.5-80.12a.76.76,0,0,1,1.42.17l18.25,79.95"
                    transform="translate(-169.41 -282.76)"
                  />
                  <line
                    class="cls-1"
                    x1="87.55"
                    y1="111.2"
                    x2="109.67"
                    y2="111.2"
                  />
                </g>
                <g>
                  <path
                    class="cls-1"
                    d="M371.51,354.94H319.33a.77.77,0,0,0-.74.56l-10.06,38.12L298.32,432.3"
                    transform="translate(-169.41 -282.76)"
                  />
                  <line
                    class="cls-1"
                    x1="191.55"
                    y1="110.86"
                    x2="139.12"
                    y2="110.86"
                  />
                </g>
                <g>
                  <line
                    class="cls-1"
                    x1="245.33"
                    y1="110.86"
                    x2="198.7"
                    y2="110.86"
                  />
                  <path
                    class="cls-1"
                    d="M406.23,432.3h-47a.76.76,0,0,1-.74-.95l9.63-37.73,9.72-38.11a.76.76,0,0,1,.74-.57h49.79"
                    transform="translate(-169.41 -282.76)"
                  />
                  <line
                    class="cls-1"
                    x1="245.33"
                    y1="110.86"
                    x2="198.7"
                    y2="110.86"
                  />
                </g>
              </svg>
            </router-link>
          </li>
          <li class="nav--item-right">
            <router-link to="cart"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="100 100 824 824"
                version="1.1"
                height="1.8rem"
                width="1.8rem"
                x="0px"
                y="0px"
              >
                <path
                  fill="#ffffff"
                  d="M410 675.7c7.8 0 15.2 1.4 22.2 4.3s13.1 6.9 18.2 12 9.2 11.2 12.3 18.2c3.1 7 4.6 14.4 4.6 22.2 0 7.8-1.5 15.2-4.6 22.2s-7.2 13.1-12.3 18.2c-5.1 5.1-11.2 9.2-18.2 12.3-7 3.1-14.4 4.6-22.2 4.6-8.2 0-15.8-1.5-22.8-4.6s-13.1-7.2-18.2-12.3c-5.1-5.1-9.2-11.2-12.3-18.2-3.1-7-4.6-14.4-4.6-22.2 0-7.8 1.5-15.2 4.6-22.2 3.1-7 7.2-13.1 12.3-18.2s11.2-9.1 18.2-12c6.9-2.8 14.5-4.3 22.8-4.3z m256.5 1.3c7.8 0 15.3 1.4 22.5 4.3 7.2 2.9 13.4 6.9 18.5 12s9.2 11.2 12.3 18.2c3.1 7 4.6 14.4 4.6 22.2 0 7.8-1.5 15.2-4.6 22.2-3.1 7-7.2 13.1-12.3 18.2-5.1 5.1-11.3 9.2-18.5 12.3s-14.7 4.6-22.5 4.6-15.2-1.5-22.2-4.6c-7-3.1-13.1-7.2-18.2-12.3-5.1-5.1-9.2-11.2-12.3-18.2-3.1-7-4.6-14.4-4.6-22.2 0-7.8 1.5-15.2 4.6-22.2 3.1-7 7.2-13.1 12.3-18.2 5.1-5.1 11.2-9.1 18.2-12 6.9-2.9 14.3-4.3 22.2-4.3zM770 326.8c11.5 0 20.4 1.5 26.8 4.6s10.9 6.9 13.6 11.4c2.7 4.5 3.9 9.4 3.7 14.5-0.2 5.1-0.9 9.6-2.2 13.3-1.2 3.7-3.9 11.3-8 22.8s-8.5 24.1-13.3 37.9-9.5 27.4-14.2 41c-4.7 13.6-8.5 24.3-11.4 32.1-5.3 16.4-12 27.8-20 34.2s-18 9.6-29.9 9.6H544.2l-151.7-0.2c-6.3 0-11 5.7-10 11.9l7.9 44.5c1 5.5 5.8 9.6 11.4 9.6l311.8 0.4c19.7 0 27.7 4.6 26.8 21.5-0.3 4.7-1.5 8.7-5.4 14.8-3.9 6.2-11.6 9-23.1 8.6H389c-8.2 0-15.1-1.8-20.7-5.5-5.5-3.7-10.2-8.5-13.9-14.5-3.7-6-6.7-12.4-8.9-19.4-2.3-7-4-13.6-5.2-19.7-0.4-2.5-1.5-8.4-3.4-17.9-1.8-9.5-4.1-21.3-6.8-35.5s-5.7-30-8.9-47.5c-3.3-17.5-6.6-35-9.9-52.7-7.8-41.5-18.6-99.3-28.5-150.3l-45.9 0.5c-6.2 0-18.3 0.8-24-4.7-3.6-3.5-4.5-8.9-5.5-13.9-1-4.9-1.5-9.5-1.5-13.6 0-8.2 2.8-15 8.3-20.3 5.5-5.3 13.1-7.8 22.5-7.4H299c8.2 0 11.5-0.2 16.4 2.3 4.9 2.5 7.8 14 8.7 18 3.3 14.8 11.2 52.9 14.5 70.5l431.4-0.9z m-19.6 50.6l-393.3-1.3c-5.4 0-9.5 4.9-8.5 10.2l19.5 100.8c1 5.2 5.6 9 10.9 9l328.6 0.6c5.5 0 10.4-3.4 12.4-8.5l37.8-100.1c2-5.1-1.9-10.6-7.4-10.7z"
                ></path>
              </svg>
              <!-- <span id="cart-num">{{ value }}</span> -->
            </router-link>
          </li>
          <li class="nav--item-right">
            <router-link :to="$store.state.user ? 'User' : 'Auth'"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="
                  height: 1.5rem;
                  width: 1.5rem;
                  enable-background: new 0 0 512 512;
                "
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      fill="#ffffff"
                      d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40    c59.551,0,108,48.448,108,108S315.551,256,256,256z"
                    ></path>
                  </g>
                </g></svg
            ></router-link>
          </li>
        </ul>
      </nav>

      <!-- <div id="router-view">
      <router-view />
    </div> -->
      <div id="router-view">
        <transition :name="$store.state.transitionName" mode="out-in">
          <!-- <keep-alive> -->
          <router-view v-slot="{ Component }">
            <component :is="Component"></component>
          </router-view>
          <!-- </keep-alive> -->
        </transition>
      </div>
      <!-- <footer>广州航海学院电商18121陈周煜版权所有</footer> -->
      <footer>© 2021-2022 广州航海学院 陈周煜 版权所有</footer>
    </v-app>
    <v-snackbar
      v-model="$store.state.snackbar.show"
      timeout="2000"
      color="#512c1d"
    >
      {{ $store.state.snackbar.msg }}
      <template v-slot:action="{}">
        <v-btn @click.native="$store.state.snackbar.show = false" text
          >关闭</v-btn
        >
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { gsap } from "gsap";
import axios from "axios";
import { showMsg } from "./utils";
export default {
  name: "App",

  data: () => ({
    //
    value: 1,
  }),

  mounted() {
    gsap.from("nav>ul>li", {
      left: -40,
      stagger: 0.2,
      opacity: 0,
    });
  },

  async created() {
    try {
      let result = await axios.get("/coffee/user/getUserInfo");
      if (result.data) {
        this.$store.state.user = result.data;
      } else {
        null;
      }
    } catch (error) {
      console.log(error);
      showMsg.call(this, "服务器错误!获取用户session失败");
    }

    try {
      let result = await axios.get("/coffee/product/");
      if (result.data) {
        this.$store.state.productList = result.data;
      } else {
        showMsg.call(this, "获取产品列表失败!");
      }
    } catch (error) {
      console.log(error);
      showMsg.call(this, "服务器错误!");
    }
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: sans-serif;
  z-index: 1;
}
:root {
  --primary: #512c1d;
  --bgColor: rgba(81, 44, 29, 0.3);
  --radius: 5%;
}
footer {
  text-align: center;
  background-color: var(--primary);
  color: white;
  height: 3rem;
  z-index: -1;
  padding: 12px 0;
}
#cart-num {
  // position: absolute;
  // top: -50%;
  // right: 0;
  font-size: 0.5rem;
}
nav#navbar {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: white;
  // border-bottom: 1px solid gray;
  box-shadow: 0 2px 50px rgba($color: #000000, $alpha: 0.2);
  border-radius: 0 0 5% 5%;
  overflow: hidden;
  ul {
    padding: 0 !important;
    display: grid;
    height: 100%;
    grid-template-areas: "index menu logo cart mine";
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    #logo {
      background-color: #ceb8aa;
    }
    .cls-1 {
      fill: transparent;
      stroke: #8d5a25;
      stroke-miterlimit: 10;
      stroke-width: 5px;
    }
    .nav--item-right {
      background-color: var(--primary);
      a {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        transition: all 0.2s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .nav--item-left {
      background-color: var(--primary);
      a {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        transition: all 0.2s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    li {
      // position: relative;
      display: block;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
#router-view {
  position: relative;
  margin-top: 55px;
  width: 100vw;
  //为了使auth页面居中高度显示正常..
  // height: 100%;
  // @media screen and (max-width: 500px) {
  //   height: auto;
  // }
  @apply min-h-full;
}
// #nav {
//   min-height: 30%;
// }

.slide-left-enter-active {
  animation: ani-slide-left 0.3s;
}
.slide-left-leave-active {
  animation: ani-slide-right 0.2s reverse;
}

.slide-right-enter-active {
  animation: ani-slide-right 0.2s;
}
.slide-right-leave-active {
  animation: ani-slide-left 0.3s reverse;
}

@keyframes ani-slide-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes ani-slide-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

//覆盖vuetify样式
.v-application p {
  margin-bottom: 0 !important;
}
.v-application ul,
.v-application ol {
  padding-left: 0 !important;
}
</style>
