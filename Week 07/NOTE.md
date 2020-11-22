学习笔记

# JavaScript从小到大
- Atom
- Expression
- Statement
- Structure
- Program/Module

# 按照运算符优先级从高到低的顺序
1.Member
```
a.b
a[b]
foo`string`
super.b
super['b']
new.target
new Foo()
```

2.New Expression
```
new Foo
比如
new.target 是个新加入的语法，用于判断函数是否是被 new 调用
new Foo()---带括号的new比不带括号的优先级更高
// 先计算 new a()，再用结果跟 () 配合使用
new a()()
// 现计算 new a()，在将结果跟前面的 new 使用
new new a()
```
3.Call Expression它的基本形式是 Member Expression 后加一个括号里的参数列表，或者可以用上 super 关键字代替 Member Expression，Call 低于new和Member运算
```
foo()
super()
foo()['b']
foo().b (点运算符被 Call Expression 拉低了优先级)
foo()`abc
```

# 左值和右值 
- Updata Expression 自增自减,不能放在等号左边
```
a++
a--
--a
++a
```
- Unary Expression 单目运算符
```
delete a.b
void foo() undefined 改变语法结构
typeof a
+a  不会改变表达式的值，如果后边是字符串会发生类型转换
-a
~a 位运算 整数按位取反，不是整数强制转换整数
!a 非运算 针对布尔型的运算 两个!!把数字强制转换成布尔类型
await a
```
注意点:
1. Logical 逻辑运算遵循短路原则  
```
&&
||
```

2. Conditional 三目运算符，可以某些地方替代if else，遵循短路原则  
```
?:
```

3. Exponental 右运算符 ** 乘方  
```
javascript唯一一个右结合的运算符 3**2**3 = 3**8
```

# 简单语句
- ExpressionStatement
- EmptyStatement
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement

# 复合语句
- BlockStatement
- IfStatement
- SwitchStatement
- IterationStatement
- WithStatement(少用)
- LabelledStatement(与break, continue搭配)
- TryStatement(得有大括号, 异常处理语句中，即使已经调用过了return，finally块也一定会被调用)

# 声明
- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatement
- ClassDeclaration
- LexicalDeclaration

# 宏任务和微任务
- 宏任务（js引擎的任务,最大颗粒度）
- 微任务（Promise产生微任务）
函数调用（Execution Context）
语句/声明（Completion Record）
表达式（Reference）
直接量/变量/this...
事件循环
获取代码 ---> 执行代码 ---> 等待 ---> 获取代码 ....

# 函数调用
- Execution Context Stack： 函数调用会形成执行上下文栈
- Running Execution Context：执行中执行上下文
