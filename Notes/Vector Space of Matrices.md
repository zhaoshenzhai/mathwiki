---
custom_alias: $\mat{m\times n}{K}$ (Vector Space)
---



<br />
<br />

Date Created: 31/03/2022 21:03:36
Tags: #Definition #Closed

Types: [$\Diag{n}{K}$](Vector%20Space%20of%20Diagonal%20Matrices.md), [$\sym{n}{K}$](Vector%20Space%20of%20Symmetric%20Matrices.md), [$\skew{n}{K}$](Vector%20Space%20of%20Skew-symmetric%20Matrices.md)
Examples: _Not Applicable_
Constructions: [[Matrix Representation of Linear Maps]]
Generalizations: _Not Applicable_

Properties: [[Algebraic identities of matrix operations]]
Sufficiencies: _Not Applicable_
Equivalences: [$\hom\l(V,W\r)\iso\mat{m\times n}{K}$ ($\dim V=n$, $\dim W=m$)](Linear%20isomorphism%20between%20linear%20maps%20and%20matrices.md), [$\mat{n}{K}=\sym{n}{K}\oplus\skew{n}{K}$ for $\charfld K\neq2$](Symmetric%20and%20skew-symmetric%20decomposition%20of%20matrices.md)
Justifications: [[Function space over a field is a vector space]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. The **vector space of $\l(m\times n\r)$-matrices over $K$** is the vector space_
$$\begin{equation}
    \mat{m\times n}{K}\coloneqq K^{\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}}
\end{equation}$$
_equipped with the operations_
$$\begin{equation}
    \begin{aligned}
        +:\mat{m\times n}{K}\times\mat{m\times n}{K}&\to\mat{m\times n}{K} \\
        \l\langle\l[a_{ij}\r],\l[b_{ij}\r]\r\rangle&\mapsto\l[a_{ij}+b_{ij}\r]
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \cdot:K\times\mat{m\times n}{K}&\to\mat{m\times n}{K} \\
        \l\langle\alpha,\l[a_{ij}\r]\r\rangle&\mapsto\l[\alpha a_{ij}\r]
    \end{aligned}
\end{equation}$$
_and whose zero vector is_
$$\begin{equation}
    0_{mn}\coloneqq
        \begin{bmatrix}
            0_K & \cdots & 0_K \\
            \vdots & & \vdots \\
            0_K & \cdots & 0_K
        \end{bmatrix}.
\end{equation}$$

```

**Remark.** Formally, $\l\langle\mat{m\times n}{K},K,+,\cdot,0_{mn}\r\rangle$ is the vector space of functions from $\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}$ to $K$.<span style="float:right;">$\blacklozenge$</span>
