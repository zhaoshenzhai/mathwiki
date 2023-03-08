<div class="topSpace"></div>

Date Created: 11/06/2022 18:17:22
Tags: #Definition #Topics/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Diagonalizable iff exists basis for eigenvectors]], [[Distinct eigenvalues implies linearly independent eigenvectors]]
Sufficiencies: _Not Applicable_
Equivalences: [[Eigenvector iff span is invariant under linear map]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ be a finite-dimensional $K$-vector space and consider a linear operator $T:V\to V$. A nonzero vector $v\in V$ is called an **eigenvector of $T$** if there exists some $\lambda\in K$ such that $T\l(v\r)=\lambda v$._

```

**Remark.** Since $T\l(v\r)=\lambda v$ is equivalent to $\l(\lambda\id_V-T\r)\l(v\r)=0$, we see that a vector $v\in V\comp\l\{0\r\}$ is an eigenvector of $T$ corresponding to $\lambda$ iff $v\in\ker\l(\lambda\id_V-T\r)$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Eigenvectors of a matrix $A\in\mat{n}{K}$ are defined as eigenvectors of $L_A$.<span style="float:right;">$\blacklozenge$</span>
