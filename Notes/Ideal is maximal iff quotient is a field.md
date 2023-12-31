---
mathLink: Ideal $\mf{a}$ maximal $\Leftrightarrow$ quotient $R/\mf{a}$ field
---

<div class="topSpace"></div>

Date Created: 22/11/2022 19:29:25
Tags: #Type/Proposition #Topic/Rings_and_Modules/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\mf{a}\nsubgrp R$ be a proper ideal in a commutative ring $R$. Then $\mf{a}$ is maximal iff $R/\mf{a}$ is a field.

```

<i>Proof.</i> Since $R$ is a commutative ring, we see that $R/\mf{a}$ is also a commutative ring. Let $\bar{x}\coloneqq x+\mf{a}$ for all $x\in R$.
* ($\Rightarrow$) Take a non-zero $\bar{x}\in R/\mf{a}$, so $x\not\in\mf{a}$. Then $\mf{a}+\gen{x}$ is an ideal of $R$ properly containing $\mf{a}$, so $R=\mf{a}+\gen{x}$. Thus $1=a+rx$ for some $a\in\mf{a}$ and $r\in R$, so
$$\begin{equation}
    \bar{x}\bar{y}=\bar{xy}=\bar{1-a}=\bar{1},
\end{equation}$$
as desired.
* ($\Leftarrow$). Let $\mf{b}\nsubgrpeq R$ be an ideal properly containing $\mf{a}$, so there exists $a\in\mf{b}$ such that $a\not\in\mf{a}$. Thus $\bar{a}\neq\bar{0}$, and since $R/\mf{a}$ is a field, it admits an inverse $\bar{b}\in R/\mf{a}$. Then $\bar{ab}=\bar{a}\bar{b}=\bar{1}$, so $1=ab+i$ for some $i\in\mf{a}\subset\mf{b}$ and hence $1\in\mf{b}$. Thus $\mf{b}=R$, as desired.<span style="float:right;">$\blacksquare$</span>
