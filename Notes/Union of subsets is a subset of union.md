<br />
<br />

Date Created: 01/02/2022 15:22:46
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $A,B,C,D$ be sets with $A\subseteq B$ and $C\subseteq D$ Then $A\cup C\subseteq B\cup D$._

```

_Proof_. Take $x\in A\cup C$. The result follows from the following chain of implications:

$\begin{alignat}{2}
    x\in A\cup C&\Leftrightarrow\ex a\l(x\in a\land a\in\l\{A,C\r\}\r)&&\textrm{Definition of union}\\
    &\Leftrightarrow\ex a\l[x\in a\land\l(a\in A\lor a\in C\r)\r]\ \ \ \ \ \ \ \ &&\textrm{Definition of pair set}\\
    &\Rightarrow\ex a\l[x\in a\land\l(a\in B\lor a\in D\r)\r]&&A\subseteq B\land C\subseteq D\\
    &\Leftrightarrow\ex a\l(x\in a\land a\in\l\{B,D\r\}\r)&&\textrm{Definition of pair set}\\
    &\Leftrightarrow x\in B\cup D.&&\textrm{Definition of union}\qedin       
\end{alignat}$
