---
mathLink-blocks:
    orbit: Orbit
    category-of-G-sets: $\catgset{G}$
    category-of-representations: $\catrep[k]{G}$
---

<div class="topSpace"></div>

Date Created: 04/05/2023 22:12:02
References: #Ref/Mac10 #Ref/Alu09
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Regular Action]], [[Conjugation Action]], [[Covering Automorphisms and Monodromy#^monodromy-action]], [[Covering Space Action]], [[Coset Representation Theorem]]
Constructions: [[Module]]
Generalizations: <i>Not Applicable</i>

Properties: [[Orbit-Stabilizer Theorem]], [[Class Equation]], [[Cauchy-Frobenius Formula]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Complex representations equivalent to finitely-generated modules over group algebra]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group and fix a category $C$. A <b>$G$-action</b> is a functor $BG\to C$, which specifies an object $X\in C$ and a homomorphism $\phi:G\to\Aut\l(X\r)$.
* When $C\coloneqq\catset$/$\catvect$/$\cattop$, the pair $\tpl{X,\phi}$ is called a <b>$G$-set</b>/<b>$G$-representation</b>/<b>$G$-space</b>.
* The <b>category of $G$-actions</b> is the category $G\act C$ whose objects are $G$-actions and whose morphisms are natural transformations.

```
^category-of-G-sets

<b>Remark.</b> If $C$ is a concrete category, we write $gx\coloneqq\phi\l(g\r)\l(x\r)$ for each $g\in G$ and $x\in X$. In this notation, morphisms are just maps $f$ such that $f\l(gx\r)=gf\l(x\r)$ for all $g\in G$ and $x\in X$. We write $\catgset{G}\coloneqq\l(G\act\catset\r)$ for the category of $G$-sets and $\catrep[k]{G}\coloneqq\l(G\act\catvect\r)$ for the category of $G$-representations. ^category-of-representations
* For a fixed $x\in X$, the <i>orbit</i> of $x$ is the subset $\Orb_G\!\l(x\r)\coloneqq Gx\coloneqq\l\{gx\in X\st g\in G\r\}$ and the <i>stabilizer</i> of $x$ is the subgroup $\Stab_G\!\l(x\r)\coloneqq G_x\coloneqq\l\{g\in G\st gx=x\r\}$. An action $\tpl{X,\phi}$ is said to be <i>faithful</i> if $\phi$ is injective, <i>free</i> if $gx=x$ for some $x\in X$ implies $g=e$, and <i>transitive</i> if for all $x,y\in X$, there is some $g\in G$ such that $y=gx$. Note that $\ker\phi=\l\{g\in G\st\fa x\in X:gx=x\r\}=\bigcap_{x\in X}G_x$ is the intersection of all stabilizers.

Orbits induce a canonical equivalence relation on $X$ by defining $x\sim y$ iff $y=gx$ for some $g\in G$, which makes them the equivalence classes under this relation. Thus the orbits $Gx$ are elements in the quotient set $X/G\coloneqq X/\!\sim$, so we have a partition $X=\coprod_{i\in I}Gx_i$ of $X$ into its ‘connected components’. ^orbit
* Every action $G\act X$ then induces a $G$-representation $\rho:G\to\GL\l(V\r)$ on the free vector space $V\coloneqq F^k\!\l(X\r)$ by $\rho\l(g\r)e_x\coloneqq e_{gx}$ for all $g\in G$ and $e_x\in V$.<span style="float:right;">$\blacklozenge$</span>
