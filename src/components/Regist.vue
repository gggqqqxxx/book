<template>
    <section class="wrap">
        <header class="header" style=""><a class="back" href="javascript:;" @click="back"><span class="iconfont icon-zuojiantou"></span>手机注册</a></header>
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
            <div class="btn-wrap">
                <a class="btn-primary large login-button disabled" href="javascript:" @click="regist">注册</a>
            </div>
            <div style="color: red;text-align: center">{{stuts}}</div>
        </div>
    </section>
</template>

<script>
    import api from '../components/api/index'
    export default {
        data(){
            return{
                user:'',
                pwd:'',
                stuts:''
            }
        },
        methods:{
            back(){
                this.$router.replace('/home')
            },
            regist(){
                this.$http.get(api.registUser(this.user,this.pwd)).then(res => {
                    this.stuts=res.data.stuts;
                    if(this.stuts==='注册成功'){
                        this.$nextTick(()=>{this.$router.replace('/login')})
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    input {
        line-height: normal;
        border: none;
        outline: none;
    }
    .wrap {
        font-size: 0.28rem;
        color: #333;

        .header {
            height: 0.8rem;
            border-bottom: 1px solid #EEE;

            a {
                display: inline-block;
                height: 0.8rem;
                padding-right: 0.4rem;
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
    }
    .account-login-wrap{
        margin-top: 2rem;
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
