<br />
<br />

Date Created: 23/01/2022 20:05:39
Tags: #Proposition #Closed 

Proved by: [[De Morgan's Laws]], [[Interection of countable sets is countable]], [[Countable union of countable sets is countable]]
Proves: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $X$ be a set. Then the cocountable topology
$$\begin{equation}
    \mc{T}_\textrm{cc}=\l\{U\in\ms{P}\l(X\r)\mid\l(U=\em\r)\lor\l(X\comp U\textrm{ is countable}\r)\r\}
\end{equation}$$
is a topology on $X$.

--- admonition

_Proof_. We verify the axioms for a topology on $X$:
* $\axi{Top1}$: $\em\in\mc{T}_\textrm{cc}$ by definition and $X\comp X=\em$ is countable.
* $\axi{Top2}$: Let $\mc{U}\subseteq\mc{T}_\textrm{cc}$. If $\mc{U}=\em$, then $\bigcup\mc{U}=\em\in\mc{T}_\textrm{cc}$. Otherwise, using De Morgan's Laws, we have
$$\begin{equation}
    X\comp\bigcup\mc{U}=\bigcap\l\{X\comp U\mid U\in\mc{U}\r\}.
\end{equation}$$
An arbitrary intersection of countable sets is countable, so $\bigcup\mc{U}\in\mc{T}_\textrm{cc}$.
* $\axi{Top3}$. Let $\mc{U}\subseteq\mc{T}_\textrm{cc}$ be non-empty and finite. Using De Morgan's Laws again, we have
$$\begin{equation}
    X\comp\bigcap\mc{U}=\bigcup\l\{X\comp U\mid U\in\mc{U}\r\}.
\end{equation}$$
A finite union of countable sets is countable, so $\bigcap\mc{U}\in\mc{T}_\textrm{cc}$.<span style="float:right;">$\blacksquare$</span>
