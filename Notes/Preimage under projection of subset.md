<br />
<br />

Date Created: 09/02/2022 10:51:55
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ and $Y$ be sets and consider the projection maps_
$$\begin{equation}
    \pi_X:X\times Y\to X\ \ \ \ \textit{and}\ \ \ \ \pi_Y:X\times Y\to Y.
\end{equation}$$
Then
$$\begin{equation}
    \fa U\subseteq X:\preim_{\pi_X}\!\l(U\r)=U\times Y\ \ \ \ \textit{and}\ \ \ \ \fa V\subseteq Y:\preim_{\pi_Y}\!\l(V\r)=X\times V.
\end{equation}$$

```

_Proof_. We shall prove the first statement; the second is completely analogous. Take a subset $U\subseteq X$. The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    p\in\preim_{\pi_X}\!\l(U\r)&\Leftrightarrow p\in X\times Y\land\pi_X\l(p\r)\in U&&\textrm{Definition of preimage}\\
    &\Leftrightarrow\ex x\in X,\ex y\in Y:p=\l\langle x,y\r\rangle\land\pi_X\l(p\r)\in U&&\textrm{Definition of Cartesian product}\\
    &\Leftrightarrow\ex x\in X,\ex y\in Y:p=\l\langle x,y\r\rangle\land\pi_X\l(\l\langle x,y\r\rangle\r)\in U\ \ \ \ \ \ \ \ &&\textrm{Substitution}\\
    &\Leftrightarrow\ex x\in X,\ex y\in Y:p=\l\langle x,y\r\rangle\land x\in U&&\fa y\in Y:\pi_X\l(\l\langle x,y\r\rangle\r)=x\\
    &\Leftrightarrow\ex x\in U,\ex y\in Y:p=\l\langle x,y\r\rangle&&U\subseteq X\\
    &\Leftrightarrow p\in U\times Y.&&\textrm{Definition of Cartesian product}\qedin
\end{alignat}$
