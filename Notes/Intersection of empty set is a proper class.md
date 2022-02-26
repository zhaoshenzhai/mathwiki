<br />
<br />

Date Created: 17/01/2022 15:30:37
Context: #FOL $\to$ #ZF
Tags: #Proposition #Open

Proved by: [[Universal set is a proper class]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The expression $\bigcap\em\coloneqq\l\{x\mid\fa v\l(v\in\em\Rightarrow x\in v\r)\r\}$ is a proper class._

```

_Proof_. Suppose, for sake of contradiction, that $\bigcap\em$ is a set. By definition of the Set-Builder notation, $\bigcap\em$ is a set for which
$$\begin{equation}
    \fa x\l[x\in\bigcap\em\Leftrightarrow\fa v\l(v\in\em\Rightarrow x\in v\r)\r]
\end{equation}$$
holds. The formula $\fa v\l(v\in\em\Rightarrow x\in v\r)$ is, by definition of implication, vacuously true, so we have $\fa x\l(x\in\bigcap\em\r)$. Thus $\bigcap\em$ contains all sets, contradicting the fact that the universal class is a proper class.<span style="float:right;">$\blacksquare$</span>
