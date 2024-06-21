---
title: p-group
date: 2024-06-21T16:59:45-04:00
references: []
tags: [In_Progress]
mathLink: $p\ $-group
---

By {{< link file="lagranges_theorem" display="Lagrange’s Theorem" type="justifications" >}}, if a {{< link file="finite_group" display="finite group" type="references" >}} $G$ has {{< link file="prime_number" display="prime" type="references" >}} order $p$, then $G\iso\\,$ {{< link file="cyclic_group" display="$\Z/p\Z$" type="references" mod="space" >}} and has no non-trivial {{< link file="subgroup" display="subgroups" type="references" >}}. It is natural to ask for a generalization when $\l|G\r|$ is a *power* of $p$, or more generally, when the {{< link file="order" display="order" type="references" >}} of every $g\in G$ is a power of $p$.

<br>

&emsp;&emsp;Throughout, fix a prime $p$.

# Finite $p$-groups

If $G$ is a finite group, then the condition that the order of every $g\in G$ is a power of $p$ is $-$ by Lagrange’s Theorem $-$ equivalent to the following

{{< env type="definition" >}}

A **$p$-group** is a group $G$ with $\l|G\r|=p^n$ for some $n\in\N$.

{{< /env >}}

## {{< link file="cauchys_theorem" display="Cauchy’s Theorem" type="properties" >}}

Every {{< link file="lagranges_theorem" type="justifications" mod="dag" >}} $H\substructeq G$ has order $p^i$ for some $i\leq n$. Conversely, $G$ has a subgroup of order $p$ by Cauchy’s Theorem. In fact, more is true, and $G$ has a subgroup of order $p^i$ for *every* $i\leq n$. This is deduced from

<div class="space"></div>

## {{< link file="sylow_theorems" display="The Sylow Theorems" type="properties" >}}

# Prüfer $p$-groups
