---
custom_alias: $\mat{m\times n}{K}$ (Vector Space)
---



<br />
<br />

Date Created: 31/03/2022 21:03:36
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Matrix Representation of Linear Maps]], [$\Diag{n}{K}$](Vector%20Space%20of%20Diagonal%20Matrices.md), [$\sym{n}{K}$](Vector%20Space%20of%20Symmetric%20Matrices.md), [$\skew{n}{K}$](Vector%20Space%20of%20Skew-symmetric%20Matrices.md)
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [$\hom\l(V,W\r)\iso\mat{m\times n}{K}$ ($\dim V=n$, $\dim W=m$)](Linear%20isomorphism%20between%20linear%20maps%20and%20matrices.md), [$\mat{n}{K}=\sym{n}{K}\oplus\skew{n}{K}$ for $\charfld K\neq2$](Symmetric%20and%20skew-symmetric%20decomposition%20of%20matrices.md)
Justifications: [[Function space over a field is a vector space]]

``` ad-Definition
title: Definition.

_Let $\l\langle K,+,\cdot\r\rangle$ be a field and fix $m,n\in\N^\ast$. The **vector space of $\l(m\times n\r)$-matrices over $K$** is the vector space_ $\l\langle\mat{m\times n}{K},K,\oplus,\odot,0_{mn}\r\rangle$_ consisting of:_
* _The set $\mat{m\times n}{K}$ of all $m\times n$ matrices over $K$._
* _The field $\l\langle K,+,\cdot\r\rangle$ of scalars._
* _The binary operation $\oplus$ of matrix addition._
* _The function $\odot:K\times\mat{m\times n}{K}\to\mat{m\times n}{K}$ of scalar-matrix multiplication._
* _The $m\times n$ zero matrix_ $0_{mn}$_._

_Indeed, it is the function space $K^{\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}}$ with the usual component-wise operations._

```
