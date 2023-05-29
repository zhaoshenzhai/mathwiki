---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/11/2022 22:39:00
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: _Not Applicable_
References: [[EUD implies PID]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $R$ be a field. Then every ideal $I\subseteq R$ is either $\l\{0\r\}$ or $R$ itself.

```

**Remark.** In particular, this shows that fields are principal ideal domains. Alternatively, every field is a Euclidean Domain (with any Euclidean function, and with remainder $0$), so every field is a PID.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Let $I\subseteq R$ be an ideal of $R$ such that $I\neq\l\{0\r\}$; we wish to show that $R\subseteq I$, for then $I=R$ and so the only ideals of $R$ are $\l\{0\r\}$ and $R$. Indeed, $I\neq\l\{0\r\}$ implies that there exists some non-zero $i\in I$, so it has a multiplicative inverse $i^{-1}\in R$. Take $r\in R$. Since $I$ is an ideal and $ri^{-1}\in R$, we see that
$$\begin{equation*}
    \l(ri^{-1}\r)I\subseteq I.
\end{equation*}$$
In particular, we have that $\l(ri^{-1}\r)i\in I$, so $r=r\l(i^{-1}i\r)=\l(ri^{-1}\r)i\in I$.<span style="float:right;">$\blacksquare$</span>
