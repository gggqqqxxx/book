import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios';
Vue.config.productionTip = false
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/css/reset.css';
import './assets/iconfont.css'
import localEvent from './store/local';
Vue.use(MintUI);
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

router.beforeEach((to,from,next)=>{
  let getFlag=localEvent.StorageGetter("Flag");

  if(to.name==='login'){
    if(getFlag==='isLogin'){
      store.state.isLogin=true
      router.replace({ name: 'personal' });
    }
    next()
  }else {
    let roles=localEvent.StorageGetter("roles")
    if(roles!==null) {
      store.dispatch('GenerateRoutes', {roles}).then(() => { // 根据roles权限生成可访问的路由表
        router.addRoutes(store.getters.addRouters)
        localEvent.StorageRemove('roles')
      })
      next()
    }
  }
next()

})
