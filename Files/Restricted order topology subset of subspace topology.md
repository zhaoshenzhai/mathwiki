<br />
<br />

Date Created: 12/02/2022 15:10:37
Tags: #Proposition #Closed 

Proved by: [[Order topology (subbasis)]], [[Subspace topology (subbasis)]]
Generalizations: _Not Applicable_

!!! ad-Proposition Proposition.

_Let $\l\langle X,<\r\rangle$ be a totally ordered set and fix a subset $Y\subseteq X$. Then the order topology on $Y$ w.r.t. the restriction $\l.<\r|_Y$ is contained in the subspace topology on $Y$ inherited from $\l\langle X,\mc{T}\l(<\r)\r\rangle$. Formally, $\mc{T}\l(\l.<\r|_Y\r)\subseteq\l.\mc{T}\l(<\r)\r|_Y$._

--- admonition

_Proof_. Recall that the collections
$$\begin{equation}
    \mc{S}_\textrm{or}\coloneqq\l\{S\in\mc{P}\l(Y\r)\mid\l[\ex a\in Y:S=\l(a,+\infty\r)_Y\r]\lor\l[\ex b\in Y:S=\l(-\infty,b\r)_Y\r]\r\}
\end{equation}$$
and
$$\begin{equation}
    \mc{S}_\textrm{sb}\coloneqq\l\{S\in\mc{P}\l(Y\r)\mid\l[\ex a\in X:S=\l(a,+\infty\r)_X\cap Y\r]\lor\l[\ex b\in X:S=\l(-\infty,b\r)_X\cap Y\r]\r\}
\end{equation}$$
are subbases for the topologies $\mc{T}\l(\l.<\r|_Y\r)$ and $\l.\mc{T}\l(<\r)\r|_Y$, respectively; here, $\l(\cdot,\cdot\r)_\blob$ is an open interval in $\blob$. It suffices to show that $\mc{S}_\textrm{or}\subseteq\mc{S}_\textrm{sb}$.
* (Informal): Every half-infinite open ray in $Y$ is a half-infinite open ray in $X$ intersected with $Y$, so the result follows.

* (Formal): Take $S\in\mc{S}_\textrm{or}$. There are two cases to consider.
    * If $S=\l(a,+\infty\r)_Y$ for some $a\in Y$, then, since $Y\subseteq X$, we have $a\in X$ too; we claim that $\l(a,+\infty\r)_Y=\l(a,+\infty\r)_X\cap Y$. Simply observe that$$\begin{equation}
    \begin{alignedat}{2}
        y\in\l(a,+\infty\r)_Y&\Leftrightarrow y\in Y\land a\l.<\r|_Yy&&\textrm{Definition of half-infinite open ray}\\
        &\Leftrightarrow y\in Y\land a<y&&a\in Y\\
        &\Leftrightarrow y\in Y\land y\in\l(a,+\infty\r)_X\ \ \ \ \ \ \ \ &&\textrm{Definition of half-infinite open ray}\\
        &\Leftrightarrow y\in\l(a,+\infty\r)_X\cap Y.&&\textrm{Definition of intersection}
    \end{alignedat}
  \end{equation}$$
    * If $S=\l(-\infty,b\r)_Y$ for some $b\in Y$, then, since $Y\subseteq X$, we have $b\in X$ too; we claim that $\l(-\infty,b\r)_Y=\l(-\infty,b\r)_X\cap Y$. Simply observe that$$\begin{alignat}{2}
    y\in\l(-\infty,b\r)_Y&\Leftrightarrow y\in Y\land y\l.<\r|_Yb&&\textrm{Definition of half-infinite open ray}\\
    &\Leftrightarrow y\in Y\land y<b&&b\in Y\\
    &\Leftrightarrow y\in Y\land y\in\l(-\infty,b\r)_X\ \ \ \ \ \ \ \ &&\textrm{Definition of half-infinite open ray}\\
    &\Leftrightarrow y\in\l(-\infty,b\r)_X\cap Y.&&\textrm{Definition of intersection}\qedin
  \end{alignat}$$
