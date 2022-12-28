---
mathLink: Every $k$-cycle is a product of $\l(k-1\r)$-many transpositions
---

<div class="topSpace"></div>

Date Created: 07/10/2022 13:28:00
Tags: #Proposition #Group_Theory #Courses/MATH235

Proved by: [[Criteria for equality of functions]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X\coloneqq\l\{1,\dots,n\r\}$ and fix $k\in\N^+$. Then every $k$-cycle $\sigma:X\to X$ can be written as a product of $\l(k-1\r)$-many transpositions._

```

_Proof_. Let $\sigma\coloneqq\l(a_1\ \cdots\ a_k\r)$ for some $a_1,\dots,a_k\in X$ and set
$$\begin{equation}
    \rho\coloneqq\l(a_1\ a_k\r)\l(a_1\ a_{k-1}\r)\cdots\l(a_1\ a_{i+1}\r)\l(a_1\ a_i\r)\cdots\l(a_1\ a_3\r)\l(a_1\ a_2\r).
\end{equation}$$
We claim that $\sigma=\rho$. Indeed, since both $\sigma$ and $\rho$ are functions, it suffices to show that $\sigma\l(x\r)=\rho\l(x\r)$ for all $x\in X$. We proceed by cases:
* If $x=a_i$ for any $1\leq i<k$, then $\sigma\l(a_i\r)=a_{i+1}$. For $\rho\l(a_i\r)$, we start from the right-most transposition and work our way leftwards. Indeed, $a_i$ does not appear in any transposition beyond $\l(a_1\ a_i\r)$, so
$$\begin{equation}
    \begin{aligned}
        \rho\l(a_i\r)&=\l[\l(a_1\ a_k\r)\l(a_1\ a_{k-1}\r)\cdots\l(a_1\ a_{i+1}\r)\l(a_1\ a_i\r)\r]\l(a_i\r) \\
        &=\l[\l(a_1\ a_k\r)\l(a_1\ a_{k-1}\r)\cdots\l(a_1\ a_{i+1}\r)\r]\l(a_1\r) \\
        &=a_{i+1}
    \end{aligned}
\end{equation}$$
where the last equality holds since $a_{i+1}$ does not appear in any transposition before $\l(a_1\ a_{i+1}\r)$.

* If $x=a_k$, then $\sigma\l(a_k\r)=a_1$. Observe that $a_k$ does not appear in any transposition after $\l(a_1\ a_k\r)$, so $\rho\l(a_k\r)=a_1$.
* If $x=c$ for any $c\not\in\l\{a_1,\dots,a_k\r\}$, then both $\sigma$ and $\rho$ leave $c$ unchanged and hence $\sigma\l(c\r)=c=\rho\l(c\r)$.<span style="float:right;">$\blacksquare$</span>
