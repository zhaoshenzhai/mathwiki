---
mathLink: $\hat{E}_\lambda\cap\hat{E}_{\lambda'}=\l\{0\r\}$
---

<div class="topSpace"></div>

Date Created: 16/03/2023 23:33:13
Tags: #Type/Proposition #Later/Linear_Algebra/Module

Proved by: [[Bezout's Identity]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $T:V\to V$ be a linear operator on a $K$-vector space $V$. For all $f_1,f_2\in K\l[x\r]$, if $f_1\perp f_2$, then $\hat{K}_{f_1}^T\cap\hat{K}_{f_2}^T=\l\{0\r\}$.

```

**Remark.** In particular, with $f_1\!\l(T\r)\coloneqq\cchi_T\!\l(\lambda_1\r)^n$ and $f_2\!\l(T\r)\coloneqq\cchi_T\!\l(\lambda_2\r)^m$ for any $\lambda_1\neq\lambda_2$, this shows that $\hat{E}_{\lambda_1}\cap\hat{E}_{\lambda_2}=\l\{0\r\}$. Indeed, observe that $f_1\!\l(x\r)=\l(x-\lambda_1\r)^n$ and $f_2\l(x\r)=\l(x-\lambda_2\r)^m$ are coprime.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Suppose $v\in\hat{K}_{f_1}^T\cap\hat{K}_{f_2}^T$, so $f_1\!\l(T\r)^nv=0$ and $f_2\!\l(T\r)^mv=0$ for some $n,m\in\N$. But $f_1$ and $f_2$ are coprime, so Bézout$\textrm{'}$s Identity furnish polynomials $a,b\in K\l[x\r]$ such that $af_1^n\!\l(T\r)+bf_2^m\!\l(T\r)=\id_V$. Applying $v$ on both sides, we see that $v=0$.<span style="float:right;">$\blacksquare$</span>
