---
mathLink: $\l[\id_V\r]_\mc{B}=I_n$ ($\dim V=n$)
---

<br />
<br />

Date Created: 19/05/2022 16:47:19
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a vector space over some field $K$, say with $n\coloneqq\dim V$, and fix any basis $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ of $V$. Then_ $\l[\id_V\r]_\mc{B}=I_n$_._

```

_Proof_. By definition, $\l[\id_V\r]_\mc{B}=\l[a_{ij}\r]$ where $a_{ij}\in K$ are the unique coefficients such that
$$\begin{equation}
    \id_V\l(b_j\r)=\sum_{i=1}^na_{ij}b_i
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$. Since $\id_V\l(b_j\r)=b_j=\sum_{i=1}^n\delta_{ij}b_i$, we see that $a_{ij}=\delta_{ij}$ and hence $\l[\id_V\r]_\mc{B}=\l[\delta_{ij}\r]=I_n$.<span style="float:right;">$\blacksquare$</span>
