---
mathLink: Coordinate representation of $V$
---

<br />
<br />

Date Created: 15/05/2022 22:31:09
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Orthonormal Expansion]]
Constructions: [$\phi_\mc{B}:V\simto K^n$ ($\dim V=n$)](Linear%20isomorphism%20between%20finite-dim%20vector%20spaces%20and%20tuple%20spaces.md), [Basis Transition Map$\slash$Matrix](Basis%20Transition%20Map;%20Change%20of%20Basis%20Matrix.md)
Generalizations: _Not Applicable_

Properties: [Action of linear map $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ left-multiplication of matrix representation](Action%20of%20linear%20map%20repr%20under%20basis%20left-multiplication%20of%20matrix%20representation.md)
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Unique Representation Theorem (Hamel)]]

``` ad-Definition
title: Definition.

_Let $V$ be a finite-dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and fix a choice of basis_ $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ _of $V$. The **coordinate representation of $V$ relative to $\mc{B}$** is the function_
$$\begin{equation}
    \phi_\mc{B}:V\to K^n\ \ \ \ \textrm{\it{mapping}}\ \ \ \ v\mapsto\l[v\r]_\mc{B}\coloneqq\tpl{\alpha_1,\dots,\alpha_n}
\end{equation}$$
_where $\alpha_1,\dots,\alpha_n\in K$ are the unqiue coefficients such that_ $v=\sum_{i=1}^n\alpha_ib_i$_._

```

**Remark.** For each $v\in V$, the tuple $\l[v\r]_\mc{B}$ is also called the **coordinate vector of $v$ relative to $\mc{B}$**. It is sometimes convenient to instead define $\l[v\r]_\mc{B}\coloneqq\l[\alpha_1\ \ \cdots\ \ \alpha_n\r]^\trans\in\mat{n\times1}{K}$ as a column matrix (in order to perform matrix multiplication).<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** If $V=K^n$ and $\mc{B}=\l\{\v{e}_1,\dots,\v{e}_n\r\}$ is the standard basis on $K^n$, then $\v{x}=\l[\v{x}\r]_\mc{B}$ for all $\v{x}\in K^n$; that is, $\phi_\mc{B}=\id_{K^n}$.<span style="float:right;">$\blacklozenge$</span>
