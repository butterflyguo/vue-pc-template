<template>
<div class="car">
    <div class="container">

        <button @click="addCart('1')">加入购物车</button>
        <button @click="addCart('2')">加入购物车</button>
        <table class="my-cart-table">
            <tr>
                <td></td>
                <td>商品命称</td>
                <td>商品数量</td>
                <td>商品价格</td>
                <td>X</td>
            </tr>
            <tr v-for="(item,index) in $store.state.carList" :key="index">
                <td>
                    <el-checkbox v-model="item.isCheck" @change="handleCheckChange(item)"></el-checkbox>
                </td>
                <td>{{item.name}}</td>
                <td>
                    <el-input-number  v-model="item.num" @change="handleChange(item)" :min="1" :max="10"></el-input-number>
                </td>
                <td>{{item.price}}</td>
                <td >
                    <span @click="deleteCar(item.id)">X</span>
                </td>
            </tr>
        </table>
        <div>
            总价：<span>{{getTotal}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
              multipleSelection: [],
        }
    },
    computed: {
        getTotal(){
            let arr = this.$store.state.carList;
            let total = 0;
            arr.forEach(v => {
                if(v.isCheck){
                    let sum = v.price*v.num;
                    total += sum;
                }
            });
            return total;
        }
    },
    mounted(){
         window.addEventListener('scroll',this.getScroll)
    },
    methods: {
        getScroll(){
           console.log(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset)
        },
        handleChange(val) {
            this.$store.dispatch('updateCarList',val)
        },
      handleCheckChange(val){
          this.$store.dispatch('updateCarList',val)
      },
      addCart(val){
         
          let  info = {
              id: val,
              name: '华为牛x',
              num: 2,
              price: 1,
              isCheck: true
          }
           if(val == 2) {
               info.name = '华为牛x2';
           }
          this.$store.dispatch('addCart',info)
      },
      deleteCar(id){
          this.$store.dispatch('deleteCar',id)
      }
    }
}
</script>

<style lang='scss' scoped>
.my-cart-table {
    width: 100%;
    text-align: center;
    tr {
        border-bottom: 1px solid #ccc;
    }
}

.cart-delete {
    font-size: 20px;
}
</style>
