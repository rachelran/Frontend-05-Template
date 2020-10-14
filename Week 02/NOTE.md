寻路问题：广度, 深度, A*寻路

JS数组常用方法:

shift：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined
unshift：将参数添加到原数组开头，并返回数组的长度
pop：删除原数组最后一项，并返回删除元素的值；如果数组为空则返回undefined
push：将参数添加到原数组末尾，并返回数组的长度
sort(orderfunction)：按指定的参数对数组进行排序
slice(beginIndex[, endIndex])：返回从原数组中指定开始下标到结束下标之间的项组成的新数组

广度优先：
把所有可达的节点放进队列，根据先入先出的队列特性，push / shift

深度优先：
把所有可达的节点放进队列，根据后入先出的队列特性，push / pop

广度优先实现：
实现地图编辑器：展示地图，左击设置障碍，右击清除障碍
广度优先搜索实现寻路算法：打印搜索坐标，到达end返回true，否则返回false
通过异步sleep实现可视化寻路算法：insert时为对应坐标的点添加背景色标记
处理路径问题：insert点到queue中时，保存pre坐标，到end后根据pre反向寻找start

A*寻路实现：
将上面的广搜替换为启发式搜索：数据结构由queue替换为Sorted结构，每次取出的点是当前所有点中距离end最近的点，减少搜索范围
处理路径问题时，反向寻找的pre不一定是最优的pre，所以在一开始insert点保存pre时需要作处理：
insert点时，记录start到每个[x, y]点的路径长度，保存在cost对象中，key为数组下标
insert(x, y, pre)时，若[x, y]已经保存了pre'和cost'，则比较[x, y]到start的新旧两条路径的cost，若新的比旧的优，则用pre替换[x, y]中的pre'