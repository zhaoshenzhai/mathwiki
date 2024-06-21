---
title: The Class Equation
date: 2024-06-21T14:50:24-04:00
references: [Alu09]
tags: [Group_Theory]
---

# Statement & Proof

A {{< link file="group" display="group" type="references" >}} $G$ {{< link file="group_action" display="acting" type="references" >}} on a finite set $S$ naturally partitions $S$ into its orbits $S=\bigsqcup_{i\in I}Gs_i$, which can either be trivial or non-trivial.
* The trivial ones are singletons $\l\\{s_i\r\\}$ for which each $s_i$ is fixed by all $g\in G$. We call those the *fixed points* of the action, denoted $Z\coloneqq\l\\{s\in S\st gs=s\textrm{ for all }g\in G\r\\}$.
* If some structure is known about the non-trivial orbits, then this partition gives us information on the number $\l|Z\r|$ of fixed points of this action.

{{< env type="theorem" name="The Class Equation" >}}

Let $G\act S$ act on a finite set $S$. Then
$$\begin{equation}
    \l|S\r|=\l|Z\r|+\sum_{a\in A}\l[G:G_a\r],
\end{equation}$$
where $A\subseteq S$ contain exactly the elements $a\in S$ with $\l|Ga\r|>1$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Since we have a partition $S=\bigsqcup_{i\in I}Gs_i$ and $\l|Gs\r|=1$ for all $s\in Z$, splitting off the two cases gives us
$$\begin{equation}
    \l|S\r|=\l|Z\r|+\sum_{a\in A}\l|Ga\r|=\l|Z\r|+\sum_{a\in A}\l|G\r|/\l|G_a\r|,
\end{equation}$$
where the last equality follows from {{< link file="orbit_stabilizer_theorem" display="Orbit-Stabilizer" type="proved_by" >}}. By {{< link file="lagranges_theorem" display="Lagrange’s Theorem" type="proved_by" >}}, we have $[G:G_a]=\l|G\r|/\l|G_a\r|$ for each such $a$, so the result follows.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

We can sometimes use this to show that $Z\neq\em$, giving us a *fixed-point theorem*. See, for instance, how it applies to {{< link file="p_group" display="$p$-groups" type="examples" >}}.

<div class="space"></div>

## Conjugation Action

Let $G$ be a {{< link file="finite_group" display="finite group" type="references" >}}, acting on itself by {{< link file="conjugation_action" display="conjugation" type="examples" >}} via $\phi$. With $Z=Z(G)\coloneqq\ker\phi$ the *center* of $G$ and with $Z_G(a)$ the stabilizer of $a$, we have the classical Class Equation.

{{< env type="corollary" >}}

Let $G$ be a finite group acting on itself by conjugation. Then
$$\begin{equation}
    \l|G\r|=\l|Z(G)\r|+\sum_{a\in A}[G:Z_G(a)],
\end{equation}$$
where $A\subseteq G$ contain exactly the elements with non-trivial conjugacy class.

{{< /env >}}
