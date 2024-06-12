---
title: Quotient Group
date: 2024-06-11T18:49:07-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix an {{< link file="equivalence_relation" display="equivalence relation" type="references" >}} on a {{< link file="group" display="group" type="references" >}} $G$ and consider the {{< link file="quotient_set" display="quotient set" type="references" >}} $G/\\!\sim$. Since $\sim$ has, a priori, nothing to do with the group structure of $G$, we cannot expect $G/\\!\sim$ to carry a natural group structure.

<br>

&emsp;&emsp;Instead, we need to consider a {{< link file="congruence_relation" display="congruence" type="references" >}} $\sim$ on $G$, which (in the {{< link file="category" display="category" type="references" >}} {{< link file="group" display="$\catgrp$" type="references" section="The Category $\catgrp$" >}}) is an equivalence relation $\sim$ such that $g_1\sim g_2$ and $h_1\sim h_2$ implies $g_1h_1\sim g_2h_2$. This suffices to induce a group structure on $G/\\!\sim$, whose identity is the {{< link file="normal_subgroup" display="normal subgroup" type="references" >}} $N\nsubgrpeq G$ induced {{< link file="normal_subgroup" type="justifications" mod="dag" section="Normal $\Leftrightarrow$ Congruence" >}} by $\sim$ and whose operation is $[g]\ast[h]\coloneqq[gh]$.

<div class="space"></div>

## Cosets/Normal Subgroups

Since the normal subgroup induced by $\sim$ is given by $N=\l\\{n\in G\st n\sim e\r\\}$, we have $[g]=\l\\{gn\in G\st n\in N\r\\}\eqqcolon gN$ for every $g\in G$, called the (left) *coset* of $N$ by $g$. Thus, the standard definition is the following.

{{< env "definition" >}}

Let $N\nsubgrpeq G$ be a normal subgroup. The **quotient group** of $G$ by $N$ is the group $G/N\coloneqq G/\\!\sim$ equipped with the operation $gN\ast hN\coloneqq(gh)N$.

{{< /env >}}

*Proof (well-definition).* If $g_1\sim g_2$ and $h_1\sim h_2$, then $g_1h_1\sim g_2h_2$.<span style="float:right;">$\blacksquare$</span>

<div class="space"></div>

**Remark.** In this form, the canonical projection $\pi:G\onto G/N$ sends $g\mapsto gN$. Almost by definition, we have that $\ker\pi=N$.<span style="float:right;">$\blacklozenge$</span>

<div class="space"></div>

## Fibers of Homomorphisms

Given the above construction, and recalling that normal subgroups correspond {{< link file="normal_subgroup" type="justifications" mod="dag" section="Normal $\Leftrightarrow$ Kernel" >}} to {{< link file="kernel_group_theory" display="kernels" type="references" >}}, we may *a posteriori* define the quotient group of $G$ w.r.t. a homomorphism $f:G\to H$ as the set of fibers of $f$ equipped with the operation $f^{-1}(h_1)\ast f^{-1}(h_2)\coloneqq f^{-1}(h_1h_2)$. Its identity is, of course, $\ker f$.

<br>

&emsp;&emsp;Every such ‘fiber group’ arise as fibers of $\pi:G\onto G/N$. Conversely, they induce the quotient group $G/\ker f$.

# Categorical Aspects

## {{< link file="universal_constructions" display="Universal Property" type="references" >}}

Quotient groups satisfy the following universal property:

{{< env "proposition" >}}

Let $N\nsubgrpeq G$ be a normal subgroup. The projection $\pi:G\onto G/N$ is initial amongst all homomorphisms $f:G\to H$ such that $N\subseteq\ker f$.

{{< /env >}}

*Proof.* That $N\subseteq\ker f$ is equivalent to
$$\begin{equation}
    \fa g_1,g_2\in G:g_1\sim g_2\Longrightarrow f(g_1)=f(g_2),
\end{equation}$$
for which the universal property {{< link file="quotient_set" type="proved_by" mod="dag" section="Universal Property" >}} of the {{< link file="quotient_set" display="quotient set" type="references" >}} $G/\\!\sim$ furnishes a unique function $f':G/N\to H$ such that $f=f'\circ\pi$. This is a homomorphism since
$$\begin{equation}
    f'([g_1]\ast[g_2])=f'([g_1g_2])=f'(\pi(g_1g_2))=f(g_1g_2)=f(g_1)f(g_2)=f'([g_1])f'([g_2]),
\end{equation}$$
as desired.<span style="float:right;">$\blacksquare$</span>

<div class="space"></div>

**Remark.** <span style="color:red">link with representable functors etc</span>

<div class="space"></div>

## {{< link file="quotient_category" display="Quotient Category" type="generalizations" >}}

Viewing $G$ as its corresponding category $\cat{B}G$ (consisting of a single object $\ast$, and morphisms $\Hom(\ast,\ast)=G$), the quotient category $\cat{B}G/\\!\sim$ by a congruence $\sim$ is precisely (the category corresponding to) the quotient $G/N$.
