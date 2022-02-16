<br />
<br />

Date Created: 27/01/2022 11:05:54
Tags: #Proposition #Closed 

Proved by: [[Composition with identity function is the function itself]], [[Composition of relations is associative]]
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$. Then the inverse function of $f$ is unique._

```

_Proof_. If $g,g':Y\to X$ are both inverses of $f$, then
$$\begin{alignat}{2}
    g&=g\circ\id_Y&&\textrm{Composition with identity is the function itself}\\
    &=g\circ\l(f\circ g'\r)\ \ \ \ \ \ \ \ &&g'\textrm{ is a right inverse of }f\\
    &=\l(g\circ f\r)\circ g'&&\textrm{Composition is associative}\\
    &=\id_X\circ g'&&\textrm{ is a left inverse of} f\\
    &=g'.&&\textrm{Composition with identity is the function itself}\qedin
\end{alignat}$$
