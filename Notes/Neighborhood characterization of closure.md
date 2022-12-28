<div class="topSpace"></div>

Date Created: 05/11/2022 15:51:36
Tags: #Proposition #Topics/Analysis

Proved by: [[Basic properties of unions, intersections, and power sets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,\mc{T}}$ be a topological space and fix $S\subseteq X$. Then, for all $x\in X$, $x\in\bar{S}$ iff every neighborhood of $x$ intersects $S$._

```

_Proof_. We shall prove the binconditional contrapositive statement, which states that $x\not\in\bar{S}$ iff there exists a neighborhood of $x$ that is disjoint from $S$.
* $\l(\Rightarrow\r)$: Suppose that $x\not\in\bar{S}$, so there exists a closed set $F\supseteq S$ such that $x\not\in F$. Then $x\in U\coloneqq X\comp F$, which is open and $U\cap S\subseteq U\cap F=\em$.
* $\l(\Leftarrow\r)$: Suppose that there exists some neighborhood $U$ of $x$ disjoint from $S$. Then $x\not\in F\coloneqq X\comp U$, which is closed and contains $S$. Thus $x\not\in\bar{S}$.<span style="float:right;">$\blacksquare$</span>

