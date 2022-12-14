<div class="topSpace"></div>

Date Created: 30/11/2022 22:40:15
Tags: #Proposition #Courses/MATH254

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d_X}$, $\tpl{Y,d_Y}$, and $\tpl{Z,d_Z}$ be metric spaces. If $f:X\to Y$ and $g:Y\to Z$ are Lipschitz, then so is $g\circ f:X\to Z$. In particular, if $L_f$ and $L_g$ are Lipschitz constants for $f$ and $g$ respectively, then $g\circ f$ as Lipschitz constant $L_g\cdot L_f$._

```

_Proof_. Take $x_1,x_2\in X$. Then, since $f\l(x_1\r),f\l(x_2\r)\in Y$ and $g$ is Lipschitz with constant $L_g$, we see that
$$\begin{equation}
    d_Z\l(g\l(f\l(x_1\r)\r),g\l(f\l(x_2\r)\r)\r)\leq L_g\cdot d_Y\l(f\l(x_1\r),f\l(x_2\r)\r).
\end{equation}$$
But $f$ is Lipschitz with constant $L_f$, so
$$\begin{equation}
    d_Y\l(f\l(x_1\r),f\l(x_2\r)\r)\leq L_f\cdot d_X\l(x_1,x_2\r),
\end{equation}$$
so, overall, we have that
$$\begin{equation}
    d_Z\l(\l(g\circ f\r)\l(x_1\r),\l(g\circ f\r)\l(x_2\r)\r)\leq\l(L_gL_f\r)\cdot d_X\l(x_1,x_2\r).
\end{equation}$$
Thus $g\circ f$ is Lipschitz with constant $L_g\cdot L_f$.<span style="float:right;">$\blacksquare$</span>
