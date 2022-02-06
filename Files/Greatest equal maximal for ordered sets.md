<br />
<br />

Date Created: 03/02/2022 15:29:02
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $\l\langle X,\leq\r\rangle$ be an ordered set and fix $S\subseteq X$. Then $m\in S$ is the greatest element of $S$ iff it is the $<$-maximal element of $S$._

--- admonition

_Proof_. ($\Rightarrow$): If $m$ is the greatest element of $S$, then $\fa s\in S:s\leq m$. If $m<s$, then, since either $s<m$ or $s=m$, we see that $m<m$ which is contradictory since $<$ is irreflexive on $X$. Thus $m\not<s$ and so $m$ is a $<$-maximal in $S$.

($\Leftarrow$): If $m$ is a $<$-maximal element of $S$, then $\fa s\in S:m\not<s$. Since $<$ is connected on $X$ and hence on $S$ too, we see that either $s<m$ or $s=m$. Thus $s\leq m$ and so $m$ is the greatest element of $S$.<span style="float:right;">$\blacksquare$</span>
