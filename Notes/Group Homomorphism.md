<div class="topSpace"></div>

Date Created: 17/10/2022 11:39:24
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Ring Homomorphism]], [[Module Homomorphism]]
Constructions: [[Exact Sequence]], [[Kernel (Group Theory)]], [[Automorphism Group]], [[Endomorphism Ring]]
Generalizations: <i>Not Applicable</i>

Properties: [[Isomorphism Theorems]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Isomorphism of objects is an equivalence relation]]

``` ad-Definition
title: Definition.

Let $G$ and $H$ be groups. A <b>group homomorphism from $G$ to $H$</b> is a function $\phi:G\to H$ such that $\phi\l(g_1g_2\r)=\phi\l(g_1\r)\phi\l(g_2\r)$ for all $g_1,g_2\in G$.
* The <b>category of groups</b> is the category $\catgrp$ whose objects are groups and whose morphisms are group homomorphisms.
* A <b>group isomorphism</b> is an isomorphism in $\catgrp$; equivalently, it is a bijective group homomorphism.
* Two groups $G$ and $H$ are said to be <b>isomorphic</b> if there is a group isomorphism $\phi:G\to H$.

```

<b>Remark.</b> If $S\subseteq G$ generates $G$, then any two homomorphisms $\phi_1,\phi_2:G\to H$ that agree on $S$ must agree everywhere. Indeed, the set $A\coloneqq\l\{g\in G\st\phi_1\l(g\r)=\phi_2\l(g\r)\r\}$ is a subgroup of $G$ that contains $S$, so $G=\gen{S}\subgrpeq A$ and hence $A=G$. Thus $\phi_1=\phi_2$, as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Group homomorphisms are relatively well-behaved. We list some of their properties here, whose proofs are all straightforward.
* They map identities to identities and inverses to inverses: $\phi\l(e_G\r)=e_H$ and $\phi\l(g^{-1}\r)=\phi\l(g\r)^{-1}$ for all $g\in G$.
* They preserve images and preimages: if $G_0\subgrpeq G$ and $H_0\subgrpeq H$, then $\phi\l(G_0\r)\subgrpeq H$ and $\phi^{-1}\!\l(H_0\r)\subgrpeq G$.
* Normality is preserved under preimages, and also images if $\phi$ is surjective: if $H_0\nsubgrpeq H$, then $\phi^{-1}\!\l(H_1\r)\nsubgrpeq G_0$. If $\phi$ is surjective and $G_0\nsubgrpeq G$, then $\phi\l(G_0\r)\nsubgrpeq H$. In particular, this shows that $\ker\phi$ is normal, since it is the preimage of $\l\{e\r\}$.
* Categorically, $\phi$ is injective iff it is a monomorphism, which occurs iff $\ker\phi=\l\{e\r\}$.<span style="float:right;">$\blacklozenge$</span>
