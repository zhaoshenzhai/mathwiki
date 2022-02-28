<br />
<br />

Date Created: 26/01/2022 14:19:56
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle X,\leq\r\rangle$ be a complete lattice. Then $\l\langle X,\leq\r\rangle$ is bounded._

```

_Proof_. In particular, we have $X\subseteq X$ and thus $\bigvee X$ and $\bigwedge X$ exist. Because the join and meet of $X$ are also upper and lower bounds of $X$, respectively, we see that
$$\begin{equation}
    \fa x\in X:\bigwedge X\leq x\leq\bigvee X.\qedin
\end{equation}$$
