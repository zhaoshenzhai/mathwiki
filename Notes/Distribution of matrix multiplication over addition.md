<br />
<br />

Date Created: 02/04/2022 17:24:13
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication (columns)]], [[Matrix multiplication (rows)]], [[Tuple space over a field is a vector space]]
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N$. Then the following distributive laws hold:_
* _(Left-distribution): For all $A\in\mat{m\times n}{K}$ and $B,C\in\mat{n\times p}{K}$, we have that_
$$\begin{equation}
    A\l(B+C\r)=AB+AC.
\end{equation}$$
* _(Right-distribution): For all $A,B\in\mat{m\times n}{K}$ and $C\in\mat{n\times p}{K}$, we have that_
$$\begin{equation}
    \l(A+B\r)C=AC+BC.
\end{equation}$$

```

_Proof_. Let $\v{a}_j\coloneqq\l[a_{1j}\ \ \cdots\ \ a_{mj}\r]^\trans$ and $\v{c}_j\coloneqq\l[c_{j1}\ \ \cdots\ \ c_{jp}\r]$ be the columns of $A$ and rows of $C$, respectively.
* (Left-distribution): Let $\l[\v{d}_1\ \ \cdots\ \ \v{d}_p\r]\coloneqq A\l(B+C\r)$ and $\l[\v{d}_1'\ \ \cdots\ \ \v{d}_p'\r]\coloneqq AB+AC$ where each $\v{d}_k,\v{d}_k'\in\mat{m\times1}{K}$ are column vectors. Observe then that
$$\begin{equation}
    \begin{aligned}
        \v{d}_k&=\sum_{j=1}^n\l(B+C\r)_{jk}\v{a}_j && \textrm{Matrix multiplication (columns)} \\
        &=\sum_{j=1}^n\l(b_{jk}+c_{jk}\r)\v{a}_j && \textrm{Definition of matrix addition} \\
        &=\sum_{j=1}^nb_{jk}\v{a}_j+\sum_{j=1}^nc_{jk}\v{a}_j && \textrm{Right-distribution of vectors in $K^n$} \\
        &=\v{d}_k'. && \textrm{Matrix multiplication (columns)}
    \end{aligned}
\end{equation}$$
Since $k\in\l\{1,\dots,p\r\}$ is arbitrary, each column of $A\l(B+C\r)$ and $AB+AC$ coincide and thus the result follows.

* (Right-distribution): Let $\l[\v{d}_1\ \ \cdots\ \ \v{d}_m\r]^\trans\coloneqq\l(A+B\r)C$ and $\l[\v{d}_1'\ \ \cdots\ \ \v{d}_m'\r]^\trans\coloneqq AC+BC$ where each $\v{d}_i,\v{d}_i'\in\mat{1\times p}{K}$ are row vectors. Observe then that
$$\begin{equation}
    \begin{aligned}
        \v{d}_i&=\sum_{j=1}^n\l(A+B\r)_{ij}\v{c}_j && \textrm{Matrix multiplication (rows)} \\
        &=\sum_{j=1}^n\l(a_{ij}+b_{ij}\r)\v{c}_j && \textrm{Definition of matrix addition} \\
        &=\sum_{j=1}^na_{ij}\v{c}_j+\sum_{j=1}^nb_{ij}\v{c}_j && \textrm{Right-distribution of vectors in $K^n$} \\
        &=\v{d}_i'. && \textrm{Matrix multiplication (rows)}
    \end{aligned}
\end{equation}$$
Since $i\in\l\{1,\dots,m\r\}$ is arbitrary, each column of $\l(A+B\r)C$ and $AC+BC$ coincide and thus the result follows.<span style="float:right;">$\blacksquare$</span>
