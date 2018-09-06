<!--<template>
<div>
    <p>
    我们可爱的攻城狮正在拼了命的建设中，请耐心等待...
    </p>
    <p>很快即将开放...</p>
</div>
</template>-->
<template>
  <div>
    <div class="search-top">
      <a href="">单曲/歌单/电台</a>
    </div>
    <div class="containers">
      <div class="tab-top">
        <div class="tab-item" v-for="(item, index) in tabs" :key="index" :class="{active: index === selectIndex}" @click="tapTab(index)">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="swiper-banner">
        <swiper :indicator-dots="indicatorDots"
                :autoplay="autoplay" :interval="interval" :duration="duration">
          <block v-for="(item, index) in imgUrls" :key="index">
            <swiper-item>
              <image :src="item.picUrl" class="slide-image"/>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <div class="rec_nav">
        <div class="rec_nav_item">
          <img src="../../../static/img/cm2_discover_icn_fm-ip6@2x.png" alt="">
          <span>私人FM</span>
        </div>
        <div class="rec_nav_item">
          <img src="../../../static/img/cm4_disc_topbtn_daily-ip6@2x.png" alt="">
          <span>每日歌曲推荐</span>
        </div>
        <div class="rec_nav_item">
          <img src="../../../static/img/cm2_discover_icn_upbill-ip6@2x.png" alt="">
          <span>云音乐热歌榜</span>
        </div>
      </div>
      <div class="Rec-song-list">
        <h4>推荐歌单 ></h4>
        <div class="list-wrap">
          <div class="song-list-item" v-for="(item, index) in playlist" :key="index" v-if="index < 9">
            <div class="items">
              <div class="icon">
                <i></i>
                <span>{{(item.playCount - 1000000) > 0 ? (item.playCount/10000) + '万' : item.playCount}}</span>
              </div>
              <img :src="item.coverImgUrl" alt="">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Rec-song-list">
        <h4>收藏歌单 ></h4>
        <div class="list-wrap">
          <div class="song-list-item" v-for="(item, index) in playlist" :key="index" v-if=" index > 9 && index < 46">
            <div class="items">
              <div class="icon">
                <i></i>
                <span>{{item.playCount}}</span>
              </div>              <img :src="item.coverImgUrl" alt="">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import api from '../../utils/fly-getData'
  import {playlist, banners} from '../../../static/palyList'
  export default {
    name: "discover",
    data() {
      return {
        tabs: [
          {
            name: '个性推荐'
          },
          {
            name: '歌单'
          },
          {
            name: '主播电台'
          },
          {
            name: '排行榜'
          }
        ],
        selectIndex: 0,
        imgUrls: banners,
        indicatorDots: true,
        autoplay: true,
        interval: 1500,
        duration: 1000,
        playlists: [],
        playlist
      }
    },
    methods: {
      playCountW(val) {
        return 1;
        if(val && val - 1000000 > 0) {
          console.log((val/10000).toFixed(1) + '万')
          return ((val/10000).toFixed(1)) + '万'
        } else {
          console.log(val, '22222222222222222222222')
          return val;
        }
      },
      tapTab(index) {
        this.selectIndex = index;
      }
    },
     async mounted() {
      console.log(playlist)
      const [searchMusic, hotPlayList, banner] = await Promise.all([
         api.searchMusic({limit: 20, offset: 0}),
         api.hotPlayList(),
         api.banner(),
        api.hot()
    ]);
      this.imgUrls = banner.banners;
      this.playlists = hotPlayList.playlists;
    }
  };
</script>

<style lang="scss" scoped>
  @import "./discover.scss";
  p {
    padding: 20px 0 0 20px;
    color: #666;
    font-size: 14px;
  }
</style>
