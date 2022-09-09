---
mathLink: Linear map $T$ has eigenvector $v$ $\Leftrightarrow$ $\span\l\{v\r\}$ is $T$-invariant
---

<div class="topSpace"></div>

Date Created: 19/06/2022 17:36:48
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a vector space over some field $K$ and consider a linear operator $T:V\to V$. Then a nonzero vector $v\in V$ is an eigenvector of $T$ iff $\span\l\{v\r\}$ is $T$-invariant._

```

_Proof_. Observe that $v\in\span\l\{v\r\}$ for all $v\in V$. Now let $v$ be non-zero.
* ($\Rightarrow$): If $v$ is an eigenvector of $T$, then there exists $\lambda\in K$ such that $T\l(v\r)=\lambda v$. But $\lambda v\in\span\l\{v\r\}$, so $T\l(v\r)\in\span\l\{v\r\}$.

* ($\Leftarrow$): If $\span\l\{v\r\}$ is $T$-invariant, then $T\l(v\r)\in\span\l\{v\r\}$. Thus there exists some $\lambda\in K$ such that $T\l(v\r)=\lambda v$, so $v$ is an eigenvector of $T$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** In particular, this shows that $T$ has a one-dimensional invariant subspace iff $T$ has an eigenvector.<span style="float:right;">$\blacklozenge$</span>
