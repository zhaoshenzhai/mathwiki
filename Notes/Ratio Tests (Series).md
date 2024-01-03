<div class="topSpace"></div>

Date Created: 16/03/2023 11:19:33
References: #Ref/Rud76
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Geometric Sequence]], [[Comparison Tests (Series)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Ratio Tests).

Let $\tpl{a_n}$ be a non-zero sequence in $\R$.
* (Direct Ratio Test). If  $\l|a_{n+1}/a_n\r|<1$ eventually, then $\sum_{n=0}^{\infty}a_n$ converges absolutely. Otherwise, if $\l|a_{n+1}/a_n\r|\geq1$ eventually, then $\sum_{n=0}^{\infty}a_n$ diverges.

We strengthen the test to the Limit Ratio Test as follows:
* If $\limsup\limits_{n\to\infty}\l|\frac{a_{n+1}}{a_n}\r|<1$, then $\sum_{n=0}^{\infty}a_n$ converges absolutely.
* If $\liminf\limits_{n\to\infty}\l|\frac{a_{n+1}}{a_n}\r|>1$, then $\sum_{n=0}^{\infty}a_n$ diverges.

```

<i>Proof.</i> We first prove the Direct Ratio Test, from which the Limit Ratio Test follows.
* Suppose that $\l|a_{n+1}/a_n\r|<1$ eventually, so there exist some $\alpha<1$ such that $\l|a_{n+1}\r|<\alpha\l|a_n\r|$ eventually, say for all $n\geq N$. Then $\l|a_{N+i}\r|<\alpha^i\l|a_N\r|$ for all $i\geq1$, so $\l|a_n\r|<\l|a_N\r|\alpha^{-N}\alpha^n$ for all $n\geq N$. Observe that $\sum_{n=0}^{\infty}\alpha^n$ converges, so the result follows. Otherwise, $\l|a_{n+1}\r|\geq\l|a_n\r|$ eventually, so $\sum_{n=0}^{\infty}a_n$ diverges.

Now, set $R\coloneqq\limsup\limits_{n\to\infty}\l|\frac{a_{n+1}}{a_n}\r|$ and $r\coloneqq\liminf\limits_{n\to\infty}\l|\frac{a_{n+1}}{a_n}\r|$.
* Let $b_n\coloneqq\sup_{m\geq n}\l\{\l|a_{m+1}/a_m\r|\r\}$, so $\lim\limits_{n\to\infty}b_n=R<1$. Thus $b_N=\sup_{n\geq N}\l\{\l|a_{n+1}/a_n\r|\r\}<1$ for some $N\in\N$ large enough, so $\l|a_{n+1}/a_n\r|<1$ eventually.

* Similarly, let $b_n\coloneqq\inf_{m\geq n}\l\{\l|a_{m+1}/a_m\r|\r\}$, so $\lim\limits_{n\to\infty}b_n=r>1$. Thus $b_N=\inf_{n\geq N}\l\{\l|a_{n+1}/a_n\r|\r\}>1$ for some $N\in\N$ large enough, so $\l|a_{n+1}/a_n\r|>1$ eventually.<span style="float:right;">$\blacksquare$</span>
