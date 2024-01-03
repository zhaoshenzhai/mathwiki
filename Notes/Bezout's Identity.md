---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/11/2022 15:13:45
References: #Ref/Alu09
Tags: #Type/Proposition #Topic/Rings_and_Modules/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Bézout$\textbf{'}$s Identity).

Let $R$ be a commutative ring and fix $a,b\in R$. If there exists some $d\in R$ such that $\gen{a,b}=\gen{d}$, then $d=\gcd\l(a,b\r)$.

```

<b>Remark.</b> In particular, this shows that for PIDs, $\gcd\l(a,b\r)$ can be written as an integral combination $\gcd\l(a,b\r)=ax+by$ for some $x,y\in R$. However, this does <i>not</i> give an algorithm to compute $\gcd\l(a,b\r)$ in PIDs; such an algorithm only exist in Euclidean Domains.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Since $a\in\gen{a,b}$, we see that $a\in\gen{d}$ and hence $d\divides a$. Similarly, $d\divides b$. Let $d'\in R$ be such that $d'\divides a$ and $d'\divides b$. Then $a,b\in\gen{d'}$, so $a=d'r$ and $b=d's$ for some $r,s\in R$. It suffices to show that $\gen{d}=\gen{a,b}\subseteq\gen{d'}$, for then $d'\divides d$. Take $x,y\in R$, and observe that $ax+by=\l(d'r\r)x+\l(d's\r)y=\l(rx+sy\r)d'\in\gen{d'}$.<span style="float:right;">$\blacksquare$</span>
