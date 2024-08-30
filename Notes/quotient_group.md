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

These nice descriptions of congruences, kernels, and normal subgroups reflect the underlying structure of $\catgrp$, which we now explore. In particular, it makes $\catgrp$ a {{< link file="regular_category" display="regular category" type="references" >}}, and all the results in this section can be generalized to arbitrary regular categories. Nevertheless, we present them here for sake of completeness and to illustrate how to work with quotient groups.

<div class="space"></div>

## {{< link file="universal_constructions" display="Universal Property" type="references" >}}

Quotient groups satisfy the following universal property.

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

<div class="space"></div>

## The Isomorphism Theorems

Using this universal property, we can begin to understand the structure of homomorphisms.

{{< env type="theorem" name="Homomorphism Theorem" >}}

For any homomorphism $f:G\to H$, we have an isomorphism $G/\ker f\iso\im f$ given by $f':g\ker f\mapsto f(g)$. In particular, $f$ admits a canonical decomposition $f=\iota f'\pi$:

{{< tikz name="canonical_decomposition_groups" width="450" >}}
\begin{equation*}
    \begin{tikzcd}
        G \ar[r, "\pi", twoheadrightarrow] & G/\ker f \ar[r, "\sim", leftrightarrow] & \im f \ar[r, "\iota", hookrightarrow] & H.
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}

{{< /env >}}

{{< env type="proof" hide="false" >}}

We have $\ker f\nsubgrpeq G$, so the universal property of quotients induces a homomorphism $f':G/\ker f\onto\im f$, which is injective since if $f'(g_1\ker f)=f'(g_2\ker f)$, then $f(g_1)=f(g_2)$. Thus $g_1g_2^{-1}\in\ker f$, and hence $g_1\ker f=g_2\ker f$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

**Remark.** One important consequence is that the sequence $0\to K\overset{\iota}{\to}G\overset{f}{\to}H\to0$ is {{< link file="exact_sequence" display="exact" type="references" >}} iff $H\iso G/K$. Indeed, if the sequence is exact, then $\iota$ is injective, and hence $K\iso\ker f$, and thus the Isomorphism Theorem gives $H=\im f\iso G/\ker f\iso G/K$. Conversely, $\iota:K\into G$ is the inclusion, $f:G\to H\iso G/K$ is the projection, and $\im\iota=K=\ker f$.

<div class="space"></div>

&emsp;&emsp;The next Isomorphism Theorems deal with the structure of {{< link file="subgroup" display="subgroups" type="references" >}} of $G$, and are extremely useful.

{{< env type="theorem" name="Calculus of Subgroups" >}}

If $H\substructeq G$ and $N\nsubgrpeq G$, then $N\nsubgrpeq HN\substructeq G$, $H\cap N\nsubgrpeq H$, and $HN/N\iso H/(H\cap N)$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

That $HN\substructeq G$ follows{{< link file="subgroup_products.md" type="proved_by" mod="dag" section="Criteria for $HK\substructeq G$" >}} since $N$ is normal, and the rest of the compatibility assertions are easily verified. For the isomorphism, let $f:H\onto HN/N:h\mapsto hN$ and observe that the sequence $0\to H\cap N\into H\onto HN/N\to0$ is exact.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

{{< env type="theorem" name="Lattice Isomorphism Theorem" >}}

Let $N\nsubgrpeq G$ be a normal subgroup. Then we have an isomorphism
$$\begin{equation}
    \phi:\l\\{\textrm{subgroups of }G\textrm{ containing }N\r\\}\to\l\\{\textrm{subgroups of }G/N\r\\}
\end{equation}$$
of (bounded) {{< link file="lattice" display="lattices" type="references" >}}, which maps $H\mapsto H/N$. Moreover, we have $H\nsubgrpeq G$ iff $\phi(H)\nsubgrpeq\phi(G)$, in which case $\phi(G)/\phi(H)\iso G/H$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Let $N\substructeq H\substructeq G$. Its clear that $H/N\substructeq G/N$ is a subgroup, and that $\phi$ is a lattice homomorphism is easily checked (recalling that meets in these lattices are $H\cap H'$ and joins are $\gen{H,H'}$). For a subgroup $K\substructeq G/N$, we let $\psi(K)\coloneqq\pi^{-1}(K)$ be the preimage under the projection $\pi:G\onto G/N$. Then $\psi(K)\substructeq G$ is a subgroup containing $N$ because $\pi(N)$ is the identity in $G/N$, whence $\pi(N)\subseteq K$. It can be checked that $\phi(\psi(K))=K$ and $\psi(\phi(H))=H$, so $\phi$ is a bijection, and hence a lattice isomorphism.

<br>

&emsp;&emsp;Suppose that $H\nsubgrpeq G$, and consider the projection $\pi:G\onto G/H$. Since $H$ contains $N$, we see that $N\subseteq\ker\pi$, so it induces a homomorphism $\pi':G/N\to G/H$. Observe that $\ker\pi'=H/N$, so $\phi(H)=H/N\nsubgrpeq G/N=\phi(G)$ as desired. Conversely, consider the homomorphism $G\onto G/N\onto(G/N)/(H/N)=\phi(G)/\phi(H)$. Its kernel is $H$, so $H\nsubgrpeq G$, and also $G/H\iso\phi(G)/\phi(H)$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
