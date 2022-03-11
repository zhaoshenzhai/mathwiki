<br />
<br />

Date Created: 26/02/2022 12:04:23
Tags: #Proposition #Closed 

Proved by: [[Composition of relations is associative]], [[Composition with identities preserve functions]]
Generalizations: [[Left and right inverses coincide (Morphism)]]

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$. If $g,h:Y\to X$ are left and right inverses of $f$, respectively, then $g=h$._

```

_Proof_. The result follows from the following computation:

$\begin{alignat}{2}
    g&=g\circ\id_Y&&\textrm{Composition with identities preserve functions}\\
    &=g\circ\l(f\circ h\r)\ \ \ \ \ \ \ \ &&h\textrm{ is a right inverse of }f\\
    &=\l(g\circ f\r)\circ h&&\textrm{Associativity of composition}\\
    &=\id_X\circ h&&g\textrm{ is a left inverse of }f\\
    &=h.&&\textrm{Composition with identities preserve functions}\qedin
\end{alignat}$
