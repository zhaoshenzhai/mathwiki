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
    \ex s\in S:s\in\span\l(S\setminus\l\{s\r\}\r),\tag{$\ast$}
\end{equation}$$
_or, equivalently, iff_
$$\begin{equation}
    \ex s\in S:\span\l(S\r)=\span\l(S\setminus\l\{s\r\}\r).\tag{$\diamond$}
\end{equation}$$

```

_Proof_. We shall first prove the first equivalence.
* ($\Rightarrow$): Since $S$ is linearly dependent, there exist $\alpha_1,\dots,\alpha_n\in K$, not all of which are zero, and distinct $s_1,\dots,s_n\in S$ such that
$$\begin{equation}
    \sum_{i=1}^n\alpha_is_i=0_V
\end{equation}$$
for some $n\in\N^\ast$.

  * If $n=1$, we see that $\alpha_1\neq0$ and thus $s_i=0_V$ for this equation to hold. In this case, the result trivially holds since the zero vector is in the span of every subset of $V$.

  * Assume now that $n>1$, and, w.l.o.g., that $\alpha_1\neq0$. Let $s\coloneqq s_1$. Splitting the sum and dividing throughout by $\alpha_1$, we see that
$$\begin{equation}
    s=\sum_{i=2}^n\l(-\frac{\alpha_i}{\alpha_1}\r)s_i.
\end{equation}$$
  Since each $s_i\in S$ but are all distinct from $s$, we see that $s\in\span\l(S\setminus\l\{s\r\}\r)$.


* ($\Leftarrow$): Conversely, take $s\in S$ such that
$$\begin{equation}
    s=\sum_{i=1}^n\alpha_is_i
\end{equation}$$
for some $\alpha_1,\dots,\alpha_n\in K$ and distinct $s_1,\dots,s_n\in S\setminus\l\{s\r\}$. It follows then that
$$\begin{equation}
    1\cdot s+\sum_{i=1}^n\l(-\alpha_i\r)s_i=0_V,
\end{equation}$$
and since the vectors $s,s_1,\dots,s_n$ are all distinct, we see that a non-trivial linear combination thereof vanishes.

Equivalence between the two statements is easy:
* ($\Rightarrow$): The backwards inclusion is trivial since $S\setminus\l\{s\r\}\subseteq S$. For the forward direction, take $v\in\span\l(S\r)$ and so $v$ can be written as a linear combinations of vectors in $S$. If $s$ is in this linear combination, we can, by $\l(\,\ast\,\r)$, replace it with a linear combination of vectors in $S\setminus\l\{s\r\}$. Overall, we see that $v$ can be written as a linear combination of vectors in $S\setminus\l\{s\r\}$, so $v\in\span\l(S\setminus\l\{s\r\}\r)$.

* ($\Leftarrow$): This follows immediately since $s\in\span\l(S\r)$, and thus $s\in\span\l(S\setminus\l\{s\r\}\r)$ by $\l(\,\diamond\,\r)$.<span style="float:right;">$\blacksquare$</span>
