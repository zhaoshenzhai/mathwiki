---
custom_alias: $\edm_{\catvect[K]}\!\l(V\r)$ is a unital associative algebra
---

<br />
<br />

Date Created: 17/05/2022 23:18:49
Tags: #Proposition #Closed

Proved by: [$\hom\l(V,W\r)\subseteq W^V$ is a linear subspace](Set%20of%20linear%20maps%20form%20a%20linear%20subspace%20of%20the%20function%20space.md), [[Identity function is the identity of function composition]], [[Composition of relations is associative]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a vector space over some field $K$. Then $\edm\l(V\r)$, together with the composition operation $\circ$, is a unital associative algebra over $K$._

```

_Proof_. Observe that $\edm\l(V\r)$ is a vector space over $K$, and since $\circ$ is both unital and associative, it suffices to show that it is a bilinear map.
* (Bilinearity): Take $T,U_1,U_2\in\edm\l(V\r)$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l[T\circ\l(U_1+U_2\r)\r]\l(v\r)&=T\l[\l(U_1+U_2\r)\l(v\r)\r] \\
        &=T\l(U_1\l(v\r)+U_2\l(v\r)\r) \\
        &=T\l[U_1\l(v\r)\r]+T\l[U_2\l(v\r)\r] \\
        &=\l(T\circ U_1\r)\l(v\r)+\l(T\circ U_2\r)\l(v\r) \\
        &=\l[\l(T\circ U_1\r)+\l(T\circ U_2\r)\r]\l(v\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l[\l(U_1+U_2\r)\circ T\r]\l(v\r)&=\l(U_1+U_2\r)\l[T\l(v\r)\r] && \textrm{Definition of $\circ$} \\
        &=U_1\l[T\l(v\r)\r]+U_2\l[T\l(v\r)\r] && \textrm{Definition of $+$} \\
        & && \textrm{Additivity of $T$} \\
        &=\l(U_1\circ T\r)\l(v\r)+\l(U_2\circ T\r)\l(v\r) && \textrm{Definition of $\circ$} \\
        &=\l[\l(U_1\circ T\r)+\l(U_2\circ T\r)\r]\l(v\r) && \textrm{Definition of $+$}
    \end{aligned}
\end{equation}$$
for all $v\in V$, so $\circ$ is both left and right-distributive over $+$. For compatibility between $\cdot$ and $\circ$, take $\alpha\in K$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\alpha\cdot\l(U_1\circ U_2\r)\r]\l(v\r)&=\alpha\l[\l(U_1\circ U_2\r)\l(v\r)\r] \\
        &=\alpha\l[U_1\l(U_2\l(v\r)\r)\r] && \\
        & \\
        &=\l(\alpha\cdot U_1\r)\l(U_2\l(v\r)\r) && \\
        &=\l[\l(\alpha\cdot U_1\r)\circ U_2\r]\l(v\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l[\alpha\cdot\l(U_1\circ U_2\r)\r]\l(v\r)&=\alpha\l[\l(U_1\circ U_2\r)\l(v\r)\r] && \textrm{Definition of $\cdot$} \\
        &=\alpha\l[U_1\l(U_2\l(v\r)\r)\r] && \textrm{Definition of $\circ$} \\
        &=U_1\l[\alpha U_2\l(v\r)\r] && \textrm{Homogeneity of $U_1$} \\
        &=U_1\l[\l(\alpha\cdot U_2\r)\l(v\r)\r] && \textrm{Definition of $\cdot$} \\
        &=\l[U_1\circ\l(\alpha\cdot U_2\r)\r]\l(v\r) && \textrm{Definition of $\circ$} \\
    \end{aligned}
\end{equation}$$
for all $v\in V$.<span style="float:right;">$\blacksquare$</span>
