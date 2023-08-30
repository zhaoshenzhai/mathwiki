---
mathLink-blocks:
    category-of-groups: $\catgrp$
---

<div class="topSpace"></div>

Date Created: 17/10/2022 11:39:24
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Ring Homomorphism]], [[Module Homomorphism]]
Constructions: [[Exact Sequence]], [[Kernel (Group Theory)]], [[Automorphism Group]], [[Endomorphisms in Category of Groups]]
Generalizations: <i>Not Applicable</i>

Properties: [[Isomorphism Theorems]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ and $H$ be groups. A <b>group homomorphism from $G$ to $H$</b> is a function $\phi:G\to H$ such that $\phi\l(g_1g_2\r)=\phi\l(g_1\r)\phi\l(g_2\r)$ for all $g_1,g_2\in G$.
* The <b>category of groups</b> is the category $\catgrp$ whose objects are groups and whose morphisms are group homomorphisms.
* A <b>group isomorphism</b> is an isomorphism in $\catgrp$; equivalently, it is a bijective group homomorphism.
* Two groups $G$ and $H$ are said to be <b>isomorphic</b> if there is a group isomorphism $\phi:G\to H$.

```
^category-of-groups

<b>Remark.</b> If $S\subseteq G$ generates $G$, then any two homomorphisms $\phi_1,\phi_2:G\to H$ that agree on $S$ must agree everywhere. Indeed, the set $A\coloneqq\l\{g\in G\st\phi_1\l(g\r)=\phi_2\l(g\r)\r\}$ is a subgroup of $G$ that contains $S$, so $G=\gen{S}\subgrpeq A$ and hence $A=G$. Thus $\phi_1=\phi_2$, as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Group homomorphisms are relatively well-behaved. We list some of their properties here, whose proofs are all straightforward.
* They map identities to identities and inverses to inverses: $\phi\l(e_G\r)=e_H$ and $\phi\l(g^{-1}\r)=\phi\l(g\r)^{-1}$ for all $g\in G$.
* Subgroups are preserved under images and preimages. Normality is also preserved under preimages, and images too if $\phi$ is surjective. In particular, this shows that $\ker\phi$ is normal in $G$.<span style="float:right;">$\blacklozenge$</span>
