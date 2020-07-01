import Mock from 'mockjs';
// const Random = Mock.Random;
Mock.mock('/api/user/login',"post",{
    "status": 0,
    "data" :{
        "id|":/[a-z][A-Z][0-9]/,
        "name|string":'张三'
    }
   
})
