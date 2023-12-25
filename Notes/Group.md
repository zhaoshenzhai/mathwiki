---
mathLink-blocks:
    category-of-groups: $\catgrp$
    group-homomorphism: Group Homomorphism
    subgroup: Subgroup
    direct-product: Direct Product (Group)
    free-product: Free Product
    quotient-group: Quotient Group
---

<div class="topSpace"></div>

Date Created: 04/05/2022 13:08:40
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Solvable Group]], [[Abelian Group]], [[Simple Group]], [[p-group]]
Examples: [[Symmetric Group]], [[Fundamental Groupoid#^fundamental-group]], [[Group of Units]]
Constructions: [[Group Action]], [[Representation (Group)]], [[Order]], [[Abelianization]], [[Exact Sequence]], [[Automorphism Group]], [[Semidirect Product]], [[Subgroup]], [[Kernel (Group Theory)]], [[Semidirect Product]]
Generalizations: <i>Not Applicable</i>

Properties: [[Isomorphism Theorems]], [[Sylow Theorems]], [[Cauchy's Theorem]], [[Regular Action#^cayley]], [[Abelianization of product is product of abelianization]]
Sufficiencies: [[Free Group]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>
^group-homomorphism

``` ad-Definition
title: Definition.

A <b>group</b> is a monoid $\tpl{G,\ast,e}$ such that every element is invertible. That is, for all $g\in G$, there is some $h\in G$ such that $g\ast h=e=h\ast g$.
* A <b>group homomorphism</b> from $G$ to $H$ is a function $\phi:G\to H$ such that $\phi\l(g_1g_2\r)=\phi\l(g_1\r)\phi\l(g_2\r)$ for all $g_1,g_2\in G$.
* The <b>category of groups</b> is the category $\catgrp$ whose objects are groups and whose morphisms are group homomorphisms.

```
^category-of-groups

<b>Remark.</b> The category $\catgrp$ admit subobjects, (co)products, and quotients.
* (<i>Subgroup</i>). A subgroup of a group $G$ is a subset $H$ where the inclusion $H\into G$ is a group homomorphism, in which case we write $H\substructeq G$.
* (<i>Product</i>). The <i>direct</i> product of a family $\l\{G_i\r\}$ of groups is the Cartesian product $\prod_iG_i$ equipped with the component-wise operation. ^direct-product
* (<i>Coproduct</i>). The <i>free</i> product of a family $\l\{G_i\r\}$ of groups is the set $\coprod_iG_i$ of all reduced words in $\bigcup_iG_i$ equipped with the concatenation operation.
* (<i>Quotient</i>). The quotient group of a group $G$ with a congruence relation $\sim$ is the quotient set $G/\!\sim$ equipped with the operation $\l[g_1\r]\ast\l[g_2\r]\coloneqq\l[g_1g_2\r]$.<span style="float:right;">$\blacklozenge$</span> ^quotient-group

---

<b>Remark.</b> Every congruence relation $\sim$ on $G$ arises from a unique <i>normal</i> subgroup $N\nsubgrpeq G$, i.e. a subgroup $N\substructeq G$ such that $gN=Ng$ for all $g\in G$.
* Indeed, given a congruence relation $\sim$ on $G$, the subgroup $N\coloneqq\l\{n\in G\st n\sim e\r\}$ is normal since for all $gn\in gN$, we have $gn\sim g$ and hence $gng^{-1}\sim e$. Thus $gng^{-1}\in N$, so $gn\in Ng$ too. Thus $gN\subseteq Ng$, and the converse is similar. Conversely, given a normal subgroup $N\nsubgrpeq G$, define $g_1\sim g_2$ iff $g_2^{-1}g_1\in N$. This is an equivalence relation, and is a congruence since if $g_1\sim g_2$ and $h_1\sim h_2$, then $\l(h_2g_2\r)^{-1}\l(h_1g_1\r)=g_2^{-1}h_2^{-1}h_1g_1\in g_2^{-1}Ng_1=g_2^{-1}g_1N=N$ and hence $h_1g_1\sim h_2g_2$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Alternatively, one can define groups as a groupoid with a single object, in which case group homomorphisms are just functors between said groupoids.<span style="float:right;">$\blacklozenge$</span>
