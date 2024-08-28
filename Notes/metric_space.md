---
title: Metric Space
date: 2024-05-14T21:37:43-04:00
references: []
tags: []
---

# Motivation & Definition

Abstracting away some basic properties of the Euclidean distance in $\R^n$, and most notably preserving the *Triangle Inequality*, we make the following

{{< env type="definition" >}}

A *metric* on a set $X$ is a function $d:X\times X\to\R_{\geq0}$ such that
1. <span style="color:gray">(Positive-definiteness).</span> For all $x,y\in X$, we have $d(x,y)=0$ iff $x=y$.
2. <span style="color:gray">(Symmetry.)</span> For all $x,y\in X$, we have $d(x,y)=d(y,x)$.
3. <span style="color:gray">($\Delta$-inequality).</span> For all $x,y,z\in X$, we have $d(x,z)\leq d(x,y)+d(y,z)$.

If $d$ is a metric on $X$, we call the pair $\tpl{X,d}$ a *metric space*.

{{< /env >}}

## Topology

Let $\tpl{X,d}$ be a metric space. The most important objects that the metric $d$ construct are *open balls*, which form{{< link file="metric_space_generates_a_topology" type="justifications" mod="dag" >}} a {{< link file="bases_for_topologies" display="basis" type="references" >}} for a {{< link file="topological_space" display="topology" type="generalizations" >}} $\mc{T}\_d$, called the *metric topology*. Explicitly, this means that a subset $U\subseteq X$ is *open* in $\mc{T}\_d$ if for every $x\in U$, there is some $\epsilon>0$ such that $B_\epsilon(x)\subseteq U$, where

{{< env type="definition" >}}

For any $x\in X$ and $\epsilon>0$, the *$\epsilon$-ball* centered at $x$ is the set
$$\begin{equation}
    B_\epsilon(x)\coloneqq B(\epsilon,x)\coloneqq\l\\{y\in X\st d(x,y)<\epsilon\r\\}.
\end{equation}$$

{{< /env >}}

In this way, many concepts that were previously defined for metric spaces are now subsumed by their topological characterizations. Nonetheless, metric spaces are still an important class of topological spaces, which is made precise by the following

{{< env type="definition" >}}

A topological space $\tpl{X,\mc{T}}$ is said to be *metrizable* if there is a metric $d$ on $X$ whose open balls generate $\mc{T}$.

{{< /env >}}

Specifically, metrizable spaces enjoy the following properties.
* <span style="color:red">Fill this in.</span>

Clearly, metric spaces with continuous maps form a {{< link file="subcategory" display="subcategory" type="references" >}} of {{< link file="topological_space" display="$\cattop$" type="generalizations" section="The Category $\cattop$" >}}. However, there is a more useful subcategory in which morphisms preserve the metric structure.

{{< env type="definition" >}}

Fix $k\in\N$. A function $f:X\to Y$ is said to be *$k$-Lipschitz* if
$$\begin{equation}
    d(f(x),f(x'))\leq kd(x,x')
\end{equation}$$
for all $x,x'\in X$. We say that $f$ is *Lipschitz* if it is $k$-Lipschitz for some $k$.

{{< /env >}}

We let $\catmet$ be the {{< link file="category" display="category" type="references" >}} whose objects are metric spaces and whose morphisms are $1$-Lipschitz maps (also called *non-expanding* maps). Since Lipschitz maps are continuous, this makes $\catmet$ a subcategory of $\cattop$.
