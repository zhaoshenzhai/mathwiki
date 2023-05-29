<div class="topSpace"></div>

Date Created: 09/09/2022 16:38:24
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $f:X\to Y$ and $g:Y\to Z$ be injections. Then the composite function $g\circ f:X\to Z$ is also an injection.

```

<i>Proof.</i> Take $x_1,x_2\in X$ such that $\l(g\circ f\r)\l(x_1\r)=\l(g\circ f\r)\l(x_2\r)$. Then $g\l(f\l(x_1\r)\r)=g\l(f\l(x_2\r)\r)$, and since $g$ is an injection, this reduces to $f\l(x_1\r)=f\l(x_2\r)$. Again, since $f$ is an injection, we have $x_1=x_2$.<span style="float:right;">$\blacksquare$</span>
