<div class="topSpace"></div>

Date Created: 22/03/2022 16:12:09
Tags: #Definition #Later/Linear_Algebra

Types: [[Reduced Row-echelon Matrix]], [[Square Matrix]], [[Invertible Matrix]]
Examples: [[Augmented Matrix]], [[Jacobian Matrix]]
Constructions: [[Set of Matrices]], [[Left-multiplication of Matrices]], [[Kernel slash Nullity]], [[Image slash Rank]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Matrix Representation of a Linear Map]], [[Matrices coincide if their actions on all vectors coincide]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N^+$. An **$m\times n$ matrix over $K$** is a function_
$$\begin{equation}
    \begin{aligned}
        A:\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}&\to K\\
        \tpl{i,j}&\mapsto a_{ij}\coloneqq A\l(i,j\r).
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
        \end{bmatrix}.
\end{equation}$$
Write $\v{a}_{i;\blob}$ and $\v{a}_{\blob;j}$ for the $i^\textrm{th}$ row and $j^\textrm{th}$ column of $A$, respectively.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** We will occasionally require a notion of an _empty_ matrix (not zero!); that is, matrices of size $m\times0$ and $0\times n$. Naively extending our definition above, we see that an $m\times0$ matrix $E_m$ is a function
$$\begin{equation}
    E_m:\em\to K
\end{equation}$$
which, by the set-theoretic definition of functions, is simply $\em$. However, this is also the case for $0\times n$ matrices, so they coincide. Thus, formally speaking, we should define $m\times 0$ matrices as a triple $\tpl{m,0,A}$ where $A$ is as before. Similarly, $0\times n$ matrices are triples $\tpl{0,n,A}$; this differentiates between the different empty matrices. We may thus redefine general $m\times n$ matrices, where $m,n\in\N$, as the triple $\tpl{m,n,A}$ where $A$ is as before.<span style="float:right;">$\blacklozenge$</span>
