---
mathLink: Bézout$\textrm{'}$s Identity
---

<div class="topSpace"></div>

Date Created: 23/11/2022 15:13:45
Tags: #Theorem #Topics/Ring_Theory

Proved by: _Not Applicable_
References: [[Ring of integers is a EUD]], [[Polynomial ring over fields is a EUD]], [[EUD implies PID]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Bézout$\textbf{'}$s Identity).

_Let $R$ be a commutative ring and fix $a,b\in R\comp\l\{0\r\}$. If there exists some $d\in R$ such that $\sring{a,b}=\sring{d}$, then $d=\gcd\l(a,b\r)$._

```

**Remark.** In particular, this shows that $\gcd\l(a,b\r)$ can be written as an integral combination $\gcd\l(a,b\r)=ax+by$ for some $x,y\in R$. Specifically:
* For all $a,b\in\Z\comp\l\{0\r\}$, there exist $x,y\in\Z$ such that $\gcd\l(a,b\r)=ax+by$.
* If $K$ is a field, then, for all $a,b\in K\l[x\r]$, there exist $f,g\in K\l[x\r]$ such that $\gcd\l(a,b\r)=af+bg$.

However, this does _not_ give an algorithm to compute $\gcd\l(a,b\r)$ in general PIDs; such an algorithm only exist in Euclidean Domains, which $\Z$ and $K\l[x\r]$ are.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. We show that $d$ is a common divisor of $a$ and $b$ that divides every other divisor thereof.
* Since $a\in\sring{a,b}$, we see that $a\in\sring{d}$ and hence $d\divides a$. Similarly, $d\divides b$.

* Let $d'\in R\comp\l\{0\r\}$ such that $d'\divides a$ and $d'\divides b$. Then $a\in\sring{d}$ and $b\in\sring{d'}$, so $a=d'r$ and $b=d's$ for some $r,s\in R$. It suffices to show that $\sring{d}=\sring{a,b}\subseteq\sring{d'}$, for then $d'\divides d$. Take $x,y\in R$, and observe that
$$\begin{equation}
    ax+by=\l(d'r\r)x+\l(d's\r)y=\l(rx+sy\r)d'\in\sring{d'}.\qedin
\end{equation}$$
