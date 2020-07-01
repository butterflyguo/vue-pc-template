<template>
  <div class="home">
   
   <nav-header></nav-header>
   <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from "@/components/NavHeader.vue";
import storage from '../storage/index'

export default {
  name: "Home",
  components: {
    NavHeader
  },
  mounted(){
    console.log(this.$axios)
    this.axios.post('/user/login').then(res=>{
      console.log(res)
    })
    storage.setItem("user", "aaa");
    storage.setItem("token", 1);
    storage.setItem("name",'张三','token')
    storage.setItem("num",'addcesdfee==','token')
    storage.removeItem('token','token');
  //  console.log(storage.getStorage("token")) 
  }
};
</script>
