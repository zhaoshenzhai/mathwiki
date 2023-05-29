---
mathLink: $\Hom\l(V,W\r)$
---

<div class="topSpace"></div>

Date Created: 16/05/2022 19:38:42
Tags: #Type/Definition #Topic/Linear_Algebra

Types: [[General Linear Group]], [[Special Linear Group]], [[Endomorphism Algebra (Vector Space)]], [[Dual Space]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Basic properties of composition of linear maps]]
Sufficiencies: [[Symmetric and skew-symmetric decomposition of matrices]]
Equivalences: [[Matrix representation of linear maps]]
Justifications: [[Set of linear maps form a linear subspace of the function space]], [[Linearly isomorphic iff dimensions coincide (finite-dim.)]]

``` ad-Definition
title: Definition.

Let $V$ and $W$ be $K$-vector spaces. The **vector space of linear maps from $V$ to $W$** is the hom-set $\Hom\l(V,W\r)$ of all linear maps $T:V\to W$.

```

<b>Remark.</b> If $n\coloneqq\dim V$ and $m\coloneqq\dim W$ are finite, then, since $\Hom\l(V,W\r)\iso\mat{m\times n}{K}$ and $\dim\mat{m\times n}{K}=mn$, we see that
$$\begin{equation}
    \dim\Hom\l(V,W\r)=\dim V\cdot\dim W.\exqedin
\end{equation}$$
