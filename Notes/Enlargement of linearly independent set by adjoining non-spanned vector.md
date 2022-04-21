<br />
<br />

Date Created: 21/04/2022 22:25:15
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a vector space $V$ over $K$. If $S\subseteq V$ is linearly independent, then $S\cup\l\{v\r\}$ is linearly independent for all $v\not\in\span\l(S\r)$._

```

_Proof_. Take $s_1,\dots,s_n\in S$ for any $n\in\N^\ast$ and suppose that
$$\begin{equation}
    \beta v+\sum_{i=1}^n\alpha_is_i=0\tag{$\ast$}
\end{equation}$$
for some $\alpha_1,\dots,\alpha_n,\beta\in K$. If $\beta\neq0$, then
$$\begin{equation}
    v=\sum_{i=1}^n\l(-\frac{\alpha_i}{\beta}\r)s_i
\end{equation}$$
which contradicts the assumption that $v\not\in\span\l(S\r)$. It follows then that $\sum_{i=1}^n\alpha_is_i=0$, so each $\alpha_i=0$ as $S$ is linearly independent. Overall, $\l(\,\ast\,\r)$ implies that each of $\alpha_1,\dots,\alpha_n,\beta$ vanishes, so $S\cup\l\{v\r\}$ is linearly independent.<span style="float:right;">$\blacksquare$</span>
