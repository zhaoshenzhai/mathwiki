---
title: Graph
date: 2024-09-05T18:13:24-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The concept of a *graph* arose as an abstraction of typical situations in math, where one has a set of ‘objects’ on which connections can be established. These connections, formalized as a binary relation $G\subseteq V^2$ on some set $V$ of *vertices*, is called a ‘graph’ to emphasize the relation *between* objects, and is pictorially drawn as an *edge* $\blob\\!\\!\\!-\\!\\!\\!-\\!\blob$. Formally, we define:

{{< env type="definition" >}}

A *graph* on a set $V$ of *vertices* is a pair $G\coloneqq(V,E)$, where $E\subseteq V^2$ is a symmetric irreflexive binary relation.

{{< /env >}}

**Remark.** Equivalently, $E\subseteq[V]^2$ any collection of $2$-element subsets, and we write $uv\coloneqq\l\\{u,v\r\\}\in E$. The original definition, however, makes it clear that graphs are {{< link file="model.md" display="models" type="references" >}} of a {{< link file="theory.md" display="first-order theory" type="references" >}} of graphs.

# Finite Graph Theory

# Infinite Graph Theory
