<template>
    <div>
         <div class="search">
        <img src="../../../static/img/search.png" alt="">
        <input type="search" placeholder="搜索" focus="true" confirm-type="search" v-model="values" @input="bindinput" @focus="bindfocus">
        <button type="primary" sizi="mini" plain="true" @click="cancel">取消</button>
    </div>
    <div class="list" v-if="!hotShow">
        <div class="items" v-for="(item, index) in cartoonData" :key="index" @click="goDetail(item)">
            <img :src="item.images.small" alt="">
            <div class="rt">
                <div class="name">{{item.title}}</div>
                <div class="intro">
                    <span>{{item.rating.average}}分 / </span>
                    <span>{{item.genres[0] + '&nbsp;/&nbsp;' + (item.genres[1] || '')}}</span>
                    <span>{{item.pubdates[0]}}</span>
                </div>
            </div>   
        </div>
    </div>
    <div class="hot" v-if="hotShow">
         <div class="bg-hot">热门搜索</div>
         <div class="hot-item" v-for="(item, index) in hotBot" :key="index">
             {{item}}
         </div>
    </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            values: '',
            focusValue: true,
            hotShow: true,
            hotBot: [
                '年轻人不要太气盛',
                '不气盛还是年轻人吗',
                '是龙得盘着 是虎得卧着'
            ]
        }
    },
    computed: {
        ...mapState([
            'cartoonData'
        ])
    },
    methods: {
        ...mapActions([
            'searchMoive',
            'movieDetail'
        ]),
        async bindinput(e) {
            console.log(e, 1, this.values)
            await this.searchMoive({
                tag: this.values || '欧韩'
            });
            this.hotShow = false;
            if(this.values == '') {
                this.hotShow = true;                
            }
        },
        bindfocus(e) {
            console.log(e, 2)
        },
        cancel() {
            // this.focus = false;
            this.values = '';
            this.searchMoive({
                tag: this.values || '2018'
            })
            wx.navigateBack();
        },
        async goDetail(item) {
            const url = '/pages/detail/main?item=' + JSON.stringify(item);
            await this.movieDetail(item.id)
            wx.navigateTo({
                url: url,
                success: () => {
                wx.setNavigationBarTitle({ title: item.title })
                }
            })
        }
    },
    mounted() {

    },
    onUnload() {
        console.log('onUnload');
        this.values = '';
    },
    onShow() {
        this.hotShow = true;                
    }
};
</script>
<style lang="scss" scoped>
$green: #42bd56;
.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0 10px 0;
  background: $green;
  span {
    text-align: center;
    margin: 0 auto;
  }
  input {
    margin: 0 auto;
    padding: 3px 35px;
    padding-right: 0;
    width: 80%;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    text-align: left;
  }
  img {
    position: absolute;
    top: 24px;
    left: 5px;
    width: 25px;
    height: 25px;
    z-index: 4;
  }
  button {
      padding: 0;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      border: none;
      color: #fff;
  }
}
.list {
    .items {
        display: flex;
        padding-left: 15px;
        padding-top: 15px;
        .intro {
            font-size:14px;
            color:#777;
            margin-top:5px;
        }
    }
    img {
        // flex: 10%;
        margin-right: 10px;
        width: 54px;
        height: 80px;
    }
}
.hot {
    .bg-hot {
        padding: 10px 0  10px 15px;
        background: rgb(248, 248, 248);
        color: rgb(160, 160, 160);
        font-size: 14px;
    }
    .hot-item {
        border-bottom: 1px solid #0111;
        padding: 15px;
        font-size: 16px;
    }
}
</style>
