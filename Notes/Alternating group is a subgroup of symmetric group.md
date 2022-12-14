---
mathLink: $A_n\subseteq S_n$ is a permutation group
---

<div class="topSpace"></div>

Date Created: 07/10/2022 13:16:10
Tags: #Proposition #Courses/MATH235

Proved by: [[Subgroup Test]], [[Every k-cycle is a product of k-1 transpositions]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X\coloneqq\l\{1,\dots,n\r\}$ for some $n\geq2$. Then the alternating group $A_n$ is a permutation group; that is $A_n\subseteq S_n$ is a subgroup._

```

_Proof_. We apply the Subgroup Test.
* (Identity): Since $e=\l(1\ 2\r)\l(1\ 2\r)$, we see that $e\in A_n$.

* (Closed): Take $\sigma,\tau\in A_n$, so we may decompose them into transpositions as $\sigma=\sigma_1\cdots\sigma_n$ and $\tau=\tau_1\cdots\tau_m$ for some even $n,m\in\N$. But then
$$\begin{equation}
    \sigma\tau=\sigma_1\cdots\sigma_n\tau_1\cdots\tau_m,
\end{equation}$$
and since $n+m$ is even, we are done.
* (Inverse): Take $\sigma\in A_n$, so $\sigma=\sigma_1\cdots\sigma_n$ for some even number of transpositions $\sigma_i$. Observe then that
$$\begin{equation}
    \sigma^{-1}=\l(\sigma_n\cdots\sigma_1\r)^{-1}=\sigma_1^{-1}\cdots\sigma_n^{-1}=\sigma_1\cdots\sigma_n,
\end{equation}$$
where the last equality follows from the fact that the inverse of every transposition is itself. Indeed, if $\sigma_i=\l(a\ b\r)$ for some $a,b\in X$, then $\l(a\ b\r)\l(a\ b\r)=e$.<span style="float:right;">$\blacksquare$</span>
