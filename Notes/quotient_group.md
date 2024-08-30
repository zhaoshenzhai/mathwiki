---
title: Quotient Group
date: 2024-06-11T18:49:07-04:00
references: [Alu09, DF03, Mac10]
tags: [Group_Theory]
---

# Motivation & Definition

Fix an {{< link file="equivalence_relation" display="equivalence relation" type="references" >}} on a {{< link file="group" display="group" type="references" >}} $G$ and consider the {{< link file="quotient_set" display="quotient set" type="references" >}} $G/\\!\sim$. Since $\sim$ has, a priori, nothing to do with the group structure of $G$, we cannot expect $G/\\!\sim$ to carry a group structure.

<br>

&emsp;&emsp;However, it is natural to impose the projection map $\pi:G\onto G/\\!\sim$ to be a group homomorphism, so we are forced to have $[g]\ast[h]=\pi(g)\ast\pi(h)=\pi(gh)=[gh]$ for all $g,h\in G$. If $\ast$ is well-defined, then $G/\\!\sim$ is a group. But this occurs iff $g\sim g'$ and $h\sim h'$ implies $gh\sim g'h'$; that is, $\ast$ is well-defined iff $\sim$ is a {{< link file="congruence_relation" display="congruence relation" type="references" >}} on $G$. Since congruence relations are equivalent{{< link file="normal_subgroup" type="justifications" mod="dag" section="Normal $\Leftrightarrow$ Congruence" >}} to both {{< link file="normal_subgroup" display="normal subgroups" type="references" >}} and {{< link file="kernel_group_theory" display="kernels" type="references" >}}, we obtain two descriptions of the group structure on $G/\\!\sim$.

<div class="space"></div>

## Cosets/Normal Subgroups

Since the normal subgroup induced by $\sim$ is given by $N=\l\\{n\in G\st n\sim e\r\\}$, we have $[g]=gN$ for every $g\in G$, called the (left) *coset* of $N$ by $g$. Thus, the standard definition of quotient groups is the following.

{{< env type="definition" >}}

Let $N\nsubgrpeq G$ be a normal subgroup. The *quotient group* of $G$ by $N$ is the set $G/N\coloneqq G/\\!\sim$ equipped with the unique operation making $\pi:G\onto G/N$ a homomorphism; that is, by letting $gN\ast hN\coloneqq(gh)N$ for all $g,h\in G$.

{{< /env >}}

<div class="space"></div>

**Remark.** In this form, the canonical projection $\pi:G\onto G/N$ sends $g\mapsto gN$. Basically by definition, we have that $\ker\pi=N$.

<div class="space"></div>

## Fibers of Homomorphisms

Given the above construction, and noting that normal subgroups correspond{{< link file="normal_subgroup" type="justifications" mod="dag" section="Normal $\Leftrightarrow$ Kernel" >}} to {{< link file="kernel_group_theory" display="kernels" type="references" >}}, we may *a posteriori* define the quotient group of $G$ w.r.t. a homomorphism $f:G\to H$ as the set of fibers of $f$ equipped with the operation $f^{-1}(h_1)\ast f^{-1}(h_2)\coloneqq f^{-1}(h_1h_2)$. Its identity is, of course, $\ker f$. Every such group arise as fibers of $\pi:G\onto G/N$, and conversely, they induce the quotient group $G/\ker f$. <span style="color:red">**TODO** (regular category stuff?).</span>

# Categorical Aspects

## {{< link file="universal_constructions" display="Universal Property" type="references" >}}

Quotient groups satisfy the following universal property:

{{< env type="proposition" >}}

If $N\nsubgrpeq G$ is normal, then $\pi:G\onto G/N$ is initial amongst all homomorphisms $f:G\to H$ such that $N\subseteq\ker f$.

{{< /env >}}

{{< env type="proof" >}}

That $N\subseteq\ker f$ is equivalent to $f$ equating equivalent elements, for which the universal property{{< link file="quotient_set" type="proved_by" mod="dag" >}} of the {{< link file="quotient_set" display="quotient set" type="references" >}} $G/\\!\sim$ furnishes a unique function $f':G/N\to H$ such that $f=f'\circ\pi$. This is a homomorphism since
$$\begin{equation}
    f'([g_1]\ast[g_2])=f'([g_1g_2])=f'(\pi(g_1g_2))=f(g_1g_2)=f(g_1)f(g_2)=f'([g_1])f'([g_2]).\qedin
\end{equation}$$

{{< /env >}}

<div class="space"></div>

**Remark.** <span style="color:red">**TODO** (link with representable functors etc).</span> Also, this shows that $\cat{B}G/\\!\sim$ is the {{< link file="quotient_category" display="quotient category" type="references" >}} by the congruence.

{{< env type="corollary" name="First Isomorphism Theorem" >}}

For any group homomorphism $f:G\to H$, we have $G/\ker f\iso\im f$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

We have $\ker f\nsubgrpeq G$, so $f$ induces a homomorphism $f':G/\ker f\onto\im f$, which is injective since if $f'(g_1\ker f)=f'(g_2\ker f)$, then $f(g_1)=f(g_2)$. Thus $g_1g_2^{-1}\in\ker f$, and hence $g_1\ker f=g_2\ker f$ as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>
