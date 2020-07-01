module.exports = { //但凡改了配置信息，就要重启项目，
    devServer: {
        host:'', //主机
        port:'8080',//端口
        proxy: { //接口代理（处理跨域）
            "/api": {
                target:'http://www.imooc.com', //目标地址，即真正访问的地址
                changeOrigin: false, //是否将主机头的原点更改为url地址
                pathRewrite:{
                    '/api':''
                }
                //展示地址： local host：8080/api/activity/activityList
                //实际地址： http://www.imooc.com/activity/activityList
            }
        }

    },
    lintOnSave: false, //关闭eslint检查
    publicPath:'/', //项目根路径 './'时项目可以被部署在任意路径，在history模式和使用 pages 选项构建多页面应用时，避免使用相对路径
    assetsDir:'', //放置静态资源的目录
    productionSourceMap: false, //若为true，打包的js文件回同时生成
    chainWebpack: (config) => {
        config.plugins.delete('prefetch') //删除路由预加载，真正实现按需加载
    }
}
//大图放在public文件夹里面，小图放在src/assets里面。webpack会把小图压缩成base64减少请求