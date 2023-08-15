<div class="topSpace"></div>

Date Created: 16/03/2023 10:31:52
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Comparison Tests).

Let $\tpl{a_k}$ and $\tpl{b_k}$ be eventually positive sequences in $\R$.
* (Direct Comparison). If $\sum_{k=0}^{\infty}b_k$ converges, so does $\sum_{k=0}^{\infty}a_k$, and if $\sum_{k=0}^{\infty}a_k$ diverges, so does $\sum_{k=0}^{\infty}b_k$.
* (Limit Comparison). Suppose that $r\coloneqq\lim_{k\to\infty}a_k/b_k$ exists. If $r\neq0$, then $\sum_{k=0}^{\infty}a_k$ converges iff $\sum_{k=0}^{\infty}b_k$ does. Otherwise, if $r=0$ and $\sum_{k=0}^{\infty}b_k$ converges, then $\sum_{k=0}^{\infty}a_k$ _converges too.

```

<b>Remark.</b> If $r'\coloneqq\lim_{k\to\infty}\l|a_k/b_k\r|$ and the same assumptions of the limit comparison test are assumed, then we can also conclude absolute convergence.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We prove the direct comparison test, from which the limit comparison test follows. Indeed, since $\sum_{k=0}^{\infty}b_k$ converges, let $\epsilon>0$. Then
$$\begin{equation}
    \l|\sum_{k=0}^{m}b_k-\sum_{k=0}^{n}b_k\r|=\l|\sum_{k=n+1}^{m}b_k\r|<\epsilon
\end{equation}$$
for all eventually $m,n\in\N$, so $0\leq\sum_{k=n+1}^{m}a_k\leq\sum_{k=n+1}^{m}b_k$ for all eventually $m,n\in\N$. The second statement is the contrapositive.

* Take $\epsilon>0$. Since $r\neq0$, we see that $r/2<a_k/b_k<r+\epsilon<2r$ for all eventually $k\in\N$. Then $rb_k/2<a_k<2rb_k$ for all eventually $k\in\N$, so direct comparison shows that one converges iff the other does. Otherwise, if $r=0$, then $0\leq a_k\leq b_k$ for all eventually $k\in\N$. Again, direct comparison gives us the result.<span style="float:right;">$\blacksquare$</span>
