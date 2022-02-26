<br />
<br />

Date Created: 23/01/2022 19:29:19
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set. Then the discrete topology_ $\mc{T}_\textrm{discrete}=\pow\l(X\r)$ _is a topology on $X$._

```

_Proof_. We verify the axioms for a topology on $X$:
* ($\axitop{1}$): Vacuously, we have $\em\subseteq X$ and thus $\em\in\mc{T}_\textrm{discrete}$. Observe that, in particular, we have $X\subseteq X$, and thus $X\in\mc{T}_\textrm{discrete}$.
* ($\axitop{2}$): Take any $\mc{U}\subseteq\pow\l(X\r)$; it suffices to prove that $\bigcup\mc{U}\subseteq X$. To this end, take $x\in\bigcup\mc{U}$. The result follows from the following chain of implications:
$$\begin{equation}
    \begin{alignedat}{2}
        x\in\bigcup\mc{U}&\Leftrightarrow\ex U\in\mc{U}:x\in U&&\textrm{Definition of union}\\
        &\Rightarrow\ex U\in\pow\l(X\r):x\in U\ \ \ \ \ \ \ \ &&\mc{U}\subseteq\pow\l(X\r)\\
        &\Leftrightarrow\ex U\subseteq X:x\in U&&\textrm{Definition of power set}\\
        &\Rightarrow x\in X.&&U\subseteq X
    \end{alignedat}
\end{equation}$$
* ($\axitop{3}$): Take $\mc{U}\subseteq\pow\l(x\r)$ that is non-empty and finite. Similarly, it suffices to prove that $\bigcap\mc{U}\subseteq X$. To this end, take $x\in\bigcap\mc{U}$. The result follows from the following chain of implications:
$$\begin{alignat}{2}
    x\in\bigcap\mc{U}&\Leftrightarrow\fa U\in\mc{U}:x\in U&&\mc{U}\neq\em;\textrm{ definition of union}\\
    &\Rightarrow\fa U\in\pow\l(X\r):x\in U\ \ \ \ \ \ \ \ &&\mc{U}\subseteq\pow\l(X\r)\\
    &\Leftrightarrow\fa U\subseteq X:x\in U&&\textrm{Definition of power set}\\
    &\Rightarrow x\in X.&&U\subseteq X\qedin
\end{alignat}$$
