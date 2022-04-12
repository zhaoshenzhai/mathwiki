<br />
<br />

Date Created: 22/03/2022 16:12:09
Tags: #Definition #Closed 

Types: [[Row-echelon Matrix]], [[Square Matrix]], [[Left-invertible Matrix]], [[Right-inverible Matrix]]
Examples: [[Augmented Matrix]], [[Zero Matrix]]
Constructions: [[Set of Matrices]], [[Linear map Induced by a Matrix]], [[Null Space]], [[Column Space]], [[Column Rank]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Matrices coincide if their actions on all vectors coincide]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $n,m\in\N$. A **$m\times n$ matrix over $K$** is a triple $A\coloneqq\l\langle m,n,f\r\rangle$ where_
$$\begin{equation}
    \begin{aligned}
        f:\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}&\to K\\
        \l\langle i,j\r\rangle&\mapsto a_{ij}\coloneqq f\l(i,j\r).
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
        \end{bmatrix};
\end{equation}$$
this idea is captured formally by the function $f$. We define $A$ as the triple $\l\langle m,n,f\r\rangle$ instead of $f$ itself to distinguish between a $0\times n$ and an $m\times 0$ matrix, both with $f:\em\to K$.<span style="float:right;">$\blacklozenge$</span>
