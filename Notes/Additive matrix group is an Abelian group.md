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

_Let $\l\langle K,+,\cdot,0,1\r\rangle$ be a field and fix $m,n\in\N$. Then the $m\times n$ additive matrix group_ $\l\langle\mat{m\times n}{K},\oplus,\v{0}_{mn}\r\rangle$ _over $K$ is an Abelian group._

```

_Proof_. We verify the axioms of an Abelian group. Throughout, $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$.
* ($\axigrp[1]$): Take $A,\v{B},\v{C}\in\mat{m\times n}{K}$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(A\oplus\v{B}\r)\oplus\v{C}&=\l[a_{ij}+B_{ij}\r]\oplus\v{C} && \textrm{Definition of $\oplus$}\\
        &=\l[\l(a_{ij}+B_{ij}\r)+C_{ij}\r] && \textrm{Definition of $\oplus$} \\
        &=\l[a_{ij}+\l(B_{ij}+C_{ij}\r)\r] && \textrm{Associativity of $\oplus$} \\
        &=A\oplus\l[B_{ij}+C_{ij}\r] && \textrm{Definition of $\oplus$} \\
        &=A\oplus\l(\v{B}\oplus\v{C}\r). && \textrm{Definition of $\oplus$}
    \end{aligned}
\end{equation}$$

* ($\axigrp[2]$): Take $A\in\mat{m\times n}{K}$ and observe that
$$\begin{equation}
    \begin{aligned}
        A\oplus\v{0}_{mn}&=\l[a_{ij}+0\r]\\
        &=A
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \v{0}_{mn}\oplusA&=\l[0+a_{ij}\r] \ \ \ \ \ \ \ \ && \textrm{Definitions of $\oplus$ and $\v{0}_{mn}$} \\
        &=A. && \textrm{0 is the neutral element of $K$}
    \end{aligned}
\end{equation}$$
* ($\axigrp[3]$): Take $A\in\mat{m\times n}{K}$ and define $-A\coloneqq\l[-a_{ij}\r]$
