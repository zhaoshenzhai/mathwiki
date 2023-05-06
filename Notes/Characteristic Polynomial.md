<div class="topSpace"></div>

Date Created: 08/03/2023 15:50:44
Tags: #Type/Definition #Topic/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Algebraic slash geometric multiplicity]]
Generalizations: _Not Applicable_

Properties: [[Cayley-Hamilton Theorem]], [[Eigenvalue iff root of characteristic polynomial]], [[Schur's Theorem]], [[Basic properties of characteristic polynomial and invariant subspaces]], [[Basic properties of characteristic and minimal polynomials]]
Sufficiencies: [[Characteristic polynomial for a diagonalizable operator]]
Equivalences: _Not Applicable_
Justifications: [[Characteristic polynomial is a polynomial]], [[Identity function repr under basis by identity matrix]]

``` ad-Definition
title: Definition.

_Let $T:V\to V$ be a linear operator on a finite-dimensional $K$-vector space $V$. The **characteristic polynomial of $T$** is the polynomial $\cchi_T\in K\l[x\r]$ given by $\cchi_T\!\l(x\r)\coloneqq\det\l(x\id_V-T\r)$._

```

**Remark.** The characteristic polynomial of a matrix $A\in\mat{n}{K}$ is defined as $\cchi_A\!\l(x\r)\coloneqq\det\l(xI-A\r)$. This agrees with the above, since if $V$ is finite-dimensional, say with $n\coloneqq\dim V$, and $\mc{B}$ is a basis for $V$, then
$$\begin{equation}
    \cchi_T\!\l(x\r)=\det\l(x\id_V-T\r)=\det\l(\l[x\id_V-T\r]_\mc{B}\r)=\det\l(xI-A\r)=\cchi_A\!\l(x\r)
\end{equation}$$
where $A\coloneqq\l[T\r]_\mc{B}$.<span style="float:right;">$\blacklozenge$</span>
