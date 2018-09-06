<template>
    <div>
      <div class="userinfo" @click="bindViewTap">
        <open-data class="infoImg" type="userAvatarUrl"></open-data>
        <!--<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />-->
        <div class="userinfo-nickname">
          <open-data class="userinfo-nickname" type="userNickName"></open-data>

          <!--<span v-text="userInfo.nickName"></span>-->
        </div>
      </div>
      <div class="about">- 关于她的名字 -</div>
    </div>
</template>
<script>
  import { mapState, mapActions } from "vuex";
  export default {
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    mounted() {
      console.log(this.userInfo)
    }
}
</script>
<style lang="scss" scoped>
  .userinfo {
    display: flex;
    margin-top: 20px;
    padding: 20rpx 0 62rpx;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(-180deg, rgba(250,250,250,0.00) 0%, #FCFCFC 100%);
    .userinfo-avatar, .infoImg {
      width: 128rpx;
      height: 128rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
    open-data[type="userAvatarUrl"] {
      /* open-data 的 display 默认值是 inline ，需要改为 inline-block 或 block 才能控制宽高 */
      display: block;
      /* 设置 overflow 为 hidden 才能设置圆角 */
      overflow: hidden;
      border-radius: 50%;

    }
    .userinfo-nickname {
      color: #aaa;
    }
  }
  .about {
    padding: 40px;
    text-align: center;
  }
</style>
