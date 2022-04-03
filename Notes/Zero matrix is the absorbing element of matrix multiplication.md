<br />
<br />

Date Created: 03/04/2022 16:37:32
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle K,+,\cdot,0,1\r\rangle$ be a field and fix $m,n,p\in\N$. Then, for every $A\in\mat{m\times n}{K}$ and $A'\in\mat{n\times p}{K}$, we have that_ $A0_{np}=0_{mp}=0_{mn}A'$_._

```

_Proof_. Observe that $\l(0_{mp}\r)_{ik}=0=\sum_{j=1}^n0$, and since $a_{ij}\cdot0=0=0\cdot a'_{jk}$ for all $i\in\l\{1,\dots,m\r\}$, $j\in\l\{1,\dots,n\r\}$, and $k\in\l\{1,\dots,p\r\}$, the last expression can be written in two ways as
$$\begin{equation}
    \begin{aligned}
        \l(0_{mp}\r)_{ik}&=\sum_{j=1}^na_{ij}\cdot0 \\
        &=\sum_{j=1}^na_{ij}\cdot\l(0_{np}\r)_{jk} \\
        &=\l(A0_{np}\r)_{ik} \\
    \end{aligned}\ \ \ \ \ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(0_{mp}\r)_{ik}&=\sum_{j=1}^n0\cdot a'_{jk} && \textrm{$0$ is the absorbing element of $\cdot$} \\
        &=\sum_{j=1}^n\l(0_{mn}\r)_{ij}\cdot a'_{jk} && \textrm{Definitions of $0_{mn}$ and $0_{np}$} \\
        &=\l(0_{mn}A'\r)_{ik}. && \textrm{Definition of matrix multiplication} \\
    \end{aligned}
\end{equation}$$
Since $i$, $j$, and $k$ we arbitrary, the results follow.<span style="float:right;">$\blacksquare$</span>
