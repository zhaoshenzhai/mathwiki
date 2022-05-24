<br />
<br />

Date Created: 01/04/2022 22:31:49
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [Rotations in $\R^2$](Rotations%20in%20R2.md), [Reflections in $\R^2$](Reflections%20in%20R2.md)
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Algebraic identities of left-multiplication of matrices]], [[Column space is image of induced linear map]]
Sufficiencies: [[Linear map on tuple spaces is induced by a unique matrix]]
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

**Remark.** Indeed, the function
$$\begin{equation}
    \mc{L}:\mat{m\times n}{K}\to\hom\l(K^n,K^m\r)\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ A\mapsto L_A
\end{equation}$$
is the inverse of the matrix representation
$$\begin{equation}
    \Phi_\mc{B}^\mc{C}:\hom\l(K^n,K^m\r)\to\mat{m\times n}{K}\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ T\mapsto\l[T\r]_\mc{B}^\mc{C}
\end{equation}$$
where $\mc{B}$ and $\mc{C}$ are the standard bases of $K^n$ and $K^m$, respectively.<span style="float:right;">$\blacklozenge$</span>
