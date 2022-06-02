// commonJs规范，浏览器中无法使用其导入模块
// let a = require('./a.js')
// es6导入导出规范
import a from './a.js'
import './css/index.css'
import './less/index.less'
import 'bootstrap/dist/css/bootstrap.css'

console.log(a)
console.log("hello world!")
console.log("auto build!!!")