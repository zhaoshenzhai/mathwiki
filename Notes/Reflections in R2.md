---
alias: auto_aliasing
---

<br />
<br />

Date Created: 07/04/2022 02:26:47
Tags: #Definition #Later/Linear_Algebra/Geometry

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

_Consider the real $2$-coordinate space, fix $\theta\in\R$, and let_
$$\begin{equation}
    L_\theta\coloneqq\l\{\l\langle x,y\r\rangle\in\R^2\mid x\sin\theta+y\cos\theta=0\r\}
\end{equation}$$
_be the line passing through the origin and making an angle $\theta$ with the positive $x$-axis. The_ **_reflection transformation about_ $L_\theta$** _is the linear map_
$$\begin{equation}
    \begin{aligned}
        \ref\l(\theta\r):\R^2&\to\R^2 \\
        \begin{bmatrix}
            x_1 \\
            x_2
        \end{bmatrix}&\mapsto
        \begin{bmatrix}
            \cos\l(2\theta\r) & \sin\l(2\theta\r) \\
            \sin\l(2\theta\r) & -\cos\l(2\theta\r)
        \end{bmatrix}
        \begin{bmatrix}
            x_1 \\
            x_2
        \end{bmatrix}.
    \end{aligned}
\end{equation}$$

```
