<br />
<br />

Date Created: 25/01/2022 13:52:56
Tags: #Proposition #Closed 

Proved by: [[Distribution of conjunction over disjunction]], [[Distribution of existential quantifier over disjunction]]
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $A$ and $B$ be sets. Then $\bigcup\l(A\cup B\r)=\bigcup A\cup\bigcup B$._

```

_Proof_. Take $x\in\bigcup\l(A\cup B\r)$. The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    x\in\bigcup\l(A\cup B\r)&\Leftrightarrow\ex u\l(u\in A\cup B\land x\in u\r)&&\textrm{Definition of union}\\
    &\Leftrightarrow\ex u\l[\l(u\in A\lor u\in B\r)\land x\in u\r]&&\textrm{Definition of union}\\
    &\Leftrightarrow\ex u\l[\l(u\in A\land x\in u\r)\lor\l(u\in B\land x\in u\r)\r]&&\textrm{Distribution of }\land\textrm{ over }\lor\\
    &\Leftrightarrow\ex u\l(u\in A\land x\in u\r)\lor\ex u\l(u\in B\land x\in u\r)\ \ \ \ \ \ \ \ &&\textrm{Distribution of }\ex\textrm{ over }\lor\\
    &\Leftrightarrow x\in\bigcup A\lor x\in\bigcup B&&\textrm{Definition of union}\\
    &\Leftrightarrow x\in\bigcup A\cup\bigcup B.&&\textrm{Definition of union}\qedin
\end{alignat}$
