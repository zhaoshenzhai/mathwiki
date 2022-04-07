<br />
<br />

Date Created: 26/02/2022 12:04:23
Tags: #Proposition #Closed 

Proved by: [[Composition of relations is associative]], [[Identity function is the identity of function composition]]
Generalizations: [[Left and right inverses coincide (Morphism)]]

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ be both left and right invertible with one-sided inverses $g,h:Y\to X$, respectively. Then $g=h$ and thus $f$ is invertible._

```

_Proof_. The result follows from the following computation:

$\begin{alignat}{2}
    g&=g\circ\id_Y&&\textrm{Identity function is the identity of function composition}\\
    &=g\circ\l(f\circ h\r)\ \ \ \ \ \ \ \ &&h\textrm{ is a right-inverse of }f\\
    &=\l(g\circ f\r)\circ h&&\textrm{Associativity of composition}\\
    &=\id_X\circ h&&g\textrm{ is a left-inverse of }f\\
    &=h.&&\textrm{Identity function is the identity of function composition}\qedin
\end{alignat}$
