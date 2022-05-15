<br />
<br />

Date Created: 15/05/2022 22:49:38
Tags: #Proposition #Closed

Proved by: [[Unique Representation Theorem (Hamel)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and fix a choice of basis $\mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}$ of $V$. Then the representation function_
$$\begin{equation}
    \begin{aligned}
        \rho_\mc{B}:V&\to\mat{n\times1}{K} \\
        v&\mapsto\l[v\r]_\mc{B}
    \end{aligned}
\end{equation}$$
_is a linear map_.

```

_Proof_. Take $v_1,v_2\in V$ and $\alpha\in K$, and observe that $\rho_\mc{B}\l(\alpha v_1+v_2\r)=\l[\alpha v_1+v_2\r]_\mc{B}=\l[\gamma_1\ \ \cdots\ \ \gamma_n\r]^\trans$ where $\gamma_1,\dots,\gamma_n\in K$ are the unique coefficients such that
$$\begin{equation}
    \alpha v_1+v_2=\sum_{i=1}^n\gamma_ib_i.
\end{equation}$$
Since $v_1,v_2\in V$, unique representation also furnish coefficients $\beta_{11},\dots,\beta_{1n},\beta_{21},\dots,\beta_{2n}\in K$ such that
$$\begin{equation}
    v_1=\sum_{i=1}^n\beta_{1i}b_i\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ v_2=\sum_{i=1}^n\beta_{2n}b_i,
\end{equation}$$
so we must have
$$\begin{equation}
    \begin{aligned}
        \alpha v_1+v_2&=\alpha\sum_{i=1}^n\beta_{1i}b_i+\sum_{i=1}^n\beta_{2i}b_i \\
        &=\sum_{i=1}^n\l(\alpha\beta_{1i}+\beta_{2i}\r)b_i.
    \end{aligned}
\end{equation}$$
Unique representation of $\alpha v_1+v_2$ then demands $\alpha\beta_{1i}+\beta_{2i}=\gamma_i$ for all $i\in\l\{1,\dots,n\r\}$, so
$$\begin{align}
    \l[\gamma_1\ \ \cdots\ \ \gamma_n\r]^\trans&=\l[\alpha\beta_{11}+\beta_{21}\ \ \cdots\ \ \alpha\beta_{1n}+\beta_{2n}\r]^\trans && \textrm{Substitution} \\
    &=\alpha\l[\beta_{11}\ \ \cdots\ \ \beta_{1n}\r]^\trans+\l[\beta_{21}\ \ \cdots\ \ \beta_{2n}\r]^\trans && \textrm{Transposition is a linear map} \\
    &=\alpha\l[v_1\r]_\mc{B}+\l[v_2\r]_\mc{B} && \textrm{Definitions of }\l[v_1\r]_\mc{B}\textrm{ and }\l[v_2\r]_\mc{B} \\
    &=\alpha\rho_\mc{B}\l(v_1\r)+\rho_\mc{B}\l(v_2\r). && \textrm{Definition of $\rho_\mc{B}$}\qedin
\end{align}$$
