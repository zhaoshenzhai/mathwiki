<div class="topSpace"></div>

Date Created: 08/03/2022 14:37:40
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ and $g:Y\to Z$ and fix a subset $S\subseteq X$. Then_
$$\begin{equation}
    \im_{g\circ f}\l(S\r)=\im_g\l(\im_f\l(S\r)\r).
\end{equation}$$

```

_Proof_. Take $z\in\im_{g\circ f}\l(S\r)$. The result follows from the following chain of equivalences:

$\begin{alignat}{2}
    z\in\im_{g\circ f}\l(S\r)&\Leftrightarrow z\in Z\land\ex x\in S:z=\l(g\circ f\r)\l(x\r)&&\textrm{Definition of image}\\
    &\Leftrightarrow z\in Z\land\ex x\in S:z=g\l(f\l(x\r)\r)&&\textrm{Definition of composition}\\
    &\Leftrightarrow z\in Z\land\ex y\in\im_f\l(S\r):z=g\l(y\r)\ \ \ \ \ \ \ \ &&\textrm{Set }y=f\l(x\r)\\
    &\Leftrightarrow z\in\im_g\l(\im_f\l(S\r)\r).&&\textrm{Definition of image}\qedin
\end{alignat}$
