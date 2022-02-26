<br />
<br />

Date Created: 27/01/2022 11:05:54
Tags: #Proposition #Closed 

Proved by: [[Composition with identities preserve functions]], [[Composition of relations is associative]]
Generalizations: [[Inverse of morphism is unique]]

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$. Then the inverse function of $f$ is unique._

```

_Proof_. If $g,g':Y\to X$ are both inverses of $f$, then
$$\begin{alignat}{2}
    g&=g\circ\id_Y&&\textrm{Composition with identities preserve functions}\\
    &=g\circ\l(f\circ g'\r)\ \ \ \ \ \ \ \ &&g'\textrm{ is a right inverse of }f\\
    &=\l(g\circ f\r)\circ g'&&\textrm{Composition is associative}\\
    &=\id_X\circ g'&&g\textrm{ is a left inverse of} f\\
    &=g'.&&\textrm{Composition with identities preserve functions}\qedin
\end{alignat}$$
