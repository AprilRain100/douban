<template>
  <div>
    <div class="search">
      <input type="search" placeholder="搜索">
    </div>
    <div class="title">
      <span class="text">近期上映</span>
      <span class="more">更多></span>
    </div>
    <div class="list">
      <div class="one" v-for="(item, index) in in_theatersData.subjects" :key="index" v-if="$inedx < 6">
        <img :src="item.images.small" alt="">
        <div class="name">{{item.title}}</div>
        <div class="start"></div>
        <div class="num">{{item.rating.average}}</div>
      </div>
    </div>

    <div class="title">
      <span class="text">热门电影</span>
      <span class="more">更多></span>
    </div>

    <div class="list">
      <div class="one" v-for="(item, index) in coming_soonData.subjects" :key="index">
        <img :src="item.images.small" alt="">
        <div class="name">{{item.title}}</div>
        <div class="start"></div>
        <div class="num">{{item.rating.average}}</div>
      </div>
    </div>
    <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import card from '@/components/card';
import config from '../../utils/config'
import {requestGet} from '../../utils/reques'
import {in_theaters, coming_soon} from '../../utils/getData'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      in_theatersData: {},
      coming_soonData: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    in_theaters(res=> {
      this.in_theatersData = res;
      console.log(res)
    });
    coming_soon(res=> {
      this.coming_soonData = res;
      console.log(res)
    });
  }
}
</script>

<style lang="scss" scoped>
  $green: #42bd56;
.search {
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
