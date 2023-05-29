<div class="topSpace"></div>

Date Created: 23/01/2022 20:05:39
Tags: #Type/Proposition #Later/Topology

Proved by: [[De Morgan's Laws]], [[Countable union of countable sets is countable]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set. Then the cocountable topology
$$\begin{equation}
    \mc{T}_\textrm{cc}=\l\{U\in\pow\l(X\r)\mid\l(U=\em\r)\lor\l(X\comp U\textrm{\it{ is countable}}\r)\r\}
\end{equation}$$
is a topology on $X$.

```

<i>Proof.</i> We verify the axioms for a topology on $X$:
* $\em\in\mc{T}_\textrm{cc}$ by definition and $X\comp X=\em$ is countable.
* Let $\mc{U}\subseteq\mc{T}_\textrm{cc}$. If $\mc{U}=\em$, then $\bigcup\mc{U}=\em\in\mc{T}_\textrm{cc}$. Otherwise, using De Morgan$\textrm{'}$s Laws, we have
$$\begin{equation}
    X\comp\bigcup\mc{U}=\bigcap\l\{X\comp U\mid U\in\mc{U}\r\}.
\end{equation}$$
An arbitrary intersection of countable sets is countable, so $\bigcup\mc{U}\in\mc{T}_\textrm{cc}$.
* Let $\mc{U}\subseteq\mc{T}_\textrm{cc}$ be non-empty and finite. Using De Morgan's Laws again, we have
$$\begin{equation}
    X\comp\bigcap\mc{U}=\bigcup\l\{X\comp U\mid U\in\mc{U}\r\}.
\end{equation}$$
A finite union of countable sets is countable, so $\bigcap\mc{U}\in\mc{T}_\textrm{cc}$.<span style="float:right;">$\blacksquare$</span>
