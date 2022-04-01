<br />
<br />

Date Created: 29/03/2022 17:04:32
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: [[Additive matrix group is an Abelian group]]

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle K,+,\cdot\r\rangle$ be a field and fix $n\in\N^\ast$. Then the additive tuple space $\l\langle K^n,\oplus,\v{0}\r\rangle$ is an Abelian group._

```

_Proof_. We verify the axioms of an Abelian group.
* ($\axigrp[1]$): Take $\v{x},\v{y},\v{z}\in K^n$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(\v{x}\oplus \v{y}\r)\oplus \v{z}&=\l\langle x_1+y_1,\dots,x_n+y_n\r\rangle\oplus \v{z} && \textrm{Definition of $\oplus$}\\
        &=\l\langle\l(x_1+y_1\r)+z_1,\dots,\l(x_n+y_n\r)+z_n\r\rangle && \textrm{Definition of $\oplus$} \\
        &=\l\langle x_1+\l(y_1+z_1\r),\cdots,x_n+\l(y_n+z_n\r)\r\rangle && \textrm{Associativity of +} \\
        &=\v{x}\oplus\l\langle y_1+z_1,\dots,y_n+z_n\r\rangle && \textrm{Definition of $\oplus$} \\
        &=\v{x}\oplus\l(\v{y}\oplus \v{z}\r). && \textrm{Definition of $\oplus$}
    \end{aligned}
\end{equation}$$

* ($\axigrp[2]$): Take $\v{x}\in K^n$ and observe that
$$\begin{equation}
    \begin{aligned}
        \v{x}\oplus\v{0}&=\l\langle x_1+0,\dots,x_n+0\r\rangle\\
        &=\v{x}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \v{0}\oplus \v{x}&=\l\langle0+x_1,\dots,0+x_n\r\rangle \ \ \ \ \ \ \ \ && \textrm{Definitions of $\oplus$ and $\v{0}$} \\
        &=\v{x}. && \textrm{0 is the neutral element of $K$}
    \end{aligned}
\end{equation}$$
* ($\axigrp[3]$): Take $\v{x}\in K^n$ and define $-\v{x}\coloneqq\l\langle-x_1,\dots,-x_n\r\rangle\in K^n$. It follows then that
$$\begin{equation}
    \begin{aligned}
        \v{x}\oplus\l(-\v{x}\r)&=\l\langle x_1+\l(-x_1\r),\dots,x_n+\l(-x_n\r)\r\rangle \\
        &=\l\langle0,\dots,0\r\rangle \\
        &=\v{0}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(-\v{x}\r)\oplus \v{x}&=\l\langle\l(-x_1\r)+x_1,\dots,\l(-x_n\r)+x_n\r\rangle \ \ \ \ \ \ \ \ && \textrm{Definition of $\oplus$} \\
        &=\l\langle0,\dots,0\r\rangle && \textrm{$-x_i$ is the inverse of $x_i$} \\
        &=\v{0}. && \textrm{Definition of $\v{0}$}
    \end{aligned}
\end{equation}$$
* ($\axiablngp$): Take $\v{x},\v{y}\in K^n$ and observe that

$\begin{align}
    \v{x}\oplus \v{y}&=\l\langle x_1+y_1,\dots,x_n+y_n\r\rangle && \textrm{Definition of }\oplus \\
    &=\l\langle y_1+x_1,\dots,y_n+x_n\r\rangle && \textrm{Commutativity of }+ \\
    &=\v{y}\oplus \v{x}. &&\textrm{Definition of }\oplus\qedin
\end{align}$
