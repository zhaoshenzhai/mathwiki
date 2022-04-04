<br />
<br />

Date Created: 03/04/2022 18:07:33
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [[Column space is the linear span of columns of matrix]]
Justifications: [[Column space is a linear subspace of tuple space]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider an $m\times n$ matrix $A\in\mat{m\times n}{K}$ for some fixed $m,n\in\N$. The **column space of $A$** is the linear subspace_
$$\begin{equation}
    \col\l(A\r)\coloneqq\l\{\v{y}\in K^m\mid\ex\v{x}\in K^n:\v{y}=A\v{x}\r\}
\end{equation}$$
_of $K^m$._

```

**Remark.** Letting $T_A$ be the induced linear transformation of $A$, we see that $\col\l(A\r)=\im\l(T_A\r)$.<span style="float:right;">$\blacklozenge$</span>
