<div class="topSpace"></div>

Date Created: 16/03/2023 11:19:33
Tags: #Proposition #Topics/Analysis

Proved by: [[Geometric series converes iff r<1]], [[Comparison Tests (Series)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Ratio Tests).

_Let $\tpl{a_k}$ be a non-zero sequence in $\R$._
* _(Direct Ratio): If _ $\l|a_{k+1}/a_k\r|<1$ _eventually, then_ $\sum_{k=0}^{\infty}a_k$ _converges absolutely. Otherwise, if_ $\l|a_{k+1}/a_k\r|\geq1$ _eventually, then_ $\sum_{k=0}^{\infty}a_k$ _diverges._
* _(Limit Ratio): Suppose that_ $r\coloneqq\lim\limits_{k\to\infty}\l|a_{k+1}/a_k\r|$ _exists. If $r<1$, then_ $\sum_{k=0}^{\infty}a_k$ _converges absolutely. If $r>1$, then_ $\sum_{k=0}^{\infty}a_k$ _diverges._

```

_Proof_.
* Suppose that $\l|a_{k+1}/a_k\r|<1$ eventually, so there exist some $\alpha<1$ such that $\l|a_{k+1}\r|<\alpha\l|a_k\r|$ eventually, say for all $k\geq K$. Then $\l|a_{K+i}\r|<\alpha^i\l|a_K\r|$ for all $i\geq1$, so $\l|a_k\r|<\l|a_K\r|\alpha^{-K}\alpha^k$ for all $k\geq K$. Observe that $\sum_{k=0}^{\infty}\alpha^k$ is a geometric series that converges, so the result follows. Otherwise, there exists some $\beta\geq1$ such that $\l|a_{k+1}\r|\geq\beta\l|a_k\r|$ eventually, say for all $k\geq K$. Then $\l|a_{K+i}\r|\geq\beta^i\l|a_K\r|$ for all $i\geq1$, so $\l|a_k\r|\geq\l|a_K\r|\beta^{-K}\beta^k$. Observe that $\sum_{k=0}^{\infty}\beta^k$ is a geometric series that diverges, so the result follows.

* Take $\epsilon>0$. Since $r<1$, $\l|a_{k+1}/a_k\r|<1-\epsilon<1$ eventually, so the result follows the direct ratio test. Otherwise, if $r>1$, then clearly $\l|a_{k+1}/a_k\r|\geq1$ eventually.<span style="float:right;">$\blacksquare$</span>
