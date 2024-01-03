---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/06/2023 11:21:45
References: #Ref/Lan02
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Basic properties of subgroups]], [[Class Equation]], [[Lagrange's Theorem]]
References: [[Sylow Theorems]], [[Basic properties of p-groups]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: [[Sylow Theorems]]

``` ad-Theorem
title: Theorem (Cauchy’s Theorem).

Let $G$ be a finite group whose order is divisible by a prime $p$. Then $G$ contains an element of order $p$.

```

<b>Remark.</b> This can be deduced from the First Sylow Theorem, which states that if $\l|G\r|=p^rm$ for some $r,m\in\N$ with $p\ndivides m$, then $G$ has a Sylow $p$-subgroup $H$ of order $p^r$. Since $p$-groups are solvable, $H$ admits subgroups of order $p^i$ for all $0\leq i\leq r$, and in particular $H$ has a subgroup of order $p$.

However, the Sylow Theorems require the abelian case of Cauchy’s Theorem as a lemma, so a separate proof is warranted.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We first prove the theorem for when $G$ is abelian.
* We proceed by induction on $\l|G\r|$. Let $H\substruct G$ be a maximal proper subgroup of $G$. If $p$ divides $\l|H\r|$, then we are done by induction. Otherwise, let $x\not\in H$ and set $K\coloneqq\gen{x}$. Since $G$ is abelian, we see that $H\substruct HK\substructeq G$, so maximality of $H$ forces $HK=G$. Then $\l|G\r|=\l|HK\r|=\l|H\r|\l|K\r|/\l|H\cap K\r|$, so $p$ divides $\l|H\r|\l|K\r|$. Thus $p$ divides $\l|K\r|$, so $\ord{x}=pk$ for some $k\in\N$. Thus $\ord{x^k}=\ord{x}/\gcd\l(\ord{x},k\r)=p$, as desired.

In general, we consider the subgroup $Z\l(G\r)$ of $G$, which is abelian. If $p$ divides $\l|Z\l(G\r)\r|$, then $Z\l(G\r)$ contains an element of order $p$ by the abelian case above, so we are done. Otherwise, the class equation gives us
$$\begin{equation}
    \l|G\r|=\l|Z\l(G\r)\r|+\sum_{x\in A}\l[G:C_G\!\l(x\r)\r],
\end{equation}$$
where $A\subseteq G$ is the set of representatives of distinct non-trivial conjugacy classes. Since $p$ divides $\l|G\r|$ but does not divide $\l|Z\l(G\r)\r|$, there must be some $x\in A$ such that $p$ does not divide $\l[G:C_G\!\l(x\r)\r]=\l|G\r|/\l|C_G\!\l(x\r)\r|$. Thus $C_G\!\l(x\r)$ contains a multiple of $p$. Now, since $x\not\in Z\l(G\r)$, we see that $C_G\!\l(x\r)<G$ is a proper subgroup, so the result follows by induction.<span style="float:right;">$\blacksquare$</span>
