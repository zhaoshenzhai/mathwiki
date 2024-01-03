<div class="topSpace"></div>

Date Created: 27/11/2023 23:26:39
References:
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Regularity and Tightness]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Vitali Covering lemma).

Consider $\tpl{\R^d,\lambda}$ with the Lebesgue measure and let $\mc{C}$ be a cover of a measurable set $M\subseteq\R^d$ with open balls. For every $a<\lambda\l(M\r)$, there is a finite subcollection $\mc{C}_a\subseteq\mc{C}$ of pairwise disjoint balls such that $\sum_{B\in\mc{C}_a}\lambda\l(B\r)\geq a/3^d$.

```

<i>Proof.</i> Let $N$ be large enough so that $\lambda\l(M\cap B_N\!\l(0\r)\r)>a$, so we may assume that $A$ is bounded. By tightness of $\lambda$, we may further assume that $M$ is compact, so there is a finite subcover $\l\{B_i\r\}_{i=1}^k\subseteq\mc{C}$. Using the greedy algorithm of choosing the smallest ball $B_i$ pairwise disjoint from all previously chosen balls, we obtain a subsequence $\mc{C}_a\coloneqq\{B_{n_j}\}_{j=1}^l$ of balls with increasing radii such that if $B_i\not\in\mc{C}_a$, then there is some $n_j<i$ with the property that $B_i\cap B_{n_j}\neq\em$ implies that the radius of $B_i$ is at most that of $B_{n_j}$. Letting $B_{n_j}^\ast$ denote the ball concentric with $B_{n_j}$ with three times its radius, we see that $B_i\subseteq B_{n_j}^\ast$. Thus $M\subseteq\bigcup_{j<l}B_{n_j}^\ast$, and we have
$$\begin{equation}
    a<\lambda\l(M\r)\leq\sum_{j<l}\lambda\,(B_{n_j}^\ast)=3^d\sum_{j<l}\lambda\l(B_{n_j}\r)=3^d\sum_{B\in\mc{C}_a}\lambda\l(B\r).\qedin
\end{equation}$$
