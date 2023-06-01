<div class="topSpace"></div>

Date Created: 02/01/2023 15:35:10
Tags: #Type/Definition #Topic/Analysis #Courses/MATH358

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Differentiable implies represented by Jacobian]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\v{a}\in U$. For a function $f:U\to\R^n$ such that all partial derivatives $D_if\l(\v{a}\r)$ exist, its <b>Jacobian matrix at $\v{a}$</b> is the $m\times n$ matrix
$$\begin{equation}
    Jf\l(\v{a}\r)\coloneqq\l[\l(D_jf_i\r)\l(\v{a}\r)\r]=
    \begin{bmatrix}
        \l(D_1f_1\r)\l(\v{a}\r) & \cdots & \l(D_nf_1\r)\l(\v{a}\r) \\
        \vdots & \ddots & \vdots \\
        \l(D_1f_m\r)\l(\v{a}\r) & \cdots & \l(D_nf_m\r)\l(\v{a}\r)
    \end{bmatrix}.
\end{equation}$$

```
