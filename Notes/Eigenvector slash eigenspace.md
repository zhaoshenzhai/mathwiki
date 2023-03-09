---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 11/06/2022 18:17:22
Tags: #Definition #Topics/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Diagonalizable iff exists basis for eigenvectors]]
Sufficiencies: [[Distinct eigenvalues implies linearly independent eigenvectors]]
Equivalences: [[Eigenvector iff span is invariant under linear map]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ be a finite-dimensional $K$-vector space and consider a linear operator $T:V\to V$. If $\lambda\in K$ is an eigenvalue of $T$, then_
$$\begin{equation}
    E_\lambda\coloneqq\ker\l(\lambda\id_V-T\r)=\l\{v\in V\mid T\l(v\r)=\lambda v\r\}
\end{equation}$$
_is called the **eigenspace of $T$ corresponding to $\lambda$**. A vector _$v\in E_\lambda$ _is said to be an **eigenvector of $T$ corresponding to $\lambda$**._

```

**Remark.** Eigenspaces and eigenvectors of a matrix $A\in\mat{n}{K}$ are defined as those of $L_A$.<span style="float:right;">$\blacklozenge$</span>
