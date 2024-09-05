---
title: Quotient Ring
date: 2024-08-29T17:01:19-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix an {{< link file="equivalence_relation.md" display="equivalence relation" type="references" >}} on a {{< link file="ring.md" display="ring" type="references" >}} $R$ and consider the {{< link file="quotient_set.md" display="quotient set" type="references" >}} $R/\\!\sim$, which we want to equip with a ring structure.

<br>

&emsp;&emsp;Firstly, since $R$ has an underlying ({{< link file="abelian_group.md" display="abelian" type="references" >}}) {{< link file="group.md" display="group" type="references" >}} $G\coloneqq(R,+)$, we need $\sim$ to be a {{< link file="congruence_relation.md" display="congruence" type="references" >}} of $G$ for $R/\\!\sim$ to be a group. This induces{{< link file="normal_subgroup.md" type="justifications" mod="dag" section="Normal $\Leftrightarrow$ Congruence" >}} a ({{< link file="normal_subgroup.md" display="normal" type="references" >}}) {{< link file="subgroup.md" display="subgroup" type="references" >}} $\mf{a}\nsubgrpeq G$, for which $R/\mf{a}$ is its {{< link file="quotient_group.md" display="quotient group" type="references" >}}. We need to make $R/\\!\sim$ into a ring so that $\pi:R\onto R/\\!\sim$ is a ring homomorphism, and we show that this multiplication is well-defined iff $\mf{a}\nsubgrpeq R$ is an ideal.

{{< env type="definition" >}}

Let $\mf{a}\nsubgrpeq R$ be an ideal. The *quotient ring* of $R$ by $\mf{a}$ is the quotient group $R/\mf{a}$ equipped with the unique operation $\ast:R/\mf{a}\times R/\mf{a}\to R/\mf{a}$ making $\pi:R\onto R/\mf{a}$ a ring homomorphism; that is, let $(r+\mf{a})\ast(s+\mf{a})\coloneqq rs+\mf{a}$ for all $r,s\in R$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

If $\mf{a}\nsubgrpeq R$ is an ideal, then $\ast$ is well-defined since $\sim$ respects multiplication and $r\sim r'$ iff $r-r'\in\mf{a}$. Conversely, if $\pi:R\onto R/\mf{a}$ is a ring homomorphism, then its {{< link file="kernel_ring_theory.md" display="kernel" type="references" >}} is $\mf{a}$, so it is an ideal.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

## {{< link file="universal_constructions.md" display="Universal Property" type="references" >}}

Quotient rings satisfy the following universal property.

{{< env type="proposition" >}}

If $\mf{a}\nsubgrpeq R$ is an ideal, then $\pi:R\onto R/\mf{a}$ is initial amongst all homomorphisms $f:R\to S$ such that $\mf{a}\subseteq\ker f$.

<br>

&emsp;&emsp;Thus, for any ring homomorphism $f:R\to S$, we have a ring isomorphism $R/\ker f\iso\im f$.

{{< /env >}}

{{< env type="proof" hide="true" >}}

By the same universal property for groups{{< link file="quotient_group.md" type="proved_by" mod="dag" section="Categorical Aspects" >}}, we have a unique group homomorphism $f':R/\mf{a}\to S$ such that $f=f'\circ\pi$. This is a ring homomorphism since
$$\begin{equation}
    f'((r+\mf{a})\ast(s+\mf{a}))=f'(rs+\mf{a})=f(rs)=f(r)f(s)=f'(r+\mf{a})f'(s+\mf{a}).
\end{equation}$$
Finally, we have an isomorphism $R/\ker f\iso\im f$ as groups, which is easily checked to be a ring isomorphism.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

The other ‘Isomorphism Theorems’ follow immediately from the corresponding theorems for groups{{< link file="quotient_group.md" type="proved_by" mod="dag" section="The Isomorphism Theorems" >}}; one simply replaces all instances of ‘normal subgroup’ with ‘ideal’, and verify that all morphisms involved are ring homomorphisms. Thus, we will only state them.

{{< env type="theorem" name="Calculus of Ideals" >}}

If $S\substructeq R$ and $\mf{a}\nsubgrpeq R$, then $\mf{a}\nsubgrpeq S+\mf{a}\substructeq R$, $S\cap\mf{a}\nsubgrpeq S$, and $(S+\mf{a})/\mf{a}\iso S/(S\cap\mf{a})$.

{{< /env >}}

{{< env type="theorem" name="Lattice Isomorphism Theorem" >}}

Let $\mf{a}\nsubgrpeq R$ be an ideal. Then we have an isomorphism
$$\begin{equation}
    \phi:\l\\{\textrm{subrings of }R\textrm{ containing }\mf{a}\r\\}\to\l\\{\textrm{subrings of }R/\mf{a}\r\\}
\end{equation}$$
of (bounded) {{< link file="lattice.md" display="lattices" type="references" >}}, which maps $S\mapsto S/\mf{a}$. Moreover, we have $S\nsubgrpeq R$ iff $\phi(S)\nsubgrpeq\phi(R)$, in which case $\phi(R)/\phi(S)\iso R/S$.


{{< /env >}}
