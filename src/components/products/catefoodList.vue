<template>
  <div class="m-product-categroy">
      <dl class="classic">
          <dt>分类</dt>
          <dt>全部</dt>
          <dd v-for="(item, index) in classicList" :key="index">
            <SelectList :name="item.title" :list="item.subList"/>
          </dd>
      </dl>
      <dl class="classic">
          <dt>区域</dt>
          <dt>全部</dt>
          <dd v-for="(item, index) in areaList" :key="index">
            <SelectList :name="item.title" :list="item.sub_list"/>
          </dd>
      </dl>
  </div>
</template>
<script>
import SelectList from './selectList.vue';
export default {
  data() {
    return {
      classicList: [
           {
              title: "美食",
              type: "food",
              subList: [
                {
                  name: "日本菜",
                  id: "Japan"
                }
              ]
            },
            {
              title: "酒店住宿",
              type: "hotal",
              subList: [
                {
                  name: "温泉酒店",
                  id: "hot_spring"
                }
              ]
            }
          ],
          areaList: [
            {
              title: "推荐商圈",
              sub_list: [
                {
                  name: "望京",
                  id: 120000
                }
              ]
            }
          ]
        }
    },

  components: {
      SelectList
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>