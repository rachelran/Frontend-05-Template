学习笔记

AST定义
抽象语法树（abstract syntax tree缩写为AST），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。

AST的使用场景

代码语法的检查、代码风格的检查、代码的格式化、代码的高亮、代码错误提示、代码自动补全等等
如JSLint、JSHint对代码错误或风格的检查，发现一些潜在的错误
IDE的错误提示、格式化、高亮、自动补全等等

代码混淆压缩
UglifyJS2等

优化变更代码，改变代码结构使达到想要的结构
代码打包工具webpack、rollup等等
CommonJS、AMD、CMD、UMD等代码规范之间的转化
CoffeeScript、TypeScript、JSX等转化为原生Javascript

AST过程
词法分析、语法分析、解析执行
词法分析用正则,得到token
// 程序代码
10 + 5 + 6
// 词法分析后得到的 token
10
+
5
+
6
语法分析；
首先我们用BNF定义语法
运算表达式
<Expression> ::= <AddExpression><EOF>
加法表达式
<AddExpression> ::= <MultipleExpression> | <AddExpression><+><MultiplicativeExpression> | <AddExpression><-><MultiplicativeExpression>
乘法表达式
<MultipleExpression> ::= <Number> | <MultipleExpression><*><Number> | <MultipleExpression></><Number>
然后根据定义的语法，把词构建成AST抽象语法树

解析执行过程,就是根据语法定义，递归处理AST语法树就可以了

https://www.cnblogs.com/amiezhang/p/11070618.html

有很多算法可用来构建语法分析树，这里只讲两种算法。
递归下降分析法
递归下降分析法，也称为自顶向下分析法。按照语法规则一步步递归地分析 token 流，如果遇到非终结符，则继续往下分析，直到终结符为止。
LL(0)分析法
递归下降分析法是简单高效的算法，LL(0)在此基础上多了一个步骤，当第一个 token 不足以确定元素类型时，对下一个字元采取“提前查看”，有可能会解决这种不确定性。

BNF范式是一种用递归的思想来表述计算机语言符号集的定义规范
法则：
::=表示定义；
“ ”双引号里的内容表示字符；
<>尖括号里的内容表示必选内容；
| 竖线两边的是可选内容，相当于or；

markdown语法记录
https://docs.github.com/cn/free-pro-team@latest/github/writing-on-github/creating-and-highlighting-code-blocks
