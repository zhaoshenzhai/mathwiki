<br />
<br />

Date Created: 26/02/2022 12:18:48
Context: #FOL $\to$ #ZF
Tags: #Proposition #Closed l

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix a morphism $f:X\to Y$. If $g,h:Y\to X$ are left and right inverses of $f$, respectively, then $g=h$._

```

_Proof_. The result follows from the following computation:
$$\begin{alignat}{2}
    g&=g\circ\id_Y&&\axicat{2}\\
    &=g\circ\l(f\circ h\r)\ \ \ \ \ \ \ \ &&h\textrm{ is a right inverse of }f\\
    &=\l(g\circ f\r)\circ h&&\axicat{1}\\
    &=\id_X\circ h&&g\textrm{ is a left inverse of }f\\
    &=h.&&\axicat{2}\qedin
\end{alignat}$$
