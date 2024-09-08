---
title: Partition of Unity
date: 2024-09-07T17:35:42-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Let $X$ be a {{< link file="topological_space.md" display="topological space" type="references" >}}. One might want to construct a continuous function $f:X\to\R$ satisfying certain properties, but this can be very hard. Instead, one constructs a family $f_\alpha:U_\alpha\to\R$ of continuous functions on a (suitably ‘simple’) open cover $\l\\{U_\alpha\r\\}$ of $X$, and hope that they agree on intersections; that is, hope that $f_\alpha(U\_\alpha\cap U\_\beta)=f_\beta(U\_\alpha\cap U\_\beta)$ for all $\alpha,\beta$. Then, since continuous maps form a {{< link file="sheaf.md" display="sheaf" type="references" >}}, one can glue them together to obtain the desired (global) continuous function $f:X\to\R$.

<br>

&emsp;&emsp;This is too much to ask for in general, since one sometimes has no control on overlaps. However, it is still sufficient in some nice cases where we can continuously ‘interpolate’ between functions. These ‘interpolating functions’ can formalized by the following

{{< env type="definition" >}}

Let $X$ be a topological space. A *partition of unity* of $X$ is a family $\l\\{\phi_\alpha\r\\}$ of continuous functions $\phi_\alpha:X\to[0,1]$ such that $\l\\{\supp\phi_\alpha\r\\}$ is a locally-finite family and $\sum_\alpha\phi_\alpha(x)=1$ for each $x\in X$.

<br>

&emsp;&emsp;If $\l\\{\phi_\alpha\r\\}$ is as above and $\l\\{U_\alpha\r\\}$ is an open cover of $X$ with $\supp\phi_\alpha\subseteq U_\alpha$, then $\l\\{\phi_\alpha\r\\}$ is said to be *subordinate to $\l\\{U_\alpha\r\\}$*.

{{< /env >}}

The existence of these functions
