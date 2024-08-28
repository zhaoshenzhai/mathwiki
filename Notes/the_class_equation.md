---
title: The Class Equation
date: 2024-06-21T14:50:24-04:00
references: [Alu09]
tags: [Group_Theory]
---

# Statement & Proof

A {{< link file="group" display="group" type="references" >}} $G$ {{< link file="group_action" display="acting" type="references" >}} on a finite set $X$ naturally partitions $X$ into its orbits $X=\bigsqcup_{i\in I}Gx_i$, which can either be trivial or non-trivial. The trivial ones are singletons $\l\\{x_i\r\\}$. We call those the *fixed points* of the action, denoted $Z\coloneqq\l\\{x\in X\st gx=x\textrm{ for all }g\in G\r\\}$. If some structure is known about the non-trivial orbits, then this partition allows us to ‘glean’ information on $\l|Z\r|$.

<br>

&emsp;&emsp;More precisely, we have the following relation between $|X|$ and $|Z|$.

{{< env type="theorem" name="The Class Equation" >}}

Let $G\act X$ act on a finite set $X$. Then
$$\begin{equation}
    \l|X\r|=\l|Z\r|+\sum_{a\in A}\l[G:G_a\r],
\end{equation}$$
where $A\subseteq X$ contain exactly the elements $a\in X$ with $\l|Ga\r|>1$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

Since we have a partition $X=\bigsqcup_{i\in I}Gx_i$ and $\l|Gx\r|=1$ for all $x\in Z$, so splitting off the two cases gives us
$$\begin{equation}
    \l|X\r|=\l|Z\r|+\sum_{a\in A}\l|Ga\r|=\l|Z\r|+\sum_{a\in A}\l|G\r|/\l|G_a\r|,
\end{equation}$$
where the last equality follows from {{< link file="orbit_stabilizer_theorem" display="Orbit-Stabilizer" type="proved_by" >}}. By {{< link file="lagranges_theorem" display="Lagrange’s Theorem" type="proved_by" >}}, we have $[G:G_a]=\l|G\r|/\l|G_a\r|$ for each such $a$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

## {{< link file="conjugation_action" display="Conjugation Action" type="examples" >}}

Let $G$ be a {{< link file="finite_group" display="finite group" type="references" >}}, acting on itself by conjugation via $\phi$. With $Z=Z(G)\coloneqq\ker\phi$ the *center* of $G$ and with $Z_G(a)$ the stabilizer of $a$, we have the classical Class Equation, stating that
$$\begin{equation}
    \l|G\r|=\l|Z(G)\r|+\sum_{a\in A}[G:Z_G(a)],
\end{equation}$$
where $A\subseteq G$ contain exactly the elements with non-trivial conjugacy class.

<br>

&emsp;&emsp;This can sometimes be used to show that $Z(G)$ is non-trivial, giving us a *fixed-point theorem*. See, for instance, how it applies{{< link file="fixed_point_theorems_of_p_groups" type="examples" mod="dag" >}} to {{< link file="p_group" display="$p$-groups" type="references" >}}.
