<div class="topSpace"></div>

Date Created: 11/01/2023 16:56:35
Tags: #Definition #Topics/Ring_Theory #Courses/MATH457

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[PID implies UFD]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $R$ be an integral domain. We say that $R$ is a **unique factorization domain (UFD)** if for all $r\in R$, if $r\neq0$ and $r\not\in R^\times$, then there exist irreducible elements $a_1,\dots,a_n\in R$ such that $r=a_1a_2\cdots a_n$. Furthermore, this factorization is unique in the sense that if $a=b_1b_2\cdots b_m$ for some irreducible elements $b_1,\dots,b_m\in R$, then $n=m$ and there exists a permutation $\sigma\in S_n$ such that_ $a_i\sim b_{\sigma\l(i\r)}$ _for all $1\leq i\leq n$._

```

**Remark.** Asking $a_i=b_{\sigma\l(i\r)}$ is too strong since if $r=a_1a_2\cdots a_n$ is a factorization into irreducible, then, for any $u\in R^\times$, so is $r=\l(ua_1\r)\l(u^{-1}a_2\r)a_3\cdots a_n$.<span style="float:right;">$\blacklozenge$</span>
