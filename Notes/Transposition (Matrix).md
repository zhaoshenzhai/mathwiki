<div class="topSpace"></div>

Date Created: 29/03/2022 18:52:53
Tags: #Definition #Later/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Symmetric Matrix]], [[Skew-symmetric Matrix]]
Generalizations: _Not Applicable_

Properties: [[Transposition anti-respects matrix multiplication]], [[Inverse of transpose is transpose of inverse]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Transposition is a linear map]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N^+$. The **transposition operation from $m\times n$ to $n\times m$ matrices over $K$** is the linear map_
$$\begin{equation}
    \begin{aligned}
        \l(-\r)^\trans:\mat{m\times n}{K}&\to\mat{n\times m}{K} \\
        \l[a_{ij}\r]&\mapsto\l[a_{ji}\r].
    \end{aligned}
\end{equation}$$

```

**Remark.** In other words, $A^\trans$ is the matrix with the rows and columns of $A$ interchanged in the same order. It follows then that $\l(\slot\r)^\trans$ is an involution.<span style="float:right;">$\blacklozenge$</span>
