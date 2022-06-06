<br />
<br />

Date Created: 22/03/2022 16:53:18
Tags: #Definition #Closed 

Types: [[Homogeneous Linear System]], [[Inhomogeneous Linear System]]
Examples: _Not Applicable_
Constructions: [[Augmented Matrix]]
Generalizations: _Not Applicable_

Properties: [[Solutions of linear system of equations]]
Sufficiencies: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md)
Equivalences: [Linear system $A\v{x}=\v{b}$ consistent $\Leftrightarrow$ $\rank A=\rank\l[A\mid\v{b}\r]$](Linear%20system%20consistent%20iff%20rank%20is%20preserved%20when%20augmented%20with%20constant%20term.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. A **linear system of $m$ equations in $n$ variables over $K$** is a collection_
$$\begin{equation}
    \l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m
    \end{alignedat}\r.\tag{$\ast$}
\end{equation}$$
_of linear equations of $n$ variables over $K$. A **solution of $\ref{\ast}$** is any tuple $\v{s}\in K^n$ such that_ $a_{i1}s_1+\cdots+a_{in}s_n=b_i$ _for all $i\in\l\{1,\dots,m\r\}$, and the **solution set of $\ref{\ast}$** is the set $S$ of all solutions thereof._
* _If $S\neq\em$, the system $\ref{\ast}$ is said to be **consistent**._
* _Otherwise, $\ref{\ast}$ is said to be **inconsistent**._

_The **coefficient matrix of $\ref{\ast}$** and the **constant term of $\ref{\ast}$** are the matrices_
$$\begin{equation}
    A\coloneqq
        \begin{bmatrix}
            a_{11} & \cdots & a_{1n} \\
            \vdotswithin{a_{11}} & \ddots & \vdotswithin{a_{1n}} \\
            a_{m1} & \cdots & a_{mn} \\
        \end{bmatrix}\in\mat{m\times n}{K}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \v{b}\coloneqq
        \begin{bmatrix}
            b_1 \\
            \vdots\\
            b_m
        \end{bmatrix}\in\mat{m\times1}{K},
\end{equation}$$
_respectively, and so the system $\ref{\ast}$ can be written as $A\v{x}=\v{b}$._

```
