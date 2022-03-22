<br />
<br />

Date Created: 22/03/2022 17:07:36
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider the linear system_
$$\begin{equation}
    \l\{\begin{alignedat}{7}
        &A_{11}x_1&&\,+&&\,\cdots\,&&\,+\,&&A_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{A_{11}x_1}&&&&&&&&\vdotswithin{A_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &A_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&A_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$. The **augmented matrix of the linear system** is the matrix_
$$\begin{equation}
    [\v{A}\divides\v{b}]\coloneqq\l[
        \begin{array}{ccc|c}
             A_{11} & \cdots & A_{1n} & b_{1}\\
             \vdotswithin{A_{11}} & \ddots & \vdotswithin{A_{1n}} & \vdotswithin{b_1}\\
             A_{m1} & \cdots & A_{mn} & b_m
        \end{array}\r].
\end{equation}$$

```

**Remark.** Formally, $[\v{A}\divides\v{b}]\coloneqq\l\langle m,n+1,f\r\rangle$ where

$\begin{align}
    f:\l\{1,\dots,m\r\}\times\l\{1,\dots,n+1\r\}&\to K\\
    \l\langle i,j\r\rangle&\mapsto
        \begin{dcases}
            A_{ij}  & \textrm{if}\ \ j\leq n\\
            b_i & \textrm{else.}\exqedin
        \end{dcases}
\end{align}$
