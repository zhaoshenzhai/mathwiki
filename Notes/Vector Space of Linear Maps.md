---
mathLink: $\hom\l(V,W\r)$
---

<div class="topSpace"></div>

Date Created: 16/05/2022 19:38:42
Tags: #Definition #Topics/Linear_Algebra

Types: [[Endomorphism Algebra (Vector Space)]], [[Dual Space]]
Examples: _Not Applicable_
Constructions: [[Category of Vector Spaces]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of composition of linear maps]]
Sufficiencies: _Not Applicable_
Equivalences: [[Linear isomorphism between linear maps and matrices]]
Justifications: [[Set of linear maps form a linear subspace of the function space]], [[Linearly isomorphic iff dimensions coincide (finite-dim.)]]

``` ad-Definition
title: Definition.

_Let $V$ and $W$ be $K$-vector spaces. The **vector space of linear maps from $V$ to $W$** is the linear subspace_
$$\begin{equation}
    \hom\l(V,W\r)\coloneqq\l\{T\in W^V\mid T\textrm{ \it{is a linear map}}\r\}
\end{equation}$$
_of the function space $W^V$._

```

**Remark.** If $n\coloneqq\dim V$ and $m\coloneqq\dim W$ are finite, then, since $\hom\l(V,W\r)\iso\mat{m\times n}{K}$ and $\dim\mat{m\times n}{K}=mn$, we see that
$$\begin{equation}
    \dim\hom\l(V,W\r)=\dim V\cdot\dim W.\exqedin
\end{equation}$$
