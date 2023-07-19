---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/01/2023 17:40:02
Tags: #Type/Definition #Topic/Module_Theory

Types: [[Inner Product Space]]
Examples: [[Abelian Group]], [[Ring]], [[Ideal]]
Constructions: [[Module Homomorphism]], [[Submodule]], [[Direct Product (module)]], [[Direct Sum (Module)]], [[Dual Space]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basis Extension Theorem]], [[Invariant Basis Number]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Krull's Theorem]], [[Ideal is maximal iff quotient is a field]]

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

<b>Remark.</b> If $k\coloneqq R$ is a field, we call $M$ a <b>$k$-vector space</b>. In some cases, an $R$-module $M$ over a commutative ring $R$ has a natural vector space structure. Indeed, let $\mf{m}\subgrp R$ be a maximal ideal, which exists by Krull’s Theorem, and assume that $\mf{m}M=0$. Then $M$ has a natural $R/\mf{m}$-vector space structure by $\l(r+\mf{m}\r)\cdot m\coloneqq rm$. Indeed, $R/\mf{m}$ is a field and the operation is well-defined since for all $r_1+\mf{m}=r_2+\mf{m}$, we have $r_1-r_2\in\mf{m}$ and hence $r_1m-r_2m=\l(r_1-r_2\r)m\in\mf{m}m=0$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Given a left $R$-module, one cannot generally define a right $R$-module structure on $M$ by $m\ast r\coloneqq r\cdot m$. Indeed, compatibility between the field multiplication and the $R$-action fails:
$$\begin{equation}
    \l(m\ast r_1\r)\ast r_2=r_2\cdot\l(m\ast r_1\r)=r_2\cdot\l(r_1\cdot m\r)=\l(r_2r_1\r)\cdot m=m\ast\l(r_2r_1\r)\neq m\ast\l(r_1r_2\r).
\end{equation}$$
However, if $R$ is commutative, then this construction works (and vice versa from a right to a left $R$-module). In this case, we shall simply call either an <b>$R$-module</b>.<span style="float:right;">$\blacklozenge$</span>
