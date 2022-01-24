<br />
<br />

Date Created: 24/01/2022 11:20:34
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $A,B,C,D$ be sets with $A\subseteq B$ and $C\subseteq D$. Then $A\cap C\subseteq B\cap D$.

--- admonition

_Proof_. Take $x\in A\cap B$. The result follows from the following chain of logical implications:
$$\begin{alignat}{2}
    x\in A\cap B&\Leftrightarrow\fa a\l[x\in a\Rightarrow\l(a\in A\lor a\in B\r)\r]\ \ \ \ \ \ \ \ &&\textrm{Definition of intersection}\\
    &\Rightarrow\fa a\l[x\in a\Rightarrow\l(a\in B\lor a\in D\r)\r]&&A\subseteq B\land C\subseteq D\\
    &\Leftrightarrow x\in B\cap D.&&\textrm{Definition of intersection}\qedin
\end{alignat}$$
