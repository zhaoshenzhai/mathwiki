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

Charts can be seen as giving *local-coordinates* to points in $M$: if $(U,\phi)$ is a chart, then there are *coordinate* maps $x^i\coloneqq\pi_i\circ\phi:U\to\R$ which assigns to to any $p\in U$ the tuple $(x^1(p),\dots,x^n(p))\in\R^n$, called the *local-coordinates* of $p$ w.r.t. $(U,\phi)$. Thus it is convenient to write $(U,x^1,\dots,x^n)$ for this chart, and say ‘$p=(p^1,\dots,p^n)$ in local-coordinates’.

## Examples of Manifolds

# Topological Properties

The presence of charts provide very strong restrictions on the topological properties of manifolds.

<br>

&emsp;&emsp;{{< link file="partition_of_unity.md" display="partition of unity" type="references" >}}

## Point-set Topology

## Fundamental Groups and Covering Spaces

## Homology and Cell Complexes

# Structures on Manifolds

## {{< link file="smooth_manifold.md" display="Smooth" type="structures" >}} Manifolds

## Symplectic Manifolds
