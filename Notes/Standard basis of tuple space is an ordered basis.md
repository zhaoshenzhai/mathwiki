<div class="topSpace"></div>

Date Created: 06/04/2022 22:16:10
Tags: #Proposition

Proved by: [[Matrix multiplication (columns slash rows)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider the tuple space $K^n$ for some fixed $n\in\N^\ast$. Then the standard basis $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ of $K^n$ is an ordered basis for $K^n$._

```

_Proof_. The ordering on $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ is given by the indices.
* (Spanning set): Take $\v{v}\in K^n$, so $\v{v}=\tpl{v_1,\dots,v_n}$ for some $v_1,\dots,v_n\in K$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \v{v}&=\tpl{1\cdot v_1,\dots,1\cdot v_n} && 1\textrm{ is the left-identity element of $\cdot$ on $K$} \\
        &=\tpl{1\cdot v_1+\sum_{i=2}^n0\cdot v_i,\dots,1\cdot v_n+\sum_{i=2}^n0\cdot v_i} && \textrm{$0$ is the left-absorbing element of $\cdot$ on $K$} \\
        &=\tpl{\sum_{i=1}^n\delta_{1i}v_i,\dots,\sum_{i=1}^n\delta_{ni}v_i} && \textrm{Combine sums; definition of Kronecker Delta} \\
        &=\sum_{i=1}^n\tpl{\delta_{1i}v_i,\dots,\delta_{ni}v_i} && \textrm{Definition of $+$ in $K^n$} \\
        &=\sum_{i=1}^nv_i\tpl{\delta_{1i},\dots,\delta_{ni}} && \textrm{Definition of scalar multiplication on $K^n$} \\
        &=\sum_{i=1}^nv_i\v{e}_i, && \textrm{Definiton of $\v{e}_i$}
    \end{aligned}
\end{equation}$$
so $\v{v}\in\span\l\{\v{e}_1,\dots,\v{e}_n\r\}$.

* (Linear independence): Take $x_1,\dots,x_n\in K$ such that
$$\begin{equation}
    \sum_{i=1}^nx_i\v{e}_i=\v{0}.\cref{\ast}
\end{equation}$$
Viewing each $\v{e}_i\in\mat{n\times1}{K}$, we have that $I=\l[\v{e}_1\ \ \cdots\ \ \v{e}_n\r]$. Thus the assumption $\ref{\ast}$ is, by matrix multiplication with the columns of $I$, equivalent to the linear system $I\v{x}=\v{0}$ which has only the trivial solution $\v{x}=\v{0}$. It follows then  that each $x_i=0$, so $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ is linearly independent.<span style="float:right;">$\blacksquare$</span>
