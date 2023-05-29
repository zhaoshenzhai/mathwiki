---
mathLink: Geometric multiplicity $\leq$ algebraic multiplicity
---

<div class="topSpace"></div>

Date Created: 16/03/2023 16:51:21
Tags: #Type/Proposition #Later/Linear_Algebra/Determinant

Proved by: [[Basis Extension Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $T:V\to V$ be a linear operator on a finite-dimensional $K$-vector space $V$. For any eigenvalue $\lambda\in K$ of $T$, its geometric multiplicity is no more than its algebraic multiplicity.

```

**Remark.** That is, there are at most $m_a\!\l(\lambda\r)$ linearly independent eigenvectors for any eigenvector $\lambda$ of $T$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Let $n\coloneqq\dim V$ and let $\mc{B}=\l\{v_1,\dots,v_k\r\}$ be a basis for $E_\lambda$. Extending it to a basis $\mc{C}$ of $V$, we see that $T\l(v_i\r)=\lambda v_i$ for all $1\leq i\leq k$. Thus the matrix of $T$ w.r.t. $\mc{C}$ is of the form
$$\begin{equation}
    A\coloneqq\l[T\r]_\mc{C}=
    \begin{bmatrix}
        \lambda I_k & B \\
        O & C
    \end{bmatrix},
\end{equation}$$
where $O$ is some zero matrix. Observe then that
$$\begin{equation}
    \cchi_T\!\l(x\r)=\det\l(A-xI_n\r)=\det
    \begin{bmatrix}
        \l(x-\lambda\r)I_k & -B \\
        O & xI_{n-k}-C
    \end{bmatrix}=\det\l(\l(x-\lambda\r)I_k\r)\det\l(xI_{n-k}-C\r)=\l(x-\lambda\r)^k\det\l(xI_{n-k}-C\r),
\end{equation}$$
so $k$, the geometric multiplicity of $E_\lambda$, is no more than its algebraic multiplicity.<span style="float:right;">$\blacksquare$</span>
