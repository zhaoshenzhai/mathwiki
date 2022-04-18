<br />
<br />

Date Created: 02/04/2022 19:16:52
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N$. Then, for all $A\in\mat{m\times n}{K}$, $B\in\mat{n\times p}{K}$, and $\alpha\in K$, we have that_
$$\begin{equation}
    \alpha\cdot\l(A\odot B\r)=\l(\alpha\cdot A\r)\odot B=A\odot\l(\alpha\cdot B\r)
\end{equation}$$
_where $\cdot$ and $\odot$ denote scalar and matrix multiplication, respectively._

```

_Proof_. Take $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,p\r\}$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l(\alpha\cdot\l(A\odot B\r)\r)_{ik}&=\alpha\l(AB\r)_{ij} && \textrm{Definition of scalar multiplication} \\
        &=\alpha\sum_{j=1}^na_{ij}b_{jk} && \textrm{Definition of matrix multiplication} \\
        &=\sum_{j=1}^n\alpha a_{ij}b_{jk}. && \textrm{Left-distribution on $K$}
    \end{aligned}
\end{equation}$$
We can express the last expression in two ways:
$$\begin{equation}
    \begin{aligned}
        \sum_{j=1}^n\l(\alpha a_{ij}\r)b_{jk}&=\sum_{j=1}^n\l(\alpha\cdot A\r)_{ij}b_{jk} \\
        &=\l(\l(\alpha\cdot A\r)\odot B\r)_{ik}
    \end{aligned}\ \ \ \ \ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \ \ \ \ 
    \begin{aligned}
        \sum_{j=1}^na_{ij}\l(\alpha b_{jk}\r)&=\sum_{j=1}^na_{ij}\l(\alpha\cdot B\r)_{jk} && \textrm{Defintion of scalar multiplication} \\
        &=\l(A\odot\l(\alpha\cdot B\r)\r)_{ik}. && \textrm{Definition of matrix multiplication}
    \end{aligned}
\end{equation}$$
The results follow.<span style="float:right;">$\blacksquare$</span>
