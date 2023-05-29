<div class="topSpace"></div>

Date Created: 20/01/2023 10:05:52
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: [[Subspaces of finite-dim. vector spaces have complements]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ and $W$ be $K$-vector spaces and consider a linear map $T:V\to W$. Writing $V=\ker T\oplus V'$, the restriction $\l.T\r|_{V'}:V'\to W$ is injective.

```

<b>Remark.</b> In particular, this shows that the map $\l.T\r|_{V'}:V'\to\im T$ is an isomorphism (since $\im T=\im_T\!\l(V'\r)$).<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take $u,v\in V'$ such that $T\l(u\r)=T\l(v\r)$. Then $T\l(u-v\r)=0$, so $u-v\in V'\cap\ker T$. But then $u-v\in\l\{0\r\}$, so $u=v$.<span style="float:right;">$\blacksquare$</span>
