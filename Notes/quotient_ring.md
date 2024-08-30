---
title: Quotient Ring
date: 2024-08-29T17:01:19-04:00
references: []
tags: [In_Progress]
---

# Motivation & Definition

Fix an {{< link file="equivalence_relation" display="equivalence relation" type="references" >}} on a {{< link file="ring" display="ring" type="references" >}} $R$ and consider the {{< link file="quotient_set" display="quotient set" type="references" >}} $R/\\!\sim$, which we which to equip with a ring structure.

<br>

&emsp;&emsp;Firstly, since $R$ has an underlying ({{< link file="abelian_group" display="abelian" type="references" >}}) {{< link file="group" display="group" type="references" >}} $G\coloneqq(R,+)$, we need $\sim$ to be a {{< link file="congruence_relation" display="congruence" type="references" >}} of $G$ for $R/\\!\sim$ to be a group. This induces{{< link file="normal_subgroup" type="justifications" mod="dag" section="Normal $\Leftrightarrow$ Congruence" >}} a ({{< link file="normal_subgroup" display="normal" type="references" >}}) {{< link file="subgroup" display="subgroup" type="references" >}} $\mf{a}\nsubgrpeq G$, for which $R/\mf{a}$ is its {{< link file="quotient_group" display="quotient group" type="references" >}}. We need to make $R/\\!\sim$ into a ring so that $\pi:R\onto R/\\!\sim$ is a ring homomorphism, and we show that this multiplication is well-defined iff $\mf{a}\nsubgrpeq R$ is an ideal.

{{< env type="definition" >}}

Let $\mf{a}\nsubgrpeq R$ be an ideal. The *quotient ring* of $R$ by $\mf{a}$ is the quotient group $R/\mf{a}$ equipped with the unique operation $\ast:R/\mf{a}\times R/\mf{a}\to R/\mf{a}$ making $\pi:R\onto R/\mf{a}$ a ring homomorphism; that is, let $(r+\mf{a})\ast(s+\mf{a})\coloneqq rs+\mf{a}$ for all $r,s\in R$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

If $\mf{a}\nsubgrpeq R$ is an ideal, then $\ast$ is well-defined since $\sim$ respects multiplication and $r\sim r'$ iff $r-r'\in\mf{a}$. Conversely, if $\pi:R\onto R/\mf{a}$ is a ring homomorphism, then its {{< link file="kernel_ring_theory" display="kernel" type="references" >}} is $\mf{a}$, so it is an ideal.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
