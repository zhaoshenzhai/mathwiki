<div class="topSpace"></div>

Date Created: 28/03/2023 10:15:47
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Geometric series converges iff r less than 1]], [[Comparison Tests (Series)]], [[Criteria for limit superior slash inferior]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Root Tests).

Let $\tpl{a_n}$ be a non-zero sequence in $\R$.
* (Direct Root Test): If $\sqrt[n]{\l|a_n\r|}<1$ eventually, then $\sum_{n=0}^{\infty}a_n$ converges absolutely. Otherwise, if $\sqrt[n]{\l|a_n\r|}\geq1$ eventually, then $\sum_{n=0}^{\infty}a_n$ diverges.

We strengthen the test to the Limit Root Test as follows:
* If $\limsup\limits_{n\to\infty}\sqrt[n]{\l|a_n\r|}<1$, then $\sum_{n=0}^{\infty}a_n$ converges absolutely.
* If $\liminf\limits_{n\to\infty}\sqrt[n]{\l|a_n\r|}>1$, then $\sum_{n=0}^{\infty}a_n$ diverges.

```

<i>Proof.</i> We first prove the Direct Root Test, from which the Limit Root Test follows.
* Suppose that $\sqrt[n]{\l|a_n\r|}<1$ eventually, so there exist some $\alpha<1$ such that $\l|a_n\r|<\alpha^n$ eventually. Observe that $\sum_{n=0}^{\infty}\alpha^n$ is a geometric series that converges, so the result follows. Otherwise, $\l|a_n\r|\geq1$ eventually, so $\sum_{n=0}^{\infty}a_n$ diverges.

Now, set $R\coloneqq\limsup\limits_{n\to\infty}\sqrt[n]{\l|a_n\r|}$ and $r\coloneqq\liminf\limits_{n\to\infty}\sqrt[n]{\l|a_n\r|}$.
* Let $b_n\coloneqq\sup_{m\geq n}\l\{\sqrt[m]{\l|a_m\r|}\r\}$, so $\lim\limits_{n\to\infty}b_n=R<1$. Thus $b_N=\sup_{n\geq N}\l\{\sqrt[n]{\l|a_n\r|}\r\}<1$ for some $N\in\N$ large enough, so $\sqrt[n]{\l|a_n\r|}<1$ eventually.

* Similarly, let $b_n\coloneqq\inf{m\geq n}\l\{\sqrt[m]{\l|a_m\r|}\r\}$, so $\lim\limits_{n\to\infty}b_n=r>1$. Thus $b_N=\inf_{n\geq N}\l\{\sqrt[n]{\l|a_n\r|}\r\}<1$ for some $N\in\N$ large enough, so $\sqrt[n]{\l|a_n\r|}>1$ eventually.<span style="float:right;">$\blacksquare$</span>
