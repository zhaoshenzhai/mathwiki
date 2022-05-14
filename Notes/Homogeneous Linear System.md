<br />
<br />

Date Created: 28/03/2022 15:27:25
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Null Space]]
Generalizations: _Not Applicable_

Properties: [Homogeneous $m\times n$ linear system with $n>m$ has non-trivial solutions](Homogeneous%20linear%20system%20with%20more%20unknowns%20than%20equations%20has%20non-trivial%20solutions.md), [[Linear combinations of solutions of homogeneous systems are solutions]], [[Solution of linear system in terms of a particular solution]]
Sufficiencies: _Not Applicable_
Equivalences: [Homogeneous square system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ $A\sim I$](Homogeneous%20square%20linear%20system%20only%20trivial%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md), [Homogeneous system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ columns (or rows) of $A$ are linearly independent](Homogeneous%20linear%20system%20only%20trivial%20solution%20iff%20columns%20or%20rows%20of%20coefficient%20matrix%20are%20linearly%20independent.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field. The linear system_
$$\begin{equation}
    A\v{x}=\v{b}\ \ \ \ \Leftrightarrow\ \ \ \ \l\{\begin{alignedat}{7}
        &a_{11}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{1n}x_n&&=\ &&b_1\\
        &\vdotswithin{a_{11}x_1}&&&&&&&&\vdotswithin{a_{1n}x_n}&&&&\vdotswithin{b_1}\\
        &a_{m1}x_1&&\,+\,&&\,\cdots\,&&\,+\,&&a_{mn}x_n&&=&&b_m
    \end{alignedat}\r.
\end{equation}$$
_of equations over $K$ is said to be **homogeneous** if $b_1=\cdots=b_m=0$; that is, if $\v{b}=\v{0}$._

```

**Remark.** Observe that $\v{0}$ is a solution of any $A\v{x}=\v{0}$, so it is called the **trivial solution** of the system.<span style="float:right;">$\blacklozenge$</span>
