<div class="topSpace"></div>

Date Created: 29/01/2022 16:16:37
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Relation Induced by a Partition]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Quotient set is a partition]]
Equivalences: [[Fundamental Theorem of Equivalence Relations]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $X$ be a set. A **partition of $X$** is a set $\Pi\subseteq\pow\l(X\r)$ satisfying:_
* _$\axipartition[1]$ (Non-empty)$\bf{.}$ $\fa P\in\Pi:P\neq\em$._
* _$\axipartition[2]$ (Disjoint)$\bf{.}$ $\fa P,Q\in\Pi:P\neq Q\Rightarrow P\cap Q=\em$._
* _$\axipartition[3]$ (Cover)$\bf{.}$ $X\subseteq\bigcup\Pi$._

```

**Remark.** The condition $\Pi\subseteq\pow\l(X\r)$, along with $\axipartition[3]$, implies that $X=\bigcup\Pi$; observe that
$$\begin{equation}
    \bigcup\Pi\subseteq\bigcup\pow\l(X\r)=X.\exqedin
\end{equation}$$
