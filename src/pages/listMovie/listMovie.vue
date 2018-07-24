<template>
    <div>
        <div class="list">
      <div class="one" v-for="(item, index) in listData" :key="index"  @click="goDetail(item)">
        <img :src="item.images.small" alt="">
        <div class="name">{{item.title}}</div>
        <div class="start"></div>
        <div class="num">{{item.rating.average}}</div>
      </div>
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            listData: []
        }
    },
  computed: {
    ...mapState([
        "coming_soon",
         "cartoonData",
          'recentShow'
          ])
  },
  methods: {
    ...mapActions(["searchMoive", "movieDetail", "f_getSalesInfo"]),
        async goDetail (item) {
      console.log(item)
      this.$store.commit('TESTMUTATIONS', '哈哈哈')
      console.log(this.$store.state)
      const url = '/pages/detail/main?item=' + JSON.stringify(item);
      await this.movieDetail(item.id)
      wx.navigateTo({
        url: url,
        success: () => {
          wx.setNavigationBarTitle({ title: item.title })
        }
      })
    },
  },
  mounted() {
    const type = this.$root.$mp.query.type;
        console.log(type)
        switch(type) {
            case '近期上映':
                this.listData =  this.recentShow.subjects;
                break;
            case '即将上映':
                this.listData =  this.coming_soon.subjects;
                break;
            case '动漫':
                this.listData = this.cartoonData;  
        }
  }
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  width: 100%;
  padding: 10px;
  flex-wrap: wrap;
  /*background: pink;*/
  margin-top: 15px;
  /*width: 1000%;*/
//   overflow-x: scroll;
//   -webkit-overflow-scrolling: touch;
  height: 220px;
  .one {
      margin-bottom: 10px;
     flex: 3; 
    position: relative;
    // margin-left: 10px;
    img {
      width: 110px;
      height: 150px;
    }
    .name {
      width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-weight: 800;
    }
    .num {
      /*position: absolute;*/
      /*right: 10px;*/
      /*bottom: 0;*/
      color: #b4b4b4;
      font-size: 13px;
    }
  }
}
</style>
