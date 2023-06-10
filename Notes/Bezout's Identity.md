---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/11/2022 15:13:45
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: [[Basic properties of divisibility and associates]]
References: [[Ring of integers is a EUD]], [[Polynomial ring over fields is a EUD]], [[EUD implies PID]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Bézout$\textbf{'}$s Identity).

Let $R$ be a commutative ring and fix $a,b\in R\comp\l\{0\r\}$. If there exists some $d\in R$ such that $\gen{a,b}=\gen{d}$, then $d=\gcd\l(a,b\r)$.

```

<b>Remark.</b> In particular, this shows that for PIDs, $\gcd\l(a,b\r)$ can be written as an integral combination $\gcd\l(a,b\r)=ax+by$ for some $x,y\in R$. Specifically:
* For all $a,b\in\Z\comp\l\{0\r\}$, there exist $x,y\in\Z$ such that $\gcd\l(a,b\r)=ax+by$.
* If $K$ is a field, then, for all $a,b\in K\l[x\r]$, there exist $f,g\in K\l[x\r]$ such that $\gcd\l(a,b\r)=af+bg$.

However, this does <i>not</i> give an algorithm to compute $\gcd\l(a,b\r)$ in PIDs; such an algorithm only exist in Euclidean Domains, which $\Z$ and $K\l[x\r]$ are.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We show that $d$ is a common divisor of $a$ and $b$ that divides every other divisor thereof.
* Since $a\in\gen{a,b}$, we see that $a\in\gen{d}$ and hence $d\divides a$. Similarly, $d\divides b$.

* Let $d'\in R\comp\l\{0\r\}$ be such that $d'\divides a$ and $d'\divides b$. Then $a,b\in\gen{d'}$, so $a=d'r$ and $b=d's$ for some $r,s\in R$. It suffices to show that $\gen{d}=\gen{a,b}\subseteq\gen{d'}$, for then $d'\divides d$. Take $x,y\in R$, and observe that $ax+by=\l(d'r\r)x+\l(d's\r)y=\l(rx+sy\r)d'\in\gen{d'}$.<span style="float:right;">$\blacksquare$</span>
