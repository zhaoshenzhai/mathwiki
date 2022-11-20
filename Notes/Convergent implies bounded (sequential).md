---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 15/10/2022 20:00:14
Tags: #Proposition #Courses/MATH254

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d}$ be a metric space and consider a sequence_ $\tpl{x_n}_{n\in\N}$ _in $X$. If $\tpl{x_n}$ converges, then it is bounded._

```

**Remark.** Thus if a sequence is unbounded, then it diverges.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Suppose $\lim\limits_{n\to\infty}x_n=x$, so there exists some $N\in\N$ such that $d\l(x_n,x\r)<1$ for all $n\geq N$. Set
$$\begin{equation}
    r\coloneqq\max\l\{1,d\l(x_1,x\r),\dots,d\l(x_{N-1},x\r)\r\}
\end{equation}$$
and observe that $d\l(x_n,x\r)<r$ for all $n\in\N$. Thus $x_n\in B_r\!\l(x\r)$ for all $n\in\N$, so $\tpl{x_n}$ is bounded.<span style="float:right;">$\blacksquare$</span>
