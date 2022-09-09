<div class="topSpace"></div>

Date Created: 09/09/2022 16:41:06
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ and $g:Y\to Z$ be surjections. Then the composite function $g\circ f:X\to Z$ is a surjection._

```

_Proof_. Take $z\in Z$, so there exists $y\in Y$ such that $z=g\l(y\r)$. But then there exists $x\in X$ such that $y=f\l(x\r)$, so
$$\begin{equation}
    z=g\l(y\r)=g\l(f\l(x\r)\r)=\l(g\circ f\r)\l(x\r).\qedin
\end{equation}$$
