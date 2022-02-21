<br />
<br />

Date Created: 21/02/2022 13:22:50
Tags: #Definition #Open 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition (Informal).

_A **category** $\cat{C}$ consists of the data of_
* _a class $\obj\l(\cat{C}\r)$ whose members are called **$\cat{C}$-objects**,_
* _for all $X,Y\in\obj\l(\cat{C}\r)$, a set $\hom\l(X,Y\r)$ whose elements are called **$\cat{C}$-morphisms from $X$ into $Y$** - if $f\in\hom\l(X,Y\r)$, write $f:X\to Y$._
* _for all $X\in\obj\l(\cat{C}\r)$ a $\cat{C}$-morphism $\id_A:X\to X$ called the the **$\cat{C}$-identity on $X$**, and_
* _for all $\hom\l(X,Y\r)$ and $\hom\l(Y,Z\r)$, a **$\cat{C}$-composition** class function_
$$\begin{equation}
    \begin{aligned}
        \circ:\hom\l(X,Y\r)\times\hom\l(Y,Z\r)&\to\hom\l(X,Z\r)\\
        \l\langle f,g\r\rangle&\mapsto\circ\l(f,g\r)\eqqcolon g\circ f
    \end{aligned}
\end{equation}$$

_satisfying:_
* $\axicat{1}\bf{.}$ _Composition is associative: For all $X,Y,Z,W\in\obj\l(\cat{C}\r)$, $f:X\to Y$, $g:Y\to Z$, and $h:Z\to W$,_
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/21-02-2022_142913/image.svg"></center>
* $\axicat{2}\bf{.}$ _Identity is idempotent: For all $X,Y\in\obj\l(\cat{C}\r)$ and $f:X\to Y$,_
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/09-02-2022_213021/image.svg", width=23%></center>
* $\axicat{3}\bf{.}$ _Morphisms are pairwise disjoint: For all $X,Y,Z,W\in\obj\l(\cat{C}\r)$, if $X\neq Z$ or $Y\neq W$, then $\hom\l(X,Y\r)\cap\hom\l(Z,W\r)=\em$._


```
