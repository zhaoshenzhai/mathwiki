---
title: Connected Space
date: 2024-09-04T19:44:39-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

{{< env type="definition" >}}

A topological space $X$ is said to be *connected* if $\em,X$ are the only clopen sets in $X$.

{{< /env >}}

{{< env type="theorem" >}}

If $f:X\to Y$ is a continuous map and $X$ is connected, then so is $f(X)$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

We prove the contrapositive, so write $f(X)=V_1\sqcup V_2$ for some non-empty disjoint open sets $V_i\subseteq f(X)$. Then $U_i\coloneqq f^{-1}(V_i)$ are non-empty disjoint open sets of $X$ with $X=U_1\sqcup U_2$, as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

# Path-connectedness

Let $x,y\in X$. A *path* from $x$ to $y$ is a continuous map $\gamma:[0,1]\to\R$ such that $\gamma(0)=x$ and $\gamma(1)=y$. We usually express this by writing $\gamma:x\pathto y$. As expected the definition for path-connectedness is as follows.

{{< env type="definition" >}}

A topological space $X$ is said to be *path-connected* if for every $x,y\in X$ is joined by a path $\gamma:x\pathto y$.

{{< /env >}}
