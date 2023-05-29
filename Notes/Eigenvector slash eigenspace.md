---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 11/06/2022 18:17:22
Tags: #Type/Definition #Topic/Linear_Algebra

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Diagonalization Test]]
Generalizations: [[Generalized Eigenvector slash Eigenspace]]

Properties: <i>Not Applicable</i>
Sufficiencies: [[Distinct eigenvalues implies linearly independent eigenvectors]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $T:V\to V$ be a linear operator on a $K$-vector space $V$. If $\lambda\in K$ is an eigenvalue of $T$, then
$$\begin{equation}
    E_\lambda\coloneqq\ker\l(\lambda\id_V-T\r)=\l\{v\in V\mid T\l(v\r)=\lambda v\r\}
\end{equation}$$
is called the **eigenspace of $T$ corresponding to $\lambda$**. A vector $v\in E_\lambda$ is said to be an **eigenvector of $T$ corresponding to $\lambda$**.

```

<b>Remark.</b> Eigenspaces and eigenvectors of a matrix $A\in\mat{n}{K}$ are defined as those of $L_A$.<span style="float:right;">$\blacklozenge$</span>
