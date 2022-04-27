import Vue from "vue"
import Button from "./button"
import Icon from "./icon.vue"
import ButtonGroup from "./buttonGroup"

Vue.component('r-button',Button)
Vue.component('r-icon',Icon)
Vue.component('r-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        a:11,
        loading1:false,
        loading2:true,
        loading3:false,
    }
})


import chai from 'chai'
let expect = chai.expect;

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:"setting",
//             iconPosition:'right',
//
//         }
//     })
//     vm.$mount('div')
//     let svg = vm.$el.querySelector('svg')
//     let order = window.getComputedStyle(svg).order
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:"setting"
//
//         }
//     })
//     vm.$mount('div')
//     let svg = vm.$el.querySelector('svg')
//     let order = window.getComputedStyle(svg).order
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// }
