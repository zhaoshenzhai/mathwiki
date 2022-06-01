<br />
<br />

Date Created: 01/04/2022 22:31:49
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Basis Transition Map]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Algebraic identities of left-multiplication of matrices]], [Matrix invertible $\Leftrightarrow$ left-multiplication invertible](Matrix%20invertible%20iff%20left-multiplication%20invertible.md), [[Column space is image of induced linear map]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Left-multiplication of a matrix is a linear map]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. To every matrix $A\in\mat{m\times n}{K}$, the **left-multiplication map induced by $A$** is the linear map_
$$\begin{equation}
    \begin{aligned}
        L_A:K^n&\to K^m \\
        \v{x}&\mapsto A\v{x}.
    \end{aligned}
\end{equation}$$

```

**Remark.** Indeed, we may consider the function
$$\begin{equation}
    \mc{L}_{m\times n}:\mat{m\times n}{K}\to\hom\l(K^n,K^m\r)\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ A\mapsto L_A
\end{equation}$$
that assigns every matrix $A\in\mat{m\times n}{K}$ to its left-multiplication map.<span style="float:right;">$\blacklozenge$</span>
