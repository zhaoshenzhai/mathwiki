---
mathLink: $K$ field $\Rightarrow$ $K\l[x\r]$ is a EUD
---

<div class="topSpace"></div>

Date Created: 23/11/2022 09:55:11
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Division Algorithm for Polynomials).

Let $K$ be a field. Then for all $a,b\in K\l[x\r]$ with $b\neq0$, there exist unique polynomials $q,r\in K\l[x\r]$ with either $r=0$ or $\deg r<\deg b$ such that $a=qb+r$.

```

<b>Remark.</b> In particular, $K\l[x\r]$ is a Euclidean Domain.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $n\coloneqq\deg a$ and $m\coloneqq\deg b$. We first prove existence.
* If $a=0$, then, since $0=0b+0$, take $q,r\coloneqq0$.
* If $n<m$, then, since $a=0b+a$, take $q\coloneqq0$ and $r\coloneqq a$.

Hence we may assume that $m\leq n$. Let $a\coloneqq\sum_{i=0}^{n}a_ix^i$ and $b\coloneqq\sum_{i=0}^{m}b_ix^i$; we induct on $n-m$. Set $q_0\coloneqq a_nb_m^{-1}x^{n-m}$ and $r_0\coloneqq a-bq_0$. Observe that the leading term of $bq_0$ is $a_nx^n$, so $\deg r_0<\deg a$.
* If $n=m$, then $\deg r_0<\deg b$, so take $q\coloneqq q_0$ and $r\coloneqq r_0$ and observe that $a=qb+r$.

Otherwise, we apply induction to $r_0$ and $b$ to find $q_1,r\in K\l[x\r]$ with either $r=0$ or $\deg r<\deg b$ such that $r_0=q_1b+r$. Then
$$\begin{equation}
    a=q_0b+r_0=q_0b+\l(q_1b+r\r)=\l(q_0+q_1\r)b+r.
\end{equation}$$
For uniqueness, suppose further that there exist polynomials $q',r'\in K\l[x\r]$ with either $r'=0$ or $\deg r'<\deg b$ such that $a=q'b+r'$. Then the polynomials
$$\begin{equation}
    a-q'b\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ a-qb
\end{equation}$$
are either both $0$ or have degrees less than $b$; we have $q=q'$ in the former case. For the latter, observe that their difference $b\l(q-q'\r)$ has degree less than $b$. If $q\neq q'$, then $\deg\l(q-q'\r)\geq0$ and hence
$$\begin{equation}
    \deg b\leq\deg b+\deg\l(q-q'\r)=\deg\l(b\l(q-q'\r)\r)<\deg b.
\end{equation}$$
But this is impossible, so $q=q'$ and hence $r=r'$.<span style="float:right;">$\blacksquare$</span>
