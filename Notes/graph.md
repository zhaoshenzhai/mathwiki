---
title: Graph
date: 2024-09-05T18:13:24-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The concept of a *graph* arose as an abstraction of a typical situation in math where one has a set of ‘objects’ $V$ on which ‘connections’ between those objects can be established. The precise definition of a graph differs, depending on who you ask. Before embarking on the general definition, let us first define the simplest type of graphs, which will (unless otherwise stated) be the focus in these notes.

{{< env type="definition" >}}

A *(simple loopless undirected) graph* is a pair $G\coloneqq(V,E)$, where $V$ is a set and $E\subseteq V^2$ is a symmetric irreflexive binary relation. We write $uv\coloneqq\l\\{u,v\r\\}\eqqcolon e\in E$, in which case $u$ (and also $v$) are *incident* to $e$, and $u,v$ are *adjacent*.

<br>

&emsp;&emsp;A function $f:(V,E)\to(W,F)$ between graphs is a *graph homomorphism* if $uv\in E$ implies $f(u)f(v)\in F$.

{{< /env >}}

With graph homomorphisms as morphisms, simple graphs form a {{< link file="category" display="category" type="references" >}} $\catsgrph$.

## For a Graph Theorist

## For a Category Theorist

# Finite Graph Theory

# Infinite Graph Theory
