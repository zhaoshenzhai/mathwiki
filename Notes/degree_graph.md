---
title: Degree (Graph Theory)
date: 2024-09-06T20:21:22-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $G$ be a (simple) {{< link file="graph.md" display="graph" type="references" >}}. Although very crude, good control over the *degree* of a vertex in $G$ can form the basis of some interesting combinatorial results when $G$ is {{< link file="finite_graph.md" display="finite" type="references" >}}. If $G$ is {{< link file="infinite_graph.md" display="infinite" type="references" >}}, this notion can instead be used as a measure of the local complexity of $G$.

{{< env type="definition" >}}

The *degree* of a vertex $v\in V(G)$ is the {{< link file="cardinal" display="cardinality" type="references" >}} $d_G(v)$ of its *neighbors* $N_G(v)\coloneqq\l\\{u\in V\st uv\in E\r\\}$.

{{< /env >}}

<h2 id="handshaking_lemma">Handshaking Lemma</h2>

We have $\sum_{v\in V}d_G(v)=2|E(G)|$, which is intuitively obvious since summing all the degrees counts each edge twice, once from each of its ends. Formally, we consider the map $i_v:E\to2$ with $e\mapsto1$ iff $v\in e$, and observe that
$$\begin{equation}
    \sum_{v\in V}d_G(v)=\sum_{v\in V}\sum_{e\in E}i_v(e)=\sum_{e\in E}\sum_{v\in V}i_v(e)=\sum_{e\in E}2=2|E(G)|.
\end{equation}$$
An immediate corollary of this result is the so-called *Handshaking Lemma*, stating that the number of vertices of odd degree in a finite graph $G$ is always even. This *fails* for infinite graphs: consider, for instance, the infinite ray $\N$.

>{{< env type="proof" hide="false" >}}

Splitting off the even-degree vertices and keeping only the odd-degrees ones $v_i,\dots,v_m$, we see that $\sum_{i\leq m}(2n_i+1)$ is even, where $2n_i+1=d_G(v_i)$. Hence $m+2\sum_{i\leq m}n_i$ is even, and thus so is $m$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

If $G$ is finite, the *average* degree $d(G)\coloneqq\frac{1}{|V(G)|}\sum_{v\in V}d_G(v)$ of $G$ is, by the result above, twice the ratio $\epsilon(G)\coloneqq|E(G)|/|V(G)|$.

## Bounds on Degrees

We let $\delta(G)$ and $\Delta(G)$ respectively denote the minimal and maximal degrees of vertices in $G$.

# Brooke’s Theorem

