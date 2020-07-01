import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);
let car = JSON.parse(localStorage.getItem('carList')) || [];
console.log(car)
export default new Vuex.Store({
  state: {
    carList: car
  },
  mutations: {
    updateCarList(state,info) {
      let carList = state.carList;
      carList.forEach((v,i)=>{
        if(v.id == info.id){
          state.carList.splice(i,1,info);
        }
      })
      localStorage.setItem('carList',JSON.stringify(state.carList));
      console.log(state.carList,'carList')
    },
    addCart(state,info){
      const index = state.carList.findIndex(item=>item.id == info.id);
        if(index != -1){
          state.carList[index].num += info.num;
          state.carList[index].isCheck = info.isCheck;
        }else {
          state.carList.push(info);
        }
        console.log(state.carList,'carList')
        localStorage.setItem('carList',JSON.stringify(state.carList));
    },
    deleteCar(state,id){
      state.carList.forEach((v,i)=>{
        if(v.id===id) {
          state.carList.splice(i,1)
        }
      })
      localStorage.setItem('carList',JSON.stringify(state.carList));
    }
  },
  
  actions: {
    updateCarList({commit},info) {
      commit('updateCarList',info)
    },
    addCart({commit},info) {
      commit('addCart',info)
    },
    deleteCar({commit},id) {
        commit('deleteCar',id)
    }
  },
  modules: {}
});
