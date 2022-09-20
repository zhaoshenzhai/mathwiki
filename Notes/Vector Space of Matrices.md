---
mathLink: $\mat{m\times n}{K}$ (Vector Space)
---

<div class="topSpace"></div>

Date Created: 31/03/2022 21:03:36
Tags: #Definition

Types: [[Vector Space of Diagonal Matrices]], [[Vector Space of Symmetric Matrices]], [[Vector Space of Skew-symmetric Matrices]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Basic properties of matrix operations]]
Sufficiencies: [[Symmetric and skew-symmetric decomposition of matrices]]
Equivalences: [[Linear isomorphism between linear maps and matrices]]
Justifications: [[Direct product of vector spaces; function spaces are vector spaces]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N^+$. The **vector space of $\l(m\times n\r)$-matrices over $K$** is the vector space_
$$\begin{equation}
    \mat{m\times n}{K}\coloneqq K^{\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}}
\end{equation}$$
_equipped with the operations_
$$\begin{equation}
    \begin{aligned}
        +:\mat{m\times n}{K}\times\mat{m\times n}{K}&\to\mat{m\times n}{K} \\
        \tpl{\l[a_{ij}\r],\l[b_{ij}\r]}&\mapsto\l[a_{ij}+b_{ij}\r]
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \cdot:K\times\mat{m\times n}{K}&\to\mat{m\times n}{K} \\
        \tpl{\alpha,\l[a_{ij}\r]}&\mapsto\l[\alpha a_{ij}\r]
    \end{aligned}
\end{equation}$$
_and whose zero vector is_
$$\begin{equation}
    0_{m\times n}\coloneqq
        \begin{bmatrix}
            0_K & \cdots & 0_K \\
            \vdots & & \vdots \\
            0_K & \cdots & 0_K
        \end{bmatrix}.
\end{equation}$$

```

**Remark.** Formally, $\tpl{\mat{m\times n}{K},K,+,\cdot,0_{m\times n}}$ is the vector space of functions from $\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}$ to $K$.<span style="float:right;">$\blacklozenge$</span>
