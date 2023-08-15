<div class="topSpace"></div>

Date Created: 24/05/2023 15:28:53
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Lifting Criterion]], [[Unique Lifting Property]], [[Basic properties of covering spaces]], [[Orbit-Stabilizer Theorem]], [[Quotients are equivariant iff subgroups are conjugate]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,x_0}$ be a locally path-connected pointed space and let $p_i:(\widetilde{X}_i,\widetilde{x}_i)\to\tpl{X,x_0}$ be covering maps for $i=1,2$. Then the following are equivalent.
1. The covering maps $(\widetilde{X}_1,p_1)$ and $(\widetilde{X}_2,p_2)$ are equivalent.
2. The subgroups $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)$ and $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$ are conjugate in $\pi_1\l(X,x_0\r)$.
3. The fibers $p_1^{-1}\!\l(x_0\r)$ and $p_2^{-1}\!\l(x_0\r)$ are equivariant $\pi_1\l(X,x_0\r)$-sets.

```

<b>Remark.</b> Note that the isomorphism $f:\widetilde{X}_1\to\widetilde{X}_2$ takes $\widetilde{x}_1$ to $\widetilde{x}_2$ iff $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)=p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$. In general, this may not be the case and the two subgroups are only conjugate.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Note that since $X$ is locally path-connected, then so are $\widetilde{X}_1$ and $\widetilde{X}_2$.
* ($1\Rightarrow2$). A homeomorphism $f:\widetilde{X}_1\to\widetilde{X}_2$ with $p_1=p_2\circ f$ induces an isomorphism $f_\ast:\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)\to\pi_1\,(\widetilde{X}_2,f\l(\widetilde{x}_1\r))$ which makes the diagram below commute.
![[Images/2023-05-25_143528/image.svg|600]] Then $p_2\l(f\l(\widetilde{x}_1\r)\r)=p_1\l(\widetilde{x}_1\r)=x_0$, so $f\l(\widetilde{x}_1\r)\in p^{-1}\!\l(x_0\r)$ and $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)=p_{2\ast}\pi_1\,(\widetilde{X}_2,f\l(\widetilde{x}_1\r))$, the latter being conjugate to $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$.
* ($2\Leftrightarrow3$). Let $G\coloneqq\pi_1\l(X,x_0\r)$. Since $p_1^{-1}\!\l(x_0\r)$ is a transitive $G$-set and the stabilizer of $\widetilde{x}_1$ is $p_\ast\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)$, we see that $p^{-1}\!\l(x_0\r)$ is $G$-isomorphic to the quotient of $p_\ast\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)$ in $G$. But $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)$ and $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$ are conjugate, so their quotients are $G$-isomorphic. Repeating the same argument for $p_2^{-1}\!\l(x_0\r)$ gives the desired result.
* ($3\Leftarrow1$). If $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)$ and $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$ are conjugate, then there exists some $\widetilde{x}_1'\in p^{-1}\!\l(x_0\r)$ such that $p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)=p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1')$. Then, by the Lifting Criterion, there exists a unique lift $f:(\widetilde{X}_1,\widetilde{x}_1')\to(\widetilde{X}_2,\widetilde{x}_2)$ of $p_1$ along $p_2$. Similarly there exists a unique lift $g:(\widetilde{X}_2,\widetilde{x}_2)\to(\widetilde{X}_1,\widetilde{x}_1')$ of $p_2$ along $p_1$, where in particular $\l(g\circ f\r)\l(\widetilde{x}_1\r)=\widetilde{x}_1$. But $g\circ f$ is a lift of $p_1$ along itself, so by uniqueness of lifts, the map $g\circ f$ is the identity. Similarly, $f\circ g=\id$, as desired.<span style="float:right;">$\blacksquare$</span>
