<div class="topSpace"></div>

Date Created: 07/05/2022 17:49:49
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Basic properties of linear maps]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be $K$-vector spaces and consider a linear map $T:V\to W$. If $S$ is a spanning set of $V$, then $\im T=\span\l(\im_TS\r)$._

```

_Proof_. Let $S\coloneqq\l\{s_i\r\}_{i\in I}$ for some index set $I$. We proceed by double containment.
* $\l(\supseteq\r)$: Since $T\l(s_i\r)\in\im T$ for all $i\in I$, we see that $\im_TS\subseteq\im T$. But since $\im T$ is a subspace of $W$, we see that $\span\l(\im_TS\r)\subseteq\im T$.

* $\l(\subseteq\r)$: Take $w\in\im T$, so $T\l(v\r)=w$ for some $v\in V$. Since $\span S=V$, $v=\sum_{i\in I}\alpha_is_i$ for some $\l\{\alpha_i\r\}_{i\in I}\!\subseteq K^n$ with $\alpha_i=0$ for all but finitely-many $i\in I$. Observe then that
$$\begin{equation}
    T\l(v\r)=T\l(\sum\limits_{i\in I}\alpha_is_i\r)=\sum\limits_{i\in I}\alpha_iT\l(s_i\r),
\end{equation}$$
so $w$ can be written as a linear combination of vectors in $\im_TS$. The result follows.<span style="float:right;">$\blacksquare$</span>
