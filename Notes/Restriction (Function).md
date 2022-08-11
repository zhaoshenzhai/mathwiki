<div class="topSpace"></div>

Date Created: 26/01/2022 17:46:40
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Inclusion Function]]
Constructions: _Not Applicable_
Generalizations: [[Restriction (Relation)]]

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Restriction of function is a function]]

``` ad-Definition
title: Definition.

_Let $f:X\to Y$ and fix $S\subseteq X$. The **restriction of $f$ to $S$** is the function_
$$\begin{equation}
    \l.f\r|_S:S\to Y\ \ \ \ \textrm{\it{mapping}}\ \ \ \ x\mapsto f\l(x\r)
\end{equation}$$
_for all $x\in S$. Formally,_
$$\begin{equation}
    \l.f\r|_S\coloneqq\l\{z\mid\ex x\in S:z=\tpl{x,f\l(x\r)}\r\}.
\end{equation}$$

```

**Remark.** Note that $\l.f\r|_S$ is also the restriction of $f$, _viewed as a relation_, since
$$\begin{align}
    \l.f\r|_S&=\l\{z\mid\ex x\in S:x=\tpl{x,f\l(x\r)}\r\}\\
    &=\l\{z\mid\ex x:x\in S\land z=\tpl{x,f\l(x\r)}\r\}\\
    &=\l\{z\mid\ex x:z=\tpl{x,f\l(x\r)}\land x\in S\r\}\\
    &=\l\{z\mid\ex x,y:z=\tpl{x,y}\land z\in f\land x\in S\r\}\\
    &=\l\{z\in f\mid\ex x,y:z=\tpl{x,y}\land x\in S\r\}\\
    &=f\rest S.\exqedin
\end{align}$$
