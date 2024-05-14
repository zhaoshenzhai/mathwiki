---
title: 'Topological Space'
date: 2024-05-14T14:45:50-04:00
references: []
tags: ['Topic/Topology']
---

Let $X$ be a set. We would like to formalize

&emsp;&emsp;We thus make the following

{{< env "definition" >}}

Let $X$ be a set. A **topology** on $X$ is a family $\mc{T}\subseteq\pow(X)$, whose elements are called **open sets**, subject to the following conditions.
1. <span style="color:gray">(Non-trivial).</span> $\em$ and $X$ are in $\mc{T}$.
2. <span style="color:gray">(Closure under $\cup$).</span> For any $\mc{U}\subseteq\mc{T}$, we have $\bigcup\mc{U}\in\mc{T}$.
3. <span style="color:gray">(Closure under finite $\cap$).</span> For any $U_1,U_2\in\mc{T}$, we have $U_1\cap U_2\in\mc{T}$.

If $\mc{T}$ is a topology on $X$, we call the pair $\tpl{X,\mc{T}}$ a **topological space**.

{{< /env >}}

From a lattice theory perspective, $\mc{T}$ is an inclusion poset.
