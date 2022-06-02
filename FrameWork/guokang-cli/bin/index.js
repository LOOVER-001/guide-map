#!/usr/bin/env node

// 分包
const lib = require("guokang-cli-lib")
console.log(lib.calc("国康CLI ","hello loove!"))

// 注册命令
const argv = require("process").argv
console.log("argv:")
console.log(argv)

const command = argv[2]
console.log("command:")
console.log(command)

const options = argv.slice(3)
console.log("options:")
console.log(options)

if(command){
    if (options.length >= 1) {
        let [option, param] = options
        console.log(option)
        console.log(param)
      
        option = option.replace('--', '')
        if (command) {
          if (lib[command]) {
            lib[command]({ option, param })
          } else {
            console.log('无效的命令')
          }
        } 
    }else {
        console.log('请输入参数')
    }
    // 实现参数解析 --version 和 init --name
    if (command.startsWith('--') || command.startsWith('-')) {
        const globalOption = command.replace(/--|-/g, '')
        if (globalOption === 'version' || globalOption === 'V') {
            console.log('1.0.0')
        }
    }
}else{
    console.log('没有输入命令，通过输入 --help 获取相关命令')
}