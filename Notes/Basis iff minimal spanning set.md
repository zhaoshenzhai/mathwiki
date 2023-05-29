---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/01/2023 09:43:23
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Steinitz Exchange Lemma]], [[Linearly dependent iff exists span redundant element]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be a $K$-vector space and consider an indexed subset $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ of $V$. Then $\mc{B}$ is an basis for $V$ iff it is a minimal spanning set of $V$.

```

<i>Proof.</i>
* ($\Rightarrow$): Suppose that $\mc{C}\coloneqq\l\{c_1,\dots,c_m\r\}$ spans $V$ for some $m\in\N^+$. Then, since $\mc{B}$ is linearly independent, we see that $n\leq m$. But $\mc{C}$ was arbitrary, so $\mc{B}$ is a minimal spanning set for $V$.

* ($\Leftarrow$): Let $\mc{B}$ be a minimal spanning set of $V$ and suppose, for sake of contradiction, that $\mc{B}$ is linearly dependent. Then there exists some $2\leq l\leq n$ such that $b_l\in\span\l\{b_1,\dots,b_{l-1}\r\}$, so $\span\l\{b_1,\dots,b_{l-1}\r\}=V$, a contradiction.<span style="float:right;">$\blacksquare$</span>
