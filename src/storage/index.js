export default {
    /**
     * 根据模块将sessionStorage划分成不同的键值对
     * @param {string} key //sessionStorage的键值
     * @param {*} value //sessionStorage每一项的值
     * @param {string} module_name // sessionStorage中划分的每一个模块的名字
     */
    
    //存值
    setItem(key,value,module_name){
        let val = {};
        val = module_name? this.getStorage(module_name):this.getStorage(key);
        val[key] = value;
        module_name? window.sessionStorage.setItem(module_name,JSON.stringify(val)):window.sessionStorage.setItem(key,JSON.stringify(val));
    },
    //取值
    getItem(key,module_name){
        return  module_name? this.getStorage(module_name)[key] : this.getStorage(key)
    },
    //清除某一项
    removeItem(key,module_name){
        if(module_name) {
            let val = this.getStorage(module_name);
            delete val[key];
            window.sessionStorage.setItem(module_name,JSON.stringify(val));
        }else {
            window.sessionStorage.removeItem(key);
        }
        
    },
    getStorage(key){
      return   JSON.parse(window.sessionStorage.getItem(key)||"{}");
    }


}