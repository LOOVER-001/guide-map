1. Promise then catch async await ; 2个回调 ; 原生js实现Promise; 手动封装（B站）
```javascript
// https://segmentfault.com/a/1190000016788484
// Promise 避免回调地狱，链式表达更清晰
// then 本质是返回一个新的Promise，一直往下传递
// catch 针对于整个链式错误捕获，而reject、resolve针对上一个Promise
// Promise的finally catch后默认执行的的操作
// async 声明的是function,本质上是一个Promise
// await 在这个async函数内部使用, 函数没有返回,那么下面的程序是不会去执行
```

2. 单线程 多线程 同步任务 异步任务 setTimeout 加载大数据量
```javascript
// javascript是单线程语言,多线程对dom操作不友好
// 在HTML5中，引入了Web Worker这个概念。在另外一个线程中执行计算密集的代码
// 同步任务指主线程上排队执行的任务
// 异步任务指进入任务队列，只要异步任务有结果，则在任务队列内放事件，同步任务执行完，读取队列事件，执行任务。
```

3. computed watch
```javascript
// computed 依赖数据发生变化重新计算，依赖其他属性，是多对一，或则一对一
// computed 不支持异步
// computed 不可在data中定义，如果依赖不变的话，会变成缓存，computed 的值就不重新计算
// computed 避免template中逻辑过重, 更可维护
// computed 是函数时，默认走 get 方法，必须要有一个返回值
// computed 当数据变化时，调用 set 方法
// watch 用来监听数据变化，操作业务逻辑，是 computed 和 methods 的结合体
// watch 不缓存，数据变（data，props，computed 内的数据），则回调，是一对多
// watch 支持异步,数据变化时执行异步或具体的业务逻辑
// watch 是函数，两个参数，第一个参数是最新的值，第二个参数是输入之前的值
// immediate: 组件加载立即触发回调函数执行
// deep: 递归，监听器会一层层遍历，所有属性都加上监听器，开销非常大，任何修改都会触发这个监听器里的 handler
watch: {
  obj: {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    deep: true
  }
}
// 进行优化，给对象的指定属性添加侦听，减少性能开销,这样vue.js会一层一层解析直到遇到属性a,才给a设置监听函数
watch: {
  'obj.a': {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    // deep: true
  }
}
```

4. flex
```javascript
// 弹性布局
// 使用元素称为flex容器，有子元素自动成为容器成员，称为Flex项目
// 容器属性：flex-direction（主轴方向）、flex-wrap（主轴换行）、flex-flow（主轴方向换行）、justify-content（主轴内容对齐）、align-items（交叉轴内容对齐）、align-content（多根主轴对齐）
// 项目属性：order(项目排列顺序)、flex-grow（项目放大比例）、flex-shrink（项目缩小比例）、flex-basis（项目固定空间）、flex（项目放大、缩小、固定空间）、align-self（项目对齐方式）
```

5. webkit
```javascript
// 多进程 {dpu进程、事件进程、浏览器进程、生成tree、重排、重绘}
```

6. cdn 
```javascript

```

7. 防抖节流原理
```javascript
// 节流（interval/setTimeout）: 一定时间内只触发一次。动画
// 防抖（setTimeout）: 事件触发 n 秒后执行回调，n 秒内又触发，重新计时。 搜索，按钮提交场景, 服务端验证场景
```

11. cookie localstory sessionstory
```javascript
// cookie数据始终在同源的http请求中携带，来回传递
```

12. 原型 prototype _proto_ 原型链结构
```javascript
// prototype指向构造函数的原型
// _proto_可以访问对象的原型对象
// Object.prototype 是顶级 是null
```

14. nginx proxy
```javascript

```

16. 浏览器的加载过程
```javascript
// url请求，浏览器开启线程处理，启动DNS查询
// 服务器和浏览器建立"TCP"连接
// 浏览器发送http请求给服务器，获得正确响应，开始下载资源
// 浏览器渲染DOM树
```

17. 深拷贝 assign JSON.stringify JSON.parse

18. 箭头函数 闭包 this指向 浅拷贝

19. V-model的实现

20. 类型的判断

21. data是函数不是对象

22. 性能优化 合并 压缩 cdn 缓存
```javascript
// cdn 降低通信的距离
// ajax 多个域名提供缓存
```

23. 设计模式 发布订阅者模式 工厂模式 单例模式

24. http 和https

25. 抓包

26. 代码部署步骤

27. token 登出

30. vue 数组索引

31. Elementui的验证 api的查询方式

32. 数组的相关方法（important）reverse join
```javascript
// unshift shift push pop
```

33. 字符串相关方法（import）split chartAt contact slice search indexof lastindexof substring substr 

33. 改变this指向的方法及区别

34. import和require的区别，什么情况下require被浏览器编译

35. scope的实现原理
```javascript
// scope表示指令的作用域
```

36. 登出的实现

37. 跨域的解决 script
```javascript
// JSONP 动态script标签(没有跨域限制) src请求js脚本
// ngix 设置请求头 ACCESS-Control-allow-origin: *
```

38. 继承的实现 
```javascript
// 原型继承指的是构造函数的原型指向父对象 原型链继承
// extend es6
```

39. 类型的判断 typeof instanceof constructor
```javascript
// typeof
```

40. 递归函数 自己调用自己 id pid


41. 兼容问题
```javascript
// flex加上-webkit前缀
// babel
```

42. 基本类型和复杂类型
```javascript
// 基本类型：值类型 number string boolean undefined null
// 复杂是数据类型：引用类型 
```

43. 序列化
```javascript
// 把对象转化为字节序列，便于传输和保存，常见的是xml json
```

44. html的渲染过程

45. 代码的重构

46. docker

47. vue3 函数式编程

48. vue的源码 vuex的源码 vue-router的源码 promise的源码 vue插件的拓展（use） axios源码  

49. 算法 数组、字符串的操作