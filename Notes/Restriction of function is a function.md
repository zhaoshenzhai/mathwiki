<div class="topSpace"></div>

Date Created: 26/01/2022 18:05:47
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Formula in replacement image constructs a function]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $f:X\to Y$ and fix $S\subseteq X$. The restriction function $\l.f\r|_S=\l\{z\mid\ex x\in S:z=\tpl{x,f\l(x\r)}\r\}$ is a function.

```

<i>Proof.</i> Consider the formula $\phi\l(x,y\r)\,\colon\!\Leftrightarrow x\in S\land\tpl{x,y}\in f$. Observe that
$$\begin{equation}
    \begin{alignedat}{2}
        f\textrm{ is a function }&\Leftrightarrow\fa x\in X,\ex!y:\tpl{x,y}\in f&&\textrm{Definition of function}\\
        &\Rightarrow\fa x\in S,\ex!y:\tpl{x,y}\in f&&S\subseteq X\\
        &\Leftrightarrow\fa x\in X,\ex!y:x\in S\land\tpl{x,y}\in f\ \ \ \ \ \ \ \ &&x\in S\Rightarrow x\in S\\
        &\Leftrightarrow\fa x\in S,\ex!y:\phi\l(x,y\r),&&\textrm{Substitution}
    \end{alignedat}
\end{equation}$$
so there exists a function $\l.f\r|_S$ with $\dom\l.f\r|_S=S$ and $\fa x\in S:\phi\l(x,f\l(x\r)\r)$. This function is constructed as the set

$\begin{alignat}{2}
    \l.f\r|_S&=\l\{z\mid\ex x\in S,\ex y:\l(\phi\l(x,y\r)\land z=\tpl{x,y}\r)\r\}&&\textrm{Replace image is a function}\\
    &=\l\{z\mid\ex x\in S,\ex y,\l(x\in S\land\tpl{x,y}\in f\land z=\tpl{x,y}\r)\r\}\ \ \ \ \ \ \ \ &&\textrm{Substitution}\\
    &=\l\{z\mid\ex x\in S:z=\tpl{x,f\l(x\r)}\r\}.&&\textrm{Simplification and substitution}\qedin
\end{alignat}$
