---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 05/06/2022 21:02:44
Tags: #Proposition

Proved by: [[Elementary operations act as multiplication by its elementary matrix]], [[Elementary matrices slash operations have inverses of the same type]], [[Rank is preserved under multiplication by invertible matrices]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$ for some fixed $m,n\in\N^\ast$. Then_
$$\begin{equation}
    \rank A=\rank\l(\l(e_1\circ\cdots\circ e_k\r)\l(A\r)\r)
\end{equation}$$
_for any $k\in\N$ and elementary matrix operations $e_1,\dots,e_k:\mat{m\times n}{K}\to\mat{m\times n}{K}$._

```

_Proof_. We proceed by induction on $k$; the base case for when $k=0$ is vacuous. Assume now that $\rank A=\rank\l(\l(e_1\circ\cdots\circ e_l\r)\l(A\r)\r)$ for some $l\in\N$, and let $A'\coloneqq\l(e_1\circ\cdots\circ e_l\r)\l(A\r)$. If $e_{l+1}$ is an elementary row operation, then the elementary matrix $E_{l+1}\coloneqq e_{l+1}\l(I_m\r)$ is such that $E_{l+1}A'=e_{l+1}\l(A'\r)$. Since $E_{l+1}$ is invertible, we see that
$$\begin{equation}
    \rank A=\rank A'=\rank E_{l+1}A'=\rank\l(e_{l+1}\l(A'\r)\r)=\rank\l(\l(e_1\circ\cdots\circ e_{l+1}\r)\l(A\r)\r).
\end{equation}$$
Similarly, if $e_{l+1}$ is an elementary column operation, then $A'E_{l+1}=e_{l+1}\l(A'\r)$ and the result follows similarly.<span style="float:right;">$\blacksquare$</span>
