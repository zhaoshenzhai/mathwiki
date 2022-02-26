<br />
<br />

Date Created: 21/01/2022 11:24:19
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: [[Binary relation iff subset of Cartesian product]], [[Set-builder notation is unique]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation. Then there exists a unique binary relation $R^{-1}$ whose elements are exactly the pairs $\l\langle y,x\r\rangle$ where $\l\langle x,y\r\rangle\in R$._

```

_Proof_. We shall first construct the set $R^{-1}$ with the prescribed properties and then prove that this set is indeed a binary relation.
* Formally, the set $R^{-1}$ is justified with the following statement:
$$\begin{equation}
    \fa R\l[R\textrm{ is a binary relation }\Rightarrow\ex!z\l(w\in z\Leftrightarrow\ex x\ex y\l(xRy\land w=\l\langle y,x\r\rangle\r)\r)\r].
\end{equation}$$
Indeed, if $\ex x\ex y\l(xRy\land w=\l\langle y,x\r\rangle\r)$, we have that $\l\langle x,y\r\rangle\in\dom R\times\ran R$ and thus $w=\l\langle y,x\r\rangle\in\ran R\times\dom R$. Specification then justifies the construction
$$\begin{equation}
    R^{-1}\coloneqq\l\{\l\langle y,x\r\rangle\mid xRy\r\}\coloneqq\l\{w\in\ran R\times\dom R\mid\ex x\ex y\l(xRy\land w=\l\langle y,x\r\rangle\r)\r\}.
\end{equation}$$
* Observe that $R^{-1}\subseteq\ran R\times\dom R$, so $R^{-1}$ is a binary relation.<span style="float:right;">$\blacksquare$</span>
