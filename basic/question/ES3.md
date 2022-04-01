1. a = []，a.push(...[1, 2, 3]) ，a = ？
> push的语法：支持将一个或多个元素添加到数组末尾
> 综上，题目等同于 a.push(1, 2, 3) // [1, 2, 3]
2. a = ?, a==1 && a==2 && a==3 成立
> 对象转数字,先尝试调用对象的 valueOf()，将返回原始值转为数字,所以：
```javascript
const a = {
	count: 0,
	valueOf() {
		return ++this.count
	}
}
```
3. null == undefined 结果
> 比较 null 和 undefined 的时候，不能将 null 和 undefined 隐式转换，规范规定结果为相等
4. 对比 get 和 Object.defineProperty
> 相同点：都可以定义属性被查询时的函数
> 不同点：在 classes 内部使用,get 属性将被定义到 实例原型,Object.defineProperty 属性将被定义在 实例自身
```javascript
class TestGet {
    #name;
    constructor (name) {
        this.#name = name;
    }

    get name () {
        return 'njvnj';
    }
}

const a = new TestGet('jkl');

const test = Object.create({});
Object.defineProperty(test, 'name', {
    get: () => {
        return this.name;
    },
    set: (name) => {
        this.name = name + ' word!';
    }
})
test.name = 'hello'
console.log(test.name);
```