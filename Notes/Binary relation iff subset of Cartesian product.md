---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/01/2022 10:54:56
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a set. Then $R$ is a binary relation iff there exist sets $X$ and $Y$ such that $R\subseteq X\times Y$._

```

_Proof_. ($\Rightarrow$): Let $X\coloneqq\dom R$ and $Y\coloneqq\ran R$; we claim that $R\subseteq\dom R\times\ran R$. To see this, take $u\in R$, so $u=\tpl{x,y}$ for some sets $x$ and $y$. But then $\tpl{x,y}\in R$, so $x\in\dom R$ and $y\in\ran R$ and thus
$$\begin{equation}
    u=\tpl{x,y}\in\dom R\times\ran R.
\end{equation}$$
($\Leftarrow$): Assume that $R\subseteq X\times Y$ for some sets $X$ and $Y$, so $u\in X\times Y$ for all $u\in R$. But the $u=\tpl{x,y}$ for some $x\in X$ and $y\in Y$, so $R$ is a binary relation.<span style="float:right;">$\blacksquare$</span>
