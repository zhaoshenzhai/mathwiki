<div class="topSpace"></div>

Date Created: 21/04/2022 22:25:15
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $V$ be a $K$-vector space. If $S\subseteq V$ is linearly independent, then $S\cup\l\{v\r\}$ is linearly independent for all $v\not\in\span\l(S\r)$.

```

_Proof_. Take $s_1,\dots,s_n\in S$ for any $n\in\N^+$ and suppose that
$$\begin{equation}
    \beta v+\sum_{i=1}^n\alpha_is_i=0\cref{\ast}
\end{equation}$$
for some $\alpha_1,\dots,\alpha_n,\beta\in K$. If $\beta\neq0$, then $v=\sum_{i=1}^n\l(-\frac{\alpha_i}{\beta}\r)s_i$ which contradicts the assumption that $v\not\in\span\l(S\r)$. It follows then that $\sum_{i=1}^n\alpha_is_i=0$, so each $\alpha_i=0$ as $S$ is linearly independent. Overall, $\ref{\ast}$ implies that each of $\alpha_1,\dots,\alpha_n,\beta$ vanishes, so $S\cup\l\{v\r\}$ is linearly independent.<span style="float:right;">$\blacksquare$</span>
