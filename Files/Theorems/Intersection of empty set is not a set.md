<br />
<br />

Date Created: 17/01/2022 15:30:37
Categories: #Set_Theory
Status: _Open_

Lemmas: [[No set of all sets]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

The expression $\bigcap\em$ is not a set.

--- admonition

_Proof_. Suppose, for sake of contradiction, that
$$\begin{equation}
    \bigcap\em\coloneqq\l\{x\mid\fa v\l(v\in\em\Rightarrow x\in v\r)\r\}
\end{equation}$$
 is a set. By definition of the Set-Builder notation, $\bigcap\em$ is a set for which
$$\begin{equation}
    \fa x\l[x\in\bigcap\em\Leftrightarrow\fa v\l(v\in\em\Rightarrow x\in v\r)\r]
\end{equation}$$
holds. The formula $\fa v\l(v\in\em\Rightarrow x\in v\r)$ is, by definition of implication, vacuously true, so we have $\fa x\l(x\in\bigcap\em\r)$. Thus $\bigcap\em$ is the $\textrm{`}$universal set$\textrm{'}$, which contradicts the fact that there is none.<span style="float:right;">$\blacksquare$</span>
