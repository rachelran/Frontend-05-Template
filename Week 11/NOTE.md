# CSS总论  
## 1. at-rules   
- @charset  
- @import  
- @media  
- @page  
- @counter-style  
- @keyframes  
- @fontface  
- @support  
- @namesapce  

## 2. rule  
- Selector  
<1>.selector_group  
<2>.selector  
```
>   
<sp>  
+  
~  
```
<3>.simple_selector 
```
type  
*  
.  
#  
[]  
:  
::  
:not()  
```

- Declaration  
<1>.Key  
variables  
properties  
<2>.Value  
calc  
number  
length  

## 3. CSS简单选择器语法  
```
*  
div svg|a  
.cls  
#id  
[attr=value]  
:hover  
::before  
```

## 4.CSS复合选择器和复杂选择器  
- 复合选择器  
<简单选择器> <简单选择器> <简单选择器>  
*或者div必须写在最前面  
- 复杂选择器  
<复合选择器> <sp> <复合选择器>  
<复合选择器> ">" <复合选择器>  
<复合选择器> "~" <复合选择器>  
<复合选择器> "+" <复合选择器>  
<复合选择器> "||" <复合选择器>  

## 5.伪类  
- 链接/行为  
:any-link  
:link:visited  
:hover   
:active  
:focus  
:target  

- 树结构  
:empty  
:nth-child()  
:nth-last-child()  
:first-child:last-child:only-child  

- 逻辑型  
:not伪类  
:where:has  

## 6.伪元素  
::before  
::after  
::first-line  
```
font系列  
color系列  
background系列  
word-spacing   
letter-spacing  
text-decoration  
text-transform  
line-height  
```
::first-letter  
```
font系列  
color系列  
background系列  
text-decoration  
text-transform  
letter-spacing  
word-spacing  
line-height  
float  
vertical-align  
盒模型系列: margin, padding, border
```
