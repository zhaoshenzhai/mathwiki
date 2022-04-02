<br />
<br />

Date Created: 02/04/2022 00:00:19
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication (columns)]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for all $A,B\in\mat{m\times n}{K}$,_
$$\begin{equation}
    \l(\fa\v{x}\in K^n:A\v{x}=B\v{x}\r)\ \ \ \ \Rightarrow\ \ \ \ A=B.
\end{equation}$$

```

_Proof_. Let $\v{a}_j\coloneqq\l[a_{1j}\ \ \cdots\ \ a_{mj}\r]^\trans$ and $\v{b}_j\coloneqq\l[b_{1j}\ \ \cdots\ \ b_{mj}\r]^\trans$ be the $j^\textrm{th}$ column of $A$ and $B$, respectively; it suffices to show that $\v{a}_j=\v{b}_j$ for all $j\in\l\{1,\dots,n\r\}$, for then all entries of $A$ and $B$ coincide.

To this end, fix $j\in\l\{1,\dots,n\r\}$ and consider the vector $\v{e}_j\coloneqq\l[\delta_{1j}\ \ \cdots\ \ \delta_{nj}\r]^\trans$; that is, let $\v{e}_j\coloneqq\l[e_1\ \ \cdots\ \ e_n\r]^\trans$ where $e_j\coloneqq1$ and $e_i\coloneqq0$ for all $i\neq j$. Observe that
$$\begin{equation}
    \begin{aligned}
        A\v{e}_j&=\sum_{k=1}^n\delta_{kj}\v{a}_k \\
        &=\v{a}_j
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        B\v{e}_j&=\sum_{k=1}^n\delta_{kj}\v{b}_k && \textrm{Matrix multiplication (columns)} \\
        &=\v{b}_j, && \delta_{jk}=0\textrm{ for all }j\neq k
    \end{aligned}
\end{equation}$$
but since $A\v{x}=B\v{x}$ for all $\v{x}\in K^n$, we have, in particular, that $\v{a}_j=A\v{e}_j=B\v{e}_j=\v{b}_j$. The result follows.<span style="float:right;">$\blacksquare$</span>
