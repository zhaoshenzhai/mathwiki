---
mathLink-blocks:
    group-homomorphism: Group Homomorphism
    category-of-groups: $\catgrp$
---

<div class="topSpace"></div>

Date Created: 04/05/2022 13:08:40
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Solvable Group]], [[Abelian Group]], [[Simple Group]], [[p-group]]
Examples: [[Symmetric Group]], [[Fundamental Group]], [[Group of Units]]
Constructions: [[Group Action]], [[Order]], [[Abelianization]], [[Exact Sequence]], [[Automorphism Group]], [[Representation (Group)]], [[Subgroup]], [[Kernel (Group Theory)]], [[Direct Product (Group)]]
Generalizations: <i>Not Applicable</i>

Properties: [[Isomorphism Theorems]], [[Sylow Theorems]], [[Cauchy's Theorem]]
Sufficiencies: [[Free Group]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>group</b> is a monoid $\tpl{G,\ast,e}$ such that every element is invertible. That is, for all $g\in G$, there is some $h\in G$ such that $g\ast h=e=h\ast g$.
* A <b>group homomorphism</b> from $G$ to $H$ is a function $\phi:G\to H$ such that $\phi\l(g_1g_2\r)=\phi\l(g_1\r)\phi\l(g_2\r)$ for all $g_1,g_2\in G$.
* The <b>category of groups</b> is the category $\catgrp$ whose objects are groups and whose morphisms are group homomorphisms.

```
^category-of-groups

<b>Remark.</b> If $S\subseteq G$ generates $G$, then any two homomorphisms $\phi_1,\phi_2:G\to H$ that agree on $S$ must agree everywhere. Indeed, the set $A\coloneqq\l\{g\in G\st\phi_1\l(g\r)=\phi_2\l(g\r)\r\}$ is a subgroup of $G$ that contains $S$, so $G=\gen{S}\subgrpeq A$ and hence $A=G$. Thus $\phi_1=\phi_2$, as desired.<span style="float:right;">$\blacklozenge$</span>
^group-homomorphism

---

<b>Remark.</b> Group homomorphisms are relatively well-behaved. We list some of their properties here, whose proofs are all straightforward.
* They map identities to identities and inverses to inverses: $\phi\l(e_G\r)=e_H$ and $\phi\l(g^{-1}\r)=\phi\l(g\r)^{-1}$ for all $g\in G$.
* Subgroups are preserved under images and preimages. Normality is also preserved under preimages, and images too if $\phi$ is surjective. In particular, this shows that $\ker\phi$ is normal in $G$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> For all $g\in G$, the element $g^{-1}\coloneqq h$ such that $g\ast g^{-1}=e=g^{-1}\ast g$ is unique and is called the <b>inverse element of $g$</b>. They satisfy the following properties.
* For all $g,h\in G$, we have $\l(gh\r)^{-1}=h^{-1}g^{-1}$. This is analogous to the inverse of functional compositions.
* We have ‘cancellation’: if either $gk=hk$ or $kg=kh$, then $g=h$.
* We have ‘division’: for all $g,h\in G$, there exists a unique $x\in G$ such that $gx=h$ given by $x\coloneqq g^{-1}h$.<span style="float:right;">$\blacklozenge$</span>
