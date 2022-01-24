<br />
<br />

Date Created: 17/01/2022 15:30:37
Tags: #Proposition #Open

Proved by: [[Collection of all sets is a proper class]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

The expression $\bigcap\em\coloneqq\l\{x\mid\fa v\l(v\in\em\Rightarrow x\in v\r)\r\}$ is a proper class.

--- admonition

_Proof_. Suppose, for sake of contradiction, that $\bigcap\em$ is a set. By definition of the Set-Builder notation, $\bigcap\em$ is a set for which
$$\begin{equation}
    \fa x\l[x\in\bigcap\em\Leftrightarrow\fa v\l(v\in\em\Rightarrow x\in v\r)\r]
\end{equation}$$
holds. The formula $\fa v\l(v\in\em\Rightarrow x\in v\r)$ is, by definition of implication, vacuously true, so we have $\fa x\l(x\in\bigcap\em\r)$. Thus $\bigcap\em$ is the $\textrm{`}$set of all sets$\textrm{'}$, which contradicts the fact that there is none.<span style="float:right;">$\blacksquare$</span>
