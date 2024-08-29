---
title: Convergence
date: 2024-06-20T13:30:38-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

The idea of *convergence* of elements $x_\alpha$ in $X$ is to find a single element $x\in X$ that is ‘close’ to as many elements $x_\alpha$ as possible. This heuristic can be formalized in many ways; here, we focus on interpreting ‘closeness’ in the {{< link file="topological_space" display="topological" type="references" >}} sense.

<br>

&emsp;&emsp;Throughout, let $X$ be a topological space. For each $x\in X$, let $\mc{N}_x$ denote the set of all *not necessarily open* neighborhoods of $x$, i.e., sets $A\subseteq X$ containing $x$ such that $x\in U\subseteq A$ for some open set $U$. A *neighborhood base* of $x$ is a subset $\mc{B}_x\subseteq\mc{N}_x$ such that every $U\in\mc{N}_x$ contains some $B\in\mc{B}_x$.

{{< env type="definition" >}}

A sequence $(x_n)_{n\in\N}$ in $X$ is said to *converge* to some $x\in X$ $-$ and write $x_n\to x$ $-$ if for every neighborhood $U\in\mc{N}_x$, there is some $N\in\N$ such that $x_n\in U$ for all $n\geq N$ <span style="color:gray">(that is, $x_n\in U$ for all eventually $n\in\N$)</span>.

<br>

&emsp;&emsp;We say that $x$ is a *limit point* of $x_n$ if every $U\in\mc{N}_x$ contains infinitely-many points in $x_n$.

{{< /env >}}

One might hope to probe topological properties of $X$ (like compactness, continuity, closure, etc) by analyzing the convergence of sequences in $X$, but this is not fruitful for general topological spaces; in some sense, this is because sequences are ‘countable objects’, while topological spaces in general require uncountably-many bits to specify.

<br>

&emsp;&emsp;One can fix this problem by either restricting the class of topological spaces in question, say to {{< link file="first_countable_space" display="first" type="references" >}}/{{< link file="second_countable_space" display="second" type="references" >}} countable spaces (thereby giving a ‘countable encoding’ of the topology by way of {{< link file="bases_for_topologies" display="bases" type="references" >}} or {{< link file="filter" display="filter bases" type="references" >}}), or by generalizing the notion of convergence of sequences to more ‘uncountable objects’.

# Spaces Probable by Sequences

## Metric Spaces

# Convergence of Nets and {{< link file="filter" display="Filters" type="references" >}}

The two most common approaches towards such a generalization are nets and filters, which are basically equivalent $-$ in that one can be defined from the other $-$ but it is worthwhile to understand both. For both of these generalizations, the neighborhoods $\mc{N}_x$ of a point $x\in X$, and there bases, play a fundamental role.

<div class="space"></div>

## Nets

One approach to replace $\N$ in the definition of sequential-convergence to an arbitrary directed set, which we call a *net*.

<br>

&emsp;&emsp;Fix a net $x_\blob:I\to X$ from a directed set $I$. For a subset $A\subseteq X$, we say that $x_\blob$ is *eventually in* (resp. *cofinally in*) $A$ if there is some $j\in I$ such that $x_i\in A$ for all $i\geq j$ (resp. for all $j\in I$, there is some $i\geq j$ with $x_i\in A$). We make the following

{{< env type="definition" >}}

Let $I$ be a directed set. A net $x_\blob:I\to X$ is said to *converge* to some $x\in X$ $-$ and write $x_\blob\to x$ $-$ if $x_\blob$ is eventually in every $U\in\mc{N}_x$.

<br>

&emsp;&emsp;We say that $x$ is a *limit point* of $x_\blob$ if $x_\blob$ is cofinally in every $U\in\mc{N}_x$.

{{< /env >}}

If $\mc{N}_x$ admits a countable base $\mc{B}_x\subseteq\mc{N}_x$ $-$ which can be nested $-$ then $\mc{N}_x$ admits a cofinal subset $\mc{B}_x$ order-isomorphic to $\N$. With $I\coloneqq\mc{B}_x$, this notion generalizes that of sequences $x\_\blob:\N\to X$.

<br>

&emsp;&emsp;Despite this simple generalization, the topology of $X$ is completely determined in terms of the convergence of nets in $X$. This is outlined here{{< link file="topology_using_nets" type="properties" mod="dag" >}}.

<div class="space"></div>

## Filters

Since pairwise-intersections of open sets are open, neighborhood bases of $\mc{N}_x$ are just filter bases thereof. Thus, we can compare it to other filters.

{{< env type="definition" >}}

A filter $\mc{F}$ in $X$ is said to *converge* to some $x\in X$ $-$ and write $\mc{F}\to x$ $-$ if $\mc{F}$ refines $\mc{N}_x$ <span style="color:gray">(that is, if every $U\in\mc{N}_x$ contains some $A\in\mc{F}$)</span>.

<br>

&emsp;&emsp;We say that $x$ is a *limit point* of $\mc{F}$ if every $A\in\mc{F}$ meets every $U\in\mc{N}_x$.

{{< /env >}}

**Remark.** One can replace ‘filter’ by ‘prefilter’ by passing to its generated filter.<span style="float:right;">$\blacklozenge$</span>

<div class="space"></div>

&emsp;&emsp;To connect this definition back with sequences, we need to consider *{{< link file="filter" display="push-forward" type="references" section="Push Forward" >}}* of filters. Then, equipping $\N$ with the Fréchet filter $\mc{F}_0$, we see that a sequence $x\_\blob\to x$ in the sense of sequences iff $x\_\blob(\mc{F}\_0)\to x$ in the sense of filters.
