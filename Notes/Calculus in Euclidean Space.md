---
mathLink: Calculus in $\R^d$
mathLink-blocks:
    integration: Integration in $\R^d$
    vitali-covering-lemma: Vitali Covering Lemma
---

<div class="topSpace"></div>

Date Created: 27/11/2023 16:47:20
Tags: #Type/Example #In_Progress
^integration

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Lebesgue Differentiation Theorem]], [[Hardy-Littlewood Maximal Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Lebesgue-Stieltjes Measure]], [[Regularity and Tightness]]

``` ad-Example
title: Example (Differentiation and Integration in $\R^d$).

Consider $\R^d$ equipped with the Lebesgue measure $\lambda$.

```

<b>Remark.</b> We have the elementary (yet important) <i>Vitali Covering Lemma</i>. Let $\mc{C}$ be a cover of a measurable set $M\subseteq\R^d$ with open balls. For every $a<\lambda\l(M\r)$, there is a finite subcollection $\mc{C}_a\subseteq\mc{C}$ of pairwise disjoint balls such that $\sum_{B\in\mc{C}_a}\lambda\l(B\r)\geq a/3^d$. ^vitali-covering-lemma
* Indeed, let $N$ be large enough so that $\lambda\l(M\cap B_N\!\l(0\r)\r)>a$, so we may assume that $A$ is bounded. By tightness of $\lambda$, we may further assume that $M$ is compact, so there is a finite subcover $\l\{B_i\r\}_{i=1}^k\subseteq\mc{C}$. Using the greedy algorithm of choosing the smallest ball $B_i$ pairwise disjoint from all previously chosen balls, we obtain a subsequence $\mc{C}_a\coloneqq\{B_{n_j}\}_{j=1}^l$ of balls with increasing radii such that if $B_i\not\in\mc{C}_a$, then there is some $n_j<i$ with the property that $B_i\cap B_{n_j}\neq\em$ implies that the radius of $B_i$ is at most that of $B_{n_j}$. Letting $B_{n_j}^\ast$ denote the ball concentric with $B_{n_j}$ with three times its radius, we see that $B_i\subseteq B_{n_j}^\ast$. Thus $M\subseteq\bigcup_{j<l}B_{n_j}^\ast$, and
$$\begin{equation}
    a<\lambda\l(M\r)\leq\sum_{j<l}\lambda\,(B_{n_j}^\ast)=3^d\sum_{j<l}\lambda\l(B_{n_j}\r)=3^d\sum_{B\in\mc{C}_a}\lambda\l(B\r).\exqedin
\end{equation}$$
