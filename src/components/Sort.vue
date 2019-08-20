<template>
    <div>
    <section class="cat" v-for="item in category">
        <h3 class="cat-title">{{ item.title }}</h3>
        <ul class="cat-list">
            <li v-for="cat in item.catList" class="cat-item" :key="cat.name">
                <router-link :to="{ name: 'catlist', params: { major: cat.name}, query: { gender: item.gender} }">
                    <p class="cat-name">{{ cat.name }}</p>
                    <p class="cat-count">{{ cat.bookCount }}本</p>
                </router-link>
            </li>
        </ul>
    </section>
    </div>
</template>

<script>
    import api from '../components/api/index'
    export default {
        data(){
            return{
                category: []
            }
        },
        mounted() {
            this.getData()
        },
        methods:{
            getData(){
                this.$http.get(api.getSortList()).then(res => {
                    for (let [key, value] of Object.entries(res.data)) {
                        let obj = null;
                        switch (key) {
                            case 'male':
                                obj = {
                                    title: '男生',
                                    gender: 'male',
                                    catList: value
                                };
                                break;
                            case 'female':
                                obj = {
                                    title: '女生',
                                    gender: 'female',
                                    catList: value
                                };
                                break;
                            case 'press':
                                obj = {
                                    title: '出版',
                                    gender: 'press',
                                    catList: value
                                };
                                break;
                            default:
                                break;
                        }
                        if (obj !== null) {
                            this.category.push(obj);
                        }
                    }
                });
            }
        }
    }

</script>

<style lang="less" scoped>
    .cat {
        position: relative;
        background: #fff;
        .cat-title {
            padding: 0 10px;
            height: 60px;
            line-height: 60px;
            font-weight: 400;
        }
        .cat-list {
            position: relative;
            overflow: hidden;
        }
        .cat-item {
            display: inline-block;
            width: 33.3%;
            box-sizing: border-box;
            text-align: center;
            padding: 10px 0;
            &:nth-child(3n + 1) {
                border-right: 1px solid #f0f0f0;
                border-bottom: 1px solid #f0f0f0;
            }
            &:nth-child(3n + 2) {
                border-right: 1px solid #f0f0f0;
                border-bottom: 1px solid #f0f0f0;
            }
            &:nth-child(3n + 3) {
                border-bottom: 1px solid #f0f0f0;
            }
            &:nth-child(1) {
                border-top: 1px solid #f0f0f0;
            }
            &:nth-child(2) {
                border-top: 1px solid #f0f0f0;
            }
            &:nth-child(3) {
                border-top: 1px solid #f0f0f0;
            }
            p {
                line-height: 22px;
            }
            .cat-name {
                font-size: 16px;
                color: #333;
            }
            .cat-count {
                font-size: 12px;
                color: #ccc;
            }
        }
    }
</style>
