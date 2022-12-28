<div class="topSpace"></div>

Date Created: 24/01/2022 12:14:51
Tags: #Proposition #Later/Topology

Proved by: [[Basic properties of unions, intersections, and power sets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and $\mc{B}$ be a basis for the topology $\mc{T}\l(\mc{B}\r)$ on $X$. Then $\mc{T}\l(\mc{B}\r)$ is the set of all unions of elements of $\mc{B}$. That is,_
$$\begin{equation}
    \mc{T}\l(\mc{B}\r)=\l\{U\in\pow\l(X\r)\mid\ex\mc{A}\subseteq\mc{B}:U=\bigcup\mc{A}\r\}.
\end{equation}$$

```

_Proof_. ($\supseteq$): Take $U\in\pow\l(X\r)$ such that $\ex\mc{A}\subseteq\mc{B}$ and $U=\bigcup\mc{A}$. Observe that $\mc{B}\subseteq\mc{T}\l(\mc{B}\r)$, so $\mc{A}\subseteq\mc{T}\l(\mc{B}\r)$ too. It follows from $\axitop[2]$ that $U\in\mc{T}\l(\mc{B}\r)$.

($\subseteq$): Take $U\in\mc{T}\l(\mc{B}\r)$, so for $x\in U$, there exists $B_x\in\mc{B}$ such that $x\in B_x\subseteq U$. Set $\mc{A}\coloneqq\l\{B_x\in\mc{B}\mid x\in U\r\}$. It follows that for all $x\in U$, we have $x\in\bigcup\mc{A}$, so $U\subseteq\bigcup\mc{A}$. Conversely, observe that each $B_x\subseteq U$, so we have $\bigcup\mc{A}\subseteq U$.<span style="float:right;">$\blacksquare$</span>
