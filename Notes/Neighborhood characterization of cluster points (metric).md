<div class="topSpace"></div>

Date Created: 04/01/2023 15:30:16
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Characterizations of closure]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d}$ be a metric space and fix $S\subseteq X$. Then $x$ is a cluster point of $S$ iff every neighborhood of $x$ contains infinitely-many points in $S$.

```

<b>Remark.</b> For this reason, cluster points in a metric space are also called <b>$\omega$-accumulation points</b>.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> The backwards direction is trivial, for if every neighborhood of $x$ contains infinite-many points in $S$, then every neighborhood of $x$ intersects $S$ and hence $x\in\bar{S\comp\l\{x\r\}}$. For the forwards, suppose, for sake of contradiction, that $U\cap S$ is finite for some neighborhood $U$ of $x$. Take $\delta\in\R$ such that $B_\delta\!\l(x\r)\subseteq U$, so $B_\delta\!\l(x\r)\cap S=\l\{x_1,\dots,x_n\r\}$ for some $x_1,\dots,x_n\in X$. Set
$$\begin{equation}
    \epsilon\coloneqq\min\l\{d\l(x,x_i\r)\in\R\st1\leq i\leq n\r\}.
\end{equation}$$
Then $B_\epsilon\!\l(x\r)\cap S=\em$, for if $y\in B_\epsilon\!\l(x\r)\cap S$, then $d\l(y,x\r)<\epsilon$, so $y\neq x_i$ for any $1\leq i\leq n$. But $B_\epsilon\!\l(x\r)\subseteq B_\delta\!\l(x\r)$, so $y\in B_\epsilon\!\l(x\r)\cap S\subseteq B_\delta\!\l(x\r)\cap S$, a contradiction.<span style="float:right;">$\blacksquare$</span>
