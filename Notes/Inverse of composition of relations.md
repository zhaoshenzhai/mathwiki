<br />
<br />

Date Created: 22/01/2022 09:52:31
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ and $S$ be binary relations. Then $\l(S\circ R\r)^{-1}=R^{-1}\circ S^{-1}$._

```

_Proof_. Take $\tpl{x,y}\in \l(S\circ R\r)^{-1}$. The result follows from the following chain of equivalences:
$$\begin{equation}
    \begin{alignedat}{2}
        \tpl{x,y}\in \l(S\circ R\r)^{-1}&\Leftrightarrow\tpl{y,x}\in S\circ R&&\textrm{Definition of inverse relation}\\
        &\Leftrightarrow\ex t\l(yRt\land tSx\r)&&\textrm{Definition of composition of relations}\\
        &\Leftrightarrow\ex t\l(xS^{-1}t\land tR^{-1}y\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of inverse relation}\\
        &\Leftrightarrow\tpl{x,y}\in R^{-1}\circ S^{-1}.&&\textrm{Definition of composition of relations}
    \end{alignedat}
\end{equation}$$
