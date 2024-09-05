---
title: The Sylow Theorems
date: 2024-07-16T14:47:17-04:00
references: [Alu09]
tags: [Group_Theory/Later]
---

# Statements & Proofs

Let $G$ be a {{< link file="finite_group.md" display="finite group" type="references" >}}. By {{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="references" >}}, every {{< link file="subgroup.md" display="subgroup" type="references" >}} $H\substructeq G$ must have order dividing $|G|$. The converse is not necessarily true; that is, if $d$ divides $|G|$, there *may not* be a subgroup $H\substructeq G$ with order $d$.

<br>

&emsp;&emsp;However, that $\Z$ is a {{< link file="unique_factorization_domain.md" display="UFD" type="references" >}} motivates us to write $|G|=p^rm$ for some prime $p$ not dividing $m$. Then, it turns out that there is a subgroup $S_p\substructeq G$ with order $p^r$, called a *$p$-Sylow subgroup* of $G$, and we a lot of control over their existence (*Sylow I*), their structure (*Sylow II*), and the number of $p$-Sylow subgroups (*Sylow III*):

{{< env type="theorem" name="The Sylow Theorems" >}}

Let $G$ be a finite group and let $p$ be a prime divisor of $|G|$. Write $|G|=p^rm$, with $m\perp p$.
1. <span style="color:gray">(Sylow I).</span> $G$ contains a $p$-Sylow subgroup $S_p$.
2. <span style="color:gray">(Sylow II).</span> All $p$-Sylow subgroups of $G$ are conjugate and every $p$-subgroup $H\substructeq G$ extends to a $p$-Sylow subgroup.
3. <span style="color:gray">(Sylow III).</span> The number $n_p$ of all $p$-Sylow subgroups of $G$ divides $m$ and is congruent to $1$ modulo $p$.

{{< /env >}}

{{< env type="proof" hide="false" >}}

By {{< link file="cauchys_theorem.md" display="Cauchy’s Theorem" type="proved_by" >}}, let $H_1\substructeq G$ be of order $p$, and extend{{< link file="fixed_point_theorems_of_p_groups.md" type="proved_by" mod="dag" section="Structure of $p$-subgroups" >}} it inductively to obtain a ({{< link file="normal_subgroup.md" display="normal" type="references" >}}) series $H_1\nsubgrp H_2\nsubgrp\cdots\nsubgrp H_k$, with each $[H_{i+1}:H_i]=p$. Hence, we have $|H_i|=p^i$, so continuing this way until $k=r$ gives us the desired $p$-Sylow subgroup $S_p$.

<br>

&emsp;&emsp;For Sylow II, we need to show that if $P$ is a $p$-Sylow subgroup, then $P=gS_pg^{-1}$ for some $g\in G$. Indeed, let $P$ act on $G/S_p$ by left-multiplication, so there are{{< link file="fixed_point_theorems_of_p_groups.md" type="proved_by" mod="dag" section="Non-triviality of $Z(G)$" >}} $[G:S_p]$ number of fixed points modulo $p$. But $[G:S_p]\perp p$, so this action admits a fixed point $gS_p$ for some $g\in G$. Hence $g^{-1}Pg\substructeq S_p$, so $P=gS_pg^{-1}$ by order considerations.

<br>

&emsp;&emsp;Finally, note that $n_p$ is the cardinality of the {{< link file="conjugation_action.md" display="conjugacy class" type="references" section="Action on Subgroups" >}} of $S_p$, which by {{< link file="orbit_stabilizer_theorem.md" display="Orbit-Stabilizer" type="proved_by" >}} is $[G:N_G(S_p)]$, so{{< link file="lagranges_theorem.md" display="Lagrange’s Theorem" type="proved_by" mod="dag" >}}
$$\begin{equation}
    m=[G:S_p]=[G:N_G(S_p)]\cdot[N_G(S_p):S_p]=n_p\cdot[N_G(S_p):S_p].
\end{equation}$$
Thus $n_p\divides m$. Furthermore, we have by the {{< link file="fixed_point_theorems_of_p_groups.md" display="fixed-point theorems" type="proved_by" >}} of $S_p$ that
$$\begin{equation}
    m=[G:S_p]\equiv[N_G(S_p):S_p]\\,\mod\\,p,
\end{equation}$$
so $mn_p\equiv m\\,\mod\\,p$. As $m\perp p$ and $p$ is prime, this gives $n_p\equiv1\\,\mod\\,p$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

# Applications
