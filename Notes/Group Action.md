---
mathLink-blocks:
    orbit: Orbit
    category-of-G-sets: $\catgset{G}$
---

<div class="topSpace"></div>

Date Created: 04/05/2023 22:12:02
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Representation (Group)]]
Examples: [[Regular Action]], [[Conjugation Action]], [[Covering Automorphisms and Monodromy#^monodromy-action]], [[Covering space action]], [[Coset Representation Theorem]]
Constructions: [[Module]]
Generalizations: <i>Not Applicable</i>

Properties: [[Orbit-Stabilizer Theorem]], [[Class Equation]], [[Cauchy-Frobenius Formula]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group and $X$ be a set. A <b>(left) $G$-action on $X$</b> is a homomorphism $\phi:G\to\Aut\l(X\r)$. The set $X$, together with the action $\phi$, is called a <b>$G$-set</b>.
* Fix $x\in X$. The <b>orbit</b> of $x$ is the set $\Orb_G\!\l(x\r)\coloneqq Gx\coloneqq\l\{gx\in X\st g\in G\r\}$ and the <b>stabilizer</b> of $x$ is the subgroup $\Stab_G\!\l(x\r)\coloneqq G_x\coloneqq\l\{g\in G\st gx=x\r\}$.
* The <b>category of $G$-sets</b> is the category $\catgset{G}$ whose objects are $G$-sets and whose morphisms are maps such that $f\l(gx\r)=gf\l(x\r)$ for all $g\in G$ and $x\in X$.

```
^category-of-G-sets

<b>Remark.</b> We write $\phi:G\act X$ instead. An action $\phi:G\act X$ is said to be <i>faithful</i> if $\phi$ is injective, <i>free</i> if $gx=x$ for some $x\in X$ implies $g=e$, and <i>transitive</i> if for all $x,y\in X$, there is some $g\in G$ such that $y=gx$. Note that $\ker\phi=\l\{g\in G\st\fa x\in X:gx=x\r\}=\bigcap_{x\in X}G_x$ is the intersection of all stabilizers.
* Orbits induce a canonical equivalence relation on $X$ by defining $x\sim y$ iff $y=gx$ for some $g\in G$, which makes them the equivalence classes under this relation. Thus the orbits $Gx$ are elements in the quotient set $X/G\coloneqq X/\!\sim$, so we have a partition $X=\coprod_{i\in I}Gx_i$ of $X$ into its ‘connected components’. ^orbit

Every action $G\act X$ then induces a representation $\rho:G\to\GL\l(V\r)$ on the free vector space $V\coloneqq F^k\!\l(X\r)$ by $\rho\l(g\r)e_x\coloneqq e_{gx}$ for all $g\in G$ and $e_x\in V$.<span style="float:right;">$\blacklozenge$</span>
