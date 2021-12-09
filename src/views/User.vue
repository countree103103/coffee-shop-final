<template>
  <div id="user-view">
    <v-container>
      <v-row>
        <v-col class="user-information"
          ><div>
            <v-card width="400">
              <v-container>
                <v-row>
                  <v-col cols="4"
                    ><v-avatar tile>
                      <v-img src="../assets/american.jpeg"></v-img> </v-avatar
                  ></v-col>
                  <v-col cols="8"><v-card-title>用户资料</v-card-title></v-col>
                </v-row>
                <v-container>
                  <v-form>
                    <v-text-field label="用户名" value="chenzy"></v-text-field
                    ><v-text-field label="性别" value="男"></v-text-field>
                  </v-form>
                </v-container>
              </v-container>

              <v-card-text> </v-card-text>
            </v-card></div
        ></v-col>
        <v-col class="user-order"
          ><div>
            <v-card width="400">
              <v-card-title primary-title> 您的订单 </v-card-title>
              <v-container>
                <Order></Order>
                <Order></Order>
                <Order></Order>
              </v-container>
              <v-pagination v-model="page" :length="3"></v-pagination>
            </v-card></div
        ></v-col>
      </v-row>

      <v-row><v-col> </v-col></v-row>
    </v-container>
  </div>
</template>

<script>
import Order from "../components/Order.vue";
export default {
  name: "User",
  data() {
    return {
      page: 1,
    };
  },
  components: { Order },
};
</script>

<style lang="scss">
#user-view {
  background-color: var(--bgColor);
}
</style>
