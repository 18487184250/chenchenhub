<template>
  <div class="m-products-list">
    <dl>
      <dd v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{ item.name }}</dd>
    </dl>
    <el-row>
        <Item v-for="(item, index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>
<script>
import Item from './item.vue';
import api from '@/api/index.js'

export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-sale",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [
      //   {
      //   itemId: "2571323",
      //   title: "井格重庆火锅（哈西万达店）",
      //   imgUrl: "//p1.meituan.net/msmerchant/8977f39408afa48463298ee3b5592e28144410.jpg@275w_156h_1e_1c",
      //   type: "food",
      //   score: 5,
      //   commentNum: 2555,
      //   comment: [
      //     {
      //       username: "匿名用户",
      //       image: "https://www.dpfile.com/ugc/user/anonymous.png",
      //       rate: 5,
      //       pics: ["http://p0picxxxxx", "http://picxxxxx"],
      //       evalaute: "xxxx"
      //     }
      //   ],
      //   tab: ["重庆火锅", "哈西万达"],
      //   address: "南岗区中兴大街168号万达广场3层3055",
      //   phone: "0451-85717159",
      //   businessTime: "周一至周日 09:30-21:00",
      //   service: ["提供wifi"],
      //   recommend: ["现炸酥肉", "井格毛肚"],
      //   avgPrice: 95,
      //   dealItems: [
      //     {
      //       title: "100元代金券1张",
      //       price: 28.9,
      //       counterPrice: 100,
      //       saleNum: 3409,
      //       priceType: "元"
      //     }
      //   ]
      // }
      ]
    };
  },
  created() {
       api.goodsList().then(res => {
           console.log(res);
           this.productList = res.data.data;
       })
    },
  components: {
      Item
  }
};
</script>
<style lang="scss">
@import '@/assets/css/products/list.scss';
</style>