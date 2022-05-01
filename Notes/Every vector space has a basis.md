<br />
<br />

Date Created: 01/05/2022 16:43:17
Tags: #Theorem #Closed

Proved by: [[Spanning set of a vector space cuts down to a basis]], [[Linearly independent subset of a vector space extends to a basis]], [[Linearly independent subset of a finite-dim. vector space extends to a basis]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem.

_Let $K$ be a field and consider a vector space $V$ over $K$. Then $V$ has a basis._

```

_Proof_. Let $U\subseteq V$. We may proceed in two ways:
* If $U$ is linearly independent, then we can extend it to a basis of $V$. Indeed, if $V=\l\{0\r\}$, then $U=\em$ is linearly independent; otherwise, let $v\in V$ and observe that $\l\{v\r\}$ is linearly independent. Thus for every vector space $V$, a linearly independent subset $U$ thereof always exists and we can extend it to a basis of $V$.

* If $\span U=V$, we can cut it down to a basis of $V$. Indeed, since $\span V=V$ trivially, we can cut $V$ down into a basis.<span style="float:right;">$\blacksquare$</span>
