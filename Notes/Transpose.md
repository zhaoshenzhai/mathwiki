<br />
<br />

Date Created: 29/03/2022 18:52:53
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Symmetric Matrix]]
Generalizations: _Not Applicable_

Properties: [[Transposition is an involution]], [[Transposition respects matrix addition]], [[Transposition respects scalar multiplication]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N$. The **transpose of a matrix** $A\in\mat{m\times n}{K}$ is the matrix $A^\trans$ with rows and columns interchanged in the same order. Formally, letting $A=\l\langle n,m,f\r\rangle$, we have that $A^\trans\coloneqq\l\langle n,m,f^\trans\r\rangle$ where_
$$\begin{equation}
    \begin{aligned}
        f^\trans:\l\{1,\dots,n\r\}\times\l\{1,\dots,m\r\}&\to K\\
        \l\langle i,j\r\rangle&\mapsto f\l(j,i\r).
    \end{aligned}
\end{equation}$$

```

**Remark.** In other words, if $A=\l[a_{ij}\r]$, then $A^\trans=\l[a_{ji}\r]$.<span style="float:right;">$\blacklozenge$</span>
