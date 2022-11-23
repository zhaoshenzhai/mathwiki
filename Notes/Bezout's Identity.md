---
mathLink: B$\acute{\textrm{e}}$zout$\textrm{'}$s Identity
---

<div class="topSpace"></div>

Date Created: 14/09/2022 19:57:04
Tags: #Theorem #Courses/MATH235

Proved by: [[Omega is an ordinal]], [[Division Algorithm]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Theorem
title: Theorem (B$\acute{\textrm{e}}$zout$\textrm{'}$s Identity).

_Let $a,b\in\Z\comp\l\{0\r\}$. Then there exist $m_1,m_2\in\Z$ such that_
$$\begin{equation}
    \gcd\l(a,b\r)=m_1a+m_2b.
\end{equation}$$
_Furthermore, if there exist $m_1,m_2\in\Z$ such that $am_1+bm_2=1$, then $a$ and $b$ are relatively prime._

```

**Remark.** In particular, this proves that $\gcd\l(a,b\r)$ exists. However, it does not provide an algorithm to compute it.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Consider the set $S\coloneqq\l\{c\in\N^+\mid\ex n_1,n_2\in\Z:c=an_1+bn_2\r\}$. Since $a^2+b^2\in\N^+$, we see that $S\neq\em$. Hence, by well-ordering of $\N$, there exists a minimal $d=am_1+bm_2\in S$. We claim that $\gcd\l(a,b\r)=d$.
* ($d\divides a$ and $d\divides b$): By the Division Algorithm, there exist unique integers $q,r\in\Z$ with $0\leq r<d$ such that $a=qd+r$. If $r\neq0$, then
$$\begin{equation}
    \begin{aligned}
        r&=a-qd \\
        &=a-q\l(am_1+bm_2\r) \\
        &=a-\l(qm_1\r)a-b\l(qm_2\r) \\
        &=a\l(1-qm_1\r)-b\l(qm_2\r),
    \end{aligned}
\end{equation}$$
so $r\in S$. But $r<d$, contradicting the fact that $d$ is minimal in $S$. It follows that $r=0$, so $d\divides a$. Similarly, $d\divides a$.

* ($d$ is the greatest such common divisor): Suppose that $d'$ is common divisor of $a$ and $b$, so there exist $k,l\in\Z$ such that $a=kd'$ and $b=ld'$. It follows that
$$\begin{equation}
    d=am_1+bm_2=kd'm_1+ld'm_2=d'\l(km_1+lm_2\r),
\end{equation}$$
so $d'\divides d$.

For the last claim, it suffices to show that the only common divisors of $a$ and $b$ are $\pm1$, for then $\gcd\l(a,b\r)=1$ and hence $a$ and $b$ are relatively prime. Let $d\in\Z$ be a common divisor of $a$ and $b$, so there exist integers $k,l\in\Z$ such that $dk=a$ and $dl=b$. But then
$$\begin{equation}
    \l(dk\r)m_1+\l(dl\r)m_2=1,
\end{equation}$$
which implies that
$$\begin{equation}
    d\l(km_1+lm_2\r)=1.
\end{equation}$$
Thus $d\divides1$, and since the only divisors of $1$ are $-1$ and itself, we see that $d=\pm1$.<span style="float:right;">$\blacksquare$</span>
