---
mathLink: $\Z_m\times\Z_n\iso\Z_{mn}$ (relatively prime)
---

<div class="topSpace"></div>

Date Created: 27/10/2022 15:53:31
Tags: #Proposition #Courses/MATH235

Proved by: [[Cyclic groups are Z or Zn]], [[Order of additive group of integers mod n is n]], [[Order of element in product]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $m,n\in\N^+$. If $\gcd\l(m,n\r)=1$, then_ $\Z_m\times\Z_n\iso\Z_{mn}$_._

```

_Proof_. It suffices to show that $\Z_m\times\Z_n$ is a cyclic group with order $mn$. Indeed, $\ord{\Z_m\times\Z_n}$ is just the cardinality of the product, which is $mn$.
* (Cyclic): It suffices to find some $\tpl{a,b}\in\Z_m\times\Z_n$ such that $\ord{\tpl{a,b}}=mn$, for then $\ord{\l\langle\tpl{a,b}\r\rangle}=mn=\ord{\Z_m\times\Z_n}$ and so $\l\langle\tpl{a,b}\r\rangle=\Z_m\times\Z_n$. Indeed, take $a=b=1$ and observe that
$$\begin{equation}
    \ord{\tpl{1,1}}=\lcm\l(\ord{1},\ord{1}\r)=\lcm\l(m,n\r)=1,
\end{equation}$$
where the last equality holds since $\gcd\l(m,n\r)=1$.<span style="float:right;">$\blacksquare$</span>
