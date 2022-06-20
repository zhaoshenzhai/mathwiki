<br />
<br />

Date Created: 11/06/2022 18:17:22
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [Diagonalizable $\Leftrightarrow$ exists basis of eigenvectors](Diagonalizable%20iff%20exists%20basis%20of%20eigenvectors.md)
Sufficiencies: _Not Applicable_
Equivalences: [Linear map $T$ has eigenvector $v$ $\Leftrightarrow$ $\span\l\{v\r\}$ is $T$-invariant](Eigenvector%20iff%20span%20is%20invariant%20under%20linear%20map.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $V$ be a vector space over some field $K$ and consider a linear operator $T:V\to V$. A nonzero vector $v\in V$ is called an **eigenvector of $T$** if there exists some $\lambda\in K$ such that $T\l(v\r)=\lambda v$._

```

**Remark.** Since $T\l(v\r)=\lambda v$ is equivalent to $\l(T-\lambda\id_V\r)\l(v\r)=0$, we see that a nonzero vector $v\in V$ is an eigenvector of $T$ corresponding to $\lambda\in K$ iff $v\in\ker\l(T-\lambda\id_V\r)$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Eigenvectors of a matrix $A\in\mat{n}{K}$ are defined as eigenvectors of $L_A$.<span style="float:right;">$\blacklozenge$</span>
