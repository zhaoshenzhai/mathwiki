---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 11/06/2022 18:17:22
Tags: #Type/Definition #Topic/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Diagonalization Test]]
Generalizations: [[Generalized Eigenvector slash Eigenspace]]

Properties: _Not Applicable_
Sufficiencies: [[Distinct eigenvalues implies linearly independent eigenvectors]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $T:V\to V$ be a linear operator on a $K$-vector space $V$. If $\lambda\in K$ is an eigenvalue of $T$, then
$$\begin{equation}
    E_\lambda\coloneqq\ker\l(\lambda\id_V-T\r)=\l\{v\in V\mid T\l(v\r)=\lambda v\r\}
\end{equation}$$
is called the **eigenspace of $T$ corresponding to $\lambda$**. A vector $v\in E_\lambda$ is said to be an **eigenvector of $T$ corresponding to $\lambda$**.

```

**Remark.** Eigenspaces and eigenvectors of a matrix $A\in\mat{n}{K}$ are defined as those of $L_A$.<span style="float:right;">$\blacklozenge$</span>
