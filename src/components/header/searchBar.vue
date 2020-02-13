<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWrod" placeholder="搜索商家或地点" @focus="focusIpute" @blur="blurIpute" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link :to="{name: 'goods', params: {name: item}}" v-for="(item,index) in suggestList" :key="index">{{ item }}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import api from '@/api/index.js'
import api from '@/api/index.js'
// 引入可以在计算属性created中获取，也可以在mounted中获取
export default {
  data() {
    return {
      searchWrod: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList:[]
    };
  }
  ,
  created(){
      api.getSearchHotWords().then(res => {
      console.log(res);
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    })
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWrod;
    },
    isSearchList: function() {
      return this.isFocus && this.searchWrod;
    }
  },
  watch: {
        "$route.params.name": function () {
            this.searchWrod = this.$route.params.name;
        }
  },
  // methods: {
  //   focus() {
  //     this.isFocus = true;
  //   },
  //   blur() {
  //     this.isFocus = false;
  //   }
  // },
  methods: {
        focusIpute() {
            this.isFocus = true;
        },
        blurIpute() {
            let self = this;
            setTimeout(function() {
                self.isFocus = false;
            }, 200)
        },
        input() {
            let val = this.searchWrod;
            api.getSearchList().then(res => {
                // this.searchList = res.data.data.list.filter((item, index) => {
                //     return item.indexOf(val) > -1;
                // });
                // console.log(res);
                // 利用前端filter过滤输入的关键词
                this.searchList = res.data.data.list.filter((item, index) => {
                  return item.indexOf(val) > -1;
                });
            })
         }}}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>