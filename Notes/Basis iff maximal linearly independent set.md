---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/01/2023 09:58:07
Tags: #Proposition #Topics/Linear_Algebra

Proved by: [[Steinitz Exchange Lemma]], [[Enlargement of linearly independent set by adjoining non-spanned vector]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a $K$-vector space and consider an indexed subset_ $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ _of $V$. Then $\mc{B}$ is an basis for $V$ iff it is a maximal linearly independent set in $V$._

```

_Proof_.
* ($\Rightarrow$): Suppose that $\mc{C}\coloneqq\l\{c_1,\dots,c_m\r\}$ is a linearly independent set in $V$. Then, since $\mc{B}$ spans $V$, we see that $m\leq n$. But $\mc{C}$ was arbitrary, so $\mc{B}$ is a maximal linearly independent set in $V$.

* $\l(\Leftarrow\r)$: Let $\mc{B}$ be a maximal linearly independent set in $V$ and suppose, for sake of contradiction, that $\mc{B}$ does not span $V$. Thus there exists some $b_{n+1}\in V$ such that $b_{n+1}\not\in\span\mc{B}$, so $\mc{B}\cup\l\{b_{n+1}\r\}$ is linearly independent, a contradiction.<span style="float:right;">$\blacksquare$</span>
