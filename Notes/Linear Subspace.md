<br />
<br />

Date Created: 03/04/2022 14:30:50
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Linear Span]], [[Null Space]], [[Kernel of linear map is a subspace of its domain]], [[Image of linear map is a subspace of its codomain]], [$\sym{n}{K}$](Vector%20Space%20of%20Symmetric%20Matrices.md), [[Trivial Subspaces (Linear Algebra)]]
Constructions: [[Minkowski Sum (Linear Algebra)]]
Generalizations: _Not Applicable_

Properties: [$\dim U<\dim V$ for $U\subset V$ strict linear subspace](Dimension%20of%20proper%20subspace%20strictly%20less%20than%20dimension%20of%20vector%20space%20(finite-dim.).md), [[Arbitrary intersection of linear subspaces is a linear subspace]], [[Minkowski sum of linear subspaces is the span of their union]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [$U\subseteq V$ is a vector space $\Leftrightarrow$ $0\in U$ and restricted operations close in $U$](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md)

``` ad-Definition
title: Definition.

_Let $\l\langle V,K,+,\cdot,0\r\rangle$ be a vector space over some field $K$ and fix a subset $U\subseteq V$. The quintuple_ $\mc{U}\coloneqq\l\langle U,K,\l.+\r|_{U\times U},\l.\cdot\r|_{K\times U},0\r\rangle$ _is a **($K$-linear) subspace of $\mc{V}$** if, equivalently:_
* _$\mc{U}$ is a vector space over $K$._
* _$0\in U$ and the restricted operations_ $\l.+\r|_{U\times U}$ _and_ $\l.\cdot\r|_{K\times U}$ _close in $U$._

```
