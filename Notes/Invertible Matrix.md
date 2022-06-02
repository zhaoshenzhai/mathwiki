<br />
<br />

Date Created: 07/04/2022 07:20:30
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [Basis Transition Map$\slash$Matrix](Basis%20Transition%20Map.md), [[Identity Matrix]], [[Elementary matrices have inverses of the same type]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Cancellation laws (invertible matrix)]], [[Inversion anti-respects matrix multiplication]], [[Inversion is an involution]]
Sufficiencies: [[Left and right inverses coincide (matrix)]], [Matrix with zero-row $\Rightarrow$ not invertible](Matrix%20with%20zero-row%20implies%20not%20invertible.md)
Equivalences: [[Matrix Invertibility Criteria]], [Row-equivalent $\Leftrightarrow$ factors through invertible matrix](Row-equivalent%20iff%20factors%20through%20invertible%20matrix.md)
Justifications: [[Inverse of matrix is unique]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $n\in\N^\ast$. A matrix $A\in\mat{n}{K}$ is said to be **invertible** if there exists $B\in\mat{n}{K}$ such that $B$ is both a left and a right-inverse of $A$; that is, if_
$$\begin{equation}
    AB=BA=I_n,
\end{equation}$$
_in which case we write $B\coloneqq A^{-1}$ and call it the **inverse of $A$**._

```
