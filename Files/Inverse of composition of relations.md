<br />
<br />

Date Created: 22/01/2022 09:52:31
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $R$ and $S$ be binary relations. Then $\l(S\circ R\r)^{-1}=R^{-1}\circ S^{-1}$.

--- admonition

_Proof_. Take $\l\langle x,y\r\rangle\in \l(S\circ R\r)^{-1}$. The result follows from the following chain of equivalences:
$$\begin{equation}
    \begin{alignedat}{2}
        \l\langle x,y\r\rangle\in \l(S\circ R\r)^{-1}&\Leftrightarrow\l\langle y,x\r\rangle\in S\circ R&&\textrm{Definition of inverse relation}\\
        &\Leftrightarrow\ex t\l(yRt\land tSx\r)&&\textrm{Definition of composition of relations}\\
        &\Leftrightarrow\ex t\l(xS^{-1}t\land tR^{-1}y\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of inverse relation}\\
        &\Leftrightarrow\l\langle x,y\r\rangle\in R^{-1}\circ S^{-1}.&&\textrm{Definition of composition of relations}
    \end{alignedat}
\end{equation}$$
