---
mathLink: Basic properties of $\cchi$ and $\mu$
---

<div class="topSpace"></div>

Date Created: 17/03/2023 00:22:19
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Polynomial rings over UFDs are UFDs]], [[Irreducible implies prime (UFD)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $T:V\to V$ be a linear operator on a finite-dimensional $K$-vector space. Then the following properties holds._
* _$\cchi\divides\mu^n$ where $n\coloneqq\dim V$._
* _$\cchi$ and $\mu$ have the same irreducible factors._

```

_Proof_.
* Let $\mu\l(x\r)=\sum_{i=0}^{k}\alpha_ix^i$ for some $\alpha_i\in K$ and consider the operator $\mu\l(x\r)\id_V:V\to V$.
$$\begin{equation}
    \mu\l(x\r)\id_V=\mu\l(x\r)\id_V-\mu\l(T\r)=\sum_{i=0}^{k}\alpha_i\l(x^i\id_V-T^i\r).
\end{equation}$$
Factorizing $x\id_V-T$ from each term, we see that $\mu\l(x\r)\id_V=\l(x\id_V-T\r)\phi_x$ for some operator $\phi_x:V\to V$. Taking the determinant, we see that
$$\begin{equation}
    \mu\l(x\r)^n=\det\l(\mu\l(x\r)\id_V\r)=\det\l(\l(x\id_V-T\r)\phi_x\r)=\cchi\l(x\r)g\l(x\r)
\end{equation}$$
for some $g\in K\l[x\r]$. Thus $\mu^n=\cchi g$, so $\cchi\divides\mu^n$.

* Since $\mu\divides\cchi$, every irreducible factor of $\mu$ is an irreducible factor of $\cchi$. Conversely, if $f\in K\l[x\r]$ is an irreducible factor of $\cchi$, then $f\divides\cchi\divides\mu^n$ and hence $f\divides\mu^n$. But irreducible elements in a UFD are prime, so $f\divides\mu$.<span style="float:right;">$\blacksquare$</span>
