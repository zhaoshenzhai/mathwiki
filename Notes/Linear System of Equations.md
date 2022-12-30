<div class="topSpace"></div>

Date Created: 22/03/2022 16:53:18
Tags: #Definition #Later/Linear_algebra

Types: [[Homogeneous Linear System]]
Examples: _Not Applicable_
Constructions: [[Augmented Matrix]]
Generalizations: _Not Applicable_

Properties: [[Solutions of linear system of equations]]
Sufficiencies: [[Row-equivalent augmented matrices implies equivalent linear systems]], [[Linear system with more equations than unknowns is inconsistent for some constant terms]]
Equivalences: [[Linear system consistent iff rank is preserved when augmented with constant term]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N^+$. A **linear system of $m$ equations in $n$ variables over $K$** is a collection_
$$\begin{equation}
    \l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m
    \end{alignedat}\r.\cref{\ast}
\end{equation}$$
_of linear equations of $n$ variables over $K$. A **solution of $\ref{\ast}$** is any tuple $\v{s}\in K^n$ such that_ $a_{i1}s_1+\cdots+a_{in}s_n=b_i$ _for all $i\in\l\{1,\dots,m\r\}$, and the **solution set of $\ref{\ast}$** is the set $S$ of all solutions thereof._
* _If $S\neq\em$, the system $\ref{\ast}$ is said to be **consistent**._
* _Otherwise, $\ref{\ast}$ is said to be **inconsistent**._

_The **coefficient matrix of $\ref{\ast}$** and the **constant term of $\ref{\ast}$** are the matrices_
$$\begin{equation}
    A\coloneqq
        \begin{pmatrix}
            a_{11} & \cdots & a_{1n} \\
            \vdotswithin{a_{11}} & \ddots & \vdotswithin{a_{1n}} \\
            a_{m1} & \cdots & a_{mn} \\
        \end{pmatrix}\in\mat{m\times n}{K}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \v{b}\coloneqq
        \begin{pmatrix}
            b_1 \\
            \vdots\\
            b_m
        \end{pmatrix}\in\mat{m\times1}{K},
\end{equation}$$
_respectively, and so the system $\ref{\ast}$ can be written as $A\v{x}=\v{b}$._

```
