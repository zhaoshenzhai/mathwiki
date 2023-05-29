<div class="topSpace"></div>

Date Created: 12/04/2023 10:08:49
Tags: #Type/Theorem #Topic/Linear_Algebra

Proved by: [[Orthogonal complement of invariant subspace is invariant under self-adjoint operator]], [[Basic properties of normal operators]]
References: [[Gram-Schmidt Orthonormalization]], [[Eigenvalues of linear operators on inner product spaces]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Spectral Theorem).

Let $T:V\to V$ be a linear operator on a finite-dimensional inner product space $V$. If $T$ is normal and $\cchi$ splits, then $T$ is orthonormally diagonalizable.
* If $T$ is self-adjoint, we may drop the hypothesis that $\cchi$ splits.

```

**Remark.** In particular, this shows that Hermitian matrices and real symmetric matrices are orthonormally diagonalizable.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Since $\cchi$ splits, $T$ has an eigenvector $\lambda$. We claim that $E_\lambda^\perp$ is $T$-invariant.
* First, note that this holds automatically for self-adjoint operators. In general, let $v\in E_\lambda^\perp$, so $\inprod{u}{v}=0$ for all $u\in E_\lambda$. Then
$$\begin{equation}
    \inprod{u}{Tv}=\inprod{T^\ast u}{v}=\inprod{\bar{\lambda}u}{v}=\bar{\lambda}\inprod{u}{v}=0
\end{equation}$$
for all $u\in U$, so $Tv\in E_\lambda^\perp$.

With respect to the bases of $E_\lambda$ and $E_\lambda^\perp$, we see that $T\sim\diag\l(\lambda\id,R\r)$ where $R\coloneqq\l.T\r|_{E_\lambda^\perp}\in\End\l(E_\lambda^\perp\r)$ is normal, so the result follows by induction.<span style="float:right;">$\blacksquare$</span>
