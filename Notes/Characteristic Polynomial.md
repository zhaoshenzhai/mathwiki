<div class="topSpace"></div>

Date Created: 08/03/2023 15:50:44
Tags: #Type/Definition #Topic/Linear_Algebra

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Algebraic slash geometric multiplicity]]
Generalizations: <i>Not Applicable</i>

Properties: [[Cayley-Hamilton Theorem]], [[Eigenvalue iff root of characteristic polynomial]], [[Schur's Theorem]], [[Basic properties of characteristic polynomial and invariant subspaces]], [[Basic properties of characteristic and minimal polynomials]]
Sufficiencies: [[Characteristic polynomial for a diagonalizable operator]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Characteristic polynomial is a polynomial]]

``` ad-Definition
title: Definition.

Let $T:V\to V$ be a linear operator on a finite-dimensional $K$-vector space $V$. The <b>characteristic polynomial of $T$</b> is the polynomial $\cchi_T\in K\l[x\r]$ given by $\cchi_T\!\l(x\r)\coloneqq\det\l(x\id_V-T\r)$.

```

<b>Remark.</b> The characteristic polynomial of a matrix $A\in\mat{n}{K}$ is defined as $\cchi_A\!\l(x\r)\coloneqq\det\l(xI-A\r)$. This agrees with the above, since if $V$ is finite-dimensional, say with $n\coloneqq\dim V$, and $\mc{B}$ is a basis for $V$, then
$$\begin{equation}
    \cchi_T\!\l(x\r)=\det\l(x\id_V-T\r)=\det\l(\l[x\id_V-T\r]_\mc{B}\r)=\det\l(xI-A\r)=\cchi_A\!\l(x\r)
\end{equation}$$
where $A\coloneqq\l[T\r]_\mc{B}$.<span style="float:right;">$\blacklozenge$</span>
