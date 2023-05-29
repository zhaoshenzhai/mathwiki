---
mathLink: Primitive $f\sim g$ in $F\l[x\r]$ $\Rightarrow$ $f\sim g$ in $R\l[x\r]$
---

<div class="topSpace"></div>

Date Created: 23/01/2023 07:50:34
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: [[Basic properties of divisibility and associates]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $R$ be a UFD and let $F$ be its field of fractions. For all non-constant primitive polynomials $f,g\in R\l[x\r]$, if $f\sim g$ in $F\l[x\r]$, then $f\sim g$ in $R\l[x\r]$.

```

<i>Proof.</i> Note that $F\l[x\r]^\times=F\l[x\r]$, so $f\sim g$ in $F\l[x\r]$ implies that $f=\alpha g$ for some $\alpha\in F^\times$. Writing $\alpha=\frac{a}{b}$ for $a,b\in R$, we see that $bf=ag$ and hence
$$\begin{equation}
    \sring{a}=a\cont\l(g\r)=\cont\l(ag\r)=\cont\l(bf\r)=b\cont\l(f\r)=\sring{b}.
\end{equation}$$
Then $a\sim b$ in $R$, so there exists some $u\in R^\times$ such that $a=ub$. Observe then that $\alpha=u\in R^\times=R\l[x\r]^\times$, so $f\sim g$ in $R\l[x\r]$.<span style="float:right;">$\blacksquare$</span>
