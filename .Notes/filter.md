---
title: Filter
date: 2024-06-20T11:27:17-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

{{< env type="definition" >}}

Let $P$ be a poset. A *filter* on $P$ is a subset $\em\neq F\subseteq P$ such that
1. <span style="color:gray">(Upward-closure).</span> If $p\in F$ and $q\geq p$, then $q\in F$.
2. <span style="color:gray">(Downward-directed).</span> If $p_1,p_2\in F$, then there exists $q\in F$ with $q\leq p_1,p_2$.

{{< /env >}}
