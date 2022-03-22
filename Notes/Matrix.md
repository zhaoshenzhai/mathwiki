<br />
<br />

Date Created: 22/03/2022 16:12:09
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Augmented Matrix]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $n,m\in\N$. A **$m\times n$ matrix over $K$** is a triple $\v{M}\coloneqq\l\langle m,n,f\r\rangle$ where_
$$\begin{equation}
    \begin{aligned}
        f:\l\{1,\dots,m\r\}\times\l\{1,\dots,n\r\}&\to K\\
        \l\langle i,j\r\rangle&\mapsto M_{ij}\coloneqq f\l(i,j\r).
    \end{aligned}
\end{equation}$$
_The numbers_ $M_{ij}$ _are called the **entries of $\v{M}$**, and we write_ $\l[M_{ij}\r]\coloneqq\v{M}$_._

```

**Remark.** Informally, an $m\times n$ matrix $\v{M}$ contains the data of an $m\times n$ block of numbers in $K$, visualized as
$$\begin{equation}
    \v{M}=
        \begin{bmatrix}
            M_{11} & \cdots & M_{1n}\\
            \vdotswithin{M_{11}} & \ddots & \vdotswithin{M_{1n}} \\
            M_{m1} & \cdots & M_{mn}
        \end{bmatrix};
\end{equation}$$
this idea is captured formally by the function $f$. We define $\v{M}$ as the triple $\l\langle m,n,f\r\rangle$ instead of $f$ itself to distinguish between a $0\times n$ and an $m\times 0$ matrix, both with $f:\em\to K$.<span style="float:right;">$\blacklozenge$</span>
