<br />
<br />

Date Created: 27/03/2022 22:19:19
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Tuple Space (Linear Algebra)]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Function space with component-wise operations is a vector space]]

``` ad-Definition
title: Definition.

_Let $X$ be a set and let $K$ be a field. The **$X$-function space over $K$** is the vector space $\l\langle K^X,K,\oplus,\odot\r\rangle$ where $K^X$ is the (set-theoretic) function space from $X$ into $K$ and_
$$\begin{equation}
    \begin{aligned}
        \oplus:K^X\times K^X&\to K^X\\
        \l\langle f,g\r\rangle&\mapsto\l[
            \begin{aligned}
                f\oplus g:X&\to K\\
                x&\mapsto f\l(x\r)+g\l(x\r)
            \end{aligned}
        \r]
    \end{aligned}\ \ \ \ \ \ \ \ \textit{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \odot:K\times K^X&\to K^X\\
        \l\langle\alpha,f\r\rangle&\mapsto\l[
            \begin{aligned}
                \alpha\odot f:X&\to K\\
                x&\mapsto\alpha\cdot f\l(x\r)
            \end{aligned}
        \r].
    \end{aligned}
\end{equation}$$

```
