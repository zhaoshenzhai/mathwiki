---
mathLink: $\l[\id_V\r]_\mc{B}=I_n$
---

<div class="topSpace"></div>

Date Created: 27/12/2022 20:26:41
Tags: #Proposition #Later/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: [[Identity function is linear]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a $K$-vector space, say with $n\coloneqq\dim V$. If $\mc{B}=\l\{b_1,\dots,b_n\r\}$ is a basis for $V$, then_ $\l[\id_V\r]_\mc{B}=I_n$_._

```

_Proof_. By definition, $\l[\id_V\r]_\mc{B}=\l[a_{ij}\r]$ where $a_{ij}\in K$ are the unique coefficients such that $\id_V\l(b_j\r)=\sum_{i=1}^na_{ij}b_i$ for all $j\in\l\{1,\dots,n\r\}$. Since
$$\begin{equation}
    \id_V\l(b_j\r)=b_j=\sum_{i=1}^n\delta_{ij}b_i,
\end{equation}$$
we see that $a_{ij}=\delta_{ij}$ and hence $\l[\id_V\r]_\mc{B}=\l[\delta_{ij}\r]=I_n$.<span style="float:right;">$\blacksquare$</span>
