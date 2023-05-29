---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/01/2022 10:54:56
Tags: #Type/Proposition #Later/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a set. Then $R$ is a binary relation iff there exist sets $X$ and $Y$ such that $R\subseteq X\times Y$.

```

<i>Proof.</i> ($\Rightarrow$): Let $X\coloneqq\dom R$ and $Y\coloneqq\ran R$; we claim that $R\subseteq\dom R\times\ran R$. To see this, take $u\in R$, so $u=\tpl{x,y}$ for some sets $x$ and $y$. But then $\tpl{x,y}\in R$, so $x\in\dom R$ and $y\in\ran R$ and thus
$$\begin{equation}
    u=\tpl{x,y}\in\dom R\times\ran R.
\end{equation}$$
($\Leftarrow$): Assume that $R\subseteq X\times Y$ for some sets $X$ and $Y$, so $u\in X\times Y$ for all $u\in R$. But the $u=\tpl{x,y}$ for some $x\in X$ and $y\in Y$, so $R$ is a binary relation.<span style="float:right;">$\blacksquare$</span>
