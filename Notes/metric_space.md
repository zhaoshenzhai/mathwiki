---
title: Metric Space
date: 2024-05-14T21:37:43-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $X$ be a set. We would like to formalize a notion of ‘distance’ between points $x,x'\in X$, and we do so by abstracting away some basic properties of the Euclidean distance in $\R^n$, and most notably preserving the *Triangle Inequality*.

{{< env type="definition" >}}

Let $X$ be a set. A *metric* on $X$ is a function $d:X\times X\to\R_{\geq0}$ such that
1. <span style="color:gray">(Positive-definiteness).</span> For all $x,y\in X$, we have $d(x,y)=0$ iff $x=y$.
2. <span style="color:gray">(Symmetry.)</span> For all $x,y\in X$, we have $d(x,y)=d(y,x)$.
3. <span style="color:gray">($\Delta$-inequality).</span> For all $x,y,z\in X$, we have $d(x,z)\leq d(x,y)+d(y,z)$.

If $d$ is a metric on $X$, we call the pair $\tpl{X,d}$ a *metric space*.

{{< /env >}}

## Topological Structure

A metric space $d$ on $X$ allows us to construct *open balls*, which form a {{< link file="bases_for_topologies.md" display="basis" type="references" >}} for the *metric {{< link file="topological_space.md" display="topology" type="generalizations" >}}* $\mc{T}\_d$:

>{{< env type="proof" hide="true" >}}

This collection clearly cover $X$. Take $x\in B_{\epsilon_1}(x_1)\cap B_{\epsilon_2}(x_2)$, so $d(x,x_i)<\epsilon_i$ for all $i=1,2$. Set $\epsilon\coloneqq\min_i\l\\{\epsilon_i-d(x,x_i)\r\\}$. Note that for all $y\in B_\epsilon(x)$, we have $d(y,x_i)\leq d(y,x)+d(x,x_i)<\epsilon_i$ for $i=1,2$, so $x\in B_\epsilon(x)\subseteq B_{\epsilon_1}(x_1)\cap B_{\epsilon_2}(x_2)$ as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

Explicitly, this means that a subset $U\subseteq X$ is *open* in $\mc{T}\_d$ if for every $x\in U$, there is some $\epsilon>0$ such that $B_\epsilon(x)\subseteq U$, where

{{< env type="definition" >}}

For any $x\in X$ and $\epsilon>0$, the *$\epsilon$-ball* centered at $x$ is the set
$$\begin{equation}
    B_\epsilon(x)\coloneqq B(\epsilon,x)\coloneqq\l\\{y\in X\st d(x,y)<\epsilon\r\\}.
\end{equation}$$

{{< /env >}}

Using open balls, one can define *continuity* of maps $f:X\to Y$ between metric spaces. Intuitively, $f$ is continuous at $x$ if given margin of $\epsilon$rror around $f(x)\in Y$, there is some $\delta$istance around $x$ that maps into this margin of $\epsilon$rror. Formally,

{{< env type="definition" >}}

A function $f:X\to Y$ between metric spaces is *continuous* at some fixed $x\in X$ if
$$\begin{equation}
    \fa\epsilon>0,\ex\delta>0:f(B_\delta(x))\subseteq B_\epsilon(f(x)).
\end{equation}$$
We say that $f$ is *continuous* if it is continuous at all $x\in X$.

{{< /env >}}

**Remark.** It is important to note that $f$ is continuous iff for any open set $V\subseteq Y$, the preimage $f^{-1}(V)\subseteq X$ is open in $X$.

>{{< env type="proof" hide="true" >}}

Suppose that $f$ is continuous and let $V\subseteq Y$ be open. Take $x\in f^{-1}(V)$, so $f(x)\in V$, and hence there is some $\epsilon>0$ such that $B_\epsilon(f(x))\subseteq V$. Since $f$ is continuous, there is some $\delta>0$ such that $f(B_\delta(x))\subseteq B_\epsilon(f(x))\subseteq V$, so $x\in B_\delta(x)\subseteq f^{-1}(V)$.

<br>

&emsp;&emsp;Conversely, let $x\in X$ and $\epsilon>0$. Then $B_\epsilon(f(x))\subseteq Y$ is open, so $f^{-1}(B_\epsilon(f(x)))\subseteq X$ is open too. Thus there is some $\delta>0$ such that $B_\delta(x)\subseteq f^{-1}(B_\epsilon(f(x)))$, so $f(B_\delta(x))\subseteq B_\epsilon(f(x))$ as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

This allows continuity to be phrased purely in terms of the open sets in $X,Y$, and thereby generalizing this concept to topological spaces. Thus, many concepts that were previously defined for metric spaces are now subsumed by their topological characterizations.

<br>

&emsp;&emsp;It also defines a {{< link file="functor.md" display="functor" type="references" >}} $\catmet_c\to\cattop$, where $\catmet_c$ is the {{< link file="category.md" display="category" type="references" >}} of metric spaces with continuous maps. However, this functor is not surjective, and its (object) image forms the following important class of topological spaces.

{{< env type="definition" >}}

A topological space $\tpl{X,\mc{T}}$ is said to be *{{< link file="metrizable_space.md" display="metrizable" type="generalizations" >}}* if there is a metric $d$ on $X$ whose open balls generate $\mc{T}$.

{{< /env >}}

## Uniform Structure

<span style="color:red">**TODO**.</span>

<div class="space"></div>

## Lipschitz Structure

Clearly, $\catmet_c$ is a {{< link file="subcategory.md" display="subcategory" type="references" >}} of {{< link file="topological_space.md" display="$\cattop$" type="generalizations" section="The Category $\cattop$" >}}. However, there is a more useful category of metric spaces in which morphisms preserve the metric structure.

{{< env type="definition" >}}

Fix $k\in\N$. A function $f:X\to Y$ is said to be *$k$-Lipschitz* if
$$\begin{equation}
    d(f(x),f(x'))\leq kd(x,x')
\end{equation}$$
for all $x,x'\in X$. We say that $f$ is *Lipschitz* if it is $k$-Lipschitz for some $k$.

{{< /env >}}

We let $\catmet$ be the category of metric spaces with $1$-Lipschitz maps (also called *non-expanding* maps). Clearly Lipschitz maps are continuous, so $\catmet$ is a subcategory of $\cattop$.

# Geometry of Metric Spaces
