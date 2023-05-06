<div class="topSpace"></div>

Date Created: 02/02/2022 11:40:56
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Successor of an ordinal is the next smallest ordinal]], [[Reflexive closure of ordering on ordinals]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_For all natural numbers $n$, its successor $S\l(n\r)$ is also a natural number._

```

_Proof_. Take an ordinal $\alpha$ such that $\alpha\subseteq S\l(n\r)=n\cup\l\{n\r\}$. Since $S\l(n\r)$ is an ordinal, we see that
$$\begin{equation}
    \alpha\subseteq n\cup\l\{n\r\}\ \ \ \ \Leftrightarrow\ \ \ \ \alpha\in n\cup\l\{n\r\}\lor\alpha=S\l(n\r).
\end{equation}$$
In the latter case, $\alpha$ is a successor ordinal so we are done. In the former case, we see that either $\alpha\in n$ or $\alpha=n$, both of which implies that $\alpha\subseteq n$ and thus either $\alpha=\em$ or $\alpha$ is a successor ordinal.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** Once the set of natural numbers $\omega$ is defined, this states that $\tpl{\omega,\in}$ is unbounded since for all $n\in\omega$, we have $n\in S\l(n\r)$ which is again a natural number.<span style="float:right;">$\blacklozenge$</span>
