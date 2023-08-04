<div class="topSpace"></div>

Date Created: 20/06/2022 15:01:38
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Diagonalization Test]], [[Algebraic and geometric multiplicity]]
Generalizations: [[Generalized Eigenvector and Eigenspace]]

Properties: [[Eigenvalues of linear operators on inner product spaces]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Eigenvalue iff root of characteristic polynomial]]
Justifications: [[Characterizations of PIDs]]

``` ad-Definition
title: Definition.

Let $\alpha\in\End\l(M\r)$ be a linear operator on a fin-gen. free $R$-module $M$. A scalar $\lambda\in R$ is called an <b>eigenvalue of $\alpha$</b> if $\alpha\l(m\r)=\lambda m$ for some non-zero $m\in M$.
* If $\lambda\in R$ is an eigenvalue of $\alpha$, the <b>eigenspace of $\lambda$</b> is the submodule $E_\lambda\coloneqq\ker\l(\lambda\id-\alpha\r)=\l\{m\in M\st\alpha\l(m\r)=\lambda m\r\}$ consisting of <b>$\lambda$-eigenvectors of $\alpha$</b>.

```

<b>Remark.</b> The collection of all eigenvalues of $\alpha$ is the set of roots of the characteristic polynomial $\cchi_\alpha$.

---

<b>Remark.</b> If $M$ is a finitely-generated free module over a PID $R$, then $\lambda_i$-eigenvectors $\l\{m_i\r\}_{i=1}^n$ are linearly independent if $\lambda_1,\dots,\lambda_n$ are distinct eigenvalues of $\alpha$. Indeed, $M$ is torsion-free, so we may induct on $n$ with base case $\l\{m_1\r\}$. If we have a relation $\sum_{i=1}^{n}r_im_i=0$, then
$$\begin{equation}
    \sum_{i=1}^{n}\l(\lambda_n\id-\alpha\r)\l(r_im_i\r)=\sum_{i=1}^{n}\lambda_nr_im_i-r_i\alpha\l(m_i\r)=\sum_{i=1}^{n}\lambda_nr_im_i-\lambda_ir_im_i=\sum_{i=1}^{n-1}r_i\l(\lambda_n-\lambda_i\r)m_i=0.
\end{equation}$$
Thus $r_i\l(\lambda_n-\lambda_i\r)=0$ for all $1\leq i\leq n-1$ by induction, but since $\lambda_i\neq\lambda_n$, we see that each $r_i=0$. Thus $r_nm_n=0$, so $r_n=0$ too.<span style="float:right;">$\blacklozenge$</span>
