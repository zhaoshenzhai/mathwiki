---
title: Normal Subgroup
date: 2024-06-10T17:20:55-04:00
references: [Alu09, Mac10]
tags: [Group_Theory]
---

# Motivation & Definition

&emsp;&emsp;Fix a {{< link file="group" display="group" type="references" >}} $G$ and consider the {{< link file="category" display="category" type="references" >}} $\cat{B}G$ defined by $G$ (consisting of a single object $\ast$, and morphisms $\Hom(\ast,\ast)=G$). What are the {{< link file="congruence_relation" display="congruence" type="references" >}} in $\cat{B}G$?

{{< env type="definition" >}}

A {{< link file="subgroup" display="subgroup" type="references" >}} $N\substructeq G$ is said to be **normal** if it is invariant under the {{< link file="conjugation_action" display="conjugation" type="references" >}} {{< link file="group_action" display="action" type="references" >}} of $G$; i.e., if $gN=Ng$ for all $g\in G$.

<br>

&emsp;&emsp;In this case, we write $N\nsubgrpeq G$, and $N\nsubgrp G$ if it is proper.

{{< /env >}}

Equivalently, we may demand $gng^{-1}\in N$ for all $n\in N$ and $g\in G$ instead.

<div class="space"></div>

## Normal $\Leftrightarrow$ Congruence

We now show that every congruence relation $\sim$ on $G$ is induced by a unique normal subgroup $N\nsubgrpeq G$.

<div class="space"></div>

{{< env type="proof" >}}

Given $\sim$, the subset $N\coloneqq\l\\{n\in G\st n\sim e\r\\}$ is clearly a subgroup, and is normal since for all $gn\in gN$, we have $gn\sim g$ and hence $gng^{-1}\sim e$. Thus $gng^{-1}\in N$.
<br>

&emsp;&emsp;Conversely, given a normal subgroup $N\nsubgrpeq G$, the relation $g_1\sim g_2$ iff $g_2^{-1}g_1\in N$ is clearly an equivalence, and is a congruence since if $g_1\sim g_2$ and $h_1\sim h_2$, then
$$\begin{equation}
    (g_2h_2)^{-1}(g_1h_1)=h_2^{-1}(g_2^{-1}g_1)h_1\in h_2^{-1}Nh_1=h_2^{-1}h_1N=N.\qedin
\end{equation}$$

{{< /env >}}

<div class="space"></div>

## Normal Closure

Recall that each equivalence relation $\sim$ induces a congruence (obtained by intersecting every congruence containing $\sim$). In particular, if $H\substructeq G$ is a subgroup, then the congruence relation induced by the equivalence relation $g_1\sim g_2$ iff $g_1H=g_2H$ corresponds by the above to a normal subgroup $\gen{H}_N\nsubgrpeq G$.

# {{< link file="quotient_group" display="Quotient Group" type="constructions" >}}

With this description of congruences on $G$, we obtain a more elementary description of the {{< link file="quotient_category" display="quotient category" type="references" >}} $\cat{B}G/\\!\sim$. Indeed, letting $N\nsubgrpeq G$ denote the normal subgroup corresponding to $\sim$, the morphisms of $\cat{B}G/\\!\sim$ is exactly the quotient group $G/N$.

<div class="space"></div>

## Normal $\Leftrightarrow$ {{< link file="kernel_group_theory" display="Kernel" type="equivalences" >}}

It is clear that the kernel of any homomorphism $f:G\to H$ is a normal subgroup of $G$. Conversely, any normal subgroup $N\nsubgrpeq G$ is the kernel of the canonical projection $\pi:G\onto G/N$.
