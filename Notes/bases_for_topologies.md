---
title: Bases for Topologies
date: 2024-07-11T14:22:11-04:00
references: [Mun00, Eng89]
tags: [In_Progress]
---

# Motivation & Definition

Let $X$ be a set. To specify a {{< link file="topological_space.md" display="topology" type="references" >}} on $X$, one needs to give a complete description of its open sets. In practice, however, specifying a certain subcollection $\mc{B}\subseteq\pow(X)$ will suffice, In which case we say that the topology is *generated* by $\mc{B}$. Two questions arise:
1. If $\mc{T}$ is a *given* topology on $X$, what subcollections $\mc{B}\subseteq\mc{T}$ generate $\mc{T}$?
2. What kinds of collections $\mc{B}\subseteq\pow(X)$ can specify *some* topology $\mc{T}$ on $X$?

## Generation of a Fixed Topology

Let $\mc{T}$ be a fixed topology on $X$.

{{< env type="definition" >}}

A collection $\mc{B}\subseteq\mc{T}$ is a *basis for $\mc{T}$* if every open set $U\in\mc{T}$ is a union of sets in $\mc{B}$.

{{< /env >}}

Since all open sets $U\in\mc{T}$ are just unions of sets in $\mc{B}$, we call $\mc{B}$ the *basic open sets*.

<br>

&emsp;&emsp;Equivalently, $\mc{B}\subseteq\mc{T}$ is a basis iff for each $x\in X$, its neighborhood {{< link file="filter.md" display="filter" type="references" >}} $\mc{N}_x$ (consisting of all sets $A\subseteq X$ such that $x\in U\subseteq A$ for some $U\in\mc{T}$) admits a {{< link file="filter.md" display="filter base" type="references" secID="base" >}} in $\mc{B}$.

>{{< env type="proof" hide="true" >}}

If $\mc{B}\subseteq\mc{T}$ is a basis and $x\in X$, then $\l\\{V\in\mc{B}\st x\in V\r\\}$ is a filter base for $\mc{N}_x$. Conversely, let $U$ be open. Every $x\in U$ admits a filter base $\mc{B}_x\subseteq\mc{B}$, giving us for each $x\in U$ some $B_x\in\mc{B}_x\subseteq\mc{B}$ with $x\in B_x\subseteq U$, so that $U=\bigcup\_{x\in U}B_x$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

Thus, bases can be viewed as a global version of filter bases.

<br>

&emsp;&emsp;To further thin down the subcollection and obtain $\mc{T}$ by closing under finite intersections as well, we make the following

{{< env type="definition" >}}

A collection $\mc{S}\subseteq\mc{T}$ is a *subbasis for $\mc{T}$* if every open set $U\in\mc{T}$ is a union of finite intersections of sets in $\mc{S}$.

{{< /env >}}

## Generation of Some Topology

One way for a collection $\mc{B}\subseteq\pow(X)$ to generate *some* topology on $X$ is to let it satisfy some of the axioms for a topology on $X$, from which a topology can be obtained by closing it under the others.

{{< env type="definition" >}}

A collection $\mc{B}\subseteq\pow(X)$ is a *(saturated) basis* for a topology if $X$ and all pairwise intersections of sets in $\mc{B}$ are unions of sets in $\mc{B}$ (resp. in $\mc{B}$).

{{< /env >}}

In other words, $\mc{B}$ is a basis if it covers $X$ and for every $B_1,B_2\in\mc{B}$ with $x\in B_1\cap B_2$, we have $x\in B\subseteq B_1\cap B_2$ for some $B\in\mc{B}$. In either case, we obtain a topology on $X$ by closing it under unions, i.e. by letting
$$\begin{equation}
    \mc{T}_\mc{B}\coloneqq\l\\{U\subseteq X\st\fa x\in U,\ex B\in\mc{B},x\in B\subseteq U\r\\},
\end{equation}$$
in which case $\mc{B}$ is a basis for $\mc{T}\_\mc{B}$.

>{{< env type="proof" hide="true" >}}

Since every saturated basis is a basis, we prove the claim for when $\mc{B}$ is just a basis. That $\em\in\mc{T}\_\mc{B}$ is vacuous, and $X\in\mc{T}\_\mc{B}$ since $\mc{B}$ covers $X$. Closure under arbitrary unions is clear. If $U_1,U_2\in\mc{T}\_\mc{B}$ and $x\in U\_1\cap U\_2$, then $x\in B\_i\subseteq U\_i$ for $i=1,2$ for some $B\_1,B\_2\in\mc{B}$, and so $x\in B\subseteq B_1\cap B_2\subseteq U_1\cap U_2$ for some $B\in\mc{B}$.

<br>

&emsp;&emsp;Finally, it is clear that $\mc{B}$ is a basis for $\mc{T}_\mc{B}$ since every $U\in\mc{T}$ can be written as $U=\bigcup\_{x\in U}B\_x$, where each $B_x\in\mc{B}$ is such that $x\in B_x\subseteq U$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

One can be more vigorous by removing all the axioms of a topology and consider *any* collection $\mc{S}\subseteq\pow(X)$. This induces a basis $\mc{B}\_\mc{S}$ consisting of finite intersections of sets in $\mc{S}$, from which we obtain a topology $\mc{T}\_\mc{S}\coloneqq\mc{T}\_{\mc{B}\_\mc{S}}$ with $\mc{S}$ as a subbasis thereof.

>{{< env type="proof" hide="true" >}}

We show that $\mc{B}\_\mc{S}\coloneqq\l\\{\bigcap\_{i<n}U\_i\st U\_i\in\mc{S}\r\\}$ is a saturated basis. Indeed, that $X\in\mc{B}\_\mc{S}$ follows from letting $n=0$. That $\mc{B}_\mc{S}$ is closed under pairwise intersections is clear, since $\bigcap\_{i<n}U\_i\cap\bigcap\_{i<n'}U'\_i$ is still a finite intersection.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

# Rigidity of Bases

Many topological properties of $X$ can be detected (or defined) by the existence of certain bases thereof.

## Weight and Character

To begin, we have the following basic notion.

{{< env type="definition" >}}

The *weight* of $X$ is the minimal {{< link file="cardinal.md" display="cardinality" type="references" >}} of a basis for $X$, denoted $w(X)$.

{{< /env >}}

If $w(X)\leq\aleph_0$, then $X$ is said to be *{{< link file="second_countable_space.md" display="second countable" type="constructions" >}}*.

<br>

&emsp;&emsp;A pointwise-version of the above is the *character* $\chi(x,X)$ of a point $x\in X$, defined as the minimal cardinality of a filter base for $\mc{N}_x$. Taking the supremum over all $x\in X$ gives the *character* $\chi(X)$ of $X$. If $\chi(X)\leq\aleph_0$, then $X$ is said to be *{{< link file="first_countable_space.md" display="first-countable" type="constructions" >}}*.

## Local Properties
