<br />
<br />

Date Created: 06/04/2022 22:16:10
Tags: #Proposition #In_Progress

Proved by: _Not Applicable_
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

* (Linear independence): 
