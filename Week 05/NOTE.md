学习笔记

# Proxy
Proxy对象就是可以让你去对JavaScript中的一切合法对象的基本操作进行自定义,然后用你自定义的操作去覆盖其对象的基本操作  
例如：
```
let p = new Proxy(target, handler);
```
其中:
- target是你要代理的对象.它可以是JavaScript中的任何合法对象.如: (数组, 对象, 函数等等)
- handler是你要自定义操作方法的一个集合
举个例子：
```
const target = {
  name: 'test'
};

const handler = {
  get: function(target, key) {
    console.log(`${key} 被读取`);
    return target[key];
  },
  set: function(target, key, value) {
    console.log(`${key} 被设置为 ${value}`);
    target[key] = value;
  }
};

const testObj = new Proxy(target, handler);
```
```
/*
  获取testObj中name属性值
  会自动执行 get函数后 打印信息：name 被读取 及输出名字 test
*/
console.log(testObj.name);
```
```
/*
 改变target中的name属性值
 打印信息如下： name 被设置为 newName 
*/
testObj.name = "newName";
console.log(target.name); // 输出 newName
```
除了get, set, handler的其他主要方法有：
```
handler.getPrototypeOf()
// 在读取代理对象的原型时触发该操作,比如在执行Object.getPrototypeOf(proxy) 时
handler.setPrototypeOf()
// 在设置代理对象的原型时触发该操作,比如在执行Object.setPrototypeOf(proxy, null) 时
handler.isExtensible()
// 在判断一个代理对象是否是可扩展时触发该操作,比如在执行Object.isExtensible(proxy) 时
handler.preventExtensions()
// 在让一个代理对象不可扩展时触发该操作,比如在执行Object.preventExtensions(proxy) 时
handler.getOwnPropertyDescriptor()
// 在获取代理对象某个属性的属性描述时触发该操作,比如在执行Object.getOwnPropertyDescriptor(proxy, "name") 时
handler.defineProperty()
// 在定义代理对象某个属性时的属性描述时触发该操作,比如在执行Object.defineProperty(proxy, "name", {}) 时
handler.has()
// 在判断代理对象是否拥有某个属性时触发该操作
handler.get()
// 在读取代理对象的某个属性时触发该操作
handler.set()
// 在给代理对象的某个属性赋值时触发该操作
handler.deleteProperty()
// 在删除代理对象的某个属性时触发该操作
handler.ownKeys()
// 在获取代理对象的所有属性键时触发该操作,比如在执行Object.getOwnPropertyNames(proxy) 时
handler.apply()
// 在调用一个目标对象为函数的代理对象时触发该操作,比如在执行proxy() 时
handler.construct()
// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作,比如在执行new proxy() 时
```

# dragdrop
- 不用dragdrop事件，是因为希望这个方块的移动是跟随鼠标点击后拖拽进行移动，当鼠标放下后停止移动，所以
在mousedown中加入监听事件是非常合适的  
- mousemove和mouseup在document上去监听，而如果在dragable上监听，当鼠标拖得移开dragable区域就会拖断 
- mousemove中用transform来做鼠标移动，并且做一个移动位置和起始点位置间差值的逻辑 
- 考虑在已有的位置去拖动，所以在mousemove事件中需要考虑记录当前的位置 
- 在文字中插入拖拽，首先找到文字中所有range的位置,再用insertNode方法进行插入 
