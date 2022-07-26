<br />
<br />

Date Created: 07/04/2022 07:20:30
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [Basis Transition Map/Matrix](Basis%20Transition%20Map;%20Change%20of%20Basis%20Matrix.md), [[Identity Matrix]], [Elementary Matrices/Operations](Elementary%20Matrices%20and%20Operations.md)
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Cancellation laws (invertible matrix)]], [[Product of invertible matrices is invertible]], [[Inversion is an involution]]
Sufficiencies: [[Left and right inverses coincide (matrix)]]
Equivalences: [Linear map invertible $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix representation invertible](Linear%20map%20invertible%20repr%20under%20basis%20matrix%20representation%20invertible.md), [[Matrix Invertibility Theorem]], [Matrix invertible $\Leftrightarrow$ $\l[A\mid I_n\r]\sim\l[I_n\mid A^{-1}\r]$](Matrix%20invertible%20iff%20augmented%20matrix%20reducible%20to%20identity.md)
Justifications: [[Inverse of matrix is unique]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $n\in\N^\ast$. A matrix $A\in\mat{n}{K}$ is said to be **invertible** if there exists $B\in\mat{n}{K}$ such that $B$ is both a left and a right-inverse of $A$; that is, if_
$$\begin{equation}
    AB=BA=I_n,
\end{equation}$$
_in which case we write $B\coloneqq A^{-1}$ and call it the **inverse of $A$**._

```
