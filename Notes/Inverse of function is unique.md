<div class="topSpace"></div>

Date Created: 27/01/2022 11:05:54
Tags: #Proposition #Topics/Set_Theory

Proved by: [[Identity function is the identity of function composition]], [[Composition of relations is associative]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: [[Inverse of matrix is unique]]
Generalizations: [[Inverse of morphism is unique]]

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ be invertible. Then the inverse function of $f$ is unique._

```

_Proof_. If $g,g':Y\to X$ are both inverses of $f$, then

$\begin{alignat}{2}
    g&=g\circ\id_Y&&\textrm{Identity function is the identity of function composition}\\
    &=g\circ\l(f\circ g'\r)\ \ \ \ \ \ \ \ &&g'\textrm{ is a right-inverse of }f\\
    &=\l(g\circ f\r)\circ g'&&\textrm{Composition is associative}\\
    &=\id_X\circ g'&&g\textrm{ is a left-inverse of} f\\
    &=g'.&&\textrm{Identity function is the identity of function composition}\qedin
\end{alignat}$
