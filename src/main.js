import Vue from "vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from 'vue-axios';
// import { promised } from "q";
Vue.use(VueAxios,axios);


//按需引入elementui
import { Table,TableColumn,InputNumber,Checkbox,CheckboxButton } from 'element-ui'
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(InputNumber);
Vue.use(Checkbox);
Vue.use(CheckboxButton);

//组件
import App from "./App.vue";



import storage from './storage';
Vue.prototype.$storage = storage;

Vue.config.productionTip = false; //生产环境的提示


//引入全局过滤器
import * as filters from './filters';
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})

if(process.env.NODE_ENV == "'development'"){
  require('../mock')
}

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//axios请求拦截
axios.interceptors.request.use(function(config){
  return config;
},function (error) {
  return Promise.reject(error);
  })

//aixos响应拦截
axios.interceptors.response.use(function(response){
 let res= response.data;
 if(res.status== 0) { //成功
   return res.data;
 }else if(res.status == 10 ) {//未登录
  window.location.href="/login"//返回登录页
 }else { //错误
  console.log(res.message);
 }
},function(error){
  return Promise.reject(error);
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
