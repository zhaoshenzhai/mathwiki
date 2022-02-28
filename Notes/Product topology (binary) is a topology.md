<br />
<br />

Date Created: 09/02/2022 09:34:39
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Closed 

Proved by: [[Cartesian product of intersections]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle X,\mc{T}_X\r\rangle$ and $\l\langle Y,\mc{T}_Y\r\rangle$ be topological spaces. Then the product topology_ $\mc{T}_\textrm{pr}\coloneqq\mc{T}\l(\mc{B}\r)$ _where_
$$\begin{equation}
    \mc{B}\coloneqq\l\{B\in\pow\l(X\times Y\r)\mid\ex U\in\mc{T}_X,\ex V\in\mc{T}_Y:B=U\times V\r\}
\end{equation}$$
_is a topology on $X\times Y$._

```

_Proof_. It suffices to verify that $\mc{B}$ is a basis for a topology on $X\times Y$.
* ($\axibasis{1}$): Since $X\in\mc{T}_X$ and $Y\in\mc{T}_Y$, we see that $X\times Y\in\mc{T}_\textrm{pr}$. Thus any $p\in X\times Y$ is in a basis element, namely $X\times Y$.
* ($\axibasis{2}$): Take $U_1\times V_1,U_2\times V_2\in\mc{B}$ and take $q\in\l(U_1\times V_1\r)\cap\l(U_2\times V_2\r)$. Observe then that
$$\begin{equation}
    q\in\l(U_1\cap U_2\r)\times\l(V_1\cap V_2\r).
\end{equation}$$
Since $U_1,U_2\in\mc{T}_X$, we see, from $\axitop{3}$ of $\mc{T}_X$, that $U_1\cap U_2\in\mc{T}_X$ too. Similarly, we have $V_1\cap V_2\in\mc{T}_Y$, and thus 
$$\begin{equation}
    q\in\underbrace{\l(U_1\cap U_2\r)\times\l(V_1\cap V_2\r)}_{\mathclap{\in\mc{B}}}=\l(U_1\times V_1\r)\cap\l(U_2\times V_2\r).\qedin
\end{equation}$$
