---
mathLink: $\upchi_T\in K\l[x\r]$ is monic with $\deg\upchi_T=\dim V$
---

<div class="topSpace"></div>

Date Created: 08/03/2023 16:04:49
Tags: #Proposition #Later/Linear_Algebra/Determinant

Proved by: [[Identity function repr under basis by identity matrix]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional $K$-vector space and consider a linear map $T:V\to V$. Then $\upchi_T\l(x\r)\coloneqq\det\l(x\id_V-T\r)$ is a polynomial; that is, $\upchi\in K\l[x\r]$._
* _Furthermore, $\upchi_T$ is monic of degree of degree $n\coloneqq\dim V$._

```

_Proof_. Let $\mc{B}$ be a basis for $V$ and let $A\coloneqq\l[T\r]_\mc{B}$. Then $\upchi_T\l(x\r)=\det\l(x\id_V-T\r)=\det\l(\l[x\id_V-T\r]_\mc{B}\r)=\det\l(xI-A\r)$, so, by the Leibniz formula for determinants, we obtain
$$\begin{equation}
    \upchi_T\l(x\r)=\sum_{\sigma\in S_n}\sgn\l(\sigma\r)b_{\sigma\l(1\r)1}\cdots b_{\sigma\l(n\r)n}
\end{equation}$$
where $b_{ii}\coloneqq x-a_{ii}$ for all $i$ and $b_{ij}=-a_{ij}$ for $i\neq j$. It is then clear that $\upchi_T\l(x\r)$ is a polynomial.
* Observe that the term for $\sigma=\id_{S_n}$ is $\prod_{i=1}^{n}\l(x-a_{ii}\r)$, and since every other permutation $\tau\in S_n$ is such that $\tau\l(i\r)=j$ for some $i\neq j$, all other terms are of degree less than $n$. Hence $\upchi_T$ is monic with degree $n$.<span style="float:right;">$\blacksquare$</span>
