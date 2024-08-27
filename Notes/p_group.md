---
title: p-group
date: 2024-06-21T16:59:45-04:00
references: [Alu09]
tags: [Group_Theory]
mathLink: $p$-group
renderedTitle: $p\ $-group
---

By {{< link file="lagranges_theorem" display="Lagrange’s Theorem" type="justifications" >}}, if a {{< link file="finite_group" display="finite group" type="references" >}} $G$ has {{< link file="prime_number" display="prime" type="references" >}} order $p$, then $G\iso\\,${{< link file="cyclic_group" display="$\Z/p\Z$" type="references" >}} and has no non-trivial {{< link file="subgroup" display="subgroups" type="references" >}}. It is natural to ask for a generalization when $\l|G\r|$ is a *power* of $p$, or more generally, when the {{< link file="order" display="order" type="references" >}} of every $g\in G$ is a power of $p$.

<br>

&emsp;&emsp;Throughout, fix a prime $p$.

# Finite $p$-groups

If $G$ is a finite group, then the condition that the order of every $g\in G$ is a power of $p$ is $-$ by Lagrange’s Theorem $-$ equivalent to the following

{{< env type="definition" >}}

A *$p$-group* is a group $G$ with $\l|G\r|=p^n$ for some $n\in\N$.

{{< /env >}}

## {{< link file="cauchys_theorem" display="Cauchy’s Theorem" type="properties" >}}

Let $G$ be a finite group. The subgroups $H\substructeq G$ which are themselves $p$-groups are called *$p$-subgroups* of $G$. For every $k\in\N$ such that $p^k$ divides $|G|$, there exists a $p$-subgroup $H_k\substructeq G$ with order $p^k$.

<br>

&emsp;&emsp;The case when $k=1$ is *Cauchy’s Theorem*, from which the general case follows from cleaver combinatorics via {{< link file="fixed_point_theorems_of_p_groups" display="fixed-point theorems" type="properties" >}}.

<div class="space"></div>

## {{< link file="sylow_theorems" display="The Sylow Theorems" type="properties" >}}

The $p$-subgroups $H\substructeq G$ which are maximal are called the ‘$p$-Sylow subgroups’; writing $|G|=p^rm$ for some $m\perp p$, they are the ones with order $p^r$. The *Sylow Theorems* state that they exist, are conjugate to each other, and that the number of $p$-Sylow subgroups divides $m$ and is congruent to $1$ modulo $p$.

# Prüfer $p$-groups
