<div class="topSpace"></div>

Date Created: 18/05/2022 16:36:15
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$, $W$, and $Z$ be $K$-vector spaces. Then the following algebraic identities hold:_
* _(Left-distributivity of $\circ$ over $+$): $U\circ\l(T_1+T_2\r)=\l(U\circ T_1\r)+\l(U\circ T_2\r)$ for all $T_1,T_2\in\Hom\l(V,W\r)$ and $U\in\Hom\l(W,Z\r)$._
* _(Right-distributivity of $\circ$ over $+$): $\l(U_1+U_2\r)\circ T=\l(U_1\circ T\r)+\l(U_2\circ T\r)$ for all $T\in\Hom\l(V,W\r)$ and $U_1,U_2\in\Hom\l(W,Z\r)$._
* _(Compatibility between $\circ$ and $\cdot$): $\alpha\cdot\l(U\circ T\r)=\l(\alpha\cdot U\r)\circ T=U\circ\l(\alpha\cdot T\r)$ for all $T\in\Hom\l(V,W\r)$, $U\in\Hom\l(W,Z\r)$, and $\alpha\in K$._

```

_Proof_.
* (Left-distributivity of $\circ$ over $+$): Take $T_1,T_2\in\Hom\l(V,W\r)$ and $U\in\Hom\l(W,Z\r)$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[U\circ\l(T_1+T_2\r)\r]\l(v\r)&=U\l[\l(T_1+T_2\r)\l(v\r)\r] && \textrm{Definition of $\circ$} \\
        &=U\l(T_1\l(v\r)+T_2\l(v\r)\r) && \textrm{Definition of $+$}\\
        &=U\l[T_1\l(v\r)\r]+U\l[T_2\l(v\r)\r] && \textrm{Additivity of $U$} \\
        &=\l(U\circ T_1\r)\l(v\r)+\l(U\circ T_2\r)\l(v\r) && \textrm{Definition of $\circ$} \\
        &=\l[\l(U\circ T_1\r)+\l(U\circ T_2\r)\r]\l(v\r) && \textrm{Definition of $+$}
    \end{aligned}
\end{equation}$$
for all $v\in V$, so the result holds.
* (Right-distributivity of $\circ$ over $+$): Take $T\in\Hom\l(V,W\r)$ and $U_1,U_2\in\Hom\l(W,Z\r)$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\l(U_1+U_2\r)\circ T\r]\l(v\r)&=\l(U_1+U_2\r)\l[T\l(v\r)\r] && \textrm{Definition of $\circ$} \\
        &=U_1\l[T\l(v\r)\r]+U_2\l[T\l(v\r)\r] && \textrm{Definition of $+$} \\
        &=\l(U_1\circ T\r)\l(v\r)+\l(U_2\circ T\r)\l(v\r) && \textrm{Definition of $\circ$} \\
        &=\l[\l(U_1\circ T\r)+\l(U_2\circ T\r)\r]\l(v\r) && \textrm{Definition of $+$}
    \end{aligned}
\end{equation}$$
for all $v\in V$, so the result holds.
* (Compatibility between $\circ$ and $\cdot$): Take $T\in\Hom\l(V,W\r)$, $U\in\Hom\l(W,Z\r)$, and $\alpha\in K$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\alpha\cdot\l(U\circ T\r)\r]\l(v\r)&=\alpha\l[\l(U\circ T\r)\l(v\r)\r] \\
        &=\alpha\l[U\l(T\l(v\r)\r)\r] && \\
        & \\
        &=\l(\alpha\cdot U\r)\l(T\l(v\r)\r) && \\
        &=\l[\l(\alpha\cdot U\r)\circ T\r]\l(v\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l[\alpha\cdot\l(U\circ T\r)\r]\l(v\r)&=\alpha\l[\l(U\circ T\r)\l(v\r)\r] && \textrm{Definition of $\cdot$} \\
        &=\alpha\l[U\l(T\l(v\r)\r)\r] && \textrm{Definition of $\circ$} \\
        &=U\l[\alpha T\l(v\r)\r] && \textrm{Homogeneity of $U$} \\
        &=U\l[\l(\alpha\cdot T\r)\l(v\r)\r] && \textrm{Definition of $\cdot$} \\
        &=\l[U\circ\l(\alpha\cdot T\r)\r]\l(v\r) && \textrm{Definition of $\circ$} \\
    \end{aligned}
\end{equation}$$
for all $v\in V$, so the results hold.<span style="float:right;">$\blacksquare$</span>
