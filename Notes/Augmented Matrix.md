<br />
<br />

Date Created: 22/03/2022 17:07:36
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md), [Homogeneous square system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ $A\sim I$](Homogeneous%20square%20linear%20system%20only%20trivial%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md), [Homogeneous system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ columns$\slash$rows of $A$ are linearly independent](Homogeneous%20linear%20system%20only%20trivial%20solution%20iff%20columns%20slash%20rows%20of%20coefficient%20matrix%20are%20linearly%20independent.md)
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider matrices $A\in\mat{m\times n}{K}$ and $B\in\mat{m\times p}{K}$ for some fixed $m,n,p\in\N^\ast$. The **augmented matrix of $B$ after $A$** is the matrix_
$$\begin{equation}
    \l[A\mid B\r]\coloneqq\l[
        \begin{array}{ccc|ccc}
             a_{11} & \cdots & a_{1n} & b_{11} & \cdots & b_{1p} \\
             \vdotswithin{a_{11}} & \ddots & \vdotswithin{a_{1n}} & \vdotswithin{b_{11}} & \ddots & \vdotswithin{b_{1p}} \\
             a_{m1} & \cdots & a_{mn} & b_{m1} & \cdots & b_{mp}
        \end{array}\r]\in\mat{m\times\l(n+p\r)}{K}.
\end{equation}$$

```

**Remark.** Augmented matrices can be used to model a linear system of equation since it contains all the data to specify one. Indeed, the $m\times n$ linear system $A\v{x}=\v{b}$ is modelled by the augmented matrix $\l[A\mid\v{b}\r]$, where we view $\v{b}\in\mat{m\times1}{K}$.<span style="float:right;">$\blacklozenge$</span>
