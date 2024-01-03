---
mathLink-blocks:
    simplicity-of-abelian-groups: Abelian $G$ is simple $\Leftrightarrow$ $G=\gen{g}$ for $\ord{g}$ prime
---

<div class="topSpace"></div>

Date Created: 07/05/2023 18:58:15
References: #Ref/Alu09 #Ref/Lan02
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Simplicity of alternating group]]
Constructions: [[Composition Series]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Subgroups of cyclic groups]], [[Lagrange's Theorem]]

``` ad-Definition
title: Definition.

A group $G$ is said to be <b>simple</b> if it has no non-trivial normal subgroups.

```

<b>Remark.</b> Simplicity of abelian groups is easy to determine. Indeed, if $G$ is abelian, then $G$ is simple iff $G=\gen{g}$ for some $g\in G$ with $\ord g$ prime.
* Indeed, if $G$ is simple, then $\gen{g}\nsubgrpeq G$ for any non-trivial $g\in G$ and hence $G=\gen{g}$. Note that $\ord g<\infty$, for otherwise $G\iso\Z$ is not simple. If $\ord g$ is not prime, then $\ord g=pq$ for some $1<p,q<\ord g$ and hence there is a subgroup of $\gen{g}$ of order $p\neq1$, contradicting the simplicity of $G$. Conversely, if $G=\gen{g}$, then every subgroup thereof is cyclic. But $\l|G\r|$ is prime, so $G=\gen{x}$ for every non-tribal $x\in G$, so $G$ has no non-trivial (normal) subgroups.<span style="float:right;">$\blacklozenge$</span> ^simplicity-of-abelian-groups
