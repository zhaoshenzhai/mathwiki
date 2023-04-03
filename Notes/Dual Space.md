<div class="topSpace"></div>

Date Created: 25/01/2023 09:37:02
Tags: #Definition #Topics/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Dual Basis]], [[Dual Map]]
Generalizations: _Not Applicable_

Properties: [[Vector space isomorphic to double dual (finite-dim.)]], [[Riesz Representation Theorem]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Linearly isomorphic iff dimensions coincide (finite-dim.)]]

``` ad-Definition
title: Definition.

_Let $V$ be a $K$-vector space. The **dual space of $V$** is the vector space $V^\dual\coloneqq\hom\l(V,K\r)$, whose elements $\omega:V\to K$ are said to be **linear forms**._

```

**Remark.** If $V$ is finite-dimensional, we have that $\dim V^\dual=\dim\hom\l(V,K\r)=\dim V\cdot\dim K=\dim V$, so $V\iso V^\dual$. However, this isomorphism depends on a choice of basis (since we used the matrix representation $\Phi_\mc{B}:\omega\mapsto\l[\omega\r]_\mc{B}$ where $\mc{B}$ is a basis for $V$), and a hence not $\textrm{`}$natural$\textrm{'}$.<span style="float:right;">$\blacklozenge$</span>
