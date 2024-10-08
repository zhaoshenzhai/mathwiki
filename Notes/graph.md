---
title: Graph
date: 2024-09-05T18:13:24-04:00
references: [Die17]
tags: [Graph_Theory]
---

# Motivation & Definition

The concept of a *graph* arose as an abstraction of a typical situation in math where one has a set of ‘objects’ $V$ on which ‘connections’ between those objects can be established. The precise definition of a graph differs, depending on who you ask $-$ before embarking on the general definition, let us first define the simplest type of graphs, which will (unless otherwise stated) be our focus in these notes.

{{< env type="definition" >}}

A *(simple loopless undirected) graph* is a pair $G\coloneqq(V,E)$, where $V$ is a set and $E\subseteq V^2$ is a symmetric irreflexive binary relation. We write $uv\coloneqq(u,v)\eqqcolon e\in E$, in which case $u$ (and also $v$) are *incident* to $e$, and $u,v$ are *adjacent*.

<br>

&emsp;&emsp;A function $f:(V,E)\to(V',E')$ between graphs is a *graph homomorphism* if $uv\in E$ implies $f(u)f(v)\in E'$.

{{< /env >}}

With graph homomorphisms as morphisms, simple graphs form a {{< link file="category.md" display="category" type="references" >}} $\catsgrph$. Note that graphs are also models of the $\mc{L}$-{{< link file="first_order_theory.md" display="theory" type="references" >}} $T$ of graphs (where $\mc{L}\coloneqq\l\\{E\r\\}$ contains a binary relation symbol) stating that $E$ is symmetric and irreflexive, so $\catsgrph=\cathom_\mc{L}$.

## Basic Constructions

Fix a graph $G\coloneqq(V,E)$. A *subgraph* of a graph $G\coloneqq(V,E)$ is a {{< link file="substructure.md" display="substructure" type="references" >}} of $G$ in $\cathom_\mc{L}$, which is a graph $G'\coloneqq(V',E')$ with $V'\subseteq V$ and $E'\subseteq E$. On the other hand, considering the category $\catemb_\mc{L}$ of graphs with embeddings as morphisms instead gives us an *induced subgraph* of $G$, which is a subgraph $G'\coloneqq(V',E')$ of $G$ such that $E'=V'^2\cap E$.

<br>

&emsp;&emsp;Since {{< link file="limits_category_theory.md" display="coproducts" type="references" >}} in $\catsgrph$ are given by the disjoint union of their underlying vertices and edges, we see that $G$ decomposes as a coproduct of its {{< link file="connectivity_graphs.md" display="connected" type="constructions" secID="connected_components" secDisplay="Connected Components" >}} subgraphs. Thus, we will assume here that $G$ is itself connected. <span style="color:red">**TODO**.</span>

<div class="space"></div>

&emsp;&emsp;The next section extends the definition to other ‘graph-like’ objects. We found that the most systematic way to talk about these variations is by viewing graphs as {{< link file="presheaf.md" display="presheaves" type="references" >}}, but this language is not strictly necessary.

<h2 class="hide">Graphs as Presheaves</h2>

Consider a tuple $G\coloneqq(V,E,s,t)$, where $s,t:E\tto V$ are parallel maps between sets $V,E$. This setup is equivalent to a presheaf $\cat{C}^\textrm{op}\to\catset$, where $\cat{C}$ is the {{< link file="free_category.md" display="free category" type="references" >}} generated by $E\tto V$,

<br>

&emsp;&emsp;<span style="color:red">**TODO** (see https://mathoverflow.net/questions/321897/is-mathrmgraph-cartesian-closed?noredirect=1&lq=1).</span>

# Techniques and Paradigms

## {{< link file="finite_graph.md" display="Finite Graph" type="types" >}} Theory

## Infinite Graph Theory

# Applications and Generalizations

## Geometric Group Theory

## Simplicial Complexes
