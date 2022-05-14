<br />
<br />

Date Created: 03/04/2022 14:30:50
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Null Space]], [[Kernel]], [[Image (Linear Map)]], [$\Diag{n}{K}$](Vector%20Space%20of%20Diagonal%20Matrices.md), [$\sym{n}{K}$](Vector%20Space%20of%20Symmetric%20Matrices.md), [$\skew{n}{K}$](Vector%20Space%20of%20Skew-symmetric%20Matrices.md), [[Trivial Subspaces (Linear Algebra)]]
Constructions: [[Linear Span]], [[Minkowski Sum (Linear Algebra)]], [[Direct Complement (Linear Subspace)]]
Generalizations: _Not Applicable_

Properties: [$\dim U\leq\dim V$ for $U\subseteq V$ finite-dim.; strict $\Leftrightarrow$ $U\subset V$](Dimension%20of%20subspace%20less%20than%20dimension%20of%20vector%20space%20(finite-dim.;%20strict%20iff%20proper).md), [[Arbitrary intersection of linear subspaces is a linear subspace]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [$U\subseteq V$ is a vector space $\Leftrightarrow$ $0\in U$ and restricted operations close in $U$](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md)

``` ad-Definition
title: Definition.

_Let $\l\langle V,K,+,\cdot,0\r\rangle$ be a vector space over some field $K$ and fix a subset $U\subseteq V$. The quintuple_ $\mc{U}\coloneqq\l\langle U,K,\l.+\r|_{U\times U},\l.\cdot\r|_{K\times U},0\r\rangle$ _is a **($K$-linear) subspace of $\mc{V}$** if, equivalently:_
* _$\mc{U}$ is a vector space over $K$._
* _$0\in U$ and the restricted operations_ $\l.+\r|_{U\times U}$ _and_ $\l.\cdot\r|_{K\times U}$ _close in $U$._

```
