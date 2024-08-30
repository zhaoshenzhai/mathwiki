---
title: Fixed-point Theorems for p-groups
date: 2024-06-21T18:02:41-04:00
references: [Alu09]
tags: [Group_Theory]
mathLink: Fixed-point Theorems for $p$-groups
renderedTitle: Fixed-point Theorems for $p\ $-groups
titleSize: 20
---

A standard method to study a {{< link file="finite_group" display="finite group" type="references" >}} is to first find its {{< link file="conjugation_action" display="center" type="references" >}}; if non-trivial, we can set up an induction proof for certain existence theorems by {{< link file="quotient_group" display="quotienting" type="references" >}} by $Z(G)$.

<br>

&emsp;&emsp;The results here, used in tandem with {{< link file="cauchys_theorem" display="Cauchy’s Theorem" type="references" >}}, are the backbone for the proofs of the {{< link file="sylow_theorems" display="Sylow Theorems" type="references" >}}.

# Non-triviality of $Z(G)$

This is indeed the case for finite {{< link file="p_group" display="$p$-groups" type="references" >}}, which we now show. Fix a prime $p$.

{{< env type="proposition" >}}

If $G$ is a $p$-group {{< link file="group_action" display="acting" type="references" >}} on a finite set $S$, then $\l|Z\r|\equiv\l|S\r|\\,\mod\\,p$, where $Z$ is the set of fixed-points of this action.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Letting $A\subseteq S$ contain exactly the elements with non-trivial orbits, we have
$$\begin{equation}
    \l|S\r|=\l|Z\r|+\sum_{a\in A}\l[G:G_a\r]
\end{equation}$$
by the {{< link file="the_class_equation" display="Class Equation" type="proved_by" >}}. Since $G$ is a $p$-group, each summand $\l[G:G_a\r]$ is a power of $p$ greater than $1$, and hence is $0\\,\mod\\,p$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

{{< env type="corollary" >}}

If $G$ is a $p$-group, the center $Z(G)$ is nontrivial.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Letting $G$ act on itself by conjugation, the above gives us $\l|Z(G)\r|\equiv\l|G\r|\\,\mod\\,p$. Since $\l|G\r|>1$ is a power of $p$, this shows that $\l|Z(G)\r|$ is a multiple of $p$. As $e\in Z(G)$, we see that $\l|Z(G)\r|\neq0$ and hence $\l|Z(G)\r|\geq p$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

# Structure of $p$-subgroups

We now apply the previous results to understand the $p$-subgroups of a finite group $G$.

<br>

&emsp;&emsp;Let $H\substructeq G$ of a $p$-subgroup of a finite group $G$.

{{< env type="lemma" >}}

We have{{< link file="conjugation_action" type="references" mod="dag" >}} $[N_G(H):H]\equiv[G:H]\\,\mod\\,p$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

We are done if $H$ is trivial. Otherwise, $H$ acts on $G/H$ by left-multiplication, whose fixed-points are the cosets $gH$ such that $h(gH)=gH$ for all $h\in H$, which are those such that $H\subseteq g^{-1}Hg$ $-$ or equivalently, $g\in N_G(H)$.

<br>

&emsp;&emsp;Thus, the fixed-points thereof are the cosets $gH$ of $H$ where $g\in N_G(H)$, of which there are $[N_G(H):H]$ many. Since $H$ is a $p$-group, we are done.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

{{< env type="proposition" >}}

If $H$ is not a {{< link file="sylow_theorems" display="$p$-Sylow subgroup" type="references" >}} of $G$, then there is a $p$-subgroup $K\substructeq G$ such that $H\nsubgrpeq K$ and $[K:H]=p$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Since $H$ is not a $p$-Sylow subgroup, we see that $p$ divides $[G:H]$, and hence $p$ divides $[N_G(H):H]$ too. By {{< link file="cauchys_theorem" display="Cauchy’s Theorem" type="proved_by" >}}, there is an element in $N_G(H)/H$ of order $p$, which generates a cyclic subgroup $K_0$ with $|K_0|=p$. Set $K\coloneqq\pi^{-1}(K_0)\substructeq G$, which contains $H$ since $\pi(H)$ is the identity in $K_0$. Clearly $\pi(H)\nsubgrpeq\pi(K)$, so by the {{< link file="subgroup" display="Lattice Isomorphism Theorem" type="proved_by" section="Lattice Isomorphism Theorem" >}}, we have $H\nsubgrpeq K$ and
$$\begin{equation}
    K/H\iso\pi(K)/\pi(H)\iso K_0.
\end{equation}$$
Thus $[K:H]=|K_0|=p$, as desired.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}
