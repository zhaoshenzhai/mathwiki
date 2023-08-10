<div class="topSpace"></div>

Date Created: 02/02/2022 11:40:56
Tags: #Type/Proposition #Topic/Set_Theory/Later/Ordinal

Proved by: [[Successor of an ordinal is the next smallest ordinal]], [[Reflexive closure of ordering on ordinals]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

For all natural numbers $n$, its successor $S\l(n\r)$ is also a natural number.

```

<i>Proof.</i> Take an ordinal $\alpha$ such that $\alpha\subseteq S\l(n\r)=n\cup\l\{n\r\}$. Since $S\l(n\r)$ is an ordinal, we see that
$$\begin{equation}
    \alpha\subseteq n\cup\l\{n\r\}\ \ \ \ \Leftrightarrow\ \ \ \ \alpha\in n\cup\l\{n\r\}\lor\alpha=S\l(n\r).
\end{equation}$$
In the latter case, $\alpha$ is a successor ordinal so we are done. In the former case, we see that either $\alpha\in n$ or $\alpha=n$, both of which implies that $\alpha\subseteq n$ and thus either $\alpha=\em$ or $\alpha$ is a successor ordinal.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> Once the set of natural numbers $\omega$ is defined, this states that $\tpl{\omega,\in}$ is unbounded since for all $n\in\omega$, we have $n\in S\l(n\r)$ which is again a natural number.<span style="float:right;">$\blacklozenge$</span>
