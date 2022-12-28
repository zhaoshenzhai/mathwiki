<div class="topSpace"></div>

Date Created: 27/01/2022 11:14:11
Tags: #Proposition #Topics/Set_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R,S,T$ be binary relations. Then $\l(R\circ S\r)\circ T=R\circ\l(S\circ T\r)$._

```

_Proof_. Take $\tpl{x,y}\in\l(R\circ S\r)\circ T$. The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    \tpl{x,y}\in\l(R\circ S\r)\circ T&\Leftrightarrow\ex w\l[xTw\land w\l(R\circ S\r)y\r]&&\textrm{Definition of composition}\\
    &\Leftrightarrow\ex w\l[xTw\land\ex z\l(wSz\land zRy\r)\r]\ \ \ \ \ \ \ \ &&\textrm{Definition of composition}\\
    &\Leftrightarrow\ex w\ex z\l[xTw\land\l(wSz\land zRy\r)\r]&&z\textrm{ is not free in }xTw\\
    &\Leftrightarrow\ex w\ex z\l[\l(xTw\land wSz\r)\land zRy\r]&&\textrm{Conjunction is associative}\\
    &\Leftrightarrow\ex z\ex w\l[\l(xTw\land wSz\r)\land zRy\r]&&\textrm{Like quantifiers commute}\\
    &\Leftrightarrow\ex z\l[\ex w\l(xTw\land wSz\r)\land zRy\r]&&w\textrm{ is not free in }zRy\\
    &\Leftrightarrow\ex z\l[x\l(S\circ T\r)z\land zRy\r]&&\textrm{Definition of composition}\\
    &\Leftrightarrow\tpl{x,y}\in R\circ\l(S\circ T\r).&&\textrm{Definition of composition}\qedin
\end{alignat}$
