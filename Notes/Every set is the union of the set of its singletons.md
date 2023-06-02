<div class="topSpace"></div>

Date Created: 25/01/2022 12:13:46
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set. Then $X=\bigcup_{x\in X}\l\{x\r\}=\bigcup\l\{\l\{x\r\}\in\pow\l(X\r)\mid x\in X\r\}$.

```

<i>Proof.</i> Let $\mc{S}\coloneqq\l\{\l\{x\r\}\in\pow\l(x\r)\mid x\in X\r\}$.
* ($\subseteq$): Take $x\in X$, so $\l\{x\r\}\in\pow\l(X\r)$ and thus $\l\{x\r\}\in\mc{S}$. It follows that $\l\{x\r\}\subseteq\bigcup\mc{S}$ and thus $x\in\bigcup\mc{S}$.
* ($\supseteq$): Take $x\in\bigcup\mc{S}$, so there exists $S\in\mc{S}$ such that $x\in S$. Observe that $S$ is of the form $\l\{y\r\}$ for some $y\in X$, and since $x\in S$, we see that $x=y\in X$.<span style="float:right;">$\blacksquare$</span>
