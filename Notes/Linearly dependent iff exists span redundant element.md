---
alias: auto_aliasing
---

<br />
<br />

Date Created: 05/04/2022 20:13:04
Tags: #Proposition #Closed

Proved by: [[Linear span is set of all linear combinations]]
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. Then $S$ is linearly dependent iff_
$$\begin{equation}
    \ex v\in S:v\in\span\l(S\setminus\l\{v\r\}\r).
\end{equation}$$

```

_Proof_.
* ($\Rightarrow$): Since $S$ is linearly dependent, there exist $\alpha_1,\dots,\alpha_n\in K$, not all of which are zero, and distinct $s_1,\dots,s_n\in S$ such that
$$\begin{equation}
    \sum_{i=1}^n\alpha_is_i=0_V
\end{equation}$$
for some $n\in\N^\ast$.

  * If $n=1$, we see that $\alpha_1\neq0$ and thus $s_i=0_V$ for this equation to hold. In this case, the result trivially holds since the zero vector is in the span of every subset of $V$.

  * Assume now that $n>1$, and, w.l.o.g., that $\alpha_1\neq0$. Let $v\coloneqq s_1$. Splitting the sum and dividing throughout by $\alpha_1$, we see that
$$\begin{equation}
    v=\sum_{i=2}^n\l(-\frac{\alpha_i}{\alpha_1}\r)s_i.
\end{equation}$$
  Since each $s_i\in S$ but are all distinct from $v$, we see that $v\in\span\l(S\setminus\l\{v\r\}\r)$.


* ($\Leftarrow$): Conversely, take $v\in S$ such that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_is_i
\end{equation}$$
for some $\alpha_1,\dots,\alpha_n\in K$ and distinct $s_1,\dots,s_n\in S\setminus\l\{v\r\}$. It follows then that
$$\begin{equation}
    1\cdot v+\sum_{i=1}^n\l(-\alpha_i\r)s_i=0_V,
\end{equation}$$
and since the vectors $v,s_1,\dots,s_n$ are all distinct, we see that a non-trivial linear combination thereof vanishes.<span style="float:right;">$\blacksquare$</span>
