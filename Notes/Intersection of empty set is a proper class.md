<div class="topSpace"></div>

Date Created: 17/01/2022 15:30:37
Tags: #Type/Proposition #Topic/Set_Theory/Later

Proved by: [[Russel's Paradox]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

The expression $\bigcap\em\coloneqq\l\{x\st\fa v\l(v\in\em\Rightarrow x\in v\r)\r\}$ is a proper class.

```

<i>Proof.</i> Suppose, for sake of contradiction, that $\bigcap\em$ is a set. By definition of the Set-Builder notation, $\bigcap\em$ is a set for which
$$\begin{equation}
    \fa x\l[x\in\bigcap\em\Leftrightarrow\fa v\l(v\in\em\Rightarrow x\in v\r)\r]
\end{equation}$$
holds. The formula $\fa v\l(v\in\em\Rightarrow x\in v\r)$ is, by definition of implication, vacuously true, so we have $\fa x\l(x\in\bigcap\em\r)$. Thus $\bigcap\em$ contains all sets, contradicting the fact that the universal class is a proper class.<span style="float:right;">$\blacksquare$</span>
