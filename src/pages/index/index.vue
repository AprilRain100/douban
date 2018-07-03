<template>
  <div>
    <div class="search">
      <a href="/pages/detail/main">
        <img src="../../../static/img/search.png" alt="">
        <input type="search" placeholder="搜索" disabled="disabled">
      </a>
    </div>
    <div class="title">
      <span class="text">近期上映</span>
      <span class="more">更多></span>
    </div>
    <div class="list">
      <div class="one" v-for="(item, index) in in_theatersData.subjects" :key="index" v-if="index < 6" @click="goDetail(item)">
        <img :src="item.images.small" alt="">
        <div class="name">{{item.title}}</div>
        <div class="start"></div>
        <div class="num">{{item.rating.average}}</div>
      </div>
    </div>

    <div class="title">
      <span class="text">即将上映</span>
      <span class="more">更多></span>
    </div>

    <div class="list">
      <div class="one" v-for="(item, index) in coming_soonData.subjects" :key="index" v-if="index < 6" @click="goDetail(item)">
        <img :src="item.images.small" alt="">
        <div class="name">{{item.title}}</div>
        <div class="start"></div>
        <div class="num">{{item.rating.average}}</div>
      </div>
    </div>

    <div class="title">
      <span class="text">动漫</span>
      <span class="more">更多></span>
    </div>

    <div class="list">
      <div class="one" v-for="(item, index) in cartoonData" :key="index" v-if="index < 6" @click="goDetail(item)">
        <img :src="item.images.small" alt="">
        <div class="name">{{item.title}}</div>
        <div class="start"></div>
        <div class="num">{{item.rating.average}}</div>
      </div>
    </div>
    <open-data type="userNickName"></open-data>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">三生三世</button>
    <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import card from '@/components/card';
import { mapState, mapActions } from 'vuex'
import api from '../../utils/fly-getData'
import store2 from '../counter/store'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      in_theatersData: {},
      coming_soonData: {},
      // cartoonData: {}
    }
  },

  components: {
    card
  },
  computed: {
    ...mapState([
      'cartoonData',
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'searchMoive',
      'movieDetail',
      'f_getSalesInfo'
    ]),
    goDetail2 (item) {

    },
    goDetail (item) {
    //     wx.navigateTo({
    //     url: '/pages/counter/main',
    //     success: () => {
    //       wx.setNavigationBarTitle({ title: item.title })
    //     }
    //   })
    //   return false;
      console.log(item)
      this.$store.commit('TESTMUTATIONS', '哈哈哈')
      console.log(this.$store.state)
      const url = '/pages/detail/main?item=' + JSON.stringify(item);
      this.movieDetail(item.id)
      wx.navigateTo({
        url: url,
        success: () => {
          wx.setNavigationBarTitle({ title: item.title })
        }
      })
    },
    onGotUserInfo (e) {
      console.log(e, '????');
        if (!e.target.userInfo) {
        wx.openSetting();
        return;
        }
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  async created () {
    // 调用应用实例的方法获取全局数据
    // wx.openSetting();
    // let params = {
    //   token: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMjUiLCJpYXQiOjE1MzA1MjE5MzB9.65wFHpmRPpCimevhiFvBeNxj0Kv53Lrk-x1_vE0EgFA',
    //   sales_id: 125
    // };
    let r1 = api.in_theaters();
    let r2 = api.coming_soon();
    let r3 = this.searchMoive({tag: '动漫'});
    this.in_theatersData = await r1;
    this.coming_soonData = await r2;
    await r3;
    /**
     * 共有两种async await 并发的方法
     * 上面使用的是先用变量统一声明请求方法 然后再使用await调用
     * 下面的是 使用promise.all 方法 数组里传的是需要同步的方法 返回的值也是数组 内容相对应传递的请求方法
     * 
     */
    // let res = await Promise.all([r1, r2, r3]);
    // this.in_theatersData = res[0];
    // this.coming_soonData = res[1];

    /**
     * 这里看情况 直接调用api里的接口方法也行，省事，不必再vuex 的actions再重新写一遍。
     * 如果要在调用接口的时候用到vuex的 commit和state 就再vuex  的actions 调用一遍。
     */
    // const {data} = await api.getSalesInfo(params);
    // console.log('res====', data);

    // const r = await this.f_getSalesInfo(params);
    // console.log(r)
    wx.getSetting({
  success: (res) => {
      console.log(res);
      if (!res.authSetting['scope.userInfo']) {
          console.log('未授权')
      } else {
          console.log('已授权')
      }
    /*
     * res.authSetting = {
     *   "scope.userInfo": true,
     *   "scope.userLocation": true
     * }
     */
  }
})
  }
}
</script>

<style lang="scss" scoped>
  $green: #42bd56;
.search {
  position: relative;
  width: 100%;
  padding: 20px 0 10px 0;
  background: $green;
  span {
    text-align: center;
    margin: 0 auto;
  }
  input {
    margin: 0 auto;
    padding: 3px 0;
    width: 95%;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
  }
  img {
    position: absolute;
    top: 24px;
    left: 135px;
    width: 25px;
    height: 25px;
    z-index: 4;
  }
}
  .title {
    position: relative;
    margin-top: 15px;
    width: 100%;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    /*background: pink;*/
    .text {
      margin-left: 20px;
    }
    .more {
      position: absolute;
      right: 20px;
      color: #17b411;
    }
    .text:before {
      content: '';
      margin: 3px 0;
      width: 5px;
      background: $green;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
    }
  }
.list {
  display: flex;
  /*background: pink;*/
  margin-top: 15px;
  /*width: 1000%;*/
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  height: 220px;
  .one {
    position: relative;
    margin-left: 20px;
    img {
      width: 120px;
      height: 160px;
    }
    .name {
      width: 120px;
      overflow: hidden;
      text-overflow:ellipsis;
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
