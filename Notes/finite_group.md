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

A finite group $G$ can have a plethora of {{< link file="subgroup.md" display="subgroups" type="references" >}}, and finding them and understanding how they fit together inside $G$ can tell us a great deal about the structure of $G$ itself. One such method is to fix a prime $p$ and look at all possible subgroups $H\substructeq G$ whose {{< link file="order.md" display="order" type="references" >}} is a power of $p$, called a *{{< link file="p_group.md" display="$p$-subgroup" type="references" >}}* of $G$. The maximal $p$-subgroups of $G$, called its *$p$-Sylow* subgroups, are especially important. The natural question is, then: *do they exist?*
<br>
&emsp;&emsp;The *Sylow Theorems* answers this in the affirmative, and establishes much more. All $p$-subgroups of $G$ (and in particular the $p$-Sylow subgroups of $G$) exist, the $p$-Sylow subgroups are all conjugate to each other, and the number of $p$-Sylow subgroups $n_p$ divides $m$ and $n_p\equiv1\\,\mod\\,p$. The existence of subgroups of $G$ of order $p$ is called *{{< link file="sylow_theorems.md" display="Cauchy’s Theorem" type="properties" secID="cauchys_theorem" secDisplay="Cauchy’s Theorem" >}}*.

# {{< link file="representation_theory.md" display="Representation" type="references" >}} Theory
