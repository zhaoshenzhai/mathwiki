<br />
<br />

Date Created: 01/04/2022 22:11:30
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for all $A\in\mat{m\times n}{K}$, we have that $I_mA=A=AI_n$ where $I_m$ and $I_n$ denote the $m\times m$ and $n\times n$ identity matrices, respectively._

```

_Proof_. Let $\l[b_{ij}\r]\coloneqq I_mA$ and observe that
$$\begin{equation}
    \begin{aligned}
        b_{ij}&=\sum_{j'=1}^n\delta_{ij'}\cdot a_{j'j} && \textrm{Definition of matrix multiplication} \\
        &=a_{ij} && \textrm{$\delta_{ij'}=0$ for all $j'\neq i$}
    \end{aligned}
\end{equation}$$
for all $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$. Similarly, let $\l[c_{ij}\r]\coloneqq AI_n$ and observe that
$$\begin{equation}
    \begin{aligned}
        c_{ij}&=\sum_{j'=1}^na_{ij'}\cdot\delta_{j'j} && \textrm{Definition of matrix multiplication} \\
        &=a_{ij} && \textrm{$\delta_{j'j}=0$ for all $j'\neq j$}
    \end{aligned}
\end{equation}$$
for all $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$. The results follow.<span style="float:right;">$\blacksquare$</span>
