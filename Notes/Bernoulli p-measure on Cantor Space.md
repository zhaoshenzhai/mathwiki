---
mathLink: Bernoulli $p$-measure on $2^\N$
---

<div class="topSpace"></div>

Date Created: 13/09/2023 17:12:59
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Cantor Space#^compact-iff-finite]]
References: <i>Not Applicable</i>
Justifications: [[Caratheodory's Extension Theorem]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

For all $p\in\l(0,1\r)$, the Cantor space $2^\N$ admits a premeasure $\mu_p$ on the algebra $\mc{A}$ of clopen sets in $2^\N$, defined as follows.
* For all words $w\in2^{<\N}$, set $\mu_p\!\l[w\r]\coloneqq p^{\#1\l(w\r)}\l(1-p\r)^{\#0\l(w\r)}$.
* For all $A\in\mc{A}$, partition $A=\bigcup_{i<n}\l[w_i\r]$ and set $\mu_p\!\l(A\r)\coloneqq\sum_{i<n}\mu_p\!\l[w_i\r]$.

This premeasure extends to the <b>Bernoulli $p$-measure</b> on the $\sigma$-algebra $\gen{\mc{A}}_\sigma$.

```

<i>Proof.</i> First, note that every $A\in\mc{A}$ is a <i>finite</i> union of cylinders; indeed, since the cylinders form a basis, we have $A=\bigcup_w\l[w\r]$ where $w$ ranges over some subset of $2^{<\N}$. But $A$ is closed too, hence compact, so we have a finite subcover $A=\bigcup_{i<n}\l[w_i\r]$. It remains to check that $\mu\l(A\r)$ is well-defined and that it is countably additive. The latter is immediate, however, since every infinite partition $A=\bigsqcup_{n\in\N}A_n$ admits a finite subcover and thus contradicting that $\l\{A_n\r\}$ are disjoint and non-empty. To show well-definition, we first show that for any finite word $w\in2^{<\N}$ and $l>0$, we have $\mu_p\!\l[w\r]=\sum_{u\in2^l}\mu_P\!\l[wu\r]$. But this follows by induction from the $l=1$ case as
$$\begin{equation}
    \sum_{u\in2}\mu_p\!\l[wu\r]=\mu_p\!\l[w0\r]+\mu_p\!\l[w1\r]=\mu_p\!\l[w\r]\l(1-p\r)+\mu_p\!\l[w\r]p=\mu_p\!\l[w\r].
\end{equation}$$
Finally, if $\mc{P}$ and $\mc{Q}$ are two finite partitions of $A$, then $\sum_{P\in\mc{P}}\mu_p\!\l(P\r)=\sum_{Q\in\mc{Q}}\mu_p\!\l(Q\r)$. Indeed, let $\mc{R}$ be a common refinement of $\mc{P}$ and $\mc{Q}$, i.e. let each $R\in\mc{R}$ be a cylinder contained in some $P\in\mc{P}$ and some $Q\in\mc{Q}$ such that $\bigcup\mc{R}=A$. Further refine $\mc{R}$ into a partition $\mc{R}'$ of $A$ such that for each $C\in\mc{P}\cup\mc{Q}$, the collection $\mc{R}_C\coloneqq\l\{R\in\mc{R}'\st R\subseteq C\r\}$ has the same base-length. Observe then that
$$\begin{equation}
    \sum_{P\in\mc{P}}\mu_p\!\l(P\r)=\sum_{P\in\mc{P}}\sum_{R\in\mc{R}_P}\mu_p\!\l(R\r)=\sum_{R\in\mc{R}'}\mu_p\!\l(R\r)=\sum_{Q\in\mc{Q}}\sum_{R\in\mc{R}_Q}\mu_p\!\l(R\r)=\sum_{Q\in\mc{Q}}\mu_p\!\l(Q\r).\qedin
\end{equation}$$
