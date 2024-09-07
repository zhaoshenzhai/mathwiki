---
title: Finite Graph
date: 2024-09-06T23:44:59-04:00
references: []
tags: [In_Progress]
---

Let $G$ be a (simple) {{< link file="graph.md" display="graph" type="references" >}}. The condition that $V(G)$ be finite allows us to apply methods from finite combinatorics to analyze $G$. We give some graph-theoretic frameworks for which such combinatorics applies to. Ultimately, these arguments boil down to applying the Pigeonhole Principle, or using the fact that $\N$ is {{< link file="well_order.md" display="well-ordered" type="references" >}}.

<br>

&emsp;&emsp;However, certain results from finite graph theory have more elegant proofs if we are willing to use techniques involving {{< link file="infinite_graph.md" display="infinite" type="references" >}} graphs, and in some cases, those are the *only* known proofs. The prototypical example of this bridge is *{{< link file="ramseys_theorem" display="Ramsey’s Theorem" type="properties" >}}*.

<div class="space"></div>

&emsp;&emsp;*Throughout, let $G\coloneqq(V,E)$ be a finite graph*.

## Basic Notions

The *{{< link file="degree_graph.md" display="degree" type="constructions" >}}* $d_G(v)$ of a vertex $v\in V$ is the cardinality of its *neighbors* $N_G(v)\coloneqq\l\\{u\in V\st uv\in E\r\\}$. It can easily be shown{{< link file="degree_graph.md" type="properties" secID="handshaking_lemma" secDisplay="Handshaking Lemma" mod="dag" >}} that $\sum_{v\in V}d_G(v)=2|E(G)|$, which implies that the number of vertices of odd degree is even. Control over the minimum degree $\delta(G)$, maximum degree $\Delta(G)$, or the average degree $d(G)$ can provide some rough bounds of sizes of certain subgraphs of $G$.

# Basic Questions and Results

The first ever result in graph theory is the *Königsberg Bridge Problem*, solved by Euler in 1736, which concerns walks in a graph that traverse every edge exactly once. Nowadays, they are called *Euler tours*, and graphs that admit such tours are said to be *Eulerian*.

{{< env type="theorem" name="Königsberg Bridge; Euler 1736" >}}

A finite connected graph is Eulerian iff every vertex has even degree.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Let $G$ be a finite connected graph. If an Euler tour exists and a vertex $v\in V(G)$ appears $k$ times in this tour, then $d_G(v)=2k$ is even. Conversely, we proceed by induction on $l\coloneqq|E(G)|$. The case when $l=0$ is immediate, so suppose that $l>0$.

{{< /env >}}

## {{< link file="hamiltonian_cycle.md" display="Hamiltonian Cycle" type="constructions" >}}

<span style="color:red">**TODO**.</span>

A basic result illustrating this phenomenon is that every {{< link file="connectivity_graphs.md" display="connected" type="references" >}} graph with $|V|\geq3$ contains path or cycle of length at least $\min\l\\{2\delta(G),|V|\r\\}$. In particular, this implies *Dirac’s Theorem*, that $G$ contains a Hamiltonian cycle if $2\delta(G)\geq|V|\geq3$.

<div class="space"></div>

{{< env type="proof" hide="false" >}}

Let $n\coloneqq|V|$. Dirac’s Theorem follows from the claim, since if $2\delta(G)\geq n$, then $G$ is connected: otherwise any vertex $v$ in its smallest component $C$ has degree less than $|C|\leq n/2$. Since $G$ cannot contain a path of length $n$, it must contain a cycle of length at least $n$, whence a Hamiltonian cycle.

<br>

&emsp;&emsp;To prove the claim, suppose that there is no path of length $\min\l\\{2\delta(G),n\r\\}$. Let $P\coloneqq v_0\cdots v_k$ be the longest path, so $k<2\delta(G)$. By maximality of $k$, the neighbors of $v_0$ must lie on ‘right ends’ $v_{i+1}$ of edges $v_iv_{i+1}\in E(P)$; similarly, neighbors of $v_k$ must lie on ‘left ends’ of edges in $P$. But since $\delta(G)>k/2$, there must be some edge $v_iv_{i+1}\in E(P)$ such that $C\coloneqq v_0v_{i+1}Pv_kv_iPv_0$ is a cycle, which has length $k+1$. We claim that $C$ is as desired, by showing that it is Hamiltonian.

<br>

&emsp;&emsp;If not, then by connectedness of $G$ there is some $v\in G-C$ neighboring a vertex $v_j\in V(P)$. Cutting any incident edge of $v_j$ in $C$ and adding an edge $vv_j$ will result in a path of length $k+1$, contradicting the choice of $P$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

## Matchings and Coverings

## Flows and Colourings

## Planar Graphs

# Compactness and Contradiction
