<template>
    <div>
    <header class="header" style=""><a class="back" href="javascript:history.go(-1)"><span class="iconfont icon-zuojiantou"></span>个人中心</a></header>
    <div class="center-header">
        <img src="//qidian.gtimg.com/qd/images/ico/default_user.0.2.png" class="center-header-img" alt="书友20190812181422419">
        <p class="center-header-p">欢迎：{{username}}</p>
    </div>
        <div class="module"><a href="javascript:" class="module-bar center-logout" @click="logout">退出登录</a></div>
    </div>
</template>

<script>
    import localEvent from '../store/local';
    export default {
        data(){
            return{
                username:''
            }
        },
        methods:{
            logout(){
                localEvent.StorageRemove('Flag')
                localEvent.StorageRemove('user')
                localEvent.StorageRemove('isShow')
                this.$router.replace('/home')
            }
        },
        created() {
            this.username=localEvent.StorageGetter('user')
        }
    }
</script>

<style lang="less" scoped>
        .header {
            height: 0.8rem;

            position: relative;
            a {
                display: inline-block;
                height: 0.8rem;
                padding-right: 0.4rem;
                color: #fff;
            }

            span {
                display: inline-block;
                vertical-align: middle;
                width: 0.8rem;
                height: 0.8rem;
                text-align: center;
                line-height: 0.8rem;
            }
        }
        .center-header {
            font-size: .3rem;
            overflow: hidden;
            min-height: 3.625rem;
            margin-top: -.9rem;
            text-align: center;
            color: #fff;
            background: #ed424b url(/qdm/img/center-header-bg.c36bb.jpg) no-repeat center;
            background-size: cover;
            img{
                margin-top: 1rem;
            }
        }
        .module {
            margin: .75rem 0;
            background-color: #fff;
        }
        .center-logout {
            font-size: .875rem;
            display: block;
            color: #ed424b;
            background: 0 0;
        }
        .module-bar {
            font-size: .3rem;
            line-height: 1.5rem;
            text-align: center;
            background-color: #f6f7f9;
            height: 1.5rem;
        }
</style>
