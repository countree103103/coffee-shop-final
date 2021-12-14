<template>
  <v-container class="order" @click="goToDetail">
    <v-row>
      <v-col>
        <ul>
          <li>
            <p class="order-item-name">美式咖啡</p>
            <span class="order-item-option">热/无糖/加浓缩</span
            ><span class="order-item-num">666$ X 1</span>
          </li>
          <li>
            <p class="order-item-name">美式咖啡</p>
            <span class="order-item-option">热/无糖/加浓缩</span
            ><span class="order-item-num">666$ X 1</span>
          </li>
          <li>
            <p class="order-item-name">美式咖啡</p>
            <span class="order-item-option"
              >热/无糖/加浓缩/无糖/加浓缩/无糖/加浓/加浓缩/无糖/加浓/加浓缩/无糖/加浓</span
            ><span class="order-item-num">666$ X 1</span>
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn outlined small @click.stop="$router.push('/menu')"
          >再来一单</v-btn
        ></v-col
      >
      <v-col><v-btn outlined small>去评价</v-btn></v-col>
      <v-col class="order-total"><span>共3件商品，实付666￥</span></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {};
  },
  methods: {
    goToDetail() {
      this.$router.push("/order-detail");
    },
  },
};
</script>

<style lang="scss">
.order {
  &:nth-child(1) {
    border-top: 1px solid gray;
  }
  &:hover {
    background-color: rgba($color: #ececec, $alpha: 1);
  }
  border-bottom: 1px solid gray;
  transition: 0.2s all;
  height: auto;
  width: 100%;
  min-width: 200px;
  .order-total {
    position: relative;
    span {
      font-size: 0.7rem;
      color: gray;
    }
  }
  ul {
    list-style: none;
    // list-style-position: outside;
    li {
      position: relative;
      margin-bottom: 8px;
      .order-item-option {
        font-size: 0.7rem;
        color: gray;
        margin-left: 10px;
        padding-right: 25%;
      }
      .order-item-num {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
