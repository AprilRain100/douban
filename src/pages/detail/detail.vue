<template>
  <div id="details">
    <div class="banner">
      <img class="bigImg" :src="mv_detail.images.medium" alt="">
      <div class="banner-content">
        <div class="mark"></div>
        <img :src="mv_detail.images.small" alt="">
        <div class="box">
          <div class="titles">{{mv_detail.title}}</div>
          <span class="num">{{mv_detail.rating.average}}</span>
          <i class="start"></i>
          <span class="people">{{mv_detail.ratings_count + '人评价'}}</span>
        </div>

      </div>
    </div>
    <div class="introduce">
      <div class="type">{{mv_detail.durations[0] + '&nbsp;' + genres}}</div>
      <div class="time">{{mv_detail.mainland_pubdate + '(' + mv_detail.countries[0] + ')' + '上映' }}</div>
      <div class="cast">{{mv_detail.directors[0].name + '(导演) / ' + castName}}</div>
    </div>
    <div class="want-see">
      <div class="want">想看</div>
      <div class="have">看过</div>
    </div>

    <div class="synopsis">
      <div class="synopsis-title" v-text="mv_detail.original_title + '的剧情简介'"></div>
      <p v-text="mv_detail.summary"></p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: "detail",
    data() {
      return {
        detailData: {},
        bigImg: '',
        rating: {},
        ratings_count: ''
      }
    },
    computed: {
      ...mapState([
        'mv_detail'
      ]),
      genres () {
        return this.mv_detail.genres.join(' / ')
      },
      castName () {
        const cast = this.mv_detail.casts;
        let newArr = cast.map(item => {
          return item.name
        });
        let three = newArr.slice(0, 3);
        return three.join(' / ')
      }
    },
    methods: {
      ...mapActions([
        'movieDetail'
      ]),
    },
    mounted() {
      console.log(this.mv_detail)
      // this.detailData = JSON.parse(this.$root.$mp.query.item);
      // this.bigImg = this.detailData.images.medium;
      // this.rating = this.detailData.rating;
      // this.ratings_count = this.detailData.ratings_count
      // console.log(this.detailData)
      // this.movieDetail(this.detailData.id)
    }
  }
</script>

<style lang="scss" scoped>
  #details {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
  }
  .banner {
    position: relative;
    width: 100%;
    height: 200px;
    .bigImg {
      width: 100%;
      height: 200px;
    }
    .mark {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: #000;
      opacity: .7;
      z-index: 1;
    }
    .banner-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      img {
        position: absolute;
        top: 70px;
        left: 18px;
        width: 115px;
        height: 160px;
        z-index: 2;
      }
      .box {
        position: relative;
        top: 85px;
        left: 150px;
        /*width: 100px;*/
        /*height: 50px;*/
        z-index: 111;
        color: #fff;
        .titles {
          font-size: 20px;
          font-weight: 200;
        }
        .num {
          position: absolute;
          left: 0;
          top: 40px;
          font-size: 36px;
          font-weight: 700;
        }
        .people {
          position: absolute;
          left: 70px;
          top:60px;
          font-size:12px;
          color: #9b9693;
        }
      }
    }

  }
  .introduce {
    margin-top: 50px;
    margin-left: 18px;
    font-size: 16px;
    .time {
      margin: 7px 0;
    }
  }
  .want-see {
    display: flex;
    color: #f5cc92;
    .want, .have {
      margin: 20px;
      width: 300px;
      height: 38px;
      border: 1px solid #f5cc92;
      text-align: center;
      line-height: 38px;
      border-radius: 5px;
      font-weight: 400;
    }
  }
  .synopsis {
    margin-left: 18px;
    .synopsis-title {
      font-size: 14px;
      color: #b5b5b5;
    }
    p {
      margin-top: 20px;
      line-height: 28px;
      font-size: 16px;
    }
  }
</style>
