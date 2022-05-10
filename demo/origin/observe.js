// view
function updateView() {
    console.log('更新视图')
}

// Array拓展
let oldArrayPrototype = Array.prototype
let arrPrototype = Object.create(oldArrayPrototype)
['push','pop','shift','unshift'].forEach(element => {
    arrPrototype[element] = function () {
        updateView()
        // 在原型里面找到对应方法
        oldArrayPrototype[element].call(this,...arguments)
    }
});

// 核心API
function defineReactive(target, key, value) {
    // 深度监听（value为对象）
    observer(value)

    // 添加监听（遍历key,递归到底，一次性计算量大）
    // 无法监听属性的新增和删除  
    Object.defineProperty(target, key, {
        get() {
            return value
        }, 
        set(newValue) {
            if(newValue !== value){
                // 深度监听（newValue为对象）
                observer(newValue)

                value = newValue

                updateView()
            } 
        }
    })
}

// listener
function observer(target) {
    if(typeof target !== 'object' || target === null){
        return target
    }

    // 监听数组
    if(typeof target == 'array'){
        target._proto = arrPrototype
    }

    // 监听对象
    for (const key in target) {
        defineReactive(target, key, target[key])
    }
}

// model
const data = {
    age: 20,
    info:{
        address: '深圳'
    },
    nums: [10,20,30]
}

observer(data)

// test
data.age = 21

data.info.address = '上海'

data.age = {num: 22}
data.age.num = 23

data.nums[3] = 40