---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 06/05/2023 02:17:20
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Lagrange's Theorem]], [[Divisor sum of Euler's Totient function]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G$ be a finite group of order $n$. If every $m\divides n$ admits at most one subgroup of order $m$, then $G$ is cyclic.

```

<i>Proof.</i> For any $g\in G$ of order $m$ (which may not exist), consider the unique cyclic subgroup $\gen{g}\subgrpeq G$ of order $m$ that it generates. Since this is the unique subgroup of order $m$, every element of order $m$ in $G$ generates the same subgroup $\gen{g}$. Those elements are of the form $g^l$ for some $l\in\Z$, which generate $\gen{g}$ iff $l\perp m$, so there are $\phi\l(m\r)$-many elements in $G$ of order $m$. By Lagrange’s Theorem, the order of every element divides $n$, so
$$\begin{equation}
    n=\sum_{m\divides n}\#\l\{g\in G\st\ord{g}=m\r\}=\sum_{m\divides n}\phi\l(m\r)\epsilon_m
\end{equation}$$
where $\epsilon_m\coloneqq\pm1$ if there exist an element $g\in G$ of order $m$ or not. But since $n=\sum_{m\divides n}\phi\l(m\r)$, we see that $\epsilon_m=1$ for all $m\divides n$ and in particular that $\epsilon_n=1$. Thus there is an element $g\in G$ of order $n$, which is our desired generator of $G$.<span style="float:right;">$\blacksquare$</span>
