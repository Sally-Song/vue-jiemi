<template>
  <div class="home">
    <!-- 轮播图 start -->
    <div v-if="sliderImages.length" class="slider-wrapper" ref="sliderWrapper">
      <slider>
        <div v-for="(item, index) in sliderImages" :key="index">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </slider>
    </div>
    <!-- 轮播图 end -->
    <!-- 1级分类 start -->
    <div class="firstFloor">
      <div class="catalog" v-for="(item, index) in firstFloor" :key="index">
        <img :src="item.pic">
        <p>{{item.name}}</p>
      </div>
    </div>
    <!-- 1级分类 end -->
    <!-- 活动 start -->
    <div class="activties">
      <div class="activty">
        <h5>限时购</h5>
        <p>每日限时 特卖专区</p>
        <div class="product">
          <img src="http://p.qpic.cn/music_cover/ZxFhHIic15equyHQJ4akclZkyX4xT8d28lnWveFLEPyoCjJ7qo3gTHw/600?n=1">
          <img src="http://p.qpic.cn/music_cover/ZxFhHIic15equyHQJ4akclZkyX4xT8d28lnWveFLEPyoCjJ7qo3gTHw/600?n=1">
        </div>
      </div>
    </div>
    <!-- 活动 end -->
  </div>
</template>
<script>
import slider from 'base/slider/slider'
export default {
  data () {
    return {
      sliderImages: [
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=4054280&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/280545.jpg',
          id: 15718
        },
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=004KrDD526x3Lh',
          picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/280296.jpg',
          id: 15737
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=4045051&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/279936.jpg',
          id: 15656
        },
        {
          linkUrl: 'http://y.qq.com/m/act/101girlc/index.html?ADTAG=jiaodiantu',
          picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/280434.jpg',
          id: 15705
        },
        {
          linkUrl: 'https://y.qq.com/apg/256/index.html',
          picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/280216.jpg',
          id: 15723
        }
      ],
      firstFloor: [
        {
          id: '101',
          name: '美妆',
          pic: 'http://p.qpic.cn/music_cover/ZxFhHIic15equyHQJ4akclZkyX4xT8d28lnWveFLEPyoCjJ7qo3gTHw/600?n=1'
        },
        {
          id: '102',
          name: '母婴',
          pic: 'http://p.qpic.cn/music_cover/Ln2hcJrJkibdW1MpKCmHtuaOUuXUftAld5tZeo2eBZq8TrvLLDcwE8g/600?n=1'
        },
        {
          id: '103',
          name: '轻奢',
          pic: 'http://p.qpic.cn/music_cover/PTq9Z793Ipkz20NmN0Yky3qsmQkiaF3OiaWKF7QtiaU1vvrlEj79ZGqfQ/600?n=1'
        },
        {
          id: '104',
          name: '保健',
          pic: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyARRZknorvMHKVDpb0TEn4Y4icE0JQBibUfA/600?n=1'
        },
        {
          id: '105',
          name: '数码',
          pic: 'http://p.qpic.cn/music_cover/K1wMWlXCKHpuvadtQGDIMExaKLWIWITMoXTibPS0CLqcvBT7QZLskOA/600?n=1'
        }
      ]
    }
  },
  components: {
    slider
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import './home.styl'
</style>
