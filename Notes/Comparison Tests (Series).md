<div class="topSpace"></div>

Date Created: 16/03/2023 10:31:52
Tags: #Proposition #Topics/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Comparison Tests).

_Let $\tpl{a_k}$ and $\tpl{b_k}$ be eventually positive sequences in $\R$._
* _(Direct Comparison): If_ $\sum_{k=0}^{\infty}b_k$ _converges, so does_ $\sum_{k=0}^{\infty}a_k$_, and if_ $\sum_{k=0}^{\infty}a_k$ _diverges, so does_ $\sum_{k=0}^{\infty}b_k$_._
* _(Limit Comparison): Suppose that_ $r\coloneqq\lim_{k\to\infty}a_k/b_k$ _exists. If $r\neq0$, then_ $\sum_{k=0}^{\infty}a_k$ _converges iff_ $\sum_{k=0}^{\infty}b_k$ _does. Otherwise, if $r=0$ and_ $\sum_{k=0}^{\infty}b_k$ _converges, then_ $\sum_{k=0}^{\infty}a_k$ _converges too._
```

**Remark.** If $r'\coloneqq\lim_{k\to\infty}\l|a_k/b_k\r|$ and the same assumptions of the limit comparison test are assumed, then we can also conclude absolute convergence.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. We prove the direct comparison test, from which the limit comparison test follows. Indeed, since $\sum_{k=0}^{\infty}b_k$ converges, let $\epsilon>0$. Then
$$\begin{equation}
    \l|\sum_{k=0}^{m}b_k-\sum_{k=0}^{n}b_k\r|=\l|\sum_{k=n+1}^{m}b_k\r|<\epsilon
\end{equation}$$
for all eventually $m,n\in\N$, so $0\leq\sum_{k=n+1}^{m}a_k\leq\sum_{k=n+1}^{m}b_k$ for all eventually $m,n\in\N$. The second statement is the contrapositive.

* Take $\epsilon>0$. Since $r\neq0$, we see that $r/2<a_k/b_k<r+\epsilon<2r$ for all eventually $k\in\N$. Then $rb_k/2<a_k<2rb_k$ for all eventually $k\in\N$, so direct comparison shows that one converges iff the other does. Otherwise, if $r=0$, then $0\leq a_k\leq b_k$ for all eventually $k\in\N$. Again, direct comparison gives us the result.<span style="float:right;">$\blacksquare$</span>
