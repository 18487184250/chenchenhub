<template>
    <div class="page-changeCity">
        <el-row class="m-iselect">
            <Province />
        </el-row>
        <el-row>
            <Hot title="热门城市: " :list="hotList"/>
        </el-row>
        <el-row>
             <Hot title="最近访问: " :list="rencentList"/>
        </el-row>
        <el-row>
            <Categroy />
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index.js'
import Province from '@/components/changeCity/province.vue';
import Hot from '@/components/changeCity/hot.vue';
import Categroy from '@/components/changeCity/categroy.vue';
export default {
    data() {
        return {
            hotList: [
                // "北京","上海","广州","深圳","昆明","大理","丽江"
                ],
            rencentList: [
                // "丽江","大理","西双版纳"
                ]
        }
    },
    created() {
        api.getHotCityList().then(res => {
            this.hotList = res.data.data.map((item) => item.name);

        });
        api.getRecentCitysList().then(res => {
            this.rencentList = res.data.data.map((item) => item.name);
        })
    },
    components: {
        Province,
        Hot,
        Categroy
    }

}
</script>

<style lang="scss">
  @import "@/assets/css/changecity/iselect.scss";
</style>