import './css/index.css'
import './less/index.less'
import 'bootstrap/dist/css/bootstrap.css'

console.log('indexJs')

if(IS_DEV){
    console.log('测试环境')
}

// HMR
import str from './hotmoudle'
console.log(str)

module.hot.accept('./hotmoudle',function() {
    let hotmoudle = require('./hotmoudle')
    console.log(hotmoudle)
})

// 优化 
// webpack 支持commonJs规范 但是require不支持tree shaking 
// let math = require('./math.js')
// console.log(math.add(1,2))
// es6 支持tree shaking scope hoisting
import { add } from './math.js'
console.log(add(1,2))

// scope hoisting 类似于域执行 直接推断后打包进去
let a = 1
let b = 2
let c = 3
console.log(a+b+c)
console.log(a,b,c)
