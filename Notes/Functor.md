---
mathLink-blocks:
    category-of-small-categories: $\catscat$
---

<div class="topSpace"></div>

Date Created: 06/03/2022 15:11:37
References:
Tags: #Type/Definition #Topic/Category_Theory

Types: <i>Not Applicable</i>
Examples: [[Hom Functor]], [[Topological Space#^open-set-functor]], [[Path#^path-components]], [[Fundamental Group]], [[Cone]], [[Group Action]], [[Abelianization]], [[Dual Space]]
Constructions: [[Natural Transformation]], [[Equivalence of Categories]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $C$ and $D$ be categories. A <b>functor</b> $F:C\to D$ is an assignment of some $Fc\in D$ for each $c\in C$ and some $Ff\in D\l(Fc,Fc'\r)$ for each $f\in C\l(c,c'\r)$, in such a way that $F1_c=1_{Fc}$ for all $c\in C$ <span style="color:gray">(unit)</span>, and $F\l(g\circ f\r)=Fg\circ Ff$ for all composable morphisms $f,g\in C$ <span style="color:gray">(compatibility)</span>.
* The <b>category of small categories</b> is the category $\catscat$ whose objects are small categories and whose morphisms are functors.
* The <b>category of locally-small categories</b> is the category $\catlscat$ whose objects are locally-small categories and whose morphisms are functors.

```
^category-of-small-categories

<b>Remark.</b> A functor $F:C\to D$ is said to be <i>full</i> (resp. <i>faithful</i>) if $F:C\l(c,c'\r)\to D\l(Fc,Fc'\r)$ is surjective (resp. injective) for every $c,c'\in C$, <i>essentially surjective</i> if for any $d\in D$, there is some $c\in C$ such that $Fc\iso d$, and an <i>equivalence</i> if there is a functor $G:D\to C$ such that $G\circ F\iso1_C$ and $F\circ G\iso1_D$. It is a fact that $F$ is an equivalence iff it is fully-faithful and essentially surjective. <span style="color:pink">FIX BELOW</span>
* ($\Rightarrow$): Suppose that $F$ is an equivalence and let $G:D\to C$ be such that $G\circ F\iso1_C$ and $F\circ G\iso1_D$, so there are natural isomorphisms $\eta\coloneqq\Aut_C\!\l(GF\slot,\slot\r)$ and $\nu\coloneqq\Aut_D\!\l(\slot,FG\slot\r)$. Every $B\in\Obj\l(D\r)$ is such that $F\l(GD\r)\iso D$, so $F$ is essentially surjective. If $Ff_1=Ff_2$ for $f_1,f_2\in\Hom_C\!\l(A,A'\r)$, then $GFf_1=GFf_2$ and hence $f_1\circ\eta_A=\eta_{A'}\circ GFf_1=\eta_{A'}\circ GFf_2=f'\circ\eta_A$. Thus $f_1=f_2$, showing that $F$ is faithful too. Finally, to show that $F$ is essentially surjective, take $g\in\Hom_D\!\l(FA,FA'\r)$. Consider the map $f\coloneqq\eta_{A'}\circ Gg\circ\eta_A^{-1}:A\to A'$. Then $G\l(Ff\r)=\eta_{A'}^{-1}\circ f\circ\eta_A=Gg$, and since $G$ is also an equivalence which was proven to be faithful, we see that $Ff=g$.
* ($\Leftarrow$): Let $F$ be a fully-faithful essentially surjective functor. Take $B\in\Obj\l(D\r)$, so there is an object $A\in\Obj\l(C\r)$ and an isomorphism $\nu_B\in\Aut_D\!\l(B,FA\r)$. Set $GB\coloneqq A$, so $\nu_B\in\Aut_D\!\l(B,FGB\r)$. Take $g\in\Hom_D\!\l(B,B'\r)$, so $\nu_{B'}\circ g\circ\nu_B^{-1}:F\l(GB\r)\to F\l(GB\r)$, so there is a unique morphism $f:GB\to GB'$ such that $Ff=\nu_{B'}\circ g\circ\nu_B^{-1}$. Set $Gg\coloneqq f$. Note that this makes $\nu\coloneqq\Aut_D\!\l(\slot,FG\slot\r)$ a natural isomorphism, so $G:D\to C$ is a functor with $F\circ G\iso1_D$. It remains to show that $G\circ F\iso1_C$, for which we observe that $\nu_{FA}^{-1}:F\l(GFA\r)\to FA$ induces a unique morphism $\eta_A\in\Hom_C\!\l(GFA,A\r)$ such that $F\eta_A=\nu_{FA}^{-1}$. Similarly for $\nu_{FA}$, which induces the inverse $\eta_A^{-1}$. Take $f\in\Hom_C\!\l(A,A'\r)$, so $F\l(f\circ\eta_A\r)=Ff\circ\nu_{FA}^{-1}$ and $F\l(\eta_{A'}\circ GFf\r)=\nu_{FA'}^{-1}\circ FGFf$. That they coincide follows from the definition of $G$, so the result follows by faithfulness of $F$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Functors $F:C\to D$ as defined above are said to be <i>covariant</i>. A <i>contravariant</i> functor from $C$ to $D$ is a just functor $F:C^\textrm{op}\to D$.<span style="float:right;">$\blacklozenge$</span>
