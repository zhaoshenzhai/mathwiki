<br />
<br />

Date Created: 22/03/2022 16:12:09
Tags: #Definition #Closed 

Types: [[Row-echelon Matrix]], [[Square Matrix]], [[Left-invertible Matrix]], [[Right-inverible Matrix]], [[Full-rank Matrix]]
Examples: [[Augmented Matrix]], [[Zero Matrix]]
Constructions: [[Set of Matrices]], [[Linear map Induced by a Matrix]], [[Null Space]], [[Column Space]], [[Row Space]], [[Pivot Column]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Matrices coincide if their actions on all vectors coincide]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $n,m\in\N^\ast$. An **$m\times n$ matrix over $K$** is a function_
$$\begin{equation}
    \begin{aligned}
        A:\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}&\to K\\
        \l\langle i,j\r\rangle&\mapsto a_{ij}\coloneqq A\l(i,j\r).
    \end{aligned}
\end{equation}$$
_The numbers_ $a_{ij}$ _are called the **entries of $A$**, and we write_ $\l[a_{ij}\r]\coloneqq A$_._

```

**Remark.** Informally, an $m\times n$ matrix $A$ contains the data of an $m\times n$ block of numbers in $K$, visualized as
$$\begin{equation}
    A=
        \begin{bmatrix}
            a_{11} & \cdots & a_{1n}\\
            \vdotswithin{a_{11}} & \ddots & \vdotswithin{a_{1n}} \\
            a_{m1} & \cdots & a_{mn}
        \end{bmatrix}.\exqedin
\end{equation}$$
