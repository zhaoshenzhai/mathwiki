<br />
<br />

Date Created: 31/03/2022 20:27:30
Tags: #Proposition #Closed

Proved by: [[Isomorphism of objects is an equivalence relation]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N$. Then the vector spaces $K^n$, $\mat{n\times1}{K}$, and $\mat{1\times n}{K}$ over $K$ are linearly isomorphic._

```

_Proof_. Consider the functions
$$\begin{equation}
    \begin{aligned}
        f:\mat{n\times1}{K}&\to K^n \\
        \l[x_1\ \ \cdots\ \ x_n\r]^\trans&\mapsto\l\langle x_1,\dots,x_n\r\rangle
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        g:\mat{1\times n}{K}&\to K^n \\
        \l[x_1\ \ \cdots\ \ x_n\r]&\mapsto\l\langle x_1,\dots,x_n\r\rangle;
    \end{aligned}
\end{equation}$$
we shall prove that both $f$ and $g$ are linear isomorphisms. The fact that isomorphism of vector spaces is an equivalence relation proves that the vector spaces $K^n$, $\mat{n\times1}{K}$, and $\mat{1\times n}{K}$ are all linearly isomorphic.
* (Linear transformation): Let $X\coloneqq\l[x_1\ \ \cdots\ \ x_n\r]^\trans$, $Y\coloneqq\l[y_1\ \ \cdots\ \ y_n\r]^\trans$, and take $\alpha\in K$. The result follows from the following computations:
$$\begin{equation}
    \begin{aligned}
        f\l(\alpha X+Y\r)&=\l\langle\alpha x_1+y_1,\dots,\alpha x_n+y_n\r\rangle \\
        &=\l\langle\alpha x_1,\dots,\alpha x_2\r\rangle+\l\langle y_1,\dots,y_n\r\rangle \\
        &=\alpha\cdot\l\langle x_1,\dots,x_n\r\rangle+\l\langle y_1,\dots,y_n\r\rangle \\
        &=\alpha\cdot f\l(X\r)+f\l(Y\r)
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
	\begin{aligned}
		g\l(\alpha X^\trans+Y^\trans\r)&=\l\langle\alpha x_1+y_1,\dots,\alpha x_n+y_n\r\rangle && \textrm{Definitions of $f$ and $g$} \\
        &=\l\langle\alpha x_1,\dots,\alpha x_2\r\rangle+\l\langle y_1,\dots,y_n\r\rangle && \textrm{Definition of $+$ in $K^n$} \\
        &=\alpha\cdot\l\langle x_1,\dots,x_n\r\rangle+\l\langle y_1,\dots,y_n\r\rangle && \textrm{Definition of $\cdot$ in $K^n$} \\
        &=\alpha\cdot g\l(X^\trans\r)+g\l(Y^\trans\r). && \textrm{Definitions of $f$ and $g$}
	\end{aligned}
\end{equation}$$
* (Invertible): Take $\l\langle x_1,\dots,x_n\r\rangle$ and set $f^{-1}\l(\l\langle x_1,\dots,x_n\r\rangle\r)\coloneqq\l[x_1\ \ \cdots\ \ x_n\r]^\trans$ and $g^{-1}\l(\l\langle x_1,\dots,x_n\r\rangle\r)\coloneqq\l[x_1\ \ \cdots\ \ x_n\r]$.<span style="float:right;">$\blacksquare$</span>
