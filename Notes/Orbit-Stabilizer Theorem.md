<div class="top Space"></div>

Date Created: 05/05/2023 14:32:11
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Transitive action iff left-multiplication on quotient by stabilizer]]
References: [[Lagrange's Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Orbit-Stabilizer).

Let $G$ be a group acting on a set $X$ and fix $x\in X$. Then there is a bijection between the orbit $Gx$ and cosets $G/G_x$ of the stabilizer $G_x$, so $\l|Gx\r|=\l[G:G_x\r]$.

```

<b>Remark.</b> If $G$ is finite, then $\l|Gx\r|=\l[G:G_x\r]=\l|G\r|/\l|G_x\r|$ by Lagrange’s Theorem. Thus $\l|Gx\r|$ divides $\l|G\r|$, which is a strong constraint.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> This result also generalizes Lagrange’s Theorem. Indeed, let $H\subgrpeq G$ be a subgroup and consider the left-multiplication action of $H$ on $G$. For all $g\in G$, the orbit $Hg$ is simply a right coset of $H$ and the stabilizer $H_g$ is trivial. Since $G=\coprod_{i\in I}Hg_i$, we see that $\l|G\r|=\sum_{i\in I}\l|Hg_i\r|=\sum_{i\in I}\l[H:H_{g_i}\r]=\sum_{i\in I}\l|H\r|$, so $\l|H\r|$ divides $\l|G\r|$. Moreover, $\l|I\r|$ is precisely $\l[G:H\r]$, which recovers Lagrange’s Theorem.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Restricting the action on $X$ to transitively act on the orbit $Gx$, we see that $Gx$ is equivariant to $G/G_x$ with the left-multiplication action. In particular, we have $\l|Gx\r|=\l|G/G_x\r|$ and the result follows.<span style="float:right;">$\blacksquare$</span>
