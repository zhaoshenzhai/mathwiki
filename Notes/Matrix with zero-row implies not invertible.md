---
alias: auto_aliasing
---

<br />
<br />

Date Created: 08/04/2022 11:39:21
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider $A\in\mat{n}{K}$ for some fixed $n\in\N$. If $A$ has a zero-row, then it is not invertible._

```

_Proof_. Let row $l$ of $A$ be be zero and suppose, for sake of contradiction, that $A$ is invertible. In particular, there exists $B\in\mat{n}{K}$ such that $AB=I$. In other words, we have $\delta_{ik}=\sum_{j=1}^na_{ij}b_{jk}$ for all $i,k\in\l\{1,\dots,n\r\}$. When $i=l$, we have that
$$\begin{equation}
    \begin{aligned}
        \delta_{lk}&=\sum_{j=1}^na_{lj}b_{jk} && \textrm{Substitution} \\
        &=\sum_{j=1}^n0b_{jk} && \fa j\in\l\{1,\dots,n\r\}:a_{lj}=0 \\
        &=0 && \textrm{$0$ is neutral element in $K$}
    \end{aligned}
\end{equation}$$
regardless of the value of $k$, but this is clearly contradictory since $\delta_{ll}=1\neq0$.<span style="float:right;">$\blacksquare$</span>
