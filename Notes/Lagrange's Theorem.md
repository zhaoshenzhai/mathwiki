---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/10/2022 12:03:14
References:
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: [[Orbit-Stabilizer Theorem]]

``` ad-Theorem
title: Theorem (Lagrange’s Theorem).

Let $H\subseteq G$ be a subgroup of a finite group $G$. Then $\l[G:H\r]\cdot\l|H\r|=\l|G\r|$.

```

<b>Remark.</b> Thus the order of every subgroup $H\subseteq G$ divides the order of $G$. Some immediate corollaries:
* For all $g\in G$, $\ord{g}$ divides $\l|G\r|$. Indeed, since $\ord{g}=\l|\gen{g}\r|$ and $\l|\gen{g}\r|$ divides $\ord{G}$, we are done.

* If $p\coloneqq\l|G\r|$ is prime, then $G=\gen{x}$ for each non-trivial $x\in G$. Indeed, since $\ord{x}$ divides $p$ and $p$ is prime, either $\ord{x}=1$ or $\ord{x}=p$. But $x$ is non-trivial, so $\ord{x}=p$ and hence $\gen{x}=G$.
* If $K\subseteq H\subseteq G$ are all subgroups, then $\l[G:K\r]=\l[G:H\r]\l[H:K\r]$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $n\coloneqq\l[G:H\r]$ be the number of left-cosets of $H$ in $G$. Since the left-cosets of $H$ in $G$ partition $G$, we see that $G=\coprod_{i=1}^ng_iH$. But every coset of $H$ has the same cardinality as $H$, so $\l|g_iH\r|=\l|H\r|$ for all $i\in\l\{1,\dots,n\r\}$. Thus $\l|G\r|=n\l|H\r|=\l[G:H\r]\cdot\l|H\r|$.<span style="float:right;">$\blacksquare$</span>
