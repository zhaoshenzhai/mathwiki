<br />
<br />

Date Created: 27/01/2022 13:41:57
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZFC}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory%20with%20Choice)
Tags: #Proposition #Closed 

Proved by: [[Invertible iff bijective]]
Generalizations: [[Inverse of isomorphism is an isomorphism]]

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ be a bijection. Then the inverse function $f^{-1}:Y\to X$ is also a bijection._

```

_Proof_. It suffices to show that $f^{-1}$ has both a left and right inverse, but this follows directly from the fact that $f^{-1}$ is the inverse of $f$, which states
$$\begin{equation}
    f^{-1}\circ f=\id_X\ \ \ \ \textrm{and}\ \ \ \ f\circ f^{-1}=\id_Y.\qedin
\end{equation}$$
