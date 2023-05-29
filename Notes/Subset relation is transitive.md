<div class="topSpace"></div>

Date Created: 15/01/2022 08:01:47
Tags: #Type/Proposition #Later/Set_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $A$, $B$, and $C$ be sets. If $A\subseteq B$ and $B\subseteq C$, then $A\subseteq C$.

```

<i>Proof.</i> The result follows from the following chain of logical equivalences:

$\begin{alignat}{2}
    A\subseteq B\land B\subseteq C&\Leftrightarrow\fa x\l(x\in A\Rightarrow x\in B\r)\land\fa x\l(x\in B\Rightarrow x\in C\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of subset}\\
    &\Leftrightarrow\fa x\l[\l(x\in A\Rightarrow x\in B\r)\land\l(x\in B\Rightarrow x\in C\r)\r]&&\textrm{Distribution of }\fa\textrm{ over }\land\\
    &\Leftrightarrow\fa x\l(x\in A\Rightarrow x\in C\r)&&\textrm{Implication is transitive}\\
    &\Leftrightarrow A\subseteq C.&&\textrm{Definition of subset}\qedin
\end{alignat}$
