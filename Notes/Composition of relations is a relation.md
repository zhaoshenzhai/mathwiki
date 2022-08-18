<div class="topSpace"></div>

Date Created: 21/01/2022 13:37:59
Tags: #Proposition

Proved by: [[Binary relation iff subset of Cartesian-Kuratowski product]], [[Set-builder notation is unique]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ and $S$ be binary relations. Then there exists a unique binary relation $S\circ R$ whose elements are exactly the pairs $\tpl{x,z}$ for which there exists a set $y$ such that $xRy$ and $ySz$._

```

_Proof_. We shall first construct the set $S\circ R$ with the prescribed properties and then prove that this set is indeed a binary relation.
* Formally, the set $S\circ R$ is justified with the following statement:
$$\begin{equation}
    \fa R,\fa S\l[S\textrm{ and }R\textrm{ are binary relations }\Rightarrow\ex!v\l(w\in v\Leftrightarrow\ex x\ex y\ex z\l(xRy\land ySz\land w=\tpl{x,z}\r)\r)\r].
\end{equation}$$
Indeed, if $\ex x\ex y\ex z\l(xRy\land ySz\land w=\tpl{x,z}\r)$, we have that $\tpl{x,y}\in\dom R\times\ran R$ and $\tpl{y,z}\in\dom S\times\ran S$. It follows that $x\in\dom R$ and $z\in\ran S$ and thus $w=\tpl{x,z}\in\dom R\times\ran S$. $\axispec$ then justifies the construction
$$\begin{equation}
    S\circ R\coloneqq\l\{\tpl{x,z}\mid\ex y\l(xRy\land ySz\r)\r\}\coloneqq\l\{w\in\dom R\times\ran S\mid\ex x\ex y\ex z\l(xRy\land ySz\land w=\tpl{x,z}\r)\r\}.
\end{equation}$$
* Observe that $S\circ R\subseteq\dom R\times\ran S$, so $S\circ R$ is a binary relation.<span style="float:right;">$\blacksquare$</span>
