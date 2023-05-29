<div class="topSpace"></div>

Date Created: 30/03/2022 13:50:51
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Basic properties of modules]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $K$ be a field and let $V$ be a $K$-vector space. Then, for all $\alpha,\beta\in K$ and $v,w\in V$, the following properties hold.
* (Absorbing element of $\cdot$): $\alpha0_V=0_V=0_Kv$.
* (Compatibility of additive inverse and $\cdot$): $\l(-\alpha\r)v=-\l(\alpha v\r)=\alpha\l(-v\r)$.
* (Integral domain): If $\alpha v=0_V$, then either $\alpha=0_K$ or $v=0_V$.
* (Cancellation of scalars): If $\alpha\neq0_K$, then $\alpha v=\alpha w$ implies $v=w$.
* (Cancellation of vectors): If $v\neq0_V$, then $\alpha v=\beta v$ implies $\alpha=\beta$.

```

<i>Proof.</i> Note that the first two hold more generally in modules, so it suffices to prove the rest.
* (Integral domain): Consider the equation $\alpha v=0_V$. If $\alpha=0$, there is nothing to show. Assume $\alpha\neq0$ and observe that
$$\begin{equation}
    v=1v=\l(\alpha^{-1}\alpha\r)v=\alpha^{-1}\l(\alpha v\r)=\alpha^{-1}0_V=0_V.
\end{equation}$$
* (Cancellation of scalars): If $\alpha v=\alpha w$, then $\alpha\l(v-w\r)=\alpha v-\alpha w=0_V$. Then either $\alpha=0_K$ or $v=w$, so $a\neq0_K$ forces $v=w$.
* (Cancellation of vectors): If $\alpha v=\beta v$, then $\l(\alpha-\beta\r)v=\alpha v-\beta v=0_V$. Then either $\alpha=\beta$ or $v=0_V$, so $v\neq0_V$ forces $\alpha=\beta$.<span style="float:right;">$\blacksquare$</span>
