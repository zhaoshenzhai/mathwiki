<div class="topSpace"></div>

Date Created: 04/04/2022 20:55:25
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: [[Basic properties of vector spaces]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space over $K$. If $S$ is linearly independent, then $0_V\not\in S$._

```

_Proof_. Suppose, for sake of contradiction, that $0_V\in S$. It follows then that for every sequence $s_1,\dots,s_n\in S$, we have that
$$\begin{equation}
    1\cdot0_V+\sum_{i=1}^n0\cdot s_i
\end{equation}$$
which evaluates to $0_V$. But this is not a trivial linear combination of $0_V,s_1,\dots,s_n$, so $S$ is not linearly independent and we have a contradiction.<span style="float:right;">$\blacksquare$</span>
