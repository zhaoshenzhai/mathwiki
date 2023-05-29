<div class="topSpace"></div>

Date Created: 05/05/2023 14:59:43
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Orbit-Stabilizer Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Class Equation).

Let $G$ be a group acting on a finite set $X$ and let $Z\coloneqq\l\{x\in X\mid\fa g\in G:gx=x\r\}$ be the set of fixed points of the action. Then
$$\begin{equation}
    \l|X\r|=\l|Z\r|+\sum_{x\in A}\l[G:G_x\r]
\end{equation}$$
where $A\subseteq X\comp Z$ is the set of representatives of distinct non-trivial orbits.

```

<b>Remark.</b> In the case where $G=X$ is finite and $G$ acts on itself by conjugation, $Z=Z\l(G\r)$ is the center and we have $\l|G\r|=\l|Z\l(G\r)\r|+\sum_{x\in A}\l[G:G_x\r]$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> The partition $X=\coprod Gx$ where $x\in A\cup Z$ gives us
$$\begin{equation}
    \l|X\r|=\sum_{x\in Z}\l|Gx\r|+\sum_{x\in A}\l|Gx\r|=\sum_{x\in Z}1+\sum_{x\in A}\l|Gx\r|=\l|Z\r|+\sum_{x\in A}\l|Gx\r|,
\end{equation}$$
so the result follows from the Orbit-Stabilizer Theorem.<span style="float:right;">$\blacksquare$</span>
