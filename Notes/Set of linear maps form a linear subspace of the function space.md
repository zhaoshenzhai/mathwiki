---
mathLink: $\hom\l(V,W\r)\subseteq W^V$ is a linear subspace
---

<br />
<br />

Date Created: 17/05/2022 16:47:33
Tags: #Proposition #Closed

Proved by: [[Basic properties of vector spaces]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$. Then $\hom\l(V,W\r)\subseteq W^V$ is a linear subspace._

```

_Proof_. It suffices to show that $0\in\hom\l(V,W\r)$ and, for every $T,U\in\hom\l(V,W\r)$ and $\alpha\in K$, that $\alpha T+U\in\hom\l(V,W\r)$.
* ($0\in\hom\l(V,W\r)$): This amounts to showing that $0:V\to W$ is a linear map, so take $v_1,v_2\in V$ and $k\in K$, and observe that
$$\begin{equation}
    \begin{aligned}
        0\l(kv_1+v_2\r)&=0_W && \textrm{Definition of $0$} \\
        &=0_W+0_W && \textrm{$0_W$ is the neutral element of $+$} \\
        &=k0_W+0_W && \textrm{$0_W$ is the right-absorbing element of $\cdot$} \\
        &=k0\l(v_1\r)+0\l(v_2\r). && \textrm{Definition of $0$}
    \end{aligned}
\end{equation}$$

* ($\alpha T+U\in\hom\l(V,W\r)$): This amounts to showing that $\alpha T+U:V\to W$ is a linear map, so take $v_1,v_2\in V$ and $k\in K$, and observe that
$$\begin{align}
    \l(\alpha T+U\r)\l(kv_1+v_2\r)&=\l(\alpha T\r)\l(kv_1+v_2\r)+U\l(kv_1+v_2\r) && \textrm{Definition of $+$} \\
    &=\alpha T\l(kv_1+v_2\r)+U\l(kv_1+v_2\r) && \textrm{Definition of $\cdot$} \\
    &=\alpha\l[kT\l(v_1\r)+T\l(v_2\r)\r]+kU\l(v_1\r)+U\l(v_2\r) && T,U\in\hom\l(V,W\r) \\
    &=k\l[\alpha T\l(v_1\r)+U\l(v_1\r)\r]+\alpha T\l(v_2\r)+U\l(v_2\r) && \textrm{Arithmetic} \\
    &=k\l[\l(\alpha T\r)\l(v_1\r)+U\l(v_2\r)\r]+\l(\alpha T\r)\l(v_2\r)+U\l(v_2\r) && \textrm{Definition of $\cdot$} \\
    &=k\l(\alpha T+U\r)\l(v_1\r)+\l(\alpha T+U\r)\l(v_2\r). && \textrm{Definition of $+$}\qedin
\end{align}$$
