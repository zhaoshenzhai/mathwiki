<div class="topSpace"></div>

Date Created: 07/11/2023 20:27:28
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Fubini-Tonelli).

Let $\tpl{X,\mc{B},\mu}$ and $\tpl{Y,\mc{C},\nu}$ be two $\sigma$-finite measure spaces and let $f:X\times Y\to\bar{\R}$ be $\l(\mu\times\nu\r)$-measurable. The fibers $f_x$ and $f_y$ are respectively $\mu$ and $\nu$-measurable for $\mu$-a.e. $x\in X$ and $\nu$-a.e. $y\in Y$, both Tonelli and Fubini hold, and in both cases $\ref{\ast}$ hold.
* (Tonelli). If $f\geq0$, then the a.e. defined functions $g:x\mapsto\int f_x\d\nu$ and $h:y\mapsto\int f_y\d\mu$ are respectively $\mu$ and $\nu$-measurable.
* (Fubini). If $f\in L^1$, then $g$ and $h$ as above are in fact respectively $\mu$ and $\nu$-integrable.
$$\begin{equation}
    \iint f\d\nu\d\mu=\int f\d\!\l(\mu\times\nu\r)=\iint f\d\mu\d\nu.\cref{\ast}
\end{equation}$$

Moreover, if $f$ is $\l(\mc{B}\otimes\mc{C}\r)$-measurable, then in fact $f_x,g$ are $\mc{B}$-measurable for all $x\in X$ and $f_y,h$ are $\mc{C}$-measurable for all $y\in Y$.

```

<i>Proof.</i> Let $\mc{P}\coloneqq\mc{B}\otimes\mc{C}$ and $\rho\coloneqq\mu\times\nu$. We first prove the ‘Fubini-Tonelli theorem for sets’, which states that for all $R\in\mc{P}$, we have $R_x\in\mc{B}$ and $R_y\in\mc{C}$ for all $x\in X$ and $y\in Y$, that the functions $g:x\mapsto\nu\l(R_x\r)$ and $h:y\mapsto\mu\l(R_y\r)$ are respectively $\mc{B}$ and $\mc{C}$-measurable, and that $\int\nu\l(R_x\r)\d\mu=\rho\l(R\r)=\int\mu\l(R_y\r)\d\nu$.
* Indeed, let $\mc{S}$ be the collection of all $R\in\mc{P}$ such that the conclusion holds. Then $\mc{S}$ contains all rectangles $R=B\times C$, where $B\in\mc{B}$ and $C\in\mc{C}$, since the fibers are just $B$ and $C$, $g\l(x\r)=\nu\l(R_x\r)=\nu\l(C\r)\cchi_B\!\l(x\r)$ is an indicator function for all $x\in X$ and similarly for $h\l(y\r)$, and the integrals coincide by definition of $\rho$.
