---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 01/04/2022 23:50:42
Tags: #Type/Proposition #Later/Category_Theory

Proved by: [[Category of sets is a locally-small category]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field. The category of vector spaces $\catvect$ over $K$ is a locally-small category._

```

_Proof_. The axioms of a locally-small category are all inherited from that of $\catset$. Now, the identity map is linear since for all $K$-vector spaces $V$, we have
$$\begin{equation}
    \id_V\!\l(\alpha v_1+v_2\r)=\alpha v_1+v_2=\alpha\id_V\!\l(v_1\r)+\id_V\!\l(v_2\r)
\end{equation}$$
for all $v_1,v_2\in V$ and $\alpha\in K$. Furthermore, for all $K$-vector spaces $V$, $W$, and $Z$, and linear maps $T:V\to W$ and $U:W\to Z$, we have
$$\begin{equation}
    \l(U\circ T\r)\l(\alpha v_1+v_2\r)=U\l(\alpha T\l(v_1\r)+T\l(v_2\r)\r)=\alpha U\l(T\l(v_1\r)\r)+U\l(T\l(v_2\r)\r)=\alpha\l(U\circ T\r)\l(v_1\r)+\l(U\circ T\r)\l(v_2\r)
\end{equation}$$
for all $v_1,v_2\in V$ and $\alpha\in K$.<span style="float:right;">$\blacksquare$</span>
