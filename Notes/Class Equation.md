<div class="topSpace"></div>

Date Created: 05/05/2023 14:59:43
References:
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Orbit-Stabilizer Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Class Equation).

Let $G$ be a group acting on a finite set $X$ and let $Z\coloneqq\l\{x\in X\st\fa g\in G:gx=x\r\}$ be the set of fixed points of the action. Then
$$\begin{equation}
    \l|X\r|=\l|Z\r|+\sum_{x\in A}\l[G:\Stab_G\!\l(x\r)\r]
\end{equation}$$
where $A\subseteq X$ is the set of representatives of distinct non-trivial orbits.

```

<b>Remark.</b> Usually, this result is used by observing that $\l[G:\Stab_G\!\l(x\r)\r]$ divides $\l|G\r|$, which gives us a constraint when some information for $\l|G\r|$ is given. Indeed, if $G$ is a non-trivial $p$-group, then $\l|Z\r|\equiv\l|X\r|\mod p$ since each summand $\l[G:\Stab_G\!\l(x\r)\r]$ contains a factor of $p$, so $\l|X\r|=\l|Z\r|+kp$ for some $k\in\N$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> In the case where $G$ acts on itself by conjugation, $Z=Z\l(G\r)$ is the center and we have $\l|G\r|=\l|Z\l(G\r)\r|+\sum_{x\in A}\l[G:C_G\!\l(x\r)\r]$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> The orbit decomposition $X=\coprod\Orb_G\!\l(x\r)$ where $x$ ranges in $A\sqcup Z$ gives us
$$\begin{equation}
    \l|X\r|=\sum_{x\in Z}\l|\Orb_G\!\l(x\r)\r|+\sum_{x\in A}\l|\Orb_G\!\l(x\r)\r|=\sum_{x\in Z}1+\sum_{x\in A}\l|\Orb_G\!\l(x\r)\r|=\l|Z\r|+\sum_{x\in A}\l|\Orb_G\!\l(x\r)\r|,
\end{equation}$$
so the result follows from the Orbit-Stabilizer Theorem.<span style="float:right;">$\blacksquare$</span>
