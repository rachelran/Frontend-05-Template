# 学习笔记

## AST定义
抽象语法树（abstract syntax tree缩写为AST），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。

## AST的使用场景

代码语法的检查、代码风格的检查、代码的格式化、代码的高亮、代码错误提示、代码自动补全等等

## AST过程
词法分析->语法分析->解析执行
- 词法分析用正则,得到token
- 语法分析首先我们用BNF定义语法,然后根据定义的语法，把词构建成AST抽象语法树
```
运算表达式
<Expression> ::= <AddExpression><EOF>
加法表达式
<AddExpression> ::= <MultipleExpression> | <AddExpression><+><MultiplicativeExpression> | <AddExpression><-><MultiplicativeExpression>
乘法表达式
<MultipleExpression> ::= <Number> | <MultipleExpression><*><Number> | <MultipleExpression></><Number>
```
- 解析执行过程,就是根据语法定义，递归处理AST语法树就可以了


有很多算法可用来构建语法分析树，常见的有:
- 递归下降分析法
递归下降分析法，也称为自顶向下分析法。按照语法规则一步步递归地分析 token 流，如果遇到非终结符，则继续往下分析，直到终结符为止。
- LL(0)分析法
递归下降分析法是简单高效的算法，LL(0)在此基础上多了一个步骤，当第一个 token 不足以确定元素类型时，对下一个字元采取“提前查看”，有可能会解决这种不确定性
