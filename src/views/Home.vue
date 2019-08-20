<template>
  <div class="container">
    <nav class="nav-header">
      <header>
        <a href="/" class="brand"><h1 class="logo">起点中文网</h1></a>
        <HeaderToggle></HeaderToggle>
        <a href="javascript:;" class="right">
          <a href="javascript:;" class="avatar iconfont icon-renbudaiwaiquan" @click="login"></a>
          <a href="javascript:;" class="avatar iconfont icon-ziyuan"></a>
        </a>
      </header>
      <div class="swipe">
        <mt-swipe :auto="5000">
          <mt-swipe-item v-for="item in bannerlist" :key="Math.random()"><img :src="item.imageUrl" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
    </nav>
    <Search v-if="show"></Search>
    <a href="javascript:;" class="search-guide" @click="find"><i class="iconfont icon-sousuo"></i>地下城玩家</a>
    <nav class="home-nav">
      <router-link
              class="guide-nav-div"
              v-for="(item,index) in type"
              :to="{path:'category',query: {type: item.num}}"
              :key="item.num"
              @click="openBookCategory(item.num)">
        <i style="font-size: .6rem;color: #a0acf4" :class="['iconfont',{'icon-leimupinleifenleileibie':index===0},{ 'icon-ic_paihang_act':index===1},{ 'icon-mianfei-':index===2},{ 'icon-wanben':index===3},{ 'icon-huangguan':index===4} ]"></i>
        <h4 class="guide-nav-h">{{item.word}}</h4>
      </router-link>
    </nav>
    <div v-if="!loading">
      <recommend :booklist="booklist | hot" title="热门小说"></recommend>
      <recommend :booklist="booklist | top" title="排行榜"></recommend>
      <recommend :booklist="booklist | free" title="限时免费"></recommend>
      <book-list :datalist="booklist | newbook" title="新书抢鲜"></book-list>
      <book-list :datalist="booklist | endbook" title="畅销完本"></book-list>
      <book-list :datalist="booklist | like" title="猜你喜欢"></book-list>
    </div>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
  import api from '../components/api/index'
  import Recommend from '../components/Common/Recommend';
  import BookList from '../components/Common/BookList';
  import Loading from '../components/Loading/Loading';
  import Search from '../components/Search/index'
  import HeaderToggle from '../components/HeaderToggle/index'
  export default {
    data() {
      return {
        booklist: [],
        bannerlist: [],
        type: [
          {
            num: 1,
            word: '分类',
          },
          {
            num: 2,
            word: '排行榜',
          },
          {
            num: 3,
            word: '免费',
          },
          {
            num: 4,
            word: '完本',
          },
          {
            num: 5,
            word: '大神',
          },
        ],
        loading: false,
        show:false
      };
    },
    created() {
      this.getData();
      this.getBanner();

    },
    methods: {
      getData() {
        this.loading = true;
          this.$http.get(api.getBookList()).then(res => {
              this.loading = false; //获取数据完成后隐藏loading
              this.booklist = res.data;
          });
      },
      getBanner(){
        this.$http.get(api.getBanner()).then(res => {
          this.bannerlist=res.data;
        });
      },
      find(){
         this.show=true
      },
      login(){
        this.$router.replace('/login')
      }
    },
    components: {
      Recommend,
      BookList,
      Loading,
      HeaderToggle,
      Search
    },
    filters: {
      hot(value) {
        if (!value) return '';
        var arr = [];
        value.forEach((item, index) => {
          //简单更改下首页加载数据太多,可自行修改
          if (index < 20) {
            if (index % 2 == 1) {
              arr.push(item);
            }
          }
        });
        return arr;
      },
      top(value) {
        if (!value) return '';
        var arr = [];
        value.forEach((item, index) => {
          //简单更改下首页加载数据太多,可自行修改
          if (index < 20) {
            if (index % 2 == 0) {
              arr.push(item);
            }
          }
        });
        return arr;
      },
      free(value) {
        if (!value) return '';
        var arr = [];
        value.forEach((item, index) => {
          //简单更改下首页加载数据太多,可自行修改
          if (index < 20) {
            if (index % 3 == 2) {
              arr.push(item);
            }
          }
        });
        return arr;
      },
      newbook(value) {
        if (!value) return '';
        var arr = [];
        value.forEach((item, index) => {
          if (index % 3 == 1) {
            arr.push(item);
          }
        });
        return arr.splice(0, 3);
      },
      endbook(value) {
        if (!value) return '';
        var arr = [];
        value.forEach((item, index) => {
          if (item.serialize === '完本') {
            arr.push(item);
          }
        });
        return arr;
      },
      like(value) {
        if (!value) return '';
        var arr = [];
        value.forEach((item, index) => {
          if (index % 4 == 2) {
            arr.push(item);
          }
        });
        return arr.splice(0, 3);
      },
    },
  };
</script>

<style lang="less" type="text/less" scoped>
  .container {
    background-color: #f6f7f9;
  }

  .nav-header {
    header {
      display: flex;
      height: .8rem;
      padding: 0 .15rem;
      align-items: center;
      justify-content: space-between;
      font-size: .2rem;
      .brand {
        width: 2rem;
        background: url(http://qidian.gtimg.com/qdm/img/logo-qdm.0.50.svg)
        no-repeat left;
        background-size: 100%;
        .logo{
          color: transparent;
        }
      }
      .avatar {
        width: .24rem;
        height: .24rem;
        background-size: 100%;
        margin-left: .6rem;
      }
    }
  }

  .home-nav {
    display: flex;
    padding: 0.4rem 0;
    margin: 0.2rem 0;
    background-color: #fff;
    .guide-nav-div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }
  }

  .swipe {
    height: 2.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search-guide{
    font-size: 0.25rem;
    line-height: .6rem;
    display: block;
    margin: 0.1rem 0.15rem;
    text-align: center;
    color: #969ba3;
    border-radius: 5px;
    background-color: #fff;
    height: .6rem;
  }
</style>

