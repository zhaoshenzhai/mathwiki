---
mathLink-blocks:
    category-of-rings: $\catring$
    ring-homomorphism: Ring Homomorphism
---

<div class="topSpace"></div>

Date Created: 03/11/2022 19:00:21
References:
Tags: #Type/Definition #Topic/Rings_and_Modules/Ring_Theory

Types: [[Commutative Ring]], [[Division Ring]]
Examples: <i>Not Applicable</i>
Constructions: [[Ideal]], [[Group of Units]], [[Multiplicative Subset]], [[Characteristic]], [[Direct Product (ring)]], [[Module]], [[Kernel (Ring Theory)]]
Generalizations: <i>Not Applicable</i>

Properties: [[Isomorphism Theorems]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>ring</b> is a triple $\tpl{R,+,\cdot}$ where $\tpl{R,+}$ is an abelian group, $\tpl{R,\cdot}$ is a monoid, and where $\cdot$ distributes over $+$ on both sides.
* A <b>ring homomorphism</b> from $R$ to $S$ is a group homomorphism $\phi:R\to S$ that fixes $1$ and respects multiplication.
* The <b>category of rings</b> is the category $\catring$ whose objects are rings and whose morphisms are ring homomorphisms.

```
^category-of-rings

<b>Remark.</b> Any ring homomorphism $\phi:R\to S$ defines an $R$-module structure on $S$ via the action $r\cdot s\coloneqq\phi\l(r\r)s$. The special case where $R=S$ and $\phi=\id$ gives any ring $R$ a module over itself. More is true if we assume that $R$ is commutative and that $\phi\l(R\r)\subseteq Z\l(S\r)$, in which case the multiplication in $S$ is $R$-bilinear since
^ring-homomorphism
$$\begin{equation}
    \l(r_1\cdot s_1\r)\l(r_2\cdot s_2\r)=\phi\l(r_1\r)s_1\phi\l(r_2\r)s_2=\phi\l(r_1r_2\r)s_1s_2=\l(r_1r_2\r)\cdot\l(s_1s_2\r)
\end{equation}$$
for all $r_1,r_2\in R$ and $s_1,s_2\in S$. This gives $S$ an <i>$R$-algebra</i> structure.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Ring homomorphisms are relatively well-behaved. We list some of their properties here, whose proofs are all straightforward.
* Subrings are preserved under images and preimages. Ideals are also preserved under preimages, and images too if $\phi$ is surjective. In particular, this shows that $\ker\phi$ is an ideal in $R$. Moreover, primality of ideals is preserved under preimages, and so is maximality if $\phi$ is surjective.
* Commutativity is preserved under images. If $\phi$ is surjective, then images of fields are fields too.<span style="float:right;">$\blacklozenge$</span>
