<div class="topSpace"></div>

Date Created: 24/05/2023 15:28:53
Tags: #Type/Proposition #In_Progress

Proved by: [[Lifting Criterion]], [[Unique Lifting Property]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,x_0}$ be a locally path-connected pointed space, and let $p_i:(\widetilde{X}_i,\widetilde{x}_i)\to\tpl{X,x_0}$ be covering maps for $i=1,2$. Then the following are equivalent._
1. _The covering maps $(\widetilde{X}_1,p_1)$ and $(\widetilde{X}_2,p_2)$ are equivalent._
2. _The subgroups_ $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)$ _and_ $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$ _are conjugate in $\pi_1\l(X,x_0\r)$._
3. _The fibers $p_1^{-1}\!\l(x_0\r)$ and $p_2^{-1}\!\l(x_0\r)$ are equivariant $\pi_1\l(X,x_0\r)$-sets._

```

**Remark.** If the isomorphism $f:\widetilde{X}_1\to\widetilde{X}_2$ takes $\widetilde{x}_1$ to $\widetilde{x}_2$, then $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)=p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$. In general, this may not be the case.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Note that since $X$ is locally path-connected, then so are $\widetilde{X}_1$ and $\widetilde{X}_2$.
* ($\Rightarrow$): Let $f:\widetilde{X}_1\to\widetilde{X}_2$ be a homeomorphism with $p_1=p_2\circ f$, which induces an isomorphism $f_\ast:\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)\to\pi_1\,(\widetilde{X}_2,f\l(\widetilde{x}_1\r))$.
![[Images/2023-05-25_143528/image.svg|600]] Then $p_2\l(f\l(\widetilde{x}_1\r)\r)=p_1\l(\widetilde{x}_1\r)=x_0$, so $f\l(\widetilde{x}_1\r)\in p^{-1}\!\l(x_0\r)$ and $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)=p_{2\ast}\pi_1\,(\widetilde{X}_2,f\l(\widetilde{x}_1\r))$, the latter being conjugate to $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$.
* ($\Leftarrow$): Conversely, if $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)$ and $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$ are conjugate, then there exists some $\widetilde{x}_1'\in p^{-1}\!\l(x_0\r)$ such that $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)=p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1')$. Then, by the Lifting Criterion, there exists a unique lift $f:(\widetilde{X}_1,\widetilde{x}_1')\to(\widetilde{X}_2,\widetilde{x}_2)$ of $p_1$ along $p_2$. Similarly there exists a unique lift $g:(\widetilde{X}_2,\widetilde{x}_2)\to(\widetilde{X}_1,\widetilde{x}_1')$ of $p_2$ along $p_1$, where in particular $\l(g\circ f\r)\l(\widetilde{x}_1\r)=\widetilde{x}_1$. But $g\circ f$ is a lift of $p_1$ along itself, so by uniqueness of lifts, the map $g\circ f$ is the identity. Similarly, $f\circ g=\id$, as desired.<span style="float:right;">$\blacksquare$</span>
