<br />
<br />

Date Created: 22/02/2022 14:37:24
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix a morphism $f:X\to Y$. Then the inverse of $f$ is unique._

```

_Proof_. If $g,g':Y\to X$ are both inverses of $f$, then
$$\begin{alignat}{2}
    g&=g\circ\id_Y&&\axicat{2}\\
    &=g\circ\l(f\circ g'\r)\ \ \ \ \ \ \ \ &&g'\textrm{ is a right inverse of }f\\
    &=\l(g\circ f\r)\circ g'&&\axicat{1}\\
    &=\id_X\circ g'&&g\textrm{ is a left inverse of} f\\
    &=g'.&&\axicat{2}\qedin
\end{alignat}$$
