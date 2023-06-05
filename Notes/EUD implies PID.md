---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/11/2022 14:10:58
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: [[Omega is an ordinal]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a Euclidean Domain. If $I$ is any non-zero ideal of $R$, then there exists $d\in R$ such that $I=\gen{d}$.

```

<b>Remark.</b> In particular, this shows that every Euclidean Domain is a PID.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take a non-zero ideal $I$ of $R$. Let $N:R\to\N$ be a Euclidean function on $R$ and consider the set
$$\begin{equation}
    S\coloneqq\l\{N\l(i\r)\in\N\mid i\in I\r\}.
\end{equation}$$
Then, since $I$ is non-zero, there exists some non-zero $i\in I$. Thus $S\neq\em$, so there exists an element $d\in I$ such that $N\l(d\r)$ is minimal.
* Since $d\in I$, we see that $\gen{d}\subseteq I$.

It suffices to show that $I\subseteq\gen{d}$, so take $a\in I$. Since $R$ is a Euclidean Domain, there exist $q,r\in R$, with either $r=0$ or $N\l(r\r)<N\l(d\r)$, such that $a=qd+r$. Then $r=a-qd$, and since $a,d\in I$, we see that $r\in I$. But $d$ has minimal norm in $I$, so $r=0$ and hence $a=qd$. Thus $a\in\gen{d}$, so we are done.<span style="float:right;">$\blacksquare$</span>
