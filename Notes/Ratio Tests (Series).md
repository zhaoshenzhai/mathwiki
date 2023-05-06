<div class="topSpace"></div>

Date Created: 16/03/2023 11:19:33
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Geometric series converges iff r less than 1]], [[Comparison Tests (Series)]], [[Criteria for limit superior slash inferior]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Ratio Tests).

_Let $\tpl{a_n}$ be a non-zero sequence in $\R$._
* _(Direct Ratio Test): If _ $\l|a_{n+1}/a_n\r|<1$ _eventually, then_ $\sum_{n=0}^{\infty}a_n$ _converges absolutely. Otherwise, if_ $\l|a_{n+1}/a_n\r|\geq1$ _eventually, then_ $\sum_{n=0}^{\infty}a_n$ _diverges._

_We strengthen the test to the Limit Ratio Test as follows:_
* _If_ $\limsup\limits_{n\to\infty}\l|\frac{a_{n+1}}{a_n}\r|<1$_, then_ $\sum_{n=0}^{\infty}a_n$ _converges absolutely._
* _If_ $\liminf\limits_{n\to\infty}\l|\frac{a_{n+1}}{a_n}\r|>1$_, then_ $\sum_{n=0}^{\infty}a_n$ _diverges._

```

_Proof_. We first prove the Direct Ratio Test, from which the Limit Ratio Test follows.
* Suppose that $\l|a_{n+1}/a_n\r|<1$ eventually, so there exist some $\alpha<1$ such that $\l|a_{n+1}\r|<\alpha\l|a_n\r|$ eventually, say for all $n\geq N$. Then $\l|a_{N+i}\r|<\alpha^i\l|a_N\r|$ for all $i\geq1$, so $\l|a_n\r|<\l|a_N\r|\alpha^{-N}\alpha^n$ for all $n\geq N$. Observe that $\sum_{n=0}^{\infty}\alpha^n$ is a geometric series that converges, so the result follows. Otherwise, $\l|a_{n+1}\r|\geq\l|a_n\r|$ eventually, so $\sum_{n=0}^{\infty}a_n$ diverges.

Now, set $R\coloneqq\limsup\limits_{n\to\infty}\l|\frac{a_{n+1}}{a_n}\r|$ and $r\coloneqq\liminf\limits_{n\to\infty}\l|\frac{a_{n+1}}{a_n}\r|$.
* Let $b_n\coloneqq\sup_{m\geq n}\l\{\l|a_{m+1}/a_m\r|\r\}$, so $\lim\limits_{n\to\infty}b_n=R<1$. Thus $b_N=\sup_{n\geq N}\l\{\l|a_{n+1}/a_n\r|\r\}<1$ for some $N\in\N$ large enough, so $\l|a_{n+1}/a_n\r|<1$ eventually.

* Similarly, let $b_n\coloneqq\inf_{m\geq n}\l\{\l|a_{m+1}/a_m\r|\r\}$, so $\lim\limits_{n\to\infty}b_n=r>1$. Thus $b_N=\inf_{n\geq N}\l\{\l|a_{n+1}/a_n\r|\r\}>1$ for some $N\in\N$ large enough, so $\l|a_{n+1}/a_n\r|>1$ eventually.<span style="float:right;">$\blacksquare$</span>
