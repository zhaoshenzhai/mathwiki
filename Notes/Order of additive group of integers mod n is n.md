---
mathLink: $\ord{\Z/n\Z}=n$
---

<div class="topSpace"></div>

Date Created: 27/09/2022 14:34:47
Tags: #Proposition #Courses/MATH235

Proved by: [[Order of group element is order of generated cyclic group]], [[Same equivalence class iff related]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $n\in\Z^+$. Then $\ord{\Z/n\Z}=n$._

```

_Proof_. We claim that $\ord{\l[1\r]}=n$, for then since $\l\langle\l[1\r]\r\rangle=\Z/n\Z$, we have $\ord{\Z/n\Z}=\ord{\l[1\r]}=n$. First, observe that
$$\begin{equation}
    n\cdot\l[1\r]=\underbrace{\l[1\r]\!+\!\cdots+\!\l[1\r]}_{\mathclap{n\textrm{\ times}}}=[\underbrace{1+\cdots+1}_{\mathclap{n\textrm{\ times}}}]=\l[n\r]=\l[0\r],
\end{equation}$$
so $\ord{\l[1\r]}\leq n$. Suppose, for sake of contradiction, that there exists some $m\in\N^+$ with $m<n$ such that $m\cdot\l[1\r]=\l[0\r]$. Then $\l[m\r]=\l[0\r]$, so there exists some $k\in\Z$ such that $m=kn$.
* If $k\geq 1$, then $m\geq n$, a contradiction.
* If $k<1$, then $k\leq0$ and hence $m\leq0$, a contradiction.<span style="float:right;">$\blacksquare$</span>