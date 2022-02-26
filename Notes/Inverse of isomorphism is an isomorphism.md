<br />
<br />

Date Created: 23/02/2022 16:44:34
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix an isomorphism $f:X\to Y$. Then the inverse morphism $f^{-1}:Y\to X$ is also an isomorphism._

```

_Proof_. It suffices to show that $f^{-1}$ has both a left and a right inverse, but this follows directly from the fact that $f^{-1}$ is the inverse of $f$, which states
$$\begin{equation}
    f^{-1}\circ f=\id_X\ \ \ \ \textrm{and}\ \ \ \ f\circ f^{-1}=\id_Y.\qedin
\end{equation}$$
