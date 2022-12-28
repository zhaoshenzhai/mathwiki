---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/11/2022 10:56:36
Tags: #Proposition #Topics/Ring_Theory

Proved by: [[Division Algorithm (Polynomials)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix a polynomial $p\in K\l[x\r]$. Then, for all $\alpha\in K$, $\alpha$ is a root of $p$ iff $\l(x-\alpha\r)\divides p$._

```

_Proof_.
* ($\Rightarrow$): If $\alpha$ is a root of $p$, then $\eval_\alpha\!\l(p\r)=0$. By the Division Algorithm, there exist unique polynomials $q,r\in K\l[x\r]$, with either $r=0$ or $\deg r<\deg\l(x-\alpha\r)=1$, such that $p=\l(x-\alpha\r)q+r$. But $\deg r<1$ implies that $\deg r=0$ and hence $r\in K\comp\l\{0\r\}$, so
$$\begin{equation}
    \eval_\alpha\!\l(p\r)=\eval_\alpha\!\l(\l(x-\alpha\r)q+r\r)=r\neq0.
\end{equation}$$
But $\alpha$ is a root, so we have a contradiction. Thus $r=0$ so $p=\l(x-\alpha\r)q$ and hence $\l(x-\alpha\r)\divides p$.

* ($\Leftarrow$): If $p=\l(x-\alpha\r)q$ for some $q\in K\l[x\r]$, then $\eval_\alpha\!\l(p\r)=\eval_\alpha\!\l(\l(x-\alpha\r)q\r)=0$. Hence $\alpha$ is a root of $p$.<span style="float:right;">$\blacksquare$</span>
