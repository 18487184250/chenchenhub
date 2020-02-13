<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd v-for="(item,  index) in nav.list" :key="index" :class="{active: kind == item.tab}" :data-type="item.tab">{{ item.text }}</dd>
    </dl>

    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" />
          <div class="cbody">

                    <div class="title" :title="item.title">{{ item.title }}</div>  
                    <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>

                <div class="price-info" >
                  <!-- v-if="item.rentNum && item.price_info.current_price" -->
                    <span class="current-price-wrapper">
                        <span class="price-symbol numfont">¥</span>
                        <span class="current-price numfont">{{ item.price }}</span>
                        <!-- item.price_info.current_price -->
                    </span>
                    <span class="sold bottom-right-info">{{ item.address }}</span>
                    <!-- <span class="old-price">门市价¥{{ item.price_info.old_price }}</span>
                    <span class="sold bottom-right-info">{{ item.address }}</span> -->
                </div>

                <!-- <div class="price-info" v-else-if="!item.rentNum"> 
                    <span class="current-price-wrapper">
                        <span class="price-symbol numfont">¥</span>
                        <span class="current-price numfont">抢光了</span>
                    </span> 
              </div> 

                <div class="price-info" v-else>
                    <span class="current-price-wrapper">
                        <span class="price-symbol numfont">¥</span>
                        <span class="current-price numfont">{{ item.price_info.avg_price }}</span>
                        <span class="units">/{{ item.price_info.units }}均</span>
                    </span>
                    <span class="old-price">门市价¥{{ item.price_info.old_price }}</span>
                    <span class="sold bottom-right-info">{{ item.address }}</span>
                </div> -->

         </div>
        </el-card>
      </li>
    </ul>

  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
      return {
          kind: 'all',
          resultsData: {},
          // list: [
          //   {
          //     image: "//p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          //     title: "北京饭店阳光咖啡厅",
          //     subTitle: "特价自助晚餐",
          //     price_info: {
          //         current_price: null,
          //         old_price: null,
          //         avg_price: 18,
          //         units: '人',
          //     },
          //     rentNum: 10,
          //     address: '王府井/东单'
          // },{
          //     image: "//p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@368w_208h_1e_1c",
          //     title: "东星贝儿凯客生日蛋糕",
          //     sub_title: "人气推荐：10英寸开心益点欧式水果生日蛋糕新鲜现做首图向左划查看更多款1个，约10英寸，圆",
          //     price_info: {
          //         current_price: 106,
          //         old_price: 198,
          //         avg_price: null,
          //         units: null,
          //     },
          //     rentNum: 10,
          //     address: '回龙观'
          // },{
          //     image: "//p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@368w_208h_1e_1c",
          //     title: "哈根达斯（东方广场店）",
          //     sub_title: "花火蛋糕冰淇淋1个，约700克，圆",
          //     price_info: {
          //         current_price: 258,
          //         old_price: 298,
          //         avg_price: null,
          //         units: null,
          //     },
          //     rentNum: 10,
          //     address: '王府井/东单'
          // }
                // ,{
        //       image: "//p1.meituan.net/msmerchant/c0d56c76a615b73e31e639f83f61b95f136928.jpg@368w_208h_1e_1c",
        //       title: "幸福西饼生日蛋糕（程远店）",
        //       sub_title: "鲜芒九方1个，约560克，方形，美味下午茶",
        //       price_info: {
        //           current_price: 85,
        //           old_price: 148
        //       },
        //       address: '西三旗'
        //   },{
        //       image: "//p0.meituan.net/wedding/7f274360936a5233902be9afe5054eef4134276.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
        //       title: "谦亨短发设计（新世界店）",
        //       sub_title: "谦亨短发设计（新世界店）",
        //       price_info: {
        //           current_price: 152,
        //           old_price: '/人均'
        //       },
        //       address: '崇文门新世界'
        //   },{
        //       image: "//p1.meituan.net/msmerchant/88e7a2161a7f2315bf31e441cc81a310943864.jpg@368w_208h_1e_1c",
        //       title: "théATRE 茶聚场（王府中環店）",
        //       sub_title: "蛋糕6选1,约6英寸，圆形",
        //       price_info: {
        //           current_price: 298,
        //           old_price: 330
        //       },
        //       address: '王府井/东单'
        //   }
          // ],

      }
  },
  props: [
      'nav'
  ],
  created() {
    api.resultsByKeywords().then(res => {
      console.log(res.data);
      this.resultsData = res.data.data;
    })
  },
  methods: {
      over(e) {
          let dom = e.target;
        //   获取到当前的tagName，再转化成小写toLowerCas()
          let tagName = dom.tagName.toLowerCase();

          if(tagName != 'dd') {
              return false;
          }
          this.kind = dom.getAttribute('data-type');
        //   之后动态获取ajax请求，渲染

      }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>