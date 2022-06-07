---
custom_alias: Elementary Matrices$\slash$Operations
---

<br />
<br />

Date Created: 23/03/2022 18:10:20
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Row-equivalence of Matrices]], [[Gaussian Algorithm]]
Generalizations: _Not Applicable_

Properties: [Elementary matrices$\slash$operations have inverses of the same type](Elementary%20matrices%20and%20operations%20have%20inverses%20of%20the%20same%20type.md), [Elementary matrices$\slash$operations are rank-preserving](Elementary%20matrices%20and%20operations%20are%20rank-preserving.md)
Sufficiencies: _Not Applicable_
Equivalences: [[Elementary operations act as multiplication by its elementary matrix]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m\in\N^\ast$. The **elementary row operations of types 1, 2, and 3 on matrices with $m$ rows over $K$**, respectively, are the functions_
$$\begin{equation}
    e^\l(1\r),e^\l(2\r),e^\l(3\r):\bigcup_{j\in\N^\ast}\mat{m\times j}{K}\to\bigcup_{j\in\N^\ast}\mat{m\times j}{K}
\end{equation}$$
_defined by acting on_ $A\in\bigcup_{j\in\N^\ast}\mat{m\times j}{K}$ _via:_
* _Multiplying the $s^{th}$ row by a non-zero constant $c\in K$:_
$$\begin{equation}
    e^\l(1\r)\l(A\r)_{ij}\coloneqq
        \begin{dcases}
            ca_{sj} & \textrm{\hspace{0.52in}\it{if \,}}i=s\\
            a_{ij} & \textrm{\hspace{0.52in}\it{else.}}
        \end{dcases}
\end{equation}$$
* _Adding a non-zero constant $c\in K$ times the $t^{th}$ row to the $s^{th}$ row:_
$$\begin{equation}
    e^\l(2\r)\l(A\r)_{ij}\coloneqq
        \begin{dcases}
            a_{sj}+ca_{tj} & \textrm{\it{if \,}}i=s\\
            a_{ij} & \textrm{\it{else.}}
        \end{dcases}
\end{equation}$$
* _Interchanging the $s^{th}$ and $t^{th}$ rows:_
$$\begin{equation}
        e^\l(3\r)\l(A\r)_{ij}\coloneqq
            \begin{dcases}
                a_{tj} & \textrm{\it{\hspace{0.6in}if \,}}i=s\\
                a_{sj} & \textrm{\it{\hspace{0.6in}if \,}}i=t\\
                a_{ij} & \textrm{\it{\hspace{0.6in}else.}}
            \end{dcases}\\
\end{equation}$$

_Similarly for **elementary column operations of types 1, 2, and 3**._

_An **elementary matrix of type 1** (resp. **2**, **3**) is any matrix $E\in\mat{m}{K}$ such that $E=e\l(I_m\r)$ for some elementary matrix operation $e$ of type 1 (resp. 2, 3) with $m$ rows/columns over $K$._

```

**Remark.** If $B$ is obtained from an elementary row operation on $A$, write
$$\begin{equation}
    \begin{gathered}
        A\xrightarrow{cR_s\to R_s}B,\\
        A\xrightarrow{R_s+cR_t\to R_s}B,\\
        A\xrightarrow{R_s\leftrightarrow R_t}B.\\
    \end{gathered}
\end{equation}$$
If the type is not specified, write $A\xrightarrow{e}B$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Elementary row operations may act on matrices with different columns, but always with a fixed number of rows. However, if the number of columns is fixed in a given context, functions of the form
$$\begin{equation}
    e:\mat{m\times n}{K}\to\mat{m\times n}{K}
\end{equation}$$
for given $m,n\in\N^\ast$ acting on $A\in\mat{m\times n}{K}$ as above shall also be referred to as an elementary row operation.<span style="float:right;">$\blacklozenge$</span>
