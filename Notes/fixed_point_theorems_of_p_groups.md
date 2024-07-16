---
title: Fixed-point Theorems for p-groups
date: 2024-06-21T18:02:41-04:00
references: [Alu09]
tags: [Group_Theory, In_Progress]
mathLink: Fixed-point Theorems for $p$-groups
renderedTitle: Fixed-point Theorems for $p\ $-groups
titleSize: 20
---

# Non-triviality of $Z(G)$

A standard method to study a {{< link file="finite_group" display="finite group" type="references" >}} is to first find its {{< link file="conjugation_action" display="center" type="references" >}}; if non-trivial, we can set up an induction proof for certain existence theorems by {{< link file="quotient_group" display="quotienting" type="references" >}} by $Z(G)$.

<br>

&emsp;&emsp;This is indeed the case for finite {{< link file="p_group" display="$p$-groups" type="references" >}}, which we now show. Throughout, let $G$ be a non-trivial finite $p$-group.

{{< env type="lemma" >}}

If $G$ {{< link file="group_action" display="acts" type="references" >}} on a finite set $S$, then $\l|Z\r|\equiv\l|S\r|\\,\mod\\,p$ where $Z$ is the set of fixed-points of this action.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Letting $A\subseteq S$ contain exactly the elements with non-trivial orbits, we have
$$\begin{equation}
    \l|S\r|=\l|Z\r|+\sum_{a\in A}\l[G:G_a\r]
\end{equation}$$
by the {{< link file="the_class_equation" display="Class Equation" type="proved_by" >}}. Since $G$ is a $p$-group, each summand $\l[G:G_a\r]$ is a power of $p$ greater than $1$, and hence is $0\\,\mod\\,p$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

{{< env type="proposition" >}}

The center $Z(G)$ is nontrivial.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Letting $G$ act on itself by conjugation, the above gives us $\l|Z(G)\r|\equiv\l|G\r|\\,\mod\\,p$. Since $\l|G\r|>1$ is a power of $p$, this shows that $\l|Z(G)\r|$ is a multiple of $p$. As $e\in Z(G)$, we see that $\l|Z(G)\r|\neq0$ and hence $\l|Z(G)\r|\geq p$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

More generally, we have the following

{{< env type="proposition" >}}

If $H\nsubgrpeq G$, then $H\cap Z(G)$ is non-trivial.

<br>

&emsp;&emsp;Furthermore, if $\l|H\r|=p$, then $H\substructeq Z(G)$.
{{< /env >}}

{{< env type="proof" hide="true" >}}

Same as above, by letting $G$ act on $H$ by conjugation.

<br>

&emsp;&emsp;If $\l|H\r|=p$, then every non-trivial $x\in H\cap Z(G)$ generates {{< link file="lagranges_theorem" type="proved_by" mod="dag" >}} $H=\gen{x}\substructeq Z(G)$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

# {{< link file="cauchys_theorem" display="Cauchy’s Theorem" type="references" >}}
