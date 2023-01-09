<div class="topSpace"></div>

Date Created: 04/04/2022 23:21:59
Tags: #Definition #In_Progress/Linear_Algebra

Types: [[Orthonormal Basis]]
Examples: [[Basis for null space]], [[Basis for column space]]
Constructions: [[Dimension (Linear Algebra)]], [[Coordinate Representation of Finite-dim. Vector Spaces]], [[Matrix Representation of a Linear Map]], [[Basis Transition Map; Change of Basis Matrix]]
Generalizations: _Not Applicable_

Properties: [[Invariance of cardinality of bases (finite-dim.)]], [[Existence of unique linear map via action on basis vectors]]
Sufficiencies: [[Every vector space has a basis]], [[Linearly independent set with same cardinality as dimension (finite) is a basis]], [[Spanning subset with same cardinality as dimension (finite) is a basis]]
Equivalences: [[Unique Representation Theorem (algebraic basis)]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a vector space $V$ over $K$. An indexed subset_ $\mc{B}\coloneqq\l\{b_i\r\}_{i\in I}\subseteq V$ _is said to be a **(algebraic) basis for $V$** if any of the following equivalent conditions hold:_
* _$\mc{B}$ is a linearly independent spanning set of $V$._
* _$\mc{B}$ is a spanning set of $V$ of minimal size._
* _Every $v\in V$ can be uniquely represented as a (finite) linear combination of vectors in $\mc{B}$._

```

**Remark.** If $I$ carries a total order, then $\mc{B}$ inherits this order and is hence said to be an **ordered (algebraic) basis for $V$**. Abusing notation, if $I=\l\{1,\dots,n\r\}$ for some $n\in\N$, we write $\mc{B}=\l\{b_1,\dots,b_n\r\}$ which is understood to be ordered. Similarly, if $I=\N$, we write $\mc{B}=\l\{b_1,b_2,\dots\r\}$.<span style="float:right;">$\blacklozenge$</span>
