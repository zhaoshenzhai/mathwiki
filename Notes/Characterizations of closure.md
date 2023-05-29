<div class="topSpace"></div>

Date Created: 05/11/2022 15:51:36
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Basic properties of unions, intersections, and power sets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mc{T}}$ be a topological space and fix $S\subseteq X$. Then, for all $x\in X$, the following are equivalent.
1. Every neighborhood of $x$ intersects $S$.
2. $x\in\bar{S}$.
3. $x\in S\cup S'$ where $S'$ is the set of all cluster points of $S$.
4. $x\in S\cup\del S$.

In particular, $\bar{S}=S\cup S'=S\cup\del S$.

```

_Proof_. For $1\Leftrightarrow2$, we shall prove the biconditional contrapositive statement, which states that $x\not\in\bar{S}$ iff there exists a neighborhood of $x$ that is disjoint from $S$.
* $\l(\Rightarrow\r)$: Suppose that $x\not\in\bar{S}$, so there exists a closed set $F\supseteq S$ such that $x\not\in F$. Then $x\in U\coloneqq X\comp F$, which is open and $U\cap S\subseteq U\cap F=\em$.
* $\l(\Leftarrow\r)$: Suppose that there exists some neighborhood $U$ of $x$ disjoint from $S$. Then $x\not\in F\coloneqq X\comp U$, which is closed and contains $S$. Thus $x\not\in\bar{S}$.

We now prove that $2\Rightarrow3\Rightarrow4\Rightarrow2$.
* ($2\Rightarrow3$): Take $x\in\bar{S}$, and suppose that $x\not\in S$. Then $S\comp\l\{x\r\}=S$, so $x\in\bar{S}=\bar{S\comp\l\{x\r\}}$.
* ($3\Rightarrow4$): Take $x\in S\cup S'$; we are done if $x\in S$. Otherwise, $x\in S'=\bar{S\comp\l\{x\r\}}=\bar{S}$, so every neighborhood $U$ of $x$ intersects $S$. Clearly $U\cap\l(X\comp S\r)\neq\em$ too, so $x\in\del S$.
* ($4\Rightarrow2$): Take $x\in S\cup\del S$; we are done if $x\in S$. Otherwise, every neighborhood of $x$ intersects $S$, so $x\in\bar{S}$.<span style="float:right;">$\blacksquare$</span>
