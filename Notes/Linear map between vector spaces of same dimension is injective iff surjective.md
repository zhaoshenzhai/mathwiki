---
mathLink: Linear map $V\to W$ with $\dim V=\dim W<\infty$ is injective $\Leftrightarrow$ surjective
---

<div class="topSpace"></div>

Date Created: 13/05/2022 21:23:44
Tags: #Type/Proposition #Topic/Module_Theory/Later

Proved by: [[Dimension Theorem]], [[Dimension of subspace]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ and $W$ be finite-dimensional $K$-vector spaces and consider a linear map $T:V\to W$. If $\dim V=\dim W$, then $T$ is injective iff it is surjective.

```

<b>Remark.</b> In particular, for a linear map $T:V\to W$ with $\dim V=\dim W$, $T$ is an isomorphism iff it is injective iff it is surjective.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i>
* ($\Rightarrow$): Since $T$ is injective, we see that $\ker T=\l\{0\r\}$ and thus $\dim\ker=0$. By the Dimension Theorem, it follows that $\dim\im T=\dim V$, and since $\im T\subseteq V$ is a subspace, it cannot be a proper subspace. Thus $\im T=V$, so $T$ is surjective.

* ($\Leftarrow$): Since $T$ is surjective, we see that $\im T=V$ and hence $\dim\im T=\dim V$. By the Dimension Theorem, it follows that $\dim\ker T=0$, so $\ker T=\l\{0\r\}$. Thus $T$ is injective.<span style="float:right;">$\blacksquare$</span>
