<div class="topSpace"></div>

Date Created: 23/06/2022 10:53:56
Tags: #Definition #Later/Linear_Algebra

Types: _Not Applicable_
Examples: [[Bilinear Map]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Fix $n\in\N^+$ and let $V_1,\dots,V_n,W$ be vector spaces over some field $K$. A function $f:V_1\times\cdots\times V_n\to W$ is said to be a **multilinear map** if it is linear in each slot; that is, if for all $i\in\l\{1,\dots,n\r\}$ and all fixed vectors $u_j\in V_j$, the function_
$$\begin{equation}
    f_i:V_i\to W\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ v\mapsto f\l(u_1,\dots,u_{i-1},v,u_{i+1},\dots,u_n\r)
\end{equation}$$
_is linear._

_If $W=K$, then $f$ is said to be a **multilinear form**._

```
