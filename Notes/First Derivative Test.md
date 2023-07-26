<div class="topSpace"></div>

Date Created: 30/12/2022 00:08:16
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (First Derivative Test for Local Extrema).

Let $a,b\in\R$ and let $f:\l[a,b\r]\to\R$ be continuous. Fix $c\in\l(a,b\r)$ and suppose that $f$ is differentiable on $\l(a,c\r)\cup\l(c,b\r)$.
* If there exists some $\delta>0$ such that $f'\l(x\r)\geq0$ for all $x\in\l(c-\delta,c\r)$ and $f'\l(x\r)\leq0$ for all $x\in\l(c,c+\delta\r)$, then $c$ is a local maximum of $f$.
* If there exists some $\delta>0$ such that $f'\l(x\r)\leq0$ for all $x\in\l(c-\delta,c\r)$ and $f'\l(x\r)\geq0$ for all $x\in\l(c,c+\delta\r)$, then $c$ is a local minimum of $f$.

```

<i>Proof.</i> We prove the first statement; the second is similar. Observe that $f$ is increasing on $\l(c-\delta,c\r)$, so
$$\begin{equation}
    f\l(c\r)=\lim\limits_{x\to c^-}f\l(x\r)=\sup\limits_{x\in\l(c-\delta,c\r)}f\l(x\r).
\end{equation}$$
Thus $f\l(x\r)\leq f\l(c\r)$ for all $x\in\l(c-\delta,c\r)$. Similarly, $f\l(x\r)\leq f\l(c\r)$ for all $x\in\l(c,c+\delta\r)$, so we are done.<span style="float:right;">$\blacksquare$</span>
