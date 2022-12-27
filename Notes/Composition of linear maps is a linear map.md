<div class="topSpace"></div>

Date Created: 19/05/2022 20:30:31
Tags: #Proposition #Later/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider vector spaces $V,W,Z$ over $K$. Then, for every linear map $T:V\to W$ and $U:W\to Z$, their composite function $U\circ T:V\to Z$ is also a linear map._

```

_Proof_. Take $v_1,v_2\in V$ and $\alpha\in K$, and observe that
$$\begin{align}
    \l(U\circ T\r)\l(\alpha v_1+v_2\r)&=U\l(T\l(\alpha v_1+v_2\r)\r) && \textrm{Definition of $\circ$} \\
    &=U\l(T\l(\alpha v_1\r)+T\l(v_2\r)\r) && \textrm{Additivity of $T$} \\
    &=U\l(\alpha T\l(v_1\r)+T\l(v_2\r)\r) && \textrm{Homogeneity of $T$} \\
    &=U\l(\alpha T\l(v_1\r)\r)+U\l(T\l(v_2\r)\r) && \textrm{Additivity of $U$} \\
    &=\alpha U\l(T\l(v_1\r)\r)+U\l(T\l(v_2\r)\r) && \textrm{Homogeneity of $U$} \\
    &=\alpha\l(U\circ T\r)\l(v_1\r)+\l(U\circ T\r)\l(v_2\r). && \textrm{Definition of $\circ$}\qedin
\end{align}$$
