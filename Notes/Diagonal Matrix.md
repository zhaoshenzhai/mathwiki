<br />
<br />

Date Created: 05/05/2022 20:03:26
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Identity Matrix]]
Constructions: [$\Diag{n}{K}$](Vector%20Space%20of%20Diagonal%20Matrices.md)
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $n\in\N^\ast$. A matrix $D\in\mat{n}{K}$ is said to be a **diagonal matrix** if_
$$\begin{equation}
    \fa i,j\in\l\{1,\dots,n\r\}:i\neq j\Rightarrow d_{ij}=0.
\end{equation}$$

```

**Remark.** Indeed, the data determining a diagonal matrix $D$ is simply the $n$-tuple $\tpl{d_{11},\dots,d_{nn}}$, so we may consider the function
$$\begin{align}
    \diag:K^n&\to\mat{n}{K} \\
    \tpl{d_1,\dots,d_n}&\mapsto\l[d_{ij}\r]\coloneqq
        \begin{dcases}
            d_i & \textrm{if }i=j\\
            0 & \textrm{else}.\exqedin
        \end{dcases}
\end{align}$$
