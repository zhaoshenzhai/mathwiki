<br />
<br />

Date Created: 28/03/2022 19:19:56
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle K,+,\cdot,0,1\r\rangle$ be a field and fix $m,n\in\N$. Then the $m\times n$ additive matrix group_ $\l\langle\mat{m\times n}{K},\oplus,0_{mn}\r\rangle$ _over $K$ is an Abelian group._

```

_Proof_. We verify the axioms of an Abelian group. Throughout, $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$.
* ($\axigrp[1]$): Take $A,B,C\in\mat{m\times n}{K}$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(A\oplus B\r)\oplus C&=\l[a_{ij}+b_{ij}\r]\oplus C && \textrm{Definition of $\oplus$}\\
        &=\l[\l(a_{ij}+b_{ij}\r)+c_{ij}\r] && \textrm{Definition of $\oplus$} \\
        &=\l[a_{ij}+\l(b_{ij}+c_{ij}\r)\r] && \textrm{Associativity of $\oplus$} \\
        &=A\oplus\l[b_{ij}+c_{ij}\r] && \textrm{Definition of $\oplus$} \\
        &=A\oplus\l(B\oplus C\r). && \textrm{Definition of $\oplus$}
    \end{aligned}
\end{equation}$$

* ($\axigrp[2]$): Take $A\in\mat{m\times n}{K}$ and observe that
$$\begin{equation}
    \begin{aligned}
        A\oplus0_{mn}&=\l[a_{ij}+0\r]\\
        &=A
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        0_{mn}\oplus A&=\l[0+a_{ij}\r] \ \ \ \ \ \ \ \ && \textrm{Definitions of $\oplus$ and $0_{mn}$} \\
        &=A. && \textrm{0 is the neutral element of $K$}
    \end{aligned}
\end{equation}$$
* ($\axigrp[3]$): Take $A\in\mat{m\times n}{K}$ and define $-A\coloneqq\l[-a_{ij}\r]$
