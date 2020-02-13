<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import api from '@/api/index.js'

import MSelect from "./select.vue";
export default {
  data() {
    return {
      NowCity: "",
      provinceList: [
        // "山东",
        // "云南",
        // "西藏",
        // "四川",
        // "江苏",
        // "浙江",
        // "甘肃",
        // "福建",
        // "海南"
      ],
      province: "省份",
      cityList: [
        // "济南", "青岛", "淄博", "威海", "烟台"
        ],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: [
        "济南", "青岛", "淄博", "威海", "烟台"
        ],
      searchWord: "",
      loading: false,
      cityDisabled: true
    };
  },
  created() {
        api.getProvinceList().then(res => {
            this.provinceList = res.data.data.map((item) => {
              item.name = item.provinceName;
              // var newItem = item.map((items) => {
              //   items.name = items.cityInfoList
              // })
              return item;
            });
        })
    },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;

      console.log(item.cityInfoList.name);

    },
    changeCity(item) {
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      // 切换城市以后跳转首页
      this.$router.push({name: 'index'});

    },
    remoteMethod(val) {
      // console.log(val);
      // 请求后端接口返回值
    },
    nowCity(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>