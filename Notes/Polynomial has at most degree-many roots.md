---
mathLink: Polynomial $p$ has at most $\deg p$ roots
---

<div class="topSpace"></div>

Date Created: 23/11/2022 13:43:40
Tags: #Proposition #Topics/Ring_Theory

Proved by: [[Division Algorithm (Polynomials)]], [[Root iff factor]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $p\in K\l[x\r]\comp\l\{0\r\}$. Then $p$ has at most $\deg p$ distinct roots._

```

_Proof_. We proceed by induction on $\deg p$.
* If $\deg p=0$, then $p\in K\comp\l\{0\r\}$ and hence $\eval_x\!\l(p\r)\neq0$ for all $x\in K$.

Suppose now that the statement holds for when the degree of a polynomial is $k$ for some $k\in\N$, and take $p\in K\l[x\r]$ with $\deg p=k+1$. If $p$ has no roots, we are done. Otherwise, let $\alpha$ be a root of $\alpha$, so $p=\l(x-\alpha\r)q$ for some $q\in K\l[x\r]$. Observe then that
$$\begin{equation}
    \deg p=\deg\l(\l(x-\alpha\r)q\r)=\deg\l(x-\alpha\r)+\deg q=\deg q+1,
\end{equation}$$
so $\deg q=k$. By our induction hypothesis, we see that $q$ has at most $k$ roots, so $p$ has at most $k+1$ roots.<span style="float:right;">$\blacksquare$</span>
