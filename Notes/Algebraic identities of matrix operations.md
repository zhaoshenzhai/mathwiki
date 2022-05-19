<br />
<br />

Date Created: 18/05/2022 19:46:16
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N^\ast$. Then the following algebraic identities hold:_
* _(Unitality of $\times$): $I_mA=A=AI_n$ for all $A\in\mat{m\times n}{K}$._

* _(Absorpion of $0$): _$A 0_{np}=0_{mp}=0_{mn} B$ _for all $A\in\mat{m\times n}{K}$ and $B\in\mat{n\times p}{K}$._
* _(Left-distributivity of $\times$ over $+$): $A\l(B+B'\r)=A B+A B'$ for all $A\in\mat{m\times n}{K}$ and $B,B'\in\mat{n\times p}{K}$._
* _(Right-distributivity of $\times$ over $+$): $\l(A+A'\r) B=A B+A' B$ for all $A,A'\in\mat{m\times n}{K}$ and $B\in\mat{n\times p}{K}$._
* _(Compatibility between $\times$ and $\cdot$): $\alpha\l(A B\r)=\l(\alpha A\r) B=A\l(\alpha B\r)$ for all $A\in\mat{m\times n}{K}$, $B\in\mat{n\times p}{K}$, and $\alpha\in K$._

```

_Proof_.
* (Unitality of $\times$): Take $A\in\mat{m\times n}{K}$ and observe that
$$\begin{equation}
    \begin{aligned}
        \l(I_mA\r)_{ij}&=\sum_{j'=1}^n\delta_{ij'}a_{j'j} \\
        &=a_{ij}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(AI_n\r)_{ij}&=\sum_{j'=1}^na_{ij'}\delta_{j'i} && \textrm{Definition of $\times$} \\
        &=a_{ij} && \delta_{ij'}=\delta_{j'j}=0\textrm{ for all }i\neq j'\neq j
    \end{aligned}
\end{equation}$$
for all $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$.

* (Absorption of $0$): Take $A\in\mat{m\times n}{K}$ and $B\in\mat{n\times p}{K}$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l(0_{mp}\r)_{ik}&=\sum_{j=1}^na_{ij}\l(0\r) \\
        &=\sum_{j=1}^na_{ij}\l(0_{np}\r)_{jk} \\
        &=\l(A0_{np}\r)_{ik} \\
    \end{aligned}\ \ \ \ \ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(0_{mp}\r)_{ik}&=\sum_{j=1}^n\l(0\r)b_{jk} && \textrm{Arithmetic} \\
        &=\sum_{j=1}^n\l(0_{mn}\r)_{ij}b_{jk} && \textrm{Definitions of $0_{mn}$ and $0_{np}$} \\
        &=\l(0_{mn}B\r)_{ik} && \textrm{Definition of $\times$} \\
    \end{aligned}
\end{equation}$$
for all $i\in\l\{1,\dots,m\r\}$ and $k\in\l\{1,\dots,p\r\}$.
* (Distributivity of $\times$ over $+$): Take $A,A'\in\mat{m\times n}{K}$ and $B,B'\in\mat{n\times p}{K}$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[A\l(B+B'\r)\r]_{ik}&=\sum_{j=1}^na_{ij}\l(B+B'\r)_{jk} \\
        &=\sum_{j=1}^na_{ij}\l(b_{jk}+b'_{jk}\r) \\
        &=\sum_{j=1}^na_{ij}b_{jk}+a_{ij}b'_{jk} \\
        &=\sum_{j=1}^na_{ij}b_{jk}+\sum_{j=1}^na_{ij}b'_{jk} \\
        &=\l(AB\r)_{ik}+\l(AB'\r)_{ik} \\
        &=\l(AB+AB'\r)_{ik}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l[\l(A+A'\r)B\r]_{ik}&=\sum_{j=1}^n\l(A+A'\r)_{ij}b_{jk} && \textrm{Definition of $\times$} \\
        &=\sum_{j=1}^n\l(a_{ij}+a'_{ij}\r)b_{jk} && \textrm{Definition of $+$} \\
        &=\sum_{j=1}^na_{ij}b_{jk}+a'_{ij}b_{jk} && \textrm{Distribution in $K$} \\
        &=\sum_{j=1}^na_{ij}b_{jk}+\sum_{j=1}^na'_{ij}b_{jk} && \textrm{Arithmetic} \\
        &=\l(AB\r)_{ik}+\l(A'B\r)_{ik} && \textrm{Definition of $\times$} \\
        &=\l(AB+A'B\r)_{ik} && \textrm{Definition of $+$}
    \end{aligned}
\end{equation}$$
for all $i\in\l\{1,\dots,m\r\}$, and $k\in\l\{1,\dots,p\r\}$.
* (Compatibility between $\times$ and $\cdot$): Take $A\in\mat{m\times n}{K}$, $B\in\mat{n\times p}{K}$, and $\alpha\in K$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l[\alpha\l(AB\r)\r]_{ik}&=\alpha\l[\l(AB\r)\r]_{ik} \\
        &=\alpha\sum_{j=1}^na_{ij}b_{jk} \\
        &=\sum_{j=1}^n\alpha a_{ij}b_{jk} \\
        & \\[0.25in]
        &=\sum_{j=1}^n\l(\alpha A\r)_{ij}b_{jk} \\
        &=\l[\l(\alpha A\r)B\r]_{ik}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l[\alpha\l(AB\r)\r]_{ik}&=\alpha\l[\l(AB\r)\r]_{ik} && \textrm{Definition of $\cdot$} \\
        &=\alpha\sum_{j=1}^na_{ij}b_{jk} && \textrm{Definition of $\times$} \\
        &=\sum_{j=1}^n\alpha a_{ij}b_{jk} && \textrm{Distribution in $K$}\\
        &=\sum_{j=1}^na_{ij}\alpha b_{jk} && \textrm{Commutativity in $K$}\\
        &=\sum_{j=1}^na_{ij}\l(\alpha B\r)_{jk} && \textrm{Definition of $\cdot$} \\
        &=\l[A\l(\alpha B\r)\r]_{ik} && \textrm{Definition of $\times$}
    \end{aligned}
\end{equation}$$
for all $i\in\l\{1,\dots,m\r\}$ and $k\in\l\{1,\dots,p\r\}$.<span style="float:right;">$\blacksquare$</span>
