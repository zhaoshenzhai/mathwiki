<br />
<br />

Date Created: 28/03/2022 19:19:56
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: [[Function group is a group]]
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle K,+,\cdot,0,1\r\rangle$ be a field and fix $m,n\in\N^\ast$. Then the $m\times n$ additive matrix group_ $\l\langle\mat{m\times n}{K},\oplus,0_{mn}\r\rangle$ _over $K$ is an Abelian group._

```

_Proof_. We verify the axioms of an Abelian group. Throughout, $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$.
* ($\axigrp[1]$): Take $\l[a_{ij}\r],\l[b_{ij}\r],\l[c_{ij}\r]\in\mat{m\times n}{K}$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(\l[a_{ij}\r]\oplus\l[b_{ij}\r]\r)\oplus\l[c_{ij}\r]&=\l[a_{ij}+b_{ij}\r]\oplus\l[c_{ij}\r] && \textrm{Definition of $\oplus$}\\
        &=\l[\l(a_{ij}+b_{ij}\r)+c_{ij}\r] && \textrm{Definition of $\oplus$} \\
        &=\l[a_{ij}+\l(b_{ij}+c_{ij}\r)\r] && \textrm{Associativity of +} \\
        &=\l[a_{ij}\r]\oplus\l[b_{ij}+c_{ij}\r] && \textrm{Definition of $\oplus$} \\
        &=\l[a_{ij}\r]\oplus\l(\l[b_{ij}\r]\oplus\l[c_{ij}\r]\r). && \textrm{Definition of $\oplus$}
    \end{aligned}
\end{equation}$$

* ($\axigrp[2]$): Take $\l[a_{ij}\r]\in\mat{m\times n}{K}$ and observe that
$$\begin{equation}
    \begin{aligned}
       \l[a_{ij}\r]\oplus0_{mn}&=\l[a_{ij}+0\r]\\
        &=\l[a_{ij}\r]
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        0_{mn}\oplus\l[a_{ij}\r]&=\l[0+a_{ij}\r] \ \ \ \ \ \ \ \ && \textrm{Definitions of $\oplus$ and $0_{mn}$} \\
        &=\l[a_{ij}\r]. && \textrm{0 is the neutral element of $K$}
    \end{aligned}
\end{equation}$$
* ($\axigrp[3]$): Take $\l[a_{ij}\r]\in\mat{m\times n}{K}$ and define $-\l[a_{ij}\r]\coloneqq\l[-a_{ij}\r]$. It follows then that
$$\begin{equation}
    \begin{aligned}
       \l[a_{ij}\r]\oplus\l(-\l[a_{ij}\r]\r)&=\l[a_{ij}+\l(-a_{ij}\r)\r] \\
        &=[0] \\
        &=0_{mn}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(-\l[a_{ij}\r]\r)\oplus\l[a_{ij}\r]&=\l[\l(-a_{ij}\r)+a_{ij}\r] \ \ \ \ \ \ \ \ && \textrm{Definition of $\oplus$} \\
        &=[0] && \textrm{$-a_{ij}$ is the additive inverse of $a_{ij}$} \\
        &=0_{mn}. && \textrm{Definition of $0_{mn}$}
    \end{aligned}
\end{equation}$$
* ($\axiablngrp$): Take $\l[a_{ij}\r],\l[b_{ij}\r]\in\mat{m\times n}{K}$ and observe that

$\begin{align}
   \l[a_{ij}\r]\oplus\l[b_{ij}\r]&=\l[a_{ij}+b_{ij}\r] && \textrm{Definition of }\oplus \\
    &=\l[b_{ij}+a_{ij}\r] && \textrm{Commutativity of }+ \\
    &=\l[b_{ij}\r]\oplus\l[a_{ij}\r]. &&\textrm{Definition of }\oplus\qedin
\end{align}$
