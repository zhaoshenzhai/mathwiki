---
mathLink-blocks:
    cyclic-group: Cyclic Group
    initial: $\Z$ is initial in $\catring$
    subgroups-of-integers: Subgroups of $\Z$
    quotients-of-integers: Quotients of $\Z$
    invertible-iff-coprime: Invertible in $\Z/n\Z$ $\Leftrightarrow$ coprime
---

<div class="topSpace"></div>

Date Created: 09/01/2023 15:29:16
References: #Ref/DF03 #Ref/Alu09
Tags: #Type/Example #Topic/Rings_and_Modules/Ring_Theory

Types: <i>Not Applicable</i>
Examples: [[Group of units of finite field is a cyclic group]]
Constructions: [[Euler's Totient Function]], [[Characteristic]], [[Prime Field]], [[Gaussian Integers]]
Generalizations: [[Euclidean Domain (EUD)]]

Properties: [[Subgroups of cyclic groups]], [[Automorphisms and endomorphisms of cyclic groups]]
Sufficiencies: [[At most one dividing subgroup implies cyclic]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Free Group#^universal-property-of-free-groups]], [[Division Algorithm]], [[EUD implies PID]], [[Isomorphism Theorems]], [[Bezout's Identity]]

``` ad-Example
title: Example (Integers).

We construct the <b>integers</b> $\Z$ as the quotient of $\N^2$ under the equivalence relation $\tpl{m_1,n_1}\sim\tpl{m_2,n_2}$ iff $m_1+n_2=m_2+n_1$, which identifies all points on diagonals. This construction induces binary operations $+$ and $\cdot$ on $\Z$ making $\tpl{\Z,+,\cdot}$ into a ring.
* The integers $\Z$ is initial in $\catring$ and is a Euclidean domain with the absolute value $\l|\slot\r|$ valuation.
* The subgroups of $\tpl{\Z,+}$ are of the form $n\Z$ for $n\in\Z$, and all non-trivial cyclic groups $G$ are either $\Z$ or $\Z/n\Z$ for some $n\geq2$.
* An element $m\in\Z/n\Z$ generates $\Z/n\Z$ iff $m\perp n$, which occurs iff $m\in\l(\Z/n\Z\r)^\times$.

```
^cyclic-group

<i>Proof.</i> For any ring $R$, that $\Z=\gen{1}$ as a group furnishes a unique group homomorphism $\phi:\Z\to R$ sending $1$ to $1_R$. That $\phi\l(rs\r)=\phi\l(r\r)\phi\l(s\r)$ is easy to check, so $\phi$ is a ring homomorphism. ^initial
* The division algorithm shows in particular that $\Z$ is a Euclidean domain, so $\Z$ is also a PID. Thus every ideal is of principal, of the form $\gen{n}=n\Z$. ^subgroups-of-integers

Suppose now that $G=\gen{x}$ is cyclic, so there is a surjection $\phi:\Z\onto G$ mapping $m\mapsto x^m$. Its kernel is $\ker\phi=n\Z$ for some $n\in\Z$. If $\ker\phi$ vanishes, then $G\iso\Z$. In this case, $\ord{x}=\infty$ and $x$ is either $1$ or $-1$. Otherwise, we see that $G\iso\Z/n\Z$. The groups $\Z$ and $\Z/m\Z$ are clearly cyclic, so they are all the cyclic groups. ^quotients-of-integers
* Observe that $\ord m=\ord{1}/\gcd\l(m,\ord{1}\r)=n/\gcd\l(m,n\r)$, which is $n$ iff $m\perp n$. Moreover, Bézout’s Identity furnishes $r,s\in\Z$ such that $am+sn=1$, which descends into the quotient as $am\equiv1\mod{n}$.<span style="float:right;">$\blacksquare$</span> ^invertible-iff-coprime
