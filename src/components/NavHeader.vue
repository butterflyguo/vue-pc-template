<template>
<div class="header">
    <div class="nav-topbar">
        <div class="container">
            <div class="topbar-menu">
                <a href="javascript:;">小米商城</a>
                <a href="javascript:;">MUI</a>
                <a href="javascript:;">云服务</a>
                <a href="javascript:;">协议规范</a>
            </div>
            <div class="topbar-user">
                <a href="javascript:;">登录</a>
                <a href="/#/car" class="nav-car"> 
                  <i class="icon-car"></i>购物车</a>
            </div>
        </div>
    </div>
    <div class="nav-header">

    </div>
</div>
</template>

<script>
export default {
    name: "nav-header",
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "src/assets/scss/mixin.scss";
@import "src/assets/scss/config.scss";

.header {
    height: 114px;

    .nav-topbar {
        height: 34px;
        background-color: #444;

        .container {
            @include flex();

            a {
                display: inline-block;
                padding-right: 10px;
                color: #fff;
                line-height: 34px;
            }
            .nav-car {
              width: 105px;
              padding-left: 10px;
              padding-right:0;
              box-sizing: border-box;
              background-color: $colorA;
              text-align: center;
              .icon-car {
                display: inline-block;
                width: 16px;
                height: 12px;
                background: url('/imgs/icon-cart-checked.png') center;
                background-size: contain;
                margin-right: 5px;
              }
            }

        }
    }
}
</style>
