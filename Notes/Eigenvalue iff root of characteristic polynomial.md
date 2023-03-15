---
mathLink: $T$ has eigenvalue $\lambda$ $\Leftrightarrow$ $\cchi_T\!\l(\lambda\r)=0$
---

<div class="topSpace"></div>

Date Created: 20/06/2022 15:06:29
Tags: #Proposition #Later/Linear_Algebra/Determinant

Proved by: [[Linear map between vector spaces of same dimension is injective iff surjective]], [[Invertible iff determinant non-zero]]
References: [[Characteristic polynomial is a polynomial]], [[Polynomial has at most degree-many roots]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional $K$-vector space and consider a linear operator $T:V\to V$. For a fixed $\lambda\in K$, the following are equivalent._
* _$\lambda$ is an eigenvalue of $T$._
* _$\lambda\id_V-T:V\to V$ is not injective/surjective/invertible._
* _$\cchi_T\!\l(\lambda\r)=0$._

```

**Remark.** Since $\cchi_T$ is a polynomial with degree $\dim V$ whose roots are exactly the eigenvalues of $T$, we see that $T$ has at most $\dim V$-many eigenvalues.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. If $\lambda$ is an eigenvalue of $T$, then $T\l(v\r)=\lambda v$ for some non-zero $v\in V$. But this is equivalent to $\l(\lambda\id_V-T\r)\l(v\r)=0$ for some non-zero $v\in V$, so the map $T-\lambda\id_V$ is not injective.
* The three equivalences hold since $T$ is a linear operator, so it is injective iff it is surjective.

The converse is clear, since if $\lambda\id_V-T$ is not injective, then $\l(\lambda\id_V-T\r)\l(v\r)=0$ for some non-zero $v\in V$. Hence $T\l(v\r)=\lambda v$, so $\lambda$ is an eigenvalue of $T$. Finally, the last equivalent holds since $\lambda\id_V-T$ is not invertible iff $\cchi_T\!\l(\lambda\r)=\det\l(\lambda\id_V-T\r)=0$.<span style="float:right;">$\blacksquare$</span>
