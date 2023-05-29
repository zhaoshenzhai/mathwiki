---
mathLink: $\dim V<\infty$ $\Rightarrow$ $\dim C_T\l(v\r)<\infty$
---

<div class="topSpace"></div>

Date Created: 16/03/2023 13:32:37
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $V$ be a $K$-vector space. Consider a linear operator $T:V\to V$ and fix $v\in V$. If $V$ is finite-dimensional, then so is $C_T\l(v\r)$.

```

_Proof_. Clearly this holds for $v=0$, so suppose otherwise. Then $\l\{v\r\}$ is linearly independent, so there exists some $j\in\N^+$ such that $\mc{B}\coloneqq\l\{v,Tv,T^2v,\dots,T^{j-1}v\r\}$ is linearly independent. Since $V$ is finite-dimensional, there is a largest such $j$, call it $j_0$. Letting $W\coloneqq\span\mc{B}$, we see that $\mc{B}$ is a basis for $W$. Clearly $W\subseteq C_T\l(v\r)$, so it suffices to show that $W$ is a $T$-invariant subspace of $V$.
* Take $w\in W$, so $w=\sum_{i=0}^{j-1}\alpha_iT^iv$ for some $\alpha_i\in K$. Then
$$\begin{equation}
    T\l(w\r)=T\l(\sum_{i=0}^{j-1}\alpha_iT^iv\r)=\sum_{i=1}^{j}\alpha_iT^iv.
\end{equation}$$
But since $\mc{B}$ is linearly independent and $\mc{B}\cup\l\{T^jv\r\}$ is not, we see that $T^jv\in\span\mc{B}=W$. Thus $T\l(w\r)\in\span\mc{B}=W$, so $W$ is $T$-invariant.<span style="float:right;">$\blacksquare$</span>
