<br />
<br />

Date Created: 25/01/2022 14:03:22
Tags: #Proposition #Closed 

Proved by: [[Left distribution of implication over conjunction]], [[Distribution of universal quantifier over conjunction]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $A$ and $B$ be non-empty sets. Then $\bigcap\l(A\cap B\r)=\bigcap A\cap\bigcap B$._

```

_Proof_. Take $x\in\bigcup\l(A\cup B\r)$. The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    x\in\bigcap\l(A\cap B\r)&\Leftrightarrow\fa u\l(x\in u\Rightarrow u\in A\cap B\r)&&\textrm{Definition of interection}\\
    &\Leftrightarrow\fa u\l[x\in u\Rightarrow\l(u\in A\land u\in B\r)\r]&&\textrm{Definition of interection}\\
    &\Leftrightarrow\fa u\l[\l(x\in u\Rightarrow u\in A\r)\land\l(x\in u\Rightarrow u\in B\r)\r]&&\textrm{Left distribution of }\Rightarrow\textrm{ over }\land\\
    &\Leftrightarrow\fa u\l(x\in u\Rightarrow u\in A\r)\land\fa u\l(x\in u\Rightarrow u\in B\r)\ \ \ \ \ \ \ \ &&\textrm{Distribution of }\fa\textrm{ over }\land\\
    &\Leftrightarrow x\in\bigcap A\land x\in\bigcap B&&\textrm{Definition of interection}\\
    &\Leftrightarrow x\in\bigcap A\cap\bigcap B.&&\textrm{Definition of interection}\qedin
\end{alignat}$
