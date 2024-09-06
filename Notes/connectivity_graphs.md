---
title: Connectivity in Graphs
date: 2024-09-05T22:37:16-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

{{< link file="graph.md" display="Graphs" type="references" >}} are inherently geometrical objects, and like how {{< link file="topological_space.md" display="topological spaces" type="references" >}} can be {{< link file="connected_space.md" display="connected" type="references" >}} or disconnected, so can graphs. However, we’ll opt for ‘path-connectedness’ instead, which will turn out to be equivalent to (topological) connectedness.

<br>

&emsp;&emsp;More graph-theoretically, there is a notion of *$k$-connectivity* for $k\in\N$, which is a measure of how ‘strongly’ connected a graph is; the $1$-connected graphs will be the (non-trivial) connected ones. In general, $k$-connectivity is much more complicated.

## Paths and Walks

Let $G\coloneqq(V,E)$ be a simple graph. A *path* in $G$ is a subgraph $P\subseteq G$ of the form $V(P)=\l\\{v_0,\dots,v_n\r\\}$ and $E(P)\coloneqq\l\\{v_0v_1,v_1v_2,\dots,v_{n-1}v_n\r\\}$, where each $v_i\in V$ are all distinct. Note that any path $P$ determines a sequence of vertices $(v_i)_{i\leq n}$.

<br>

&emsp;&emsp;A *walk* is a sequence $(v\_i)\_{i\leq n}$ of vertices in $V$ such that $e\_i\coloneqq v\_iv\_{i+1}\in E$ for all $i<n$. Every path (clearly) induces a walk, and since every walk ‘contains’ a path between its ends, the following definition makes sense:

{{< env type="definition" >}}

A graph $G\coloneqq(V,E)$ is said to be *connected* if it is non-empty and every $u,v\in V$ is joined by a path in $G$, which occurs iff every $u,v\in V$ is joined by a walk in $G$.

{{< /env >}}

{{< env type="proof" hide="false" name="Well-definition" >}}

If $u,v\in V$ are distinct vertices joined by a walk in $G$, we can choose a minimal (i.e. shortest) walk $(v_i)_{i\leq n}$ in $G$ joining $u,v$. This walk then contains a path from $u$ to $v$, since if $v\_i=v\_j$ for some $i<j$, then $(v\_0,\dots,v\_i,v\_{j+1},\dots,v\_n)$ is a walk of shorter length, contra dicing our choice of walk.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

&emsp;&emsp;An easy characterization is that $G$ is disconnected iff there is a pairwise non-adjacent partition $V=X\sqcup Y$.

> {{< env type="proof" hide="true" >}}

Suppose that such a partition $V=X\sqcup Y$ exists and fix $u\in X$ and $v\in Y$. If $(v\_i)\_{i\leq n}$ is a walk from $v_0\coloneqq u$ to $v_1\coloneqq v$, then there is a minimal $0<i\leq n$ with $v\_i\in Y$, and hence $v\_{i-1}v\_i\in E$ is an $X\\!-\\!Y$ edge. Conversely, pick $u,v\in V$ not joined by any walk in $G$ and let $X$ be the set of all vertices reachable from $x$ via walks (or, equivalently, let $X$ be the connected component containing $x$). Setting $Y\coloneqq V\comp X$ gives us the desired partition $V=X\sqcup Y$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

## Simplicial Characterization

## Connectivity

# Structure of Connectivity
