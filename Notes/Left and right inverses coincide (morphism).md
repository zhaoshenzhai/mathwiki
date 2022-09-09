<div class="topSpace"></div>

Date Created: 26/02/2022 12:18:48
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix a left and right-invertible morphism $f:X\to Y$ with one-sided inverses $g,h:Y\to X$, respectively. Then $g=h$ and thus $f$ is invertible._

```

_Proof_. The result follows from the following computation:

$\begin{alignat}{2}
    g&=g\circ\id_Y&&\axicat[2]\\
    &=g\circ\l(f\circ h\r)\ \ \ \ \ \ \ \ &&h\textrm{ is a right-inverse of }f\\
    &=\l(g\circ f\r)\circ h&&\axicat[1]\\
    &=\id_X\circ h&&g\textrm{ is a left-inverse of }f\\
    &=h.&&\axicat[2]\qedin
\end{alignat}$
