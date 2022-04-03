<br />
<br />

Date Created: 22/03/2022 17:07:36
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md), [Linear system $A\v{x}=\v{b}$ is consistent $\Leftrightarrow$ $\v{b}\in\col\l(A\r)$](Linear%20system%20is%20consistent%20iff%20constant%20matrix%20is%20in%20column%20space%20of%20coefficient%20matrix.md)
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider the linear system_
$$\begin{equation}
    A\v{x}=\v{b}\ \ \ \ \Leftrightarrow\ \ \ \ \l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$. The **augmented matrix of $A\v{x}=\v{b}$** is the matrix_
$$\begin{equation}
    \l[A\mid\v{b}\r]\coloneqq\l[
        \begin{array}{ccc|c}
             a_{11} & \cdots & a_{1n} & b_{1}\\
             \vdotswithin{a_{11}} & \ddots & \vdotswithin{a_{1n}} & \vdotswithin{b_1}\\
             a_{m1} & \cdots & a_{mn} & b_m
        \end{array}\r].
\end{equation}$$

```

**Remark.** Formally, $\l[A\mid\v{b}\r]\coloneqq\l\langle m,n+1,f\r\rangle$ where
$$\begin{equation}
    \begin{aligned}
        f:\l\{1,\dots,m\r\}\times\l\{1,\dots,n+1\r\}&\to K\\
            \l\langle i,j\r\rangle&\mapsto
                \begin{dcases}
                    a_{ij}  & \textrm{if}\ \ j\leq n\\
                    b_i & \textrm{else.}
                \end{dcases}
    \end{aligned}
\end{equation}$$
The matrices $A$ and $b$ are respectively called the **coefficient and constant matrices of $A\v{x}=\v{b}$**.<span style="float:right;">$\blacklozenge$</span>
