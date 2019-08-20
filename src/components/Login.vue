<template>
    <div>
    <div>
        <div class="wrapper wrap" id="staticLoginDv">
            <a href="javascript:">
                <img class="top-img" src="https://sta.gtimg.com/mobile/static/images/top_red_13.png">
            </a>
        </div>
        <div class="login-wrap">
            <div class="logo">
                <img class="logo-img" src="https://sta.gtimg.com/mobile/static/images/qd_icon.png">
            </div>
        </div>
        <div class="account-login-wrap " id="j-accountLoginWrap">
            <div class="login-form">
                <ul class="form-list">
                    <li>
                        <em class="iconfont icon-yonghuming common"></em>
                        <input type="text" id="username" placeholder="请输入邮箱/个性账号" v-model="user">
                    </li>
                    <li>
                        <div class="eye-icon fr" id="j-isLook"><i class="unlook"></i></div>
                        <em class="iconfont icon-mima common"></em>
                        <input id="password" type="password" placeholder="请输入密码" v-model="pwd">
                    </li>
                </ul>
            </div>
            <div class="reg-wrap cf">
                <a class="link" href="https://aq.yuewen.com/welcome/validateuser">忘记密码</a>
                <a class="link fr" href="javascript:;" @click="regist">用户注册</a>
            </div>
            <div class="btn-wrap">
                <a class="btn-primary large login-button disabled" href="javascript:" @click="checkUser">登录</a>
            </div>
        </div>
        <div style="color: red;text-align: center">{{stuts}}</div>
    </div>
    </div>
</template>

<script>
    import api from '../components/api/index'
    import localEvent from '../store/local';
    export default {
        data(){
            return {
              user:'',
              pwd:'',
              stuts:'',
              name:''
            }
        },
        methods:{
            regist(){
                this.$router.replace("/regist")
            },
            checkUser(){
                this.$http.get(api.checkUsername(this.user,this.pwd)).then(res => {
                    this.stuts=res.data.stuts;
                    this.name=res.data.user
                    if(this.stuts==='登录成功'){
                        localEvent.StorageSetter("Flag","isLogin")
                        localEvent.StorageSetter("user",this.name)
                        localEvent.StorageSetter("roles",res.data.role)
                        this.$router.replace("/home")
                    }
                });
            }
        },

    }
</script>
<style lang="less" scoped>
    a {
        background: transparent;
        text-decoration: none;
        color: #61708F;
        .top-img {
            width: 100%;
            height: 1.6rem;
        }
    }
    input {
        line-height: normal;
        border: none;
        outline: none;
    }
    .login-wrap {
        .logo {
        padding: .48rem 0;
        text-align: center;
       }
        .logo-img{
            display: inline-block;
            height: .96rem;
        }
    }
    .account-login-wrap{
        .login-form {
            padding: 0 .64rem;
            .form-list{
                li{
                    width: 100%;
                    position: relative;
                    z-index: 1;
                    border-bottom: 1px solid #EEE;
                    margin-bottom: .32rem;

                }
                input {
                    display: inline-block;
                    vertical-align: middle;
                    height: .96rem;
                    line-height: .96rem;
                    width: 60%;
                    background: none;
                    font-size: .3rem;
                    margin-left: .5rem;
                }
            }

        }
    }
    .common{
        font-size: 0.3rem;
        color: #b7d2f4;
    }
    .cf {
        zoom: 1;
        a.link {
            color: #0091DE !important;
        }
    }
    .reg-wrap {
        padding: 0 .64rem;
        margin-bottom: .48rem;
    }
    .btn-wrap {
        padding: 0 .64rem;
        text-align: center;
        .btn-primary {
            background: #ee7b81;
            position: relative;
            z-index: 1;
            display: inline-block;
            vertical-align: middle;
            border-radius: .32rem;
            text-align: center;
            color: #FFF;
            &.large {
                width: 100%;
                height: .96rem;
                border-radius: .5rem;
                line-height: .96rem;
                font-size: .32rem;
            }
        }

    }
</style>
