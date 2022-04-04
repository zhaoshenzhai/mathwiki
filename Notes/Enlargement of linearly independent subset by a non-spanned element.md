<br />
<br />

Date Created: 04/04/2022 21:00:11
Tags: #Proposition #Closed

Proved by: [[Linear span is set of all linear combinations]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a linearly independent subset $S\subseteq V$ of a vector space $V$ over $K$. Take $v\in V$. If $v\not\in\span\l(S\r)$, then $S\cup\l\{v\r\}$ is linearly independent in $V$._

```

_Proof_. Assume, for sake of contradiction, that $S\cup\l\{v\r\}$ is linearly dependent, so there exist $\alpha_1,\dots,\alpha_n,\beta\in K$, not all of which vanish, such that
$$\begin{equation}
    \sum_{i=1}^n\alpha_is_i+\beta v=0_V.
\end{equation}$$
If $\beta=0$, then $\sum_{i=1}^n\alpha_is_i=0_V$. However, since not all of $\alpha_1,\dots,\alpha_n,\beta$ vanish, there must be some non-vanishing $\alpha_j$. This contradicts the assumption that $S$ is linearly independent, so $\beta\neq0$. It follows then that
$$\begin{equation}
    v=\sum_{i=1}^n\l(-\frac{\alpha_i}{\beta}\r)s_i,
\end{equation}$$
so $v$ is a linearly combination of the vectors $s_1,\dots,s_n$. The result follows.<span style="float:right;">$\blacksquare$</span>
