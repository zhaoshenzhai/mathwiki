<div class="topSpace"></div>

Date Created: 25/01/2022 12:13:46
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: [[Basic properties of unions, intersections, and power sets]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set. Then_ $X=\bigcup_{x\in X}\l\{x\r\}=\bigcup\l\{\l\{x\r\}\in\pow\l(X\r)\mid x\in X\r\}$_._

```

_Proof_. Let $\mc{S}\coloneqq\l\{\l\{x\r\}\in\pow\l(x\r)\mid x\in X\r\}$.
* ($\subseteq$): Take $x\in X$, so $\l\{x\r\}\in\pow\l(X\r)$ and thus $\l\{x\r\}\in\mc{S}$. It follows that $\l\{x\r\}\subseteq\bigcup\mc{S}$ and thus $x\in\bigcup\mc{S}$.
* ($\supseteq$): Take $x\in\bigcup\mc{S}$, so there exists $S\in\mc{S}$ such that $x\in S$. Observe that $S$ is of the form $\l\{y\r\}$ for some $y\in X$, and since $x\in S$, we see that $x=y\in X$.<span style="float:right;">$\blacksquare$</span>
