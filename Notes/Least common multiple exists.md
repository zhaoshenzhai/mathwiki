---
mathLink: $\lcm\l(a,b\r)$ exists
---

<div class="topSpace"></div>

Date Created: 20/09/2022 13:32:27
Tags: #Type/Proposition #Later/Ring_Theory

Proved by: [[Omega is an ordinal]], [[Ring of integers is a EUD]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $a,b\in\Z\comp\l\{0\r\}$. Then a least common multiple of $a$ and $b$ exists._

```

_Proof_. Consider the set $S\coloneqq\l\{n\in\N\mid a,b\divides n\land b\divides n\r\}$. Since $\l|ab\r|\in S$, we see that $S\neq\em$ and hence, by well-ordering of $\N$, there exists a minimal $m\in S$. We claim that $m=\lcm\l(a,b\r)$. By construction, we have $a,b\divides m$, so it suffices to show that given any other common multiple $m'$ of $a$ and $b$, we have $m\divides m'$.

Since $m,m'\in\N$, the Division Algorithm furnishes $q,r\in\Z$ with $0\leq r<m$ such that $m'=qm+r$. Suppose, for sake of contradiction, that $0<r<m$. Then, since there exist $k,k',l,l'\in\Z$ such that $m=ka=lb$ and $m'=k'a=l'b$, we see that
$$\begin{equation}
    r=m'-qm=l'a-q\l(la\r)=a\l(l'-ql\r).
\end{equation}$$
Thus $a\divides r$ and similarly $b\divides r$. But then $r\in S$. Combined with the fact that $r<m$ and $m$ is minimal in $S$, we obtain a contradiction.<span style="float:right;">$\blacksquare$</span>
