<div class="topSpace"></div>

Date Created: 23/06/2022 10:53:56
Tags: #Type/Definition #Topic/Linear_Algebra

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: [[Sesquilinear Form]], [[Hermitian Form]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Fix $n\in\N^+$ and let $V_1,\dots,V_n,W$ be $K$-vector spaces. A function $f:V_1\times\cdots\times V_n\to W$ is said to be a <b>multilinear map</b> if it is linear in each slot; that is, if for all $i\in\l\{1,\dots,n\r\}$ and all fixed vectors $u_j\in V_j$, the function
$$\begin{equation}
    f_i:V_i\to W\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ v\mapsto f\l(u_1,\dots,u_{i-1},v,u_{i+1},\dots,u_n\r)
\end{equation}$$
is linear.
* If $W=K$, then $f$ is said to be a <b>multilinear form</b>.
* If $n=2$, then $f:V_1\times V_2\to K$ is said to <b>bilinear map</b>. Similarly, if $W=K$, then $f$ is a <b>bilinear form</b>.

```
