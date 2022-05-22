<br />
<br />

Date Created: 11/02/2022 12:36:49
Tags: #Proposition #Closed 

Proved by: [[Union distributes over binary intersection]], [[Intersection of intersections is an intersection]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,\mc{T}}$ be a topological space and fix a subset $Y\subseteq X$. Then the subspace topology $\l.\mc{T}\r|_Y$ on $Y$ inherited from $X$ is a topology on $Y$._

```

_Proof_. We verify the axioms for a topology on $Y$.
* ($\axitop[1]$): Since $\em,X\in\mc{T}$, we see that $\em\cap Y=\em\in\l.\mc{T}\r|_Y$ and $X\cap Y=Y\in\l.\mc{T}\r|_Y$.

* ($\axitop[2]$): Let $\mc{A}$ be an (arbitrary) index set and consider the collection $\l\{V_\alpha\r\}_{\alpha\in\mc{A}}\subseteq\l.\mc{T}\r|_Y$. For every $V_\alpha\in\l.\mc{T}\r|_Y$, there exist, by definition, some $U_\alpha\in\mc{T}$ such that $V_\alpha=U_\alpha\cap Y$. It follows then that
$$\begin{equation}
    \bigcup\limits_{\alpha\in\mc{A}}V_\alpha=\bigcup\limits_{\alpha\in\mc{A}}\l(U_\alpha\cap Y\r)=\underbrace{\l(\bigcup\limits_{\alpha\in\mc{A}}U_\alpha\r)}_{\in\mc{T}\textrm{ by }\axitop[2]}\cap Y\in\l.\mc{T}\r|_Y.
\end{equation}$$
* ($\axitop[3]$): Let $\mc{I}$ be a finite index set and consider the collection $\l\{V_i\r\}_{i\in\mc{I}}\subseteq\l.\mc{T}\r|_Y$. For every $V_i\in\l.\mc{T}\r|_Y$, there exist, by definition, some $U_i\in\mc{T}$ such that $V_i=U_i\cap Y$. It follows then that
$$\begin{equation}
    \bigcap\limits_{i\in\mc{I}}V_i=\bigcap\limits_{i\in\mc{I}}\l(U_i\cap Y\r)=\underbrace{\l(\bigcap\limits_{i\in\mc{I}}U_i\r)}_{\in\mc{T}\textrm{ by }\axitop[3]}\cap Y\in\l.\mc{T}\r|_Y.\qedin
\end{equation}$$
