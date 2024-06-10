---
title: Normal Subgroup
date: 2024-06-10T17:20:55-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

For any {{< link file="category" display="category" type="references" >}}, it is useful to find an explicit form of its {{< link file="congruence_relation" display="congruence relations" type="references" >}}. For the category {{< link file="group" display="$\catgrp$" type="references" section="The Category $\catgrp$" >}} of {{< link file="group" display="groups" type="references" >}}, these are in correspondence with *normal subgroups*.

{{< env "definition" >}}

Let $G$ be a group. A {{< link file="subgroup" display="subgroup" type="references" >}} $N\substructeq G$ is said to be **normal** if it is invariant under the {{< link file="conjugation_action" display="conjugation" type="references" >}} {{< link file="group_action" display="action" type="references" >}} of $G$; i.e., if $gN=Ng$ for all $g\in G$.

<br>

&emsp;&emsp;In this case, we write $N\nsubgrpeq G$, and $N\nsubgrp G$ if it is proper.

{{< /env >}}

Equivalently, we may demand $gng^{-1}\in N$ for all $n\in N$ and $g\in G$ instead.

<br><br>

## Normal $\Leftrightarrow$ Congruence

We now show that every congruence relation $\sim$ on $G$ is induced by a unique normal subgroup $N\nsubgrpeq G$.

<br><br>

*Proof.* Given $\sim$, the subset $N\coloneqq\l\\{n\in G\st n\sim e\r\\}$ is clearly a subgroup, and is normal since for all $gn\in gN$, we have $gn\sim g$ and hence $gng^{-1}\sim e$. Thus $gng^{-1}\in N$.
<br>

&emsp;&emsp;Conversely, given a normal subgroup $N\nsubgrpeq G$, the relation $g_1\sim g_2$ iff $g_2^{-1}g_1\in N$ is clearly an equivalence, and is a congruence since if $g_1\sim g_2$ and $h_1\sim h_2$, then
$$\begin{equation}
    (g_2h_2)^{-1}(g_1h_1)=h_2^{-1}(g_2^{-1}g_1)h_1\in h_2^{-1}Nh_1=h_2^{-1}h_1N=N.\qedin
\end{equation}$$

<br>

## Quotient Groups
