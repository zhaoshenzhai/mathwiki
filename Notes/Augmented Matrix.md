<br />
<br />

Date Created: 22/03/2022 17:07:36
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md), [Linear system $A\v{x}=\v{b}$ is consistent for all $\v{b}$ $\Rightarrow$ $A$ is right-invertible](Linear%20system%20is%20consistent%20for%20all%20constants%20implies%20coefficient%20matrix%20right-invertible.md), [Homogeneous square system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ $A\sim I$](Homogeneous%20square%20linear%20system%20only%20trivial%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md), [Homogeneous system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ columns (or rows) of $A$ are linearly independent](Homogeneous%20linear%20system%20only%20trivial%20solution%20iff%20columns%20or%20rows%20of%20coefficient%20matrix%20are%20linearly%20independent.md)
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
_of equations over $K$ for some fixed $m,n\in\N^\ast$. The **augmented matrix of $A\v{x}=\v{b}$** is the matrix_
$$\begin{equation}
    \l[A\mid\v{b}\r]\coloneqq\l[
        \begin{array}{ccc|c}
             a_{11} & \cdots & a_{1n} & b_{1}\\
             \vdotswithin{a_{11}} & \ddots & \vdotswithin{a_{1n}} & \vdotswithin{b_1}\\
             a_{m1} & \cdots & a_{mn} & b_m
        \end{array}\r].
\end{equation}$$

```

**Remark.** Formally,
$$\begin{equation}
    \begin{aligned}
        \l[A\mid\v{b}\r]:\l\{1,\dots,m\r\}\times\l\{1,\dots,n+1\r\}&\to K\\
            \tpl{i,j}&\mapsto
                \begin{dcases}
                    a_{ij}  & \textrm{if}\ \ j\leq n\\
                    b_i & \textrm{else.}
                \end{dcases}
    \end{aligned}
\end{equation}$$
The matrices $A$ and $\v{b}$ are respectively called the **coefficient and constant matrices of $A\v{x}=\v{b}$**.<span style="float:right;">$\blacklozenge$</span>
