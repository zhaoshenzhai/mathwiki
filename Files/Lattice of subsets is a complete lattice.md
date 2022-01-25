<br />
<br />

Date Created: 25/01/2022 18:38:44
Tags: #Proposition #Closed 

Proved by: [[Subset relation is transitive]], [[Element of set is a subset of its union]], [[Element of set is a superset of its intersection]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

Let $X$ be a set. Then the pair $\l\langle\mc{P}\l(X\r),\subseteq\r\rangle$ is a complete lattice.

--- admonition

_Proof_. We shall first prove that $\l\langle\mc{P}\l(X\r),\subseteq\r\rangle$ is a poset and then prove that it is a complete lattice.
* ($\l\langle\mc{P}\l(X\r),\subseteq\r\rangle$ is a poset): Observe that the subset relation is transitive, and it is trivial to see that $Y\subseteq Y$ for all $Y\in\mc{P}\l(X\r)$. For antisymmetry, take $Y_1,Y_2\in\mc{P}\l(X\r)$ such that $Y_1\subseteq Y_2$ and $Y_2\subseteq Y_1$. By definition of subsets and the biconditional, we see that
$$\begin{equation}
    \fa y\l(y\in Y_1\Leftrightarrow y\in Y_2\r)
\end{equation}$$
and thus $Y_1=Y_2$ by Extensionality.
* ($\l\langle\mc{P}\l(X\r),\subseteq\r\rangle$ is a complete lattice): Any any subset $\mc{Y}\subseteq\mc{P}\l(X\r)$. If $\mc{Y}=\em$, then every $W\in\mc{P}\l(X\r)$ is vacuously an upper and lower bound of $\mc{Y}$. For the join of $\em$, we need to find an upper bound that is a subset of every subset of $X$; simply take $\em$ itself. For the meet of $\em$, observe that every lower bound is a subset of $X$, so $X$ is the greatest such lower bound. Thus we have$$\begin{equation}
    \bigvee\em=\em\ \ \ \ \textrm{and}\ \ \ \ \bigwedge\em=X.
 \end{equation}$$
 Assume now that $\mc{Y}\neq\em$. We claim that $\bigvee\mc{Y}=\bigcup\mc{Y}$ and $\bigwedge\mc{Y}=\bigcap\mc{Y}$.
    * Recall that $\fa Y\in\mc{Y}:Y\subseteq\bigcup\mc{Y}$, so $\bigcup\mc{Y}$ is an upper bound of $\mc{Y}$. Furthermore, we have $\bigcup\mc{Y}\subseteq U$ for every $U\in\mc{P}\l(X\r)$ such that $\fa Y\in\mc{Y}:Y\subseteq U$. To see this, take $W\in\bigcup\mc{Y}$, so there exists $Y\in\mc{Y}$ such that $W\in Y$. But $Y\subseteq U$, so $W\in U$ too.
    * Recall that $\fa Y\in\mc{Y}:\bigcap\mc{Y}\subseteq Y$, so $\bigcap\mc{Y}$ is a lower bound of $\mc{Y}$. Furthermore, we have $U\subseteq\bigcap\mc{Y}$ for every $U\in\mc{P}\l(X\r)$ such that $\fa Y\in\mc{Y}:U\subseteq Y$. To see this, take $W\in U$, so $W\in Y$ for all $Y\in\mc{Y}$ and thus $W\in\bigcap\mc{Y}$ by definition of the intersection.<span style="float:right;">$\blacksquare$</span>
