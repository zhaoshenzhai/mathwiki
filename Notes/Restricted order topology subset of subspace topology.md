<br />
<br />

Date Created: 12/02/2022 15:10:37
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Proposition #Closed 

Proved by: [[Order topology (subbasis)]], [[Subspace topology (subbasis)]]
Generalizations: _Not Applicable_

Examples: [[Ordered square is strict subset of subspace topology]]
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\l\langle X,<\r\rangle$ be a totally ordered set and fix a subset $Y\subseteq X$. Then $\mc{T}\l(\l.<\r|_Y\r)\subseteq\l.\mc{T}\l(<\r)\r|_Y$._

```

_Proof_. Recall that the collections
$$\begin{equation}
    \mc{S}_\textrm{or}\coloneqq\l\{S\in\pow\l(Y\r)\mid\l[\ex a\in Y:S=\l(a,+\infty\r)_Y\r]\lor\l[\ex b\in Y:S=\l(-\infty,b\r)_Y\r]\r\}
\end{equation}$$
and
$$\begin{equation}
    \mc{S}_\textrm{sb}\coloneqq\l\{S\in\pow\l(Y\r)\mid\l[\ex a\in X:S=\l(a,+\infty\r)_X\cap Y\r]\lor\l[\ex b\in X:S=\l(-\infty,b\r)_X\cap Y\r]\r\}
\end{equation}$$
are subbases for the topologies $\mc{T}\l(\l.<\r|_Y\r)$ and $\l.\mc{T}\l(<\r)\r|_Y$, respectively. It suffices to show that $\mc{S}_\textrm{or}\subseteq\l.\mc{T}\l(<\r)\r|_Y$, for then every $U\in\mc{T}\l(\l.<\r|_Y\r)$ can be written as an arbitrary union of finite intersections of open sets in $\l.\mc{T}\l(<\r)\r|_Y$ and are thus also open in $\l.\mc{T}\l(<\r)\r|_Y$.
* (Informal): Every half-infinite open ray in $Y$ is a half-infinite open ray in $X$ intersected with $Y$, and since half-infinite open rays in $X$ are open in $\mc{T}\l(<\r)$, its intersection with $Y$ is open in $\l.\mc{T}\l(<\r)\r|_Y$.

* (Formal): Take $S\in\mc{S}_\textrm{or}$. There are two cases to consider, but they are analogous so we shall assume that $S=\l(a,+\infty\r)_Y$ for some $a\in Y$. Since $Y\subseteq X$, we have $a\in X$ too; we claim that $\l(a,+\infty\r)_Y=\l(a,+\infty\r)_X\cap Y$. Observe that
$$\begin{equation}
    \begin{alignedat}{2}
        y\in\l(a,+\infty\r)_Y&\Leftrightarrow y\in Y\land a\,\l.<\r|_Y\,y&&\textrm{Definition of half-infinite open ray}\\
        &\Leftrightarrow y\in Y\land a<y&&a\in Y\\
        &\Leftrightarrow y\in Y\land y\in\l(a,+\infty\r)_X\ \ \ \ \ \ \ \ &&\textrm{Definition of half-infinite open ray}\\
        &\Leftrightarrow y\in\l(a,+\infty\r)_X\cap Y,&&\textrm{Definition of intersection}
    \end{alignedat}
\end{equation}$$
so the informal argument is justified.<span style="float:right;">$\blacksquare$</span>
