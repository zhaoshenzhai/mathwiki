---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 04/01/2023 17:46:25
Tags: #Theorem #Topics/Analysis

Proved by: [[Neighborhood characterization of cluster points (metric)]], [[Heine-Borel Theorem]], [[Cantor's Intersection Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Fix $n\in\N^+$ and consider a non-empty subset $S\subseteq\R^n$. If $S$ is perfect, then $S$ is uncountable._

```

_Proof_. Since $S$ is perfect, it contains a cluster point and hence every neighborhood thereof contains infinitely-many points in $S$. Thus $S$ must be infinite. Suppose, for sake of contradiction, that $S$ is countable, so $S=\l\{s_1,\dots,s_k\r\}$ for some $s_1,\dots,s_k\in\R^n$. We construct a sequence $\tpl{U_n}$ of neighborhoods of elements in $S$ as follows.
* Let $U_1$ be any ball around $s_1$ and suppose that $U_n$ is some ball around $x_n\in S$ such that $U_n\cap S\neq\em$. Then, since $x_n$ is a cluster point in $S$, $U_n$ contains infinitely-many elements in $S$. Choose any $x_{n+1}\in U_n\cap S$ different from both $x_n$ and $s_n$, and let $U_{n+1}$ be any ball around $x_{n+1}$ small enough such that $\bar{U_{n+1}}\subseteq U_n$ and $s_n\not\in\bar{U_{n+1}}$. Then $x_{n+1}\in U_{n+1}\cap S$, so $U_{n+1}$ satisfies our induction hypothesis and the construction can proceed.

Set $K_n\coloneqq\bar{U_n}\cap S$. Since both $\bar{U_n}$ and $S$ are closed, we see that $K_n$ is closed too. Now, $\bar{U_n}$ is bounded, so $K_n$ is bounded too and hence is compact by Heine-Borel. Furthermore, observe that $K_n\neq\em$ and $K_n\supseteq K_{n+1}$ for all $n\in\N^+$. However, $K_n\subseteq S$ and $s_n\not\in K_{n+1}$ for all $1\leq n\leq k$, so $\bigcap_{i=1}^{\infty}K_n=\em$, which contradicts Cantor$\textrm{'}$s Intersection Theorem.<span style="float:right;">$\blacksquare$</span>
