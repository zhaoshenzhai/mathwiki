<div class="topSpace"></div>

Date Created: 23/01/2023 17:40:02
Tags: #Type/Definition #Topic/Module_Theory

Types: <i>Not Applicable</i>
Examples: [[Abelian Group]], [[Ideal]], [[Quotient Ring]]
Constructions: [[Module Homomorphism]], [[Submodule]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Ring]], [[Ring Homomorphism]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a ring. A <b>left $R$-module</b> is an abelian group $M$ equipped with a left $R$-action $R\to\End_\catabgrp\!\l(M\r)$ on $M$.

```

<b>Remark.</b> A <b>left $R$-action on $M$</b> is a ring homomorphism $\phi:R\to\End\l(M\r)$. This induces a function $\cdot:R\times M\to M$ by $r\cdot m\coloneqq\phi\l(r\r)\l(m\r)$, which satisfies
$$\begin{equation}
    r\cdot\l(m+n\r)=\l(r\cdot m\r)+\l(r\cdot n\r),\ \ \ \ \ \ \ \ \l(r+s\r)\cdot m=\l(r\cdot m\r)+\l(s\cdot m\r),\ \ \ \ \ \ \ \ \l(rs\r)\cdot m=r\cdot\l(sm\r),\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 1\cdot m=m
\end{equation}$$
for all $m,n\in M$ and $r,s\in R$. This recovers the standard ‘left $R$-module axioms’.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Given a left $R$-module, one cannot generally define a right $R$-module structure on $M$ by $m\ast r\coloneqq r\cdot m$. Indeed, compatibility between the field multiplication and the $R$-action fails:
$$\begin{equation}
    \l(m\ast r_1\r)\ast r_2=r_2\cdot\l(m\ast r_1\r)=r_2\cdot\l(r_1\cdot m\r)=\l(r_2r_1\r)\cdot m=m\ast\l(r_2r_1\r)\neq m\ast\l(r_1r_2\r).
\end{equation}$$
However, if $R$ is commutative, then this construction works (and vice versa from a right to a left $R$-module). In this case, we shall simply call either an <b>$R$-module</b>.<span style="float:right;">$\blacklozenge$</span>
