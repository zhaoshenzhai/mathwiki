<br />
<br />

Date Created: 26/01/2022 18:05:47
Tags: #Proposition #Closed 

Proved by: [[Formula in replacement image constructs a function]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ and fix $S\subseteq X$. The restriction function $\l.f\r|_S=\l\{z\mid\ex x\in S:z=\l\langle x,f\l(x\r)\r\rangle\r\}$ is a function._

```

_Proof_. Consider the formula $\phi\l(x,y\r)\,\colon\!\Leftrightarrow x\in S\land\l\langle x,y\r\rangle\in f$. Observe that
$$\begin{equation}
    \begin{alignedat}{2}
        f\textrm{ is a function }&\Leftrightarrow\fa x\in X,\ex!y:\l\langle x,y\r\rangle\in f&&\textrm{Definition of function}\\
        &\Rightarrow\fa x\in S,\ex!y:\l\langle x,y\r\rangle\in f&&S\subseteq X\\
        &\Leftrightarrow\fa x\in X,\ex!y:x\in S\land\l\langle x,y\r\rangle\in f\ \ \ \ \ \ \ \ &&x\in S\Rightarrow x\in S\\
        &\Leftrightarrow\fa x\in S,\ex!y:\phi\l(x,y\r),&&\textrm{Substitution}
    \end{alignedat}
\end{equation}$$
so there exists a function $\l.f\r|_S$ with $\dom\l.f\r|_S=S$ and $\fa x\in S:\phi\l(x,f\l(x\r)\r)$. This function is constructed as the set

$\begin{alignat}{2}
    \l.f\r|_S&=\l\{z\mid\ex x\in S,\ex y:\l(\phi\l(x,y\r)\land z=\l\langle x,y\r\rangle\r)\r\}&&\textrm{Replace image is a function}\\
    &=\l\{z\mid\ex x\in S,\ex y,\l(x\in S\land\l\langle x,y\r\rangle\in f\land z=\l\langle x,y\r\rangle\r)\r\}\ \ \ \ \ \ \ \ &&\textrm{Substitution}\\
    &=\l\{z\mid\ex x\in S:z=\l\langle x,f\l(x\r)\r\rangle\r\}.&&\textrm{Simplification and substitution}\qedin
\end{alignat}$
