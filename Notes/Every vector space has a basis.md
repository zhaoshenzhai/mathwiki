<div class="topSpace"></div>

Date Created: 01/05/2022 16:43:17
Tags: #Type/Theorem #Topic/Linear_Algebra

Proved by: [[Basis Extraction Theorem]], [[Basis Extension Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Let $V$ be a $K$-vector space. Then $V$ has a basis._

```

_Proof_. Let $U\subseteq V$. We may proceed in two ways:
* If $U$ is linearly independent, then we can extend it to a basis for $V$. Indeed, if $V=\l\{0\r\}$, then $U=\em$ is linearly independent; otherwise, let $v\in V$ and observe that $\l\{v\r\}$ is linearly independent. Thus for every vector space $V$, a linearly independent subset $U$ thereof always exists and we can extend it to a basis for $V$.

* If $\span U=V$, we can cut it down to a basis for $V$. Indeed, since $\span V=V$ trivially, we can cut $V$ down into a basis.<span style="float:right;">$\blacksquare$</span>
