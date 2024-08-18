---
title: Lagrange’s Theorem
date: 2024-06-20T22:43:48-04:00
references: [Alu09]
tags: [Group_Theory]
---

# Statement & Proof

This classical result is fundamental in {{< link file="finite_group" display="finite group" type="references" >}} theory, since it places limitations on the size a {{< link file="subgroup" display="subgroup" type="references" >}} of a finite group can have.

<br>

&emsp;&emsp;For a subgroup $H\substructeq G$ of $G$, let $[G:H]\coloneqq\l|G/H\r|$ be the *index* of $H$ in $G$.

{{< env type="theorem" name="Lagrange" >}}

Let $G$ be a finite group. For every subgroup $H\substructeq G$, we have $\l|G\r|=[G:H]\cdot\l|H\r|$. In particular, $\l|H\r|$ divides $\l|G\r|$.

{{< /env >}}

{{< env type="proof" >}}

Consider the natural left-multiplication {{< link file="group_action" display="action" type="references" >}} of $H$ on $G$, for which we have $\Orb_H(g)=Hg$ and $\Stab_H(g)=\l\\{e\r\\}$ for every $g\in G$, and thus $\l|Hg\r|=\l|H\r|$ by the {{< link file="orbit_stabilizer_theorem" display="Orbit Stabilizer Theorem" type="proved_by" >}}. But then the partition $G=\bigsqcup_{i\in I}\Orb_H(g_i)=\bigsqcup_{i\in I}Hg_i$ gives us
$$\begin{equation}
    \l|G\r|=\sum_{i\in I}\l|Hg_i\r|=\sum_{i\in I}\l|H\r|=\l|I\r|\cdot\l|H\r|,
\end{equation}$$
so $\l|H\r|$ divides $\l|G\r|$. Moreover, we clearly have $\l|I\r|=\l|G/H\r|=[G:H]$.<span style="float:right;">$\blacksquare$</span>

{{< /env >}}

<div class="space"></div>

**Remark.** Instead of using the Orbit-Stabilizer Theorem to show $\l|Hg\r|=\l|H\r|$, one can establish it by showing $H\to Hg:h\mapsto hg$ is a bijection by hand.<span style="float:right;">$\blacklozenge$</span>

<div class="space"></div>

## Corollaries

This simple result is surprisingly useful. Let $G$ be a finite group.
* For all $g\in G$, its {{< link file="order" display="order" type="references" >}} $\ord g$ divides $\l|G\r|$. Indeed, $\ord g=\l|\gen{g}\r|$.
* If $p\coloneqq\l|G\r|$ is prime, then $G$ has no non-trivial subgroups, and{{< link file="cyclic_group" type="references" mod="dag" >}} $G\iso\Z/p\Z$.
* If $K\substructeq H\substructeq G$ are subgroups, then $[G:K]=[G:H]\cdot[H:K]$.

# Converse of Lagrange’s Theorem?

A natural question to ask at this point is whether the converse holds, in the sense that if $d$ divides $\l|G\r|$ for a finite group $G$, is there necessarily a subgroup $H\substructeq G$ with $\l|H\r|=d$? This is *false*, as witnessed by{{< link file="alternating_group" type="references" mod="dag" >}} $G\coloneqq A_4$ and $d\coloneqq 6$.

<br>

&emsp;&emsp;Thus, we ask if this holds for particular values of $d$, or for a special class of finite groups. Some results are as follows.
* *{{< link file="cauchys_theorem" display="Cauchy’s Theorem" type="converses" >}}* states that if $p$ divides $|G|$, then there is a subgroup $H\substructeq G$ of order $p$. This is a stepping stone to the following result of finite group theory.
* *{{< link file="sylow_theorems" display="The Sylow Theorems" type="converses" >}}* states that if $|G|=p^rm$ for some prime $p$ and some $m\perp p$, then there are subgroups $H_i\substructeq G$ of order $p^i$ for all $0\leq i\leq r$, so the converse of Lagrange’s Theorem is fully realized when restricted to a single prime divisor.
