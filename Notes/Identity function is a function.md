<div class="topSpace"></div>

Date Created: 21/01/2022 10:09:11
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Formula in replacement image constructs a function]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ be a set. The identity function $\id_X\!=\l\{z\mid \ex x\in X:z=\tpl{x,x}\r\}$ is a function.

```

<i>Proof.</i> Consider the formula $\phi\l(x,y\r)\,\colon\!\Leftrightarrow x=y$. Observe that $\fa x\in X,\ex!y:\phi\l(x,y\r)$, namely $x$ itself. Thus there exists a function $\id_X$ with $\dom\id_X\!=X$ and $\fa x\in X:\phi\l(x,x\r)$. This function is constructed as the set

$\begin{alignat}{2}
    \id_X\!&=\l\{z\mid\ex x\in X,\ex y:\l(\phi\l(x,y\r)\land z=\tpl{x,y}\r)\r\}\ \ \ \ \ \ \ \ &&\textrm{Replacement image is a function}\\
    &=\l\{z\mid\ex x\in X,\ex y:\l(x=y\land z=\tpl{x,y}\r)\r\}&&\textrm{Substitution}\\
    &=\l\{z\mid\ex x\in X:z=\tpl{x,x}\r\}.&&\textrm{Set }y=x\qedin
\end{alignat}$
