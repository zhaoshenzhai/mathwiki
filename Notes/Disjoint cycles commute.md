<div class="topSpace"></div>

Date Created: 06/10/2022 13:06:52
Tags: #Proposition #Group_Theory #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and fix $k,l\in\N^+$. Then, for all disjoint cycles $\sigma\coloneqq\l(a_1\ \cdots\ a_k\r)$ and $\tau\coloneqq\l(b_1\ \cdots\ b_l\r)$, we have $\sigma\tau=\tau\sigma$._

```

_Proof_. Take $x\in X$, so either $x=a_i$ for some $i\in\l\{1,\dots,k\r\}$, $x=b_j$ for some $j\in\l\{1,\dots,l\r\}$, or $x=c$ for some $c\not\in\l\{a_1,\dots,a_k\r\}\cup\l\{b_1,\dots,b_l\r\}$. We thus have three cases.
* ($x=a_i$): Observe then that
$$\begin{equation}
    \begin{aligned}
        \l(\sigma\tau\r)\l(a_i\r)&=\sigma\l(\tau\l(a_i\r)\r) && \textrm{Definition of composition} \\
        &=\sigma\l(a_i\r) && a_i\not\in\l\{b_1,\dots,b_l\r\} \\
        &=a_{i+1}, && \textrm{Definition of $\sigma$}
    \end{aligned}
\end{equation}$$
and, similarly, that $\l(\tau\sigma\r)\l(a_i\r)=\tau\l(\sigma\l(a_i\r)\r)=\tau\l(a_{i+1}\r)=a_{i+1}$.

* ($x=b_j$): Similarly, we have $\l(\sigma\tau\r)\l(b_j\r)=\sigma\l(\tau\l(b_j\r)\r)=\sigma\l(b_{j+1}\r)=b_{j+1}$ and $\l(\tau\sigma\r)\l(b_j\r)=\tau\l(\sigma\l(b_j\r)\r)=\tau\l(b_j\r)=b_{j+1}$.
* ($x=c$): Both cycles preserve $c$, so $\l(\sigma\tau\r)\l(c\r)=\l(\tau\sigma\r)\l(c\r)$ trivially.

Thus $\l(\sigma\tau\r)\l(x\r)=\l(\tau\sigma\r)\l(x\r)$ in all cases, so $\sigma\tau=\tau\sigma$.<span style="float:right;">$\blacksquare$</span>
