<div class="topSpace"></div>

Date Created: 19/01/2022 17:07:30
Tags: #Type/Proposition #Later/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $A$ and $B$ be sets. If $A\subseteq B$, then $C\comp B\subseteq C\comp A$ for any set $C$.

```

<i>Proof.</i> Take $x\in C\comp B$. The result follows from the following chain of implications:

$\begin{alignat}{2}
    x\in C\comp B&\Leftrightarrow x\in C\land x\not\in B\ \ \ \ \ \ \ \ &&\textrm{Definition of relative complement}\\
    &\Rightarrow x\in C\land x\not\in A&&\textrm{Contraposition of }A\subseteq B\\
    &\Leftrightarrow x\in C\comp A.&&\textrm{Definition of relative complement}\qedin
\end{alignat}$
