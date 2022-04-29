<br />
<br />

Date Created: 29/01/2022 11:31:28
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Tuple Space (Linear Algebra)]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Function space constructed from a Cartesian product]]

``` ad-Definition
title: Definition.

_Let $I$ be an index set and consider the indexed family_ $\l\{X_i\r\}_{i\in I}$_._
* _An_ **$I$_-tuple in_ $\l\{X_i\r\}_{i\in I}$**_ is an element_ $f\in\prod_{i\in I}X_i$_; in this case, write_ $\l\langle x_i\r\rangle_{i\in I}\coloneqq f$_ so that $x_i\in X_i$ for all $i\in I$._
* _If there exists a set $X$ such that $X_i=X$ for all $i\in I$, then an **$I$-tuple in $X$** is an element $f\in X^I$._
    * _If $I=\omega$, then the $\omega$-tuple $\l\langle x_0,x_1,x_2,\dots\r\rangle\coloneqq f\in X^\omega$ is said to be an **infinite sequence**. Similarly if $I=\omega\setcomp\l\{0\r\}$._
    * _If $I=n$ for some $n\in\omega$, then the $n$-tuple_ $\l\langle x_0,\dots,x_{n-1}\r\rangle\coloneqq f\in X^n$ _or, more commonly,_ $\l\langle x_1,\dots,x_n\r\rangle\coloneqq\l\langle x_0,\dots,x_{n-1}\r\rangle$_, is called a **(finite) sequence** or a **list**._

```

**Remark.** Formally, there is no difference between an $I$-indexed family $\l\{x_i\r\}_{i\in I}$ and an $I$-tuple $\l\langle x_i\r\rangle_{i\in I}$. However, the latter is usually used when the index set $I$ carries a total order, as is the case when $I=\omega$ or $I=n=\l\{0,\dots,n-1\r\}$.<span style="float:right;">$\blacklozenge$</span>
