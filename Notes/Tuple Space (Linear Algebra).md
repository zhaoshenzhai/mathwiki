<br />
<br />

Date Created: 27/03/2022 22:00:57
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Real Coordinate Space]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Tuple space over a field is a vector space]]

``` ad-Definition
title: Definition.

_Let $\l\langle K,+,\cdot\r\rangle$ be a field and fix $n\in\N^\ast$. The **$n$-tuple space over $K$** is the vector space $\l\langle K^n,K,\oplus,\odot,\v{0}\r\rangle$ over $K$, where $\v{0}\coloneqq\l\langle0,\dots,0\r\rangle$ and_
$$\begin{equation}
    \begin{aligned}
        \oplus:K^n\times K^n&\to K^n\\
        \l\langle\v{x},\v{y}\r\rangle&\mapsto\l\langle x_1+y_1,\dots,x_n+y_n\r\rangle
    \end{aligned}\ \ \ \ \ \ \ \ \textit{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \odot:K\times K^n&\to K^n\\
        \l\langle\alpha,\v{x}\r\rangle&\mapsto\l\langle \alpha\cdot x_1,\dots,\alpha\cdot x_n\r\rangle.
    \end{aligned}
\end{equation}$$

```

**Remark.** Vectors in a tuple space will generally be denoted in boldface (especially if $K=\R$). This is done since we can associate to each vector $\v{x}\in K^n$ an $n\times1$ matrix $\l[x_i\r]$, and conversely associate to each $n\times 1$ matrix $\l[x_i\r]$ a vector $\v{x}\in K^n$; formally, we define a function
$$\begin{equation}
    \begin{aligned}
        f:K^n&\to\mat{1\times n}{K} \\
        \v{x}&\mapsto\l[x_i\r]
    \end{aligned}
\end{equation}$$
and verify (easily) that it is invertible. As such, no distinction (unless context necessitates it) will be made between the two. We will usually typeset such matrices as the transpose of a row-matrix instead.<span style="float:right;">$\blacklozenge$</span>
