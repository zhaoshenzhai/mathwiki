<br />
<br />

Date Created: 19/01/2022 14:29:38
Tags: #Proposition #Closed

Proved by: [[Distribution of universal quantifier over conjunction]]
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_For all sets $A$ and $B$, we have $\mc{P}A\cap\mc{P}B=\mc{P}\l(A\cap B\r)$._

```

_Proof_. Take $x\in\mc{P}A\cap\mc{P}B$. The result follows from the following chain of equivalences.
$$\begin{alignat}{2}
    x\in\mc{P}A\cap\mc{P}B&\Leftrightarrow x\in\mc{P}A\land x\in\mc{P}B&&\textrm{Definition of intersection}\\
    &\Leftrightarrow x\subseteq A\land x\subseteq B&&\textrm{Definition of power set}\\
    &\Leftrightarrow\fa z\l(z\in x\Rightarrow z\in A\r)\land\fa z\l(z\in x\Rightarrow z\in B\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of subset}\\
    &\Leftrightarrow\fa z\l[z\in x\Rightarrow\l(z\in A\land z\in B\r)\r]&&\textrm{Distribution of }\fa\textrm{ over }\land\\
    &\Leftrightarrow\fa z\l(z\in x\Rightarrow z\in A\cap B\r)&&\textrm{Definition of intersection}\\
    &\Leftrightarrow x\subseteq A\cap B&&\textrm{Definition of subset}\\
    &\Leftrightarrow x\in\mc{P}\l(A\cap B\r).&&\textrm{Definition of power set}\qedin
\end{alignat}$$
