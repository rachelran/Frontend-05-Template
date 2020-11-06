学习笔记

Proxy
Proxy对象就是可以让你去对JavaScript中的一切合法对象的基本操作进行自定义.然后用你自定义的操作去覆盖其对象的基本操作.
例如：
let p = new Proxy(target, handler);
其中:
target是你要代理的对象.它可以是JavaScript中的任何合法对象.如: (数组, 对象, 函数等等)
handler是你要自定义操作方法的一个集合
举个例子：
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

/*
  获取testObj中name属性值
  会自动执行 get函数后 打印信息：name 被读取 及输出名字 test
*/
console.log(testObj.name);

/*
 改变target中的name属性值
 打印信息如下： name 被设置为 newName 
*/
testObj.name = "newName";

console.log(target.name); // 输出 newName

除了get, set, handler的其他主要方法有：
handler.getPrototypeOf()
// 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。

handler.setPrototypeOf()
// 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。

handler.isExtensible()
// 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。

handler.preventExtensions()
// 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。

handler.getOwnPropertyDescriptor()
// 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "name") 时。

handler.defineProperty()
// 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "name", {}) 时。

handler.has()
// 在判断代理对象是否拥有某个属性时触发该操作

handler.get()
// 在读取代理对象的某个属性时触发该操作

handler.set()
// 在给代理对象的某个属性赋值时触发该操作

handler.deleteProperty()
// 在删除代理对象的某个属性时触发该操作

handler.ownKeys()
// 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。

handler.apply()
// 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。

handler.construct()
// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。

proxy 双向绑定
根据winter总结

https://juejin.im/post/6844903545599164423
https://www.cnblogs.com/tugenhua0707/p/10306793.html
https://juejin.im/post/6844903990170222600

拖拽
https://zh.javascript.info/mouse-drag-and-drop
