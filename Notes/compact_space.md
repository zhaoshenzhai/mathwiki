---
title: Compact Space
date: 2024-09-04T19:41:32-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

{{< env type="definition" >}}

A topological space $X$ is *compact* if every open cover of $X$ admits a finite subcover, i.e., if $U_\alpha\subseteq X$ is a collection of open subsets such that $X=\bigcup\_\alpha U_\alpha$, then there is some $n\in\N$ and $\alpha_1,\dots,\alpha_n$ such that $X=\bigcup_{i\leq n}U\_{\alpha\_i}$.

{{< /env >}}

{{< env type="theorem" >}}

If $f:X\to Y$ is a continuous map and $X$ is compact, then so is $f(X)$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Let $\l\\{V_\alpha\r\\}$ be an cover of $f(X)$ by open subsets of $Y$. Then each $f^{-1}(V_\alpha)$ is open in $X$ and $\l\\{f^{-1}(V_\alpha)\r\\}$ is an open cover of $X$, so it cuts down to a finite subcover $X=\bigcup_{i\leq n}f^{-1}(V\_{\alpha\_i})$. Observe that $f(X)\subseteq\bigcup\_{i\leq n}V_{\alpha_i}$, so $f(X)$ is compact as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
