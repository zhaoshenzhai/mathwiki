---
custom_alias: Linear map $T$ has eigenvalue $\lambda$ $\Leftrightarrow$ $T-\lambda\id$ is not invertible
---

<br />
<br />

Date Created: 20/06/2022 15:06:29
Tags: #Proposition #Closed

Proved by: [[Linear map fixes zero vector]], [Linear map $V\to W$ with $\dim V=\dim W<\infty$ is injective $\Leftrightarrow$ surjective](Linear%20map%20between%20vector%20spaces%20of%20same%20dimension%20is%20injective%20iff%20surjective.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a vector space over some field $K$ and consider a linear operator $T:V\to V$. Then a scalar $\lambda\in K$ is an eigenvalue of $T$ iff the linear map $T-\lambda\id_V:V\to V$ is, equivalently:_
* _not injective,_
* _not surjective, or_
* _not invertible._

```

_Proof_. If $\lambda$ is an eigenvalue of $T$, then $T\l(v\r)=\lambda v$ for some nonzero $v\in V$. But this is equivalent to $\l(T-\lambda\id_V\r)\l(v\r)=0$ for some nonzero $v\in V$, so, since $T\l(0\r)=0$, the linear map $T-\lambda\id_V$ is not injective.
* The three equivalences hold since $T$ is a linear operator, so it is injective iff it is surjective.<span style="float:right;">$\blacksquare$</span>
