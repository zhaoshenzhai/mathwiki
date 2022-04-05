---
alias: auto_aliasing
---

<br />
<br />

Date Created: 05/04/2022 20:13:04
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. Then $S$ is linearly dependent iff_
$$\begin{equation}
    \ex v\in S,\ex n\in\N^\ast,\ex\alpha_1,\dots,\alpha_n\in K,\ex s_1,\dots,s_n\in S:v=\sum_{i=1}^n\alpha_is_i.
\end{equation}$$

```

_Proof_.
* ($\Rightarrow$): Since $S$ is linearly dependent, there exist $\alpha_1,\dots,\alpha_n\in K$, not all of which are zero, and $s_1,\dots,s_n\in S$ such that
$$\begin{equation}
    \sum_{i=1}^n\alpha_is_i=0_V\ \ \ \ \ \ \ \ \textrm{and thus}\ \ \ \ \ \ \ \ \alpha_1s_1=\sum_{i=2}^n\l(-\alpha_i\r)s_i.
\end{equation}$$
Assume, w.l.o.g., that $\alpha_1\neq0$. Thus, dividing throughout by $\alpha_1$, we see that
$$\begin{equation}
    s_1=\sum_{i=2}^n\l(-\frac{\alpha_i}{\alpha_1}\r)s_i.
\end{equation}$$
The result follows by taking $v\coloneqq s_1$ and re-indexing $s_i\to s_{i-1}$.

* ($\Leftarrow$): Conversely, take
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_is_i
\end{equation}$$
for some $\alpha_1,\dots,\alpha_n\in K$ and $s_1,\dots,s_n\in S$. It follows then that
$$\begin{equation}
    1\cdot v+\sum_{i=1}^n\l(-\alpha_i\r)s_i=0_V,
\end{equation}$$
so there exists a vanishing non-trivial linear combination of vectors in $S$ and thus $S$ is linearly dependent.<span style="float:right;">$\blacksquare$</span>
