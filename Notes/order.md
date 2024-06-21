---
title: Order
date: 2024-06-03T15:04:46-04:00
references: []
tags: [In_Progress]
---

{{< env type="definition" >}}

Let $G$ be a group. An element $x\in G$ is has **finite order** if we have $x^n=e$ for some $n>0$; the least such $n$ is the **order** of $x$, denoted $\ord x$.

<br>

&emsp;&emsp;Otherwise, set $\ord x\coloneqq\infty$, and say that $x$ has **infinite order**.

{{< /env >}}

**Remark.** More abstractly, for a fixed $x\in G$, consider the map $\phi_x:\Z\to G$ induced uniquely by sending $1\mapsto x$, and set $\ord x\coloneqq\l|\im\phi_x\r|$. If $\ker\phi_x=n\Z$ for some $n>0$, then $\im\phi_x\iso\Z/n\Z$ has cardinality $n$. Since there are no other non-trivial subgroups {{< link file="integers" type="justifications" mod="dag" section="Subgroups of $\Z$" >}}, we have otherwise that $\im\phi_x=\Z$, and hence $\ord x=\infty$.<span style="float:right;">$\blacklozenge$</span>
