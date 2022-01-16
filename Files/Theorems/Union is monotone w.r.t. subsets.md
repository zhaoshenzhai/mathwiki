<br />
<br />

Date Created: 15/01/2022 20:43:13
Categories: #Set_Theory
Status: _Next_

Lemmas: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $A$ and $B$ be sets. If $A\subseteq B$, then $\bigcup A\subseteq\bigcup B$.

--- admonition

_Proof_. Take $x\in\bigcup A$. The result follows from the following chain of logical implications:
$$\begin{alignat}{2}
    x\in\bigcup A&\Leftrightarrow\l(\ex a\in A\r)x\in a&&\textrm{Axiom of Union}\\
    &\Leftrightarrow\ex a\l(a\in A\land x\in a\r)\ \ \ \ \ \ \ \ &&\textrm{Definition}\\
    &\Rightarrow\ex a\l(a\in B\land x\in a\r)&&A\subseteq B\\
    &\Leftrightarrow\l(\ex a\in B\r)x\in a&&\textrm{Definition}\\
    &\Leftrightarrow x\in\bigcup B&&\textrm{Axiom of Union}\qedin
\end{alignat}$$
