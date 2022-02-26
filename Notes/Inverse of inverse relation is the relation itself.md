<br />
<br />

Date Created: 22/01/2022 09:43:31
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Proposition #Closed 

Proved by: [[Inverse of a relation is a relation]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation. Then $\l(R^{-1}\r)^{-1}=R$._

```

_Proof_. By definition, we have $R^{-1}=\l\{\l\langle y,x\r\rangle\mid xRy\r\}$. Taking the inverse again, we have
$$\begin{alignat}{2}
    \l(R^{-1}\r)^{-1}&=\l\{\l\langle x,y\r\rangle\mid yR^{-1}x\r\}\\
    &=\l\{\l\langle x,y\r\rangle\mid xRy\r\}\\
    &=R.\qedin
\end{alignat}$$
