---
title: Metric Space
date: 2024-05-14T21:37:43-04:00
references: []
tags: []
---

Abstracting away the basic properties of distance in $\R^n$, and most notably preserving the *Triangle Equality* (henceforth written as *$\Delta$-equality*), we make the following

{{< env "definition" >}}

A **metric** on a set $X$ is a function $d:X\times X\to\R_{\geq0}$ such that
1. <span style="color:gray">(Positive-definiteness).</span> For all $x,y\in X$, we have $d(x,y)=0$ iff $x=y$.
2. <span style="color:gray">(Symmetry.)</span> For all $x,y\in X$, we have $d(x,y)=d(y,x)$.
3. <span style="color:gray">($\Delta$-equality).</span> For all $x,y,z\in X$, we have $d(x,z)\leq d(x,y)+d(y,z)$.

If $d$ is a metric on $X$, we call the pair $\tpl{X,d}$ a **metric space**.

{{< /env >}}

Let $\tpl{X,d}$ be a metric space. The most important objects that the metric $d$ construct are *open balls*, which form {{< link file="metric_space_generates_a_topology" type="justifications" mod="dag" >}} a {{< link file="basis_and_subbasis" display="basis" type="references" >}} for a {{< link file="topological_space" display="topology" type="generalizations" >}}. Explicitly, this means that a subset $U\subseteq X$ is *open* if for every $x\in U$, there is some $\epsilon>0$ such that $B_\epsilon(x)\subseteq U$, where

{{< env "definition" >}}

For any $x\in X$ and $\epsilon>0$, the **$\epsilon$-ball** centered at $x$ is the set
$$\begin{equation}
    B_\epsilon(x)\coloneqq B(\epsilon,x)\coloneqq\l\\{y\in X\st d(x,y)<\epsilon\r\\}.
\end{equation}$$

{{< /env >}}

In this way, many concepts (like convergence and continuity) that were first defined for metric spaces are now subsumed by their topological characterizations, but metric spaces are still an important class of topological spaces. We make the following

{{< env "definition" >}}

A topological space $\tpl{X,\mc{T}}$ is said to be **metrizable** if there is a metric $d$ on $X$ whose open balls generate $\mc{T}$.

{{< /env >}}

Specifically, metrizable spaces enjoy the following properties.
* hi
