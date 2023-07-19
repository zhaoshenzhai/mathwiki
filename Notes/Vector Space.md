<div class="topSpace"></div>

Date Created: 27/03/2022 21:04:03
Tags: #Type/Definition #Topic/Linear_Algebra

Types: [[Finite-dimensional Vector Space]], [[Inner Product Space]]
Examples: [[Polynomials]]
Constructions: [[Linear Combination]], [[Linear Map]], [[Linear Subspace]], [[Dual Space]], [[Direct Product (module)]], [[Category of Vector Spaces]]
Generalizations: [[Module]]

Properties: [[Every vector space has a basis]], [[Basis Extension Theorem]], [[Invariant Basis Number]]
Sufficiencies: [[Unique Representation Theorem (Basis)]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Ideal is maximal iff quotient is a field]]

``` ad-Definition
title: Definition.

A $k$-module is said to be a <b>$k$-vector space</b> if $k$ is a field.

```

<b>Remark.</b> A $k$-module homomorphisms is called a <b>linear map</b>, we write $\catvect[k]$ for $\catmod[k]$, and we write $\dim_k\!V$ for $\rk_k\!V$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $\mf{m}\subgrp R$ is a maximal ideal in a commutative ring $R$, then $R/\mf{m}$ is a field. Let $M$ be an $R$-module such that $\mf{m}M=0$. Then $M$ has a natural $R/\mf{m}$-vector space structure by $\l(r+\mf{m}\r)\cdot m\coloneqq rm$. Indeed, this is well-defined since for all $r_1+\mf{m}=r_2+\mf{m}$, we have $r_1-r_2\in\mf{m}$ and hence $r_1m-r_2m=\l(r_1-r_2\r)m\in\mf{m}m=0$.<span style="float:right;">$\blacklozenge$</span>
