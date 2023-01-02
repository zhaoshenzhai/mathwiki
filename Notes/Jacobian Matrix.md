<div class="topSpace"></div>

Date Created: 02/01/2023 15:35:10
Tags: #Definition #Topics/Analysis #Courses/MATH358

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Differentiable implies represented by Jacobian]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\v{a}\in U$. For a function $f:U\to\R^n$ such that all partial derivatives $D_if\l(\v{a}\r)$ exist, its **Jacobian matrix at $\v{a}$** is the $m\times n$ matrix_
$$\begin{equation}
    Jf\l(\v{a}\r)\coloneqq\l[\l(D_jf_i\r)\l(\v{a}\r)\r]=
    \begin{bmatrix}
        \l(D_1f_1\r)\l(\v{a}\r) & \cdots & \l(D_nf_1\r)\l(\v{a}\r) \\
        \vdots & \ddots & \vdots \\
        \l(D_1f_m\r)\l(\v{a}\r) & \cdots & \l(D_nf_m\r)\l(\v{a}\r)
    \end{bmatrix}.
\end{equation}$$

```
