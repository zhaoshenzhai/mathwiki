---
title: Normal Subgroup
date: 2024-06-10T17:20:55-04:00
references: [Alu09, Mac10]
tags: [Group_Theory]
---

# Motivation & Definition

Fix a {{< link file="group.md" display="group" type="references" >}} $G$ and consider the {{< link file="category.md" display="category" type="references" >}} $\cat{B}G$ defined{{< link file="group.md" type="references" mod="dag" id="Groupoids" >}} by $G$. What are the {{< link file="congruence_relation.md" display="congruences" type="equivalences" >}} in $\cat{B}G$? In this {{< link file="category.md" display="category" type="references" >}}, a congruence is an {{< link file="equivalence_relation.md" display="equivalence relation" type="references" >}} $\sim$ on $G$ that respects the group operation, that is, $g_1\sim g_2$ and $h_1\sim h_2$ implies $g_1h_1\sim g_2h_2$.

<br>

&emsp;&emsp;It turns out that these congruences correspond directly to special {{< link file="subgroup.md" display="subgroups" type="references" >}} of $G$, namely, the *normal* ones:

{{< env type="definition" >}}

A subgroup $N\substructeq G$ is said to be *normal* if it is invariant under {{< link file="conjugation_action.md" display="conjugation" type="references" >}} by $G$; i.e., if $gN=Ng$ for all $g\in G$.

<br>

&emsp;&emsp;In this case, we write $N\nsubgrpeq G$, and $N\nsubgrp G$ if it is proper.

{{< /env >}}

Equivalently, we may demand $gng^{-1}\in N$ for all $n\in N$ and $g\in G$ instead.

<div class="space"></div>

<h2 id="normal_iff_congruence">Normal $\Leftrightarrow$ Congruence</h2>

We show that every congruence relation $\sim$ on $G$ is induced by a unique normal subgroup $N\nsubgrpeq G$.

<div class="space"></div>

{{< env type="proof" >}}

Given a congruence $\sim$, the subset $N\coloneqq\l\\{n\in G\st n\sim e\r\\}$ is clearly a subgroup, and is normal since for all $gn\in gN$, we have $gn\sim g$ and hence $gng^{-1}\sim e$. Thus $gng^{-1}\in N$.
<br>

&emsp;&emsp;Conversely, given a normal subgroup $N\nsubgrpeq G$, the relation $\sim$ on $G$ defined by $g_1\sim g_2$ iff $g_2^{-1}g_1\in N$ is clearly an equivalence, and is a congruence since if $g_1\sim g_2$ and $h_1\sim h_2$, then
$$\begin{equation}
    (g_2h_2)^{-1}(g_1h_1)=h_2^{-1}(g_2^{-1}g_1)h_1\in h_2^{-1}Nh_1=h_2^{-1}h_1N=N.\qedin
\end{equation}$$

{{< /env >}}

This equivalence allows us to take *{{< link file="quotient_group.md" display="quotients" type="constructions" >}}* $G/N$ of $G$ by normal subgroups $N\nsubgrpeq G$, and in particular makes $\pi:G\onto G/N$ a group homomorphism. Such a construction allows for another equivalence; namely, that normal subgroups correspond to {{< link file="kernel_group_theory.md" display="kernels" type="references" >}}:

<div class="space"></div>

{{< env type="proof" hide="false" id="normal_iff_kernel" >}}

If $N\nsubgrpeq G$ is a normal subgroup, then it is the kernel of $\pi:G\onto G/N$. Conversely, for any homomorphism $f:G\to H$, its kernel $\ker f$ is normal since if $f(h)=0$ and $g\in G$, then $f(ghg^{-1})=f(g)f(h)f(g)^{-1}=0$ too.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

<h2 id="normal_closure">Normal Closure</h2>

Each equivalence relation $\sim$ induces a congruence (obtained by intersecting every congruence containing $\sim$). In particular, for a subgroup $H\substructeq G$, the congruence relation induced by the equivalence relation $g_1\sim g_2$ iff $g_1H=g_2H$ corresponds by the above to a normal subgroup $\gen{H}_N\nsubgrpeq G$, called the *normal closure* of $H$. Equivalently, $\gen{H}_N$ is the smallest normal subgroup of $G$ containing $H$, obtained by either closing under conjugation or by taking the intersection of all normal subgroups containing $H$.
