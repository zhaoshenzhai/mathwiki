<br />
<br />

Date Created: 15/01/2022 20:43:13
Tags: #Proposition #Closed 

Lemmas: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $A$ and $B$ be sets. If $A\subseteq B$, then $\bigcup A\subseteq\bigcup B$.

--- admonition

_Proof_. Take $x\in\bigcup A$. The result follows from the following chain of logical implications:
$$\begin{alignat}{2}
    x\in\bigcup A&\Leftrightarrow\ex a\l(x\in a\land a\in A\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of union}\\
    &\Rightarrow\ex a\l(x\in a\land a\in B\r)&&A\subseteq B\\
    &\Leftrightarrow x\in\bigcup B.&&\textrm{Definition of union}\qedin
\end{alignat}$$
