---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/01/2022 11:38:08
Tags: #Type/Proposition #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $f:X\to Y$ with $X\neq\em$. Then $f$ is left-invertible iff $f$ is injective.

```

<i>Proof.</i> ($\Rightarrow$): Let $g:Y\to X$ be a left-inverse of $f$ and take any $x,x'\in X$ such that $f\l(x\r)=f\l(x'\r)$. Observe that
$$\begin{equation}
    x=\id_X\l(x\r)=\l(g\circ f\r)\l(x\r)=g\l(f\l(x\r)\r)=g\l(f\l(x'\r)\r)=\l(g\circ f\r)\l(x'\r)=\id_X\l(x'\r)=x',
\end{equation}$$
so $f$ is an injection.

($\Leftarrow$): Assume that $f$ is an injection. Since $X\neq\em$, we can fix some $s\in X$. Define the function
$$\begin{equation}
    g:Y\to X\ \ \ \ \textrm{mapping}\ \ \ \ y\mapsto
        \begin{dcases}
            x & \textrm{if }y\in\im f\\
            s & \textrm{else}
        \end{dcases}
\end{equation}$$
where $x$ is the unique element in $X$ such that $f\l(x\r)=y$; this is well-defined since $f$ is an injection. Now, for all $x\in X$, we have $g\l(f\l(x\r)\r)=x$ since $f\l(x\r)\in\im f$, so $g$ is a left-inverse of $f$.<span style="float:right;">$\blacksquare$</span>
