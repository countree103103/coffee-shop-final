const { showMsg } = require("../utils/index");

let db = null;
let request = window.indexedDB.open("coffee-db", 2);
request.onerror = function (event) {
  // 错误处理
  console.log(" 打开数据库报错");
};
request.onsuccess = function (event) {
  // 成功处理
  db = event.target.result;
  console.log("打开数据库成功");
};

request.onupgradeneeded = function (event) {
  db = event.target.result;
  var objectStore = null;
  if (db.objectStoreNames.contains("Cart")) {
    db.deleteObjectStore("Cart");
  } 
  objectStore = db.createObjectStore("Cart", {
    keyPath: "id",
    autoIncrement: true,
  });
  objectStore.createIndex("product_id", "product_id");

};

let cartMixin = {
  methods: {
    getCartList() {
      let request = db
        .transaction("Cart", "readwrite")
        .objectStore("Cart")
        .getAll();
      request.onsuccess = (event) => {
        this.cartList = event.target.result;
        this.$store.state.cartList = this.cartList;
        console.log(event.target.result);
      };
      request.onerror = (event) => {
        console.log("db request error!");
      };
    },
    clearCart(flag) {
      if (flag || confirm("确定清空购物车？")) {
        let request = db
          .transaction("Cart", "readwrite")
          .objectStore("Cart")
          .clear();
        request.onsuccess = (event) => {
          this.getCartList();
          flag ? null : showMsg.call(this, "清空购物车成功!");
        };
        request.onerror = (event) => {
          console.log("db request error!");
        };
      } else {
        null;
      }
    },
    deleteProduct(id) {
      let request = db
        .transaction("Cart", "readwrite")
        .objectStore("Cart")
        .delete(id);
      request.onsuccess = (event) => {
        this.getCartList();
        // showMsg.call(this, "清空购物车成功!");
      };
      request.onerror = (event) => {
        console.log("db request error!");
      };
    },
  },
};

export { db, cartMixin };
