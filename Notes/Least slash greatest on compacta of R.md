---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/12/2022 21:25:31
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Compact implies bounded]], [[Compact implies closed (Hausdorff)]], [[Sequential Limit Theorems in R]], [[Sequential characterization of closed sets (metric)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X\subseteq\R$ be compact. Then $X$ has a least and a greatest element.

```

_Proof_. Since $X$ is compact, it is closed and bounded. Being bounded, Dedekind-completeness of $\R$ furnishes a supremum $\alpha\coloneqq\sup X\in\R$ and an infimum $\beta\coloneqq\inf X\in\R$. Now, for each $n\in\N^+$, since $\alpha$ (resp. $\beta$) is the _least_ upper bound (resp. _greatest_ upper bound) of $X$, there exist some $x_n,y_n\in X$ such that
$$\begin{equation*}
    \alpha-\frac{1}{n}<x_n<\alpha\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \beta<y_n<\beta+\frac{1}{n}.
\end{equation*}$$
Since $\lim\limits_{n\to\infty}\alpha-\frac{1}{n}=\alpha$ and $\lim\limits_{n\to\infty}\beta+\frac{1}{n}=\beta$, we see, by the Squeeze Theorem, that $\lim\limits_{n\to\infty}x_n=\alpha$ and $\lim\limits_{n\to\infty}y_n=\beta$. But $X$ is closed, so $X$ contains the limit of all converging sequences in $X$. Hence $\alpha,\beta\in X$.<span style="float:right;">$\blacksquare$</span>
