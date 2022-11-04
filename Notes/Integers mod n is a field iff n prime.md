---
mathLink: $\tpl{\Z_n,+,\cdot}$ is a field $\Leftrightarrow$ $n$ prime
---

<div class="topSpace"></div>

Date Created: 03/11/2022 19:37:42
Tags: #Proposition #Courses/MATH235

Proved by: [[Euler's Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $n\in\N$ with $n\geq2$. Then $\tpl{\Z_n,+,\cdot}$ is a field iff $n$ is prime._

```

_Proof_. Assume that $p\coloneqq n$ is prime and take $\l[a\r]\in\Z_n$. It suffices to show that $\tpl{\Z_p,+,\cdot}$ is a division ring. Indeed, by Euler$\textrm{'}$s Theorem, we see that $a^{\phi\l(p\r)}\mod{p}1$ and hence $a^{p-1}\mod{p}1$. But then $a^{-1}\mod{p}a^{p-2}$, so
$$\begin{equation}
    \l[a^{p-2}\r]\l[a\r]=\l[a^{-1}\r]\l[a\r]=\l[a^{-1}a\r]=\l[1\r]\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l[a\r]\l[a^{p-2}\r]=\l[a\r]\l[a^{-1}\r]=\l[aa^{-1}\r]=\l[1\r].
\end{equation}$$
Thus $\l[a\r]$ is invertible with $\l[a\r]^{-1}=\l[a^{p-1}\r]$. Otherwise, if $n$ is not prime, then there exist $k,l\in\N$ with $1<k,l<n$ such that $n=kl$. Then $kl=n\mod{n}0$, so $\l[k\r]\l[l\r]=\l[kl\r]=\l[0\r]$, despite $\l[k\r]\neq\l[0\r]$ and $\l[l\r]\neq0$. Thus $\Z_n$ is not an integral domain and hence is not a field.<span style="float:right;">$\blacksquare$</span>
