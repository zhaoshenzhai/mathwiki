<br />
<br />

Date Created: 06/04/2022 22:16:10
Tags: #Proposition #Closed

Proved by: [[Linear span is set of all linear combinations]], [[Matrix multiplication (columns)]]
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider the tuple space $K^n$ for some fixed $n\in\N^\ast$. Then the standard basis $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ of $K^n$ is an ordered basis for $K^n$._

```

_Proof_. The ordering on $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ is given by the indices.
* (Spanning set): Take $\v{v}\in K^n$, so $\v{v}=\l\langle v_1,\dots,v_n\r\rangle$ for some $v_1,\dots,v_n\in K$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \v{v}&=\l\langle1\cdot v_1,\dots,1\cdot v_n\r\rangle && 1\textrm{ is the left-identity element of $\cdot$ on $K$} \\
        &=\l\langle1\cdot v_1+\sum_{i=2}^n0\cdot v_i,\dots,1\cdot v_n+\sum_{i=2}^n0\cdot v_i\r\rangle && \textrm{$0$ is the left-absorbing element of $\cdot$ on $K$} \\
        &=\l\langle\sum_{i=1}^n\delta_{1i}v_i,\dots,\sum_{i=1}^n\delta_{ni}v_i\r\rangle && \textrm{Combine sums; definition of Kronecker Delta} \\
        &=\sum_{i=1}^n\l\langle\delta_{1i}v_i,\dots,\delta_{ni}v_i\r\rangle && \textrm{Definition of $+$ in $K^n$} \\
        &=\sum_{i=1}^nv_i\l\langle\delta_{1i},\dots,\delta_{ni}\r\rangle && \textrm{Definition of scalar multiplication on $K^n$} \\
        &=\sum_{i=1}^nv_i\v{e}_i, && \textrm{Definiton of $\v{e}_i$}
    \end{aligned}
\end{equation}$$
so $\v{v}\in\span\l\{\v{e}_1,\dots,\v{e}_n\r\}$.

* (Linear independence): Take $x_1,\dots,x_n\in K$ such that
$$\begin{equation}
    \sum_{i=1}^nx_i\v{e}_i=\v{0}.\tag{$\ast$}
\end{equation}$$
Viewing each $\v{e}_i\in\mat{n\times1}{K}$, we have that $I=\l[\v{e}_1\ \ \cdots\ \ \v{e}_n\r]$. Thus the assumption $\l(\,\ast\,\r)$ is, by matrix multiplication with the columns of $I$, equivalent to the linear system $I\v{x}=\v{0}$ which has only the trivial solution $\v{x}=\v{0}$. It follows then  that each $x_i=0$, so $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ is linearly independent.<span style="float:right;">$\blacksquare$</span>
