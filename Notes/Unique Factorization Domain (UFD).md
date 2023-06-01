<div class="topSpace"></div>

Date Created: 11/01/2023 16:56:35
Tags: #Type/Definition #Topic/Ring_Theory #Courses/MATH457

Types: [[Principal Ideal Domain (PID)]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[GCDs exist in UFDs]], [[Polynomial rings over UFDs are UFDs]]
Sufficiencies: [[PID implies UFD]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be an integral domain. We say that $R$ is a <b>unique factorization domain (UFD)</b> if for all $r\in R$, if $r\neq0$ and $r\not\in R^\times$, then there exist irreducible elements $a_1,\dots,a_n\in R$ such that $r=a_1a_2\cdots a_n$. Furthermore, this factorization is unique in the sense that if $a=b_1b_2\cdots b_m$ for some irreducible elements $b_1,\dots,b_m\in R$, then $n=m$ and there exists a permutation $\sigma\in S_n$ such that $a_i\sim b_{\sigma\l(i\r)}$ for all $1\leq i\leq n$.

```

<b>Remark.</b> Asking $a_i=b_{\sigma\l(i\r)}$ is too strong since if $r=a_1a_2\cdots a_n$ is a factorization into irreducible, then, for any $u\in R^\times$, so is $r=\l(ua_1\r)\l(u^{-1}a_2\r)a_3\cdots a_n$.<span style="float:right;">$\blacklozenge$</span>
