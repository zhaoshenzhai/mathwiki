---
mathLink-blocks:
    orbit: Orbit
    category-of-G-sets: $\catgset{G}$
---

<div class="topSpace"></div>

Date Created: 04/05/2023 22:12:02
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Representation (Group)]]
Examples: [[Regular Action]], [[Conjugation Action]], [[Coset Representation Theorem]]
Constructions: [[Module]]
Generalizations: <i>Not Applicable</i>

Properties: [[Orbit-Stabilizer Theorem]], [[Class Equation]], [[Cauchy-Frobenius Formula]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $G$ be a group and $X$ a be a set. A <b>(left) $G$-action on $X$</b> is a homomorphism $\phi:G\to\Aut\l(X\r)$. The set $X$, together with the action $\phi$, is called a <b>$G$-set</b>.
* Fix $x\in X$. The <b>orbit</b> of $x$ is the set $\Orb_G\!\l(x\r)\coloneqq Gx\coloneqq\l\{gx\in X\st g\in G\r\}$ and the <b>stabilizer</b> of $x$ is the subgroup $\Stab_G\!\l(x\r)\coloneqq G_x\coloneqq\l\{g\in G\st gx=x\r\}$.

The <b>category of $G$-sets</b> is the category $\catgset{G}$ whose objects are $G$-sets and whose morphisms $f:\tpl{\phi,X}\to\tpl{\psi,Y}$ are are functions $f:X\to Y$ such that $f\circ\phi\l(g\r)=\psi\l(g\r)\circ f$ for all $g\in G$.
![[Images/2023-09-02_131740/image.svg|150]]

```
^category-of-G-sets

<b>Remark.</b> An action $\phi:G\to\Aut\l(X\r)$ is said to be <i>faithful</i> if $\phi$ is injective, and is <i>transitive</i> if for all $x,y\in X$, there is some $g\in G$ such that $y=gx$. In other words, $\phi$ is transitive iff there is only one orbit. Note that $\ker\phi=\l\{g\in G\st\fa x\in X:gx=x\r\}=\bigcap_{x\in X}G_x$ is the intersection of all stabilizers.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Orbits induce a canonical equivalence relation on $X$ by defining $x\sim y$ iff $y=gx$ for some $g\in G$, which makes them the equivalence classes under this relation. Thus the orbits $Gx$ are elements in the quotient set $X/G\coloneqq X/\!\sim$, so we have a partition $X=\coprod_{i\in I}Gx_i$ of $X$ into its ‘connected components’. Within any one $Gx_i$, the restricted action is transitive.<span style="float:right;">$\blacklozenge$</span>
^orbit

---

<b>Remark.</b> Let $V\coloneqq F^k\!\l(X\r)$ be the free $k$-vector space of $X$. Every action $\phi:G\to\Aut\l(X\r)$ then induces a representation $\rho:G\to\GL\l(V\r)$ by $\rho\l(g\r)e_x\coloneqq e_{gx}$ for all $g\in G$ and $e_x\in V$ and extended linearly.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Instead of such a homomorphism, a $G$-action on $X$ can equivalently be given as a map $\cdot:G\times X\to X$ given by $g\cdot x\coloneqq\phi_g\!\l(x\r)$. In this way, that $\phi$ is a homomorphism translates to $g\cdot\l(h\cdot x\r)=\l(gh\r)\cdot x$ for all $g,h\in G$ and $x\in X$. Conversely, every such map $\cdot$ defines a $G$-action $\phi$ by $\phi_g\!\l(x\r)\coloneqq g\cdot x$.<span style="float:right;">$\blacklozenge$</span>
