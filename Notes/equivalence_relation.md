---
title: Equivalence Relation
date: 2024-06-18T20:07:21-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Oftentimes, we wish to regard two objects as ‘being the same’ (for instance, two sets are ‘the same’ if they have the same {{< link file="cardinality.md" display="cardinality" type="references" >}}), despite them not being *equal*. The concept of an *equivalence relation* can be thought of as a generalization of equality.

{{< env type="definition" >}}

Let $X$ be a set. An *equivalence relation* on $X$ is a (binary) relation $E\subseteq X^2$ subject to the following conditions.
1. <span style="color:gray">(Reflexive).</span> For all $x\in X$, we have $(x,x)\in E$.
2. <span style="color:gray">(Symmetric).</span> For all $x,y\in X$, we have $(x,y)\in E$ iff $(y,x)\in E$.
3. <span style="color:gray">(Transitive).</span> For all $x,y,z\in X$, if both $(x,y),(y,z)\in E$, then $(x,z)\in E$.

We usually write $xEy$ for $(x,y)\in E$ instead.

{{< /env >}}

For every $x\in X$, we have its *equivalence class* $[x]_E\coloneqq\l\\{y\in X\st xEy\r\\}$. More generally, the *saturation* of $A\subseteq X$ is the union $[A]\_E\coloneqq\bigcup\_{x\in A}[x]\_E$. Subsets $I\subseteq X$ that are the union of equivalence classes $-$ or equivalently, $I=[I]_E$ $-$ are said to be *$E$-invariant*.

<div class="space"></div>

## Partitions

Equivalence relations on $X$ are in correspondence with *partitions* of $X$, which are families $\mc{P}\subseteq2^X$ of non-empty disjoint subsets of $X$ with $\bigsqcup\mc{P}=X$.

<br>

&emsp;&emsp;Indeed, if $E$ is an equivalence relation on $X$, then $\mc{P}_E\coloneqq\l\\{[x]_E\subseteq X\st x\in X\r\\}$ is a partition of $X$. Conversely, given a partition $\mc{P}$ on $X$, the relation $E$, defined by $xEy$ iff $x,y\in P$ for some $P\in\mc{P}$, is an equivalence.

<div class="space"></div>

## {{< link file="quotient_set.md" display="Quotient Set" type="constructions" >}}

Given an equivalence $E$ on $X$, we would like to construct some set $X/E$ where ‘$E$ becomes equality’. Moreover, this construction should be ‘the most efficient’ way of doing so, in the sense of a suitable {{< link file="universal_constructions.md" display="universal property" type="references" >}}.

<br>

&emsp;&emsp;This can be done by setting $X/E\coloneqq\mc{P}_E$, so that $xEy$ iff $[x]_E=[y]_E$, and we call $X/E$ the *quotient set of $X$ by $E$*.

# Examples and Generalizations

## {{< link file="groupoid.md" display="Groupoid" type="generalizations" >}}

<div class="space"></div>

## {{< link file="congruence_relation.md" display="Congruence Relation" type="types" >}}

# Classification Problems and Dynamics
