<template>
  <div class="category">
    <div class="category-header">
      <router-link :to="'/'">
        <i></i>
        <h2>{{title}}</h2>
      </router-link>
    </div>
    <div class="category-list" v-if="!(type==='分类')">
      <ul>
        <li v-for="item in categoryList" :key="Math.random()">
          <router-link :to="{ path: '/bookdetail/' + item.id}" @click.native="bookDetailId(item.id)">
            <div class="book-image">
              <img :src="item.images" alt="">
            </div>
            <div class="book-detail">
              <h3>{{item.name}}</h3>
              <p>{{item.intro}}</p>
              <div class="author">
                <i></i>
                <span>{{item.author}}</span>
              </div>
              <div class="category-r">
                <span>{{bookCategoryType}}</span><span>{{item.serialize}}</span><span>{{item.wordcount}}万字</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <Sort  v-if="type==='分类'"></Sort>
    <loading v-show="loading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../components/api/index'
  import {mapState} from 'vuex'
  import Loading from './Loading/Loading'
  import Sort from '../components/Sort'
  export default {
    data() {
      return {
        categoryList: [],
        loading: false,
        type:''
      }
    },
    created() {
      this.getCategory(this.$route.query.type)
    },
    methods: {
      getCategory(type) {
        this.loading = true
        this.$http.get(api.getCategoryList(type)).then(res => {
          this.loading = false
          this.categoryList = res.data
        })
      },
      bookDetailId(id) {
        this.$store.dispatch('chooseBook', id)
        console.log(id)
      },
      unique(arr) {
        return Array.from(new Set(arr))
      }
    },
    components: {
      Loading,
      Sort
    },
    computed: {
      ...mapState([
        'bookCategoryType'
      ]),
      title() {
        switch (this.$route.query.type) {
          case 1:
            this.type='分类'
            return '分类'
            break
          case 2:
            this.type='排行榜'
            return '排行榜'
            break
          case 3:
            this.type='免费'
            return '免费'
            break
          case 4:
            this.type='完本'
            return '完本'
            break
          case 5:
            this.type='大神'
            return '大神'
            break
          default:
            return '分类'
        }
      }
    },
  }
</script>

<style lang="less" type="text/less" scoped>
  .category {
    background-color: #f6f7f9;
  }

  .category-header {
    height: 50px;
    background-color: #fff;
    i {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 30px;
      height: 30px;
      background: url("../assets/images/back.png");
    }
    h2 {
      margin: 0 40px;
      font-size: 18px;
      line-height: 50px;
      color: #ed424b;
    }
  }

  .category-list {
    margin-top: 15px;
    padding: 15px;
    background-color: #fff;

    ul li {
      display: flex;
      padding-bottom: 10px;
      margin-bottom: 14px;
      border-bottom: 1px solid #ddd;
      a {
        display: flex;
      }
      .book-image {
        width: 80px;
        img {
          width: 100%;
        }
      }
      .book-detail {
        position: relative;
        flex: 1;
        padding: 0;
        margin-left: 20px;
        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-clamp: 2;
          font-size: 14px;
          color: #969ba3;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .author {
          position: absolute;
          left: 0px;
          bottom: 5px;
          color: #969ba3;
          font-size: 13px;
          i {
            position: relative;
            bottom: -3px;
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url("../assets/images/man.png") no-repeat;
          }
        }
        .category-r {
          position: absolute;
          right: 0;
          bottom: 5px;
          float: right;
          color: #969ba3;
          font-size: 10px;
          span {
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 0 2px;
          }
          span:nth-child(2) {
            color: #ed424b;
          }
          span:nth-child(3) {
            color: #4284ed;
          }
        }
      }
    }
  }
</style>
