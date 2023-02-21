<div class="topSpace"></div>

Date Created: 20/01/2023 10:05:52
Tags: #Proposition #Topics/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: [[Subspaces of finite-dim. vector spaces have complements]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be $K$-vector spaces and consider a linear map $T:V\to W$. Writing $V=\ker T\oplus V'$, the restriction_ $\l.T\r|_{V'}:V'\to W$ _is injective._

```

**Remark.** In particular, this shows that the map $\l.T\r|_{V'}:V'\to\im T$ is an isomorphism (since $\im T=\im_T\!\l(V'\r)$).<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Take $u,v\in V'$ such that $T\l(u\r)=T\l(v\r)$. Then $T\l(u-v\r)=0$, so $u-v\in V'\cap\ker T$. But then $u-v\in\l\{0\r\}$, so $u=v$.<span style="float:right;">$\blacksquare$</span>
