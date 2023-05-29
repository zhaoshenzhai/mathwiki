<div class="topSpace"></div>

Date Created: 09/09/2022 16:41:06
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $f:X\to Y$ and $g:Y\to Z$ be surjections. Then the composite function $g\circ f:X\to Z$ is a surjection.

```

<i>Proof.</i> Take $z\in Z$, so there exists $y\in Y$ such that $z=g\l(y\r)$. But then there exists $x\in X$ such that $y=f\l(x\r)$, so
$$\begin{equation}
    z=g\l(y\r)=g\l(f\l(x\r)\r)=\l(g\circ f\r)\l(x\r).\qedin
\end{equation}$$
