<br />
<br />

Date Created: 08/02/2022 13:06:57
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $\mb{R}$ be the set of real numbers. Then the standard topology_
$$\begin{equation}
    \mc{T}_\textrm{st}\coloneqq\l\{U\in\mc{P}\l(\mb{R}\r)\mid\fa x\in U,\ex r\in\mb{R}^+:\l(x-r,x+r\r)\subseteq U\r\}
\end{equation}$$
_on $\mb{R}$ is a topology on $\mb{R}$._

--- admonition

_Proof_. We verify the axioms for a topology on $X$.
* ($\axitop{1}$): It is vacuously true that $\em\in\mc{T}_\textrm{st}$. To see that $\mb{R}\in\mc{T}_\textrm{st}$, take $x\in\mb{R}$ and any $r\in\mb{R}^+$ and observe that $\l(x-r,x+r\r)\subseteq\mb{R}$ by definition.
* ($\axitop{2}$): Let $\mc{U}\subseteq\mc{T}_\textrm{st}$ and take $x\in\bigcup\mc{U}$. Thus there exists $U\in\mc{U}$ such that $x\in U$. Since $U\in\mc{T}_\textrm{st}$, there exists $r\in\mb{R}^+$ such that $\l(x-r,x+r\r)\subseteq U$, but since $U\subseteq\bigcup\mc{U}$, we have $\l(x-r,x+r\r)\subseteq\bigcup\mc{U}$ too. It follows that $\bigcup\mc{U}\in\mc{T}_\textrm{st}$.
* ($\axitop{3}$): Now let $\mc{U}=\l\{U_i\r\}_{i\in I}\subseteq\mc{T}_\textrm{st}$ with $0<\l|I\r|<\infty$. Thus for each $i\in I$ and all $x\in U_i$, there exists $r_i\in\mb{R}^+$ such that $\l(x-r_i,x+r_i\r)\subseteq U_i$. Set $r\coloneqq\min_{i\in I}r_i$. Hence for all $x\in\bigcap_{i\in I}U_i$, we have $\l(x-r,x+r\r)\subseteq\bigcap_{i\in I}U_i$ and thus $\bigcap\mc{U}\in\mc{T}_\textrm{st}$.<span style="float:right;">$\blacksquare$</span>
