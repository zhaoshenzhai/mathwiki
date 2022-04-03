<br />
<br />

Date Created: 29/03/2022 18:52:53
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Symmetric Matrix]]
Generalizations: _Not Applicable_

Properties: [[Transposition is an involution]], [[Transposition respects matrix addition]], [[Transposition respects scalar multiplication]], [[Transposition inverts matrix multiplication]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N$. The **transposition operation from $m\times n$ to $n\times m$ matrices over $K$** is the function_
$$\begin{equation}
    \begin{aligned}
        \l(-\r)^\trans:\mat{m\times n}{K}&\to\mat{n\times m}{K} \\
        \l\langle m,n,f\r\rangle\eqqcolon A&\mapsto A^\trans\coloneqq\l\langle n,m,f^\trans\r\rangle
    \end{aligned}
\end{equation}$$
_where_
$$\begin{equation}
    \begin{aligned}
        f^\trans:\l\{1,\dots,n\r\}\times\l\{1,\dots,m\r\}&\to K\\
        \l\langle i,j\r\rangle&\mapsto f\l(j,i\r).
    \end{aligned}
\end{equation}$$

```

**Remark.** In other words, if $A=\l[a_{ij}\r]$, then $A^\trans=\l[a_{ji}\r]$. Thus, informally, $A^\trans$ is the matrix with the rows and columns of $A$ interchanged in the same order.<span style="float:right;">$\blacklozenge$</span>
