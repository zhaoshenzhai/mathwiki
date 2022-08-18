---
mathLink: Linear map $V\to W$ with $\dim V=\dim W<\infty$ is injective $\Leftrightarrow$ surjective
---

<div class="topSpace"></div>

Date Created: 13/05/2022 21:23:44
Tags: #Proposition

Proved by: [[Dimension Theorem]], [[Linear map is injective iff kernel vanishes]], [[Dimension of subspace less than dimension of vector space (finite-dim.; strict iff proper)]], [[Dimension of vector space is zero iff it is the zero vector space]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$ and consider a linear map $T:V\to W$. If $\dim V=\dim W$, then $T$ is injective iff it is surjective._

```

_Proof_.
* ($\Rightarrow$): Since $T$ is injective, we see that $\ker T=\l\{0\r\}$ and thus $\dim\ker=0$. By the Dimension Theorem, it follows that $\dim\im T=\dim V$, and since $\im T\subseteq V$ is a subspace, it cannot be a proper subspace. Thus $\im T=V$, so $T$ is surjective.

* ($\Leftarrow$): Since $T$ is surjective, we see that $\im T=V$ and hence $\dim\im T=\dim V$. By the Dimension Theorem, it follows that $\dim\ker T=0$, so $\ker T=\l\{0\r\}$. Thus $T$ is injective.<span style="float:right;">$\blacksquare$</span>
