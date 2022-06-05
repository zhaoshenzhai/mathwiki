---
custom_alias: Kernel$\slash$Null Space
---

<br />
<br />

Date Created: 02/05/2022 18:54:55
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Nullity]], [[Basis for null space]]
Generalizations: _Not Applicable_

Properties: [[Dimension Theorem]], [Linear map $T$ is injective $\Leftrightarrow$ $\ker T=\l\{0\r\}$](Linear%20map%20is%20injective%20iff%20kernel%20vanishes.md)
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Kernel of linear map is a subspace of its domain]]

``` ad-Definition
title: Definition.

_Let $V$ and $W$ be vector spaces over some field $K$ and consider a linear map $T:V\to W$. The **kernel of $T$** is the linear subspace_
$$\begin{equation}
    \ker T\coloneqq\l\{v\in V\mid T\l(v\r)=0\r\}
\end{equation}$$
_of $V$._

_If $V$ and $W$ are both finite-dimensional, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, we define the **null space of a matrix** $A\in\mat{m\times n}{K}$ as the kernel of its associated left-multiplication map $L_A$; that is, $\nullsp A\coloneqq\ker L_A$._

```
