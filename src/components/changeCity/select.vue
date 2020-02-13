<template>
  <div :class="['choose-wrap', disabled ? 'disabled' : '' ]" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content' : true, 'active' : showWrapperActive}">
          <h2>{{ title }}</h2>
          <div :class="['wrapper', className]">
              <div class="col" v-for="(listData, index) in renderList" :key="index">
                <span :class="{'mt-item': true, 'active': item.name == value}" v-for="(item, index) in listData" :key="index" @click="changeValue(item)">{{ item.name }}</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
    data() {
        return {
            // showWrapperActive: false,
        }
    },
    props: [
        "list",
        "citylists",
        "title",
        "value",
        "showWrapperActive",
        "disabled",
        "className"
    ],
    computed: {
        renderList: function () {
            let col = Math.ceil(this.list.length / 12);
            let resultList = [];
            for(let i = 0; i < col; i ++) {
                let numData = this.list.slice(i * 12, i * 12 + 12);
                resultList.push(numData);
            }
            return resultList;

        }
    },
    methods: {
        showWrapper (e) {
            e.stopPropagation();
            // 与下面的在main.js中绑定的事件配合使用，阻止事件冒泡
            // this.showWrapperActive = true;
           if(!this.disabled) {
               this.$emit('change_active', true);
           }
        },
        documentClick () {
            // this.showWrapperActive = false;
            this.$emit('change_active', false);

        },

        changeValue(item) {
            this.$emit('change', item);

        }
    }

}
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>