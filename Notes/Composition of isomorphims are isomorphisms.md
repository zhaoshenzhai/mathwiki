<div class="topSpace"></div>

Date Created: 23/02/2022 16:47:50
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category and fix ismorphisms $f:X\to Y$ and $g:Y\to Z$. Then the composite morphism $g\circ f:X\to Z$ is also an isomorphism._

```

_Proof_. Since $f$ and $g$ are isomorphisms, their inverses $f^{-1}$ and $g^{-1}$ exist; we claim that $\l(g\circ f\r)^{-1}=f^{-1}\circ g^{-1}$. To see this compute
$$\begin{equation}
    \begin{alignedat}{2}
        \l(g\circ f\r)\circ\l(f^{-1}\circ g^{-1}\r)&=g\circ\l(f\circ f^{-1}\r)\circ g^{-1}\ \ \ \ \ \ \ \ &&\axicat[1]\\
        &=g\circ\id_Y\circ g^{-1}&&\textrm{Definition of the inverse}\\
        &=g\circ g^{-1}&&\axicat[2]\\
        &=\id_Z&&\textrm{Definition of the inverse}
    \end{alignedat}
\end{equation}$$
and
$$\begin{equation}
    \begin{alignedat}{2}
        \l(f^{-1}\circ g^{-1}\r)\circ\l(g\circ f\r)&=f^{-1}\circ\l(g^{-1}\circ g\r)\circ f\ \ \ \ \ \ \ \ &&\axicat[1]\\
        &=f^{-1}\circ\id_Y\circ f&&\textrm{Definition of the inverse}\\
        &=f^{-1}\circ f&&\axicat[2]\\
        &=\id_X&&\textrm{Definition of the inverse}
    \end{alignedat}
\end{equation}$$
from which it follows that $f^{-1}\circ g^{-1}$ is both a left and a right-inverse of $g\circ f$.<span style="float:right;">$\blacksquare$</span>
