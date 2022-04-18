<br />
<br />

Date Created: 02/04/2022 16:29:57
Tags: #Proposition #Closed

Proved by: [[Matrices coincide if their actions on all vectors coincide]], [[Matrix multiplication (columns)]]
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for every linear map $T:K^n\to K^m$, there exists a unique matrix $A\in\mat{m\times n}{K}$ such that $T\l(\v{x}\r)=A\v{x}$ for all $\v{x}\in K^n$. Explicitly,_
$$\begin{equation}
    A=\l[T\l(\v{e}_1\r)\ \ \cdots\ \ T\l(\v{e}_n\r)\r]
\end{equation}$$
_where_ $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ is the standard basis on $K^n$._

```

_Proof_. Suppose, for sake of contradiction, that there exist $A,B\in\mat{m\times n}{K}$ such that $T_A=T_B$; that is, such that $A\v{x}=B\v{x}$ for all $\v{x}\in K^n$. But then $A=B$ since their actions on all vectors in $K^n$ coincide, so we arrive at a contradiction.

To write $A$ explicitly, observe that each $\v{x}=\l\langle x_1,\dots,x_n\r\rangle\in K^n$ can be written as $\v{x}=\sum_{j=1}^nx_j\v{e}_j$, and thus
$$\begin{equation}
    \begin{aligned}
        T\l(\v{x}\r)&=T\l(\sum_{j=1}^nx_j\v{e}_j\r) && \textrm{Substitution} \\
        &=\sum_{j=1}^nT\l(x_j\v{e}_j\r) && \textrm{Additivity of $T$} \\
        &=\sum_{j=1}^nx_jT\l(\v{e}_j\r). && \textrm{Homogeneity of $T$}
    \end{aligned}
\end{equation}$$
Since each $T\l(\v{e}_j\r)\in K^m$ is a column, we can form an $m\times n$ matrix $\l[T\l(\v{e}_1\r)\ \ \cdots\ \ T\l(\v{e}_n\r)\r]$. Observe then that
$$\begin{equation}
    T\l(\v{x}\r)=\l[T\l(\v{e}_1\r)\ \ \cdots\ \ T\l(\v{e}_n\r)\r]\v{x},
\end{equation}$$
and since there is a unique $m\times n$ matrix $A$ such that $T\l(\v{x}\r)=A\v{x}$, we obtain the desired result.<span style="float:right;">$\blacksquare$</span>
