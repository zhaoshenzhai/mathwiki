<div class="topSpace"></div>

Date Created: 07/03/2023 12:43:07
Tags: #Type/Proposition #Later/Topology

Proved by: [[Separable implies admits countable subcover]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mc{T}}$ be a separable topological space and fix $S\subseteq X$. Letting $C\subseteq X$ denote the set of all condensation points of $S$, the following properties hold.
* If $S$ is uncountable, then it has a condensation point in $S$.
* $C$ is closed.
* $S\comp C$ is countable.

If $X$ is a (separable) metric space, then every condensation point $x$ of $S$ admits a non-constant sequence $\tpl{x_n}$ in $C$ such that $x_n\to x$. In other words, every condensation point of $S$ is a cluster point of $C$.

```

**Remark.** In particular, this shows that if $X$ is a separable metric space, then $C$ is a perfect set.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. We first show that if $S$ is uncountable, then it has a condensation point in $S$. Suppose, for sake of contradiction, that $S$ has no condensation point in $S$. Then for all $x\in S$, there exists some neighborhood $U_x$ of $x$ such that $U_x\cap S$ is countable. Note that $\l\{U_x\r\}_{x\in S}$ is an open cover of $S$, so, since $X$ is separable, there exist $s_1,s_2,s_3,\ldots\in S$ such that $S\subseteq\bigcup_{i=1}^{\infty}U_{s_i}$. Observe then that
$$\begin{equation*}
    S\subseteq S\cap\bigcup_{i=1}^{\infty}U_{s_i}=\bigcup_{i=1}^{\infty}\underbrace{U_{s_i}\cap S}_{\mathclap{\textrm{countable}}}.
\end{equation*}$$
But then $S$ is a subset of a countable union of countable sets, so $S$ is countable, a contradiction. Moving on, we show that $C$ is closed and that $S\comp C$ is countable.

* We proceed by showing that $C^c$ is open, so take $x\in C^c$. Then $x$ is not a condensation point of $S$, so there exists a neighborhood $U$ of $x$ such that $U\cap S$ is countable. We shall show that $U\cap C=\em$, so $U\subseteq C^c$. Suppose, for sake of contradiction, that there exists some $y\in U\cap C$. Note that $U$ is open, so there exists a neighborhood $V$ of $y$ such that $V\subseteq U$. Since $y\in C$, we see that $V\cap S$ is uncountable. But $V\cap S\subseteq U\cap S$, so $U\cap S$ is uncountable too, a contradiction.
* Let $D\coloneqq S\comp C$. If $D$ is uncountable, then $D$ has a condensation point $d\in D=S\comp C$. Thus $W\cap\l(S\comp C\r)$ is uncountable for all neighborhoods $W$ of $d$. But then $W\cap S$ is also uncountable, so $d\in C$, a contradiction.

Finally, let $X$ be a (separable) metric space and take $x\in C$. We proceed by constructing a sequence $\tpl{x_n}$ in $C\comp\l\{x\r\}$ such that $x_n\to x$, so $x$ is a cluster point of $C$ and hence is not an isolated point of $C$. Indeed, for all $n\in\N$, the set $B_{1/n}\!\l(x\r)\cap S$ is uncountable. Note that $B_{1/n}\!\l(x\r)\cap S\comp\l\{x\r\}$ is still uncountable, so let $x_n$ be a condensation point of $B_{1/n}\!\l(x\r)\cap S\comp\l\{x\r\}$ in $B_{1/n}\!\l(x\r)\cap S\comp\l\{x\r\}$. That is, there exists some $x_n\in C\comp\l\{x\r\}$ such that $x_n\to x$, so we are done.<span style="float:right;">$\blacksquare$</span>
