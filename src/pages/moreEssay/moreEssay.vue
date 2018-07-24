<template>
    <div>
            <div class="synopsis comments_count">
     <div class="count-box" v-for="(item, index) in listData.comments" :key="index">
         <div class="author">
             <img :src="item.author.avatar" alt="">
             <span v-text="item.author.name"></span>
              <div class="star-rating">
        <div class="star-rating-top" :style="{width: item.rating.value * 20 + '%'}">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
        </div>
        <div class="star-rating-bottom">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
        </div>
    </div>
         </div>
         <div class="created_at" v-text="item.created_at"></div>
         <p v-text="item.content"></p>
     </div>
    </div>
    </div>
</template>
<script>
import api from "../../utils/fly-getData";
export default {
  data() {
    return {
      listData: {
        comments: []
      }
    };
  },
  created() {},
  async mounted() {
    const id = this.$root.$mp.query.id;
    console.log(id);
    let { comments } = await api.moreEssay(id);
    this.listData.comments = comments;
  }
};
</script>
<style lang="scss" scoped>
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
  .comments_count {
    margin-top: 20px;
    .synopsis-title {
      padding: 10px 0;
    }
    .count-box {
      margin-bottom: 20px;
      .author {
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
      .created_at {
        padding-left: 30px;
        font-size: 12px;
        color: #b5b5b5;
      }
      p {
        margin-top: 0;
        padding: 0 10px 0 30px;
      }
    }
    .count-box:first-of-type {
    //   background: red;
      margin-top: 0 !important;
    }
  }

  /* 评分 */
.star-rating {
  unicode-bidi: bidi-override;
  color: #ddd;
  font-size: 0;
  height: 25px;
  margin-left: 5px;
  position: relative;
  display: table;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
}

.star-rating span {
  padding: 2px;
  font-size: 16px;
}

.star-rating-top {
  color: #ffd700;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
}

.star-rating-bottom {
  padding: 0;
  display: block;
  z-index: 0;
}
</style>
