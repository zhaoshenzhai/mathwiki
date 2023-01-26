<div class="topSpace"></div>

Date Created: 23/01/2023 17:40:02
Tags: #Definition #Topics/Module_Theory

Types: _Not Applicable_
Examples: [[Abelian Group]], [[Ideal]], [[Quotient Ring]]
Constructions: [[Module Homomorphism]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of modules]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $R$ be a ring. A **left $R$-module** is an Abelian group $\tpl{M,+}$ equipped with a left $R$-action $\cdot:R\times M\to M$ such that:_
* _(Distribution over module addition)$\bf{.}$ $\fa r\in R:\fa m,n\in M:r\cdot\l(m+n\r)=\l(r\cdot m\r)+\l(r\cdot n\r)$._
* _(Distribution over field addition)$\bf{.}$ $\fa r_1,r_2\in R:\fa m\in M:\l(r_1+r_2\r)\cdot m=\l(r_1\cdot m\r)+\l(r_2\cdot m\r)$._

_Similarly for a **right $R$-module**._

```

**Remark.** Given a left $R$-module, one cannot generally define a right $R$-module structure on $M$ by $m\ast r\coloneqq r\cdot m$. Indeed, compatibility between the field multiplication and the $R$-action fails:
$$\begin{equation}
    \l(m\ast r_1\r)\ast r_2=r_2\cdot\l(m\ast r_1\r)=r_2\cdot\l(r_1\cdot m\r)=\l(r_2r_1\r)\cdot m=m\ast\l(r_2r_1\r)\neq m\ast\l(r_1r_2\r).
\end{equation}$$
However, we see that if $R$ is commutative, then this construction works (and vice versa from a right to a left $R$-module). In this case, we shall simply call either an **$R$-module**.<span style="float:right;">$\blacklozenge$</span>
