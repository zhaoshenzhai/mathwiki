---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/06/2022 08:05:38
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Linearly dependent iff exists span redundant element]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a vector space over some field $K$ and consider a linear operator $T:V\to V$. If $\lambda_1,\dots,\lambda_m\in K$ are distinct eigenvalues of $T$ and $v_1,\dots,v_m\in V$ are their corresponding eigenvectors, then $\l\{v_1,\dots,v_m\r\}$ is linearly independent._

```

_Proof_. Suppose, for sake of contradiction, that $\l\{v_1,\dots,v_m\r\}$ is linearly dependent. Thus there exists a span redundant element, so we may let $k\in\N^+$ be the smallest number such that $v_k\in\span\l\{v_1,\dots,v_{k-1}\r\}$. Hence there exist scalars $\alpha_1,\dots,\alpha_{k-1}\in K$ such that
$$\begin{equation}
    v_k=\sum_{i=1}^{k-1}\alpha_iv_i.\cref{\ast}
\end{equation}$$
Applying $T$ to both sides, we see that
$$\begin{equation}
    T\l(v_k\r)=T\l(\sum_{i=1}^{k-1}\alpha_iv_i\r)=\sum_{i=1}^{k-1}\alpha_iT\l(v_i\r),
\end{equation}$$
but since each $v_i$ is an eigenvector of $T$ with eigenvalue $\lambda_i$, this reduces to
$$\begin{equation}
    \lambda_kv_k=\sum_{i=1}^{k-1}\alpha_i\lambda_iv_i.
\end{equation}$$
We may also multiply both sides of $\ref{\ast}$ by $\lambda_k$ to obtain
$$\begin{equation}
    \lambda_kv_k=\lambda_k\sum_{i=1}^{k-1}\alpha_iv_i=\sum_{i=1}^{k-1}\alpha_i\lambda_kv_i,
\end{equation}$$
so, equating the expressions for $\lambda_kv_k$ and rearranging, we obtain
$$\begin{equation}
    \sum_{i=1}^{k-1}\alpha_i\l(\lambda_k-\lambda_i\r)v_i=0.
\end{equation}$$
Since $k$ is the smallest number such that $v_k$ is span-redundant, we see that $\l\{v_1,\dots,v_{k-1}\r\}$ is linearly independent and hence the preceding equation implies that each
$$\begin{equation}
    \alpha_i\l(\lambda_k-\lambda_i\r)=0.
\end{equation}$$
But since each $\lambda_i\neq\lambda_k$, this forces each $\alpha_i=0$. Hence $v_k=0$ by $\ref{\ast}$, contradicting the hypothesis that $v_k$ is an eigenvector of $T$.<span style="float:right;">$\blacksquare$</span>
