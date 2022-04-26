import Vue from "vue"
import Button from "./button"
import Icon from "./icon"

Vue.component('r-button',Button)
Vue.component('r-icon',Icon)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
    }
})
