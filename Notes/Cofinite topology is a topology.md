<div class="topSpace"></div>

Date Created: 23/01/2022 19:53:04
Tags: #Type/Proposition #Topic/Topology/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set. Then the cofinite topology
$$\begin{equation}
    \mc{T}_\textrm{cf}=\l\{U\in\pow\l(X\r)\st\l(U=\em\r)\lor\l(X\comp U\ \mathit{is}\ \mathit{finite}\r)\r\}
\end{equation}$$
is a topology on $X$.

```

<i>Proof.</i> We verify the axioms for a topology on $X$:
* $\em\in\mc{T}_\textrm{cf}$ by definition and $X\comp X=\em$ is finite.
* Let $\mc{U}\subseteq\mc{T}_\textrm{cf}$. If $\mc{U}=\em$, then $\bigcup\mc{U}=\em\in\mc{T}_\textrm{cf}$. Otherwise, using De Morgan’s Laws, we have
$$\begin{equation}
    X\comp\bigcup\mc{U}=\bigcap\l\{X\comp U\st U\in\mc{U}\r\}.
\end{equation}$$
An arbitrary intersection of finite sets is finite, so $\bigcup\mc{U}\in\mc{T}_\textrm{cf}$.
* Let $\mc{U}\subseteq\mc{T}_\textrm{cf}$ be non-empty and finite. Using De Morgan’s Laws again, we have
$$\begin{equation}
    X\comp\bigcap\mc{U}=\bigcup\l\{X\comp U\st U\in\mc{U}\r\}.
\end{equation}$$
A finite union of finite sets is finite, so $\bigcap\mc{U}\in\mc{T}_\textrm{cf}$.<span style="float:right;">$\blacksquare$</span>
