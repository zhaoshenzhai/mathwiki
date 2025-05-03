---
title: Hausdorff Space
date: 2024-08-28T19:31:09-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $X$ be a {{< link file="topological_space.md" display="topological space" type="references" >}}. From the point of view of the topology on $X$, two points are distinguishable iff they can be ‘separated’ by open sets. For instance, if $X$ is discrete, then point are separated, while if $X$ has the trivial topology, then no points are separated. There are different degrees of separation; the most common and useful one is as follows.

{{< env type="definition" >}}

A topological space $X$ is *Hausdorff* if every distinct pair $x,y\in X$ admit disjoint open neighborhoods $U_x,U_y\subseteq X$.

{{< /env >}}

## Basic Properties

Since points are separated, every {{< link file="convergence.md" display="convergent sequence" type="references" >}} in a Hausdorff space $X$ has a unique limit point.

>{{< env type="proof" hide="false" >}}

Let $(x_n)\subseteq X$ converge to both $x,y\in X$. If $x\neq y$, then pick disjoint neighbors $U_x,U_y\subseteq X$, and let $N_x,N_y\in\N$ be such that $x_n\in U_x$ for all $n\geq N_x$ and $x\in U_y$ for all $n\geq N_y$. But then $x_n\in U_x\cap U_y$ for any $n\geq\max\l\\{N_x,N_y\r\\}$, a contradiction.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

In fact{{< link file="topology_using_nets.md" type="properties" mod="dag" >}}, enlarging the notion of sequences to {{< link file="convergence.md" display="nets" type="references" secID="nets" secDisplay="Nets" >}}/{{< link file="filter.md" display="filters" type="references" >}} gives the converse direction too, in that $X$ is Hausdorff iff every net/filter has at most one limit point.

<br>

&emsp;&emsp;Hausdorffness also plays very well with compactness, and spaces which are {{< link file="compact_hausdorff_space.md" display="compact Hausdorff" type="types" >}} are very rich. A more basic fact is that compact subsets of Hausdorff spaces are closed.

>{{< env type="proof" hide="false" >}}

Let $K\subseteq X$ be compact. If $K=X$, we are done; otherwise, fix $p\in X\comp K$. For all $q\in K$, let $U_q\ni p$ and $V_q\ni q$ be disjoint neighborhoods. Then $\l\\{V_q\cap K\r\\}\_{q\in K}$ is an open cover of $K$, which cuts down to a finite subcover $K\subseteq\bigcup\_{i<n}V\_{q\_i}$. But the intersection $U\coloneqq\bigcap\_{i<n}U\_{q\_i}$ is disjoint from each $V_{q_i}$, and is hence disjoint from $K$. Thus $U\subseteq X\comp K$ is a neighborhood of $p$, so $X\comp K$ is open.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
