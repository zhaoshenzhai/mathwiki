---
title: Manifold
date: 2024-08-28T19:20:34-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

{{< env type="definition" >}}

Let $n\in\N$. An *$n$-dimensional manifold* is a {{< link file="second_countable_space.md" display="second countable" type="references" >}} {{< link file="hausdorff_space.md" display="Hausdorff" type="references" >}} space $M$ that is ‘locally-Euclidean’, in the sense every point $p\in M$ admits a neighborhood $U\ni p$ and a map $\phi:U\to\R^n$ that is a homeomorphism onto its image.

<br>

&emsp;&emsp;We refer to the pair $(U,\phi)$ as a *coordinate chart* around $p$; if $\phi(p)=0$, then we say that $(U,\phi)$ is *centered at $p$*.

{{< /env >}}

**Remark.** Since the topology on $\R^n$ is {{< link file="bases_for_topologies.md" display="generated" type="references" >}} by open balls, we may assume w.l.o.g. that $\phi(U)$ is itself an open ball in $\R^n$.

# Topological Properties

The presence of charts provide very strong restrictions on the topological properties of manifolds.

<div class="space"></div>

## Point-set Topology

<div class="space"></div>

## Fundamental Groups and Covering Spaces

<div class="space"></div>

## Homology and Cell Complexes

# Structures on Manifolds

## {{< link file="smooth_manifold" display="Smooth" type="structures" >}} Manifolds



<div class="space"></div>

## Symplectic Manifolds
