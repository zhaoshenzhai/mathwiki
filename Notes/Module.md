<div class="topSpace"></div>

Date Created: 23/01/2023 17:40:02
Tags: #Type/Definition #Topic/Module_Theory

Types: <i>Not Applicable</i>
Examples: [[Abelian Group]], [[Ideal]], [[Quotient Ring]]
Constructions: [[Module Homomorphism]], [[Submodule]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of modules]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a ring. A **left $R$-module** is an abelian group $\tpl{M,+}$ equipped with a left $R$-action $\cdot:R\times M\to M$ such that:
* (Distribution over module addition)$\bf{.}$ $\fa r\in R:\fa m,n\in M:r\cdot\l(m+n\r)=\l(r\cdot m\r)+\l(r\cdot n\r)$.
* (Distribution over field addition)$\bf{.}$ $\fa r_1,r_2\in R:\fa m\in M:\l(r_1+r_2\r)\cdot m=\l(r_1\cdot m\r)+\l(r_2\cdot m\r)$.

Similarly for a **right $R$-module**.

```

<b>Remark.</b> Given a left $R$-module, one cannot generally define a right $R$-module structure on $M$ by $m\ast r\coloneqq r\cdot m$. Indeed, compatibility between the field multiplication and the $R$-action fails:
$$\begin{equation}
    \l(m\ast r_1\r)\ast r_2=r_2\cdot\l(m\ast r_1\r)=r_2\cdot\l(r_1\cdot m\r)=\l(r_2r_1\r)\cdot m=m\ast\l(r_2r_1\r)\neq m\ast\l(r_1r_2\r).
\end{equation}$$
However, we see that if $R$ is commutative, then this construction works (and vice versa from a right to a left $R$-module). In this case, we shall simply call either an **$R$-module**.<span style="float:right;">$\blacklozenge$</span>
