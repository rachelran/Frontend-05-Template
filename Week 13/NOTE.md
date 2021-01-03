## HTML的定义：XML与SGML
## HTML标签语义：
- aside 标签：元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out boxes）。
- hgroup：element代表文档章节所属的多级别的目录，它将多个h1-6的子元素组装到一起
- strong：文章重要性
- em：重音
- hr： 段落级元素之间的主题转换
- ol：列表有顺序性
- ul：列表无顺序性
- nav：导航部分的常见示例是菜单，目录和索引。

## 浏览器API
### 导航类操作
1. node级：
```
parentNode
childNodes
firstChild
lastChild
nextSibling
previousSibling
```
2. element级：
```
parentElement
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
```
### 修改操作
```
appendChild
insertBefore
removeChild
replaceChild
```
### 高级操作
```
compareDocumentPosition: 比较两个阶段中关系函数
contians：检查一个节点是否包含另一个节点函数
isEqulaNode：检查两个节点是否完全相同
isSameNode：检查两个节点是否是同一个节点
cloneNode: 复制节点，如果传入参数true，则会连同子元素深拷贝
```

## 事件API
可以用 Document 对象的 Document.createRange 方法创建 Range，也可以用 Selection 对象的 getRangeAt 方法获取 Range   
另外，还可以通过 Document 对象的构造函数 Range() 来得到 Range   

## CSSOM view
1. scroll
只有当有滚动条的时候才有scroll
```
scrollTop
scrollLeft
scrollWidth
scrollHeight
scroll(x, y)
scrollBy(x, y)
scrollIntoView()
```
2. window
```
scrollX
scrollY
scroll(x, y)
scrollBy(x, y)
```
## 其他API
