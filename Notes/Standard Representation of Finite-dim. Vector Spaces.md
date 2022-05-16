<br />
<br />

Date Created: 15/05/2022 22:31:09
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Unique Representation Theorem (Hamel)]], [[Standard representation of a finite-dim. vector space is a linear isomorphism]]

``` ad-Definition
title: Definition.

_Let $V$ be a finite-dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and fix a choice of basis_ $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ _of $V$. The **standard representation of $V$ relative to $\mc{B}$** is the linear isomorphism_
$$\begin{equation}
    \phi_\mc{B}:V\to K^n\ \ \ \ \textrm{\it{mapping}}\ \ \ \ v\mapsto\l[v\r]_\mc{B}\coloneqq\l\langle\alpha_1,\dots,\alpha_n\r\rangle
\end{equation}$$
_where $\alpha_1,\dots,\alpha_n\in K$ are the unqiue coefficients such that_ $v=\sum_{i=1}^n\alpha_ib_i$_._

```

**Remark.** For each $v\in V$, the tuple $\l[v\r]_\mc{B}$ is also called the **coordinate vector of $v$ relative to $\mc{B}$**. It is sometimes convenient to instead define $\l[v\r]_\mc{B}\coloneqq\l[\alpha_1\ \ \cdots\ \ \alpha_n\r]^\trans\in\mat{n\times1}{K}$ as a column matrix (in order to perform matrix multiplication).<span style="float:right;">$\blacklozenge$</span>
