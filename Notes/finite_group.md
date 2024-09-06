---
title: Finite Group
date: 2024-06-03T16:36:14-04:00
references: []
tags: [Group_Theory]
---

Let $G$ be a {{< link file="group.md" display="group" type="references" >}}. The condition that (the underlying set of) $G$ is finite allows us to apply methods from finite combinatorics to analyze $G$. We give some group-theoretic frameworks for which such combinatorics can be applied to.

>Such methods can become incredibly sophisticated; for instance, the classification of finite {{< link file="simple_group.md" display="simple" type="references" >}} groups is one of the major achievements of mathematics. We only touch on the very *very* basics here.

# Group {{< link file="group_action.md" display="Actions" type="references" >}} on Sets

## {{< link file="orbit_stabilizer_theorem.md" display="The Orbit-Stabilizer Theorem" type="techniques" >}}

Let $G\act X$ $-$ where $X$ is a *possibly infinite* set $-$ and fix an orbit $O\coloneqq\Orb_G(x_0)$ for any $x_0\in X$. Since $O\iso G/\Stab_G(x_0)$, we see that $\l|O\r|=\l|G\r|/\l|\Stab_G(x_0)\r|$ is finite and divides $\l|G\r|$.

<br>

&emsp;&emsp;This easy fact is surprisingly useful; indeed, it generalizes {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="techniques" >}} and gives a quick proof of the {{< link file="the_class_equation.md" display="Class equation" type="techniques" >}}.

## {{< link file="sylow_theorems.md" display="The Sylow Theorems" type="techniques" >}}

Fix a prime $p$ dividing $|G|=p^rm$, with $m\perp p$. The {{< link file="subgroup.md" display="subgroups" type="references" >}} $H\substructeq G$ with order $p^i$ for $i\leq r$ are the *{{< link file="p_group.md" display="$p$-subgroups" type="references" >}}* of $G$; if $i=r$, then $H$ is *$p$-Sylow*. The *Sylow Theorems* state that they exist, are {{< link file="conjugation_action.md" display="conjugate" type="references" >}} to each other, and that the number of $p$-Sylow subgroups divides $m$ and is congruent to $1$ modulo $p$.

<br>

&emsp;&emsp;This poses a very strong constraint on the structure of subgroups of $G$.

# {{< link file="representation_theory.md" display="Representation" type="references" >}} Theory
