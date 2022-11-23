<div class="topSpace"></div>

Date Created: 23/11/2022 09:55:11
Tags: #Theorem #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (Division Algorithm for Polynomials).

_Let $K$ be a field. Then for all $a,b\in K\l[x\r]$ with $b\neq0$, there exist unique polynomials $q,r\in K\l[x\r]$ with either $r=0$ or $\deg r<\deg b$ such that $a=qb+r$._

```

**Remark.** In particular, $K\l[x\r]$ is a Euclidean Domain.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Let $n\coloneqq\deg a$ and $m\coloneqq\deg b$. We first prove existence.
* If $a=0$, then, since $0=0b+0$, take $q,r\coloneqq0$.
* If $n<m$, then, since $a=0b+a$, take $q\coloneqq0$ and $r\coloneqq a$.

Hence we may assume that $m\leq n$. Let $a\coloneqq\sum_{i=0}^{n}a_ix^i$ and $b\coloneqq\sum_{i=0}^{m}b_ix^i$, so, since the leading term of the polynomial $\frac{a_n}{b_m}x^{n-m}b$ is $a_nx^n$, we see that the polynomial
$$\begin{equation}
    \tilde{a}\coloneqq a-\frac{a_n}{b_m}x^{n-m}b
\end{equation}$$
has degree less than $n$. By (strong) induction, there exist polynomials $\tilde{q},r\in K\l[x\r]$ with either $r=0$ or $\deg r<\deg b$ such that $\tilde{a}=\tilde{q}b+r$. Then, letting
$$\begin{equation}
    q\coloneqq\tilde{q}+\frac{a_n}{b_m}x^{n-m},
\end{equation}$$
we see that $a=qb+r$ with either $r=0$ or $\deg r<\deg b$.

For uniqueness, suppose further that there exist polynomials $q',r'\in K\l[x\r]$ with either $r'=0$ or $\deg r'<\deg b$ such that $a=q'b+r'$. Then the polynomials
$$\begin{equation}
    a-q'b\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ a-qb
\end{equation}$$
are either both $0$ or have degrees less than $b$; we have $q=q'$ in the former case. For the latter, observe that their difference $b\l(q-q'\r)$ has degree less than $b$. If $q\neq q'$, then $\deg\l(q-q'\r)\geq0$ and hence
$$\begin{equation}
    \deg b\leq\deg b+\deg\l(q-q'\r)=\deg\l(b\l(q-q'\r)\r)<\deg b.
\end{equation}$$
But this is impossible, so $q=q'$ and hence $r=r'$.<span style="float:right;">$\blacksquare$</span>
