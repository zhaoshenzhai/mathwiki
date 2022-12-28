<div class="topSpace"></div>

Date Created: 16/02/2022 16:51:32
Tags: #Proposition #Later/Topology

Proved by: [[Restricted order topology subset of subspace topology]], [[Order topology (subbasis)]], [[Subspace topology (subbasis)]], [[Half-infinite open rays are open in the order topology]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,<}$ be a totally ordered set and fix a convex subset $Y\subseteq X$. Then $\mc{T}\l(\l.<\r|_Y\r)=\l.\mc{T}\l(<\r)\r|_Y$._

```

_Proof_. The forward inclusion is proven. Recall that the collections
$$\begin{equation}
    \mc{S}_\textrm{or}\coloneqq\l\{S\in\pow\l(Y\r)\mid\l[\ex a\in Y:S=\l(a,+\infty\r)_Y\r]\lor\l[\ex b\in Y:S=\l(-\infty,b\r)_Y\r]\r\}
\end{equation}$$
and
$$\begin{equation}
    \mc{S}_\textrm{sb}\coloneqq\l\{S\in\pow\l(Y\r)\mid\l[\ex a\in X:S=\l(a,+\infty\r)_X\cap Y\r]\lor\l[\ex b\in X:S=\l(-\infty,b\r)_X\cap Y\r]\r\}
\end{equation}$$
are subbases for the topologies $\mc{T}\l(\l.<\r|_Y\r)$ and $\l.\mc{T}\l(<\r)\r|_Y$, respectively. It suffices to show that $\mc{S}_\textrm{sb}\subseteq\mc{T}\l(\l.<\r|_Y\r)$, for then every $U\in\l.\mc{T}\l(<\r)\r|_Y$ can be written as an arbitrary union of finite intersections of open sets in $\mc{T}\l(\l.<\r|_Y\r)$ and are thus also open in $\mc{T}\l(\l.<\r|_Y\r)$. To this end, take $S\in\mc{S}_\textrm{sb}$; there are two cases to consider, but they are analogous so we shall assume that $S=\l(a,+\infty\r)_X\cap Y$ for some $a\in X$. Observe that either $a\in Y$ or $a\not\in Y$.
* In the former case, we see that$$\begin{equation}
    \begin{alignedat}{2}
        y\in\l(a,+\infty\r)_X\cap Y&\Leftrightarrow y\in Y\land y\in\l(a,+\infty\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of intersection}\\
        &\Leftrightarrow y\in Y\land a<y&&\textrm{Definition of half-infinite open ray}\\
        &\Leftrightarrow y\in Y\land a\,\l.<\r|_Y\,y&&a\in Y\\
        &\Leftrightarrow y\in\l(a,+\infty\r)_Y&&\textrm{Definition of half-infinite open ray}
    \end{alignedat}
\end{equation}$$
and thus $S=\l(a,+\infty\r)_Y$. Since half-infinite open rays in $Y$ are open in the order topology $\mc{T}\l(\l.<\r|_Y\r)$, we see that $S\in\mc{T}\l(\l.<\r|_Y\r)$.

* In the latter case, because $Y$ is convex, $a$ must either be an upper or a lower bound of $Y$. To see this, suppose that there exist $p,q\in Y$ such that $p<a<q$. Since $Y$ is convex in $X$, we see that $\l(p,q\r)_X\subseteq Y$ and thus $a\in Y$, a contradiction. If $a$ is an upper bound, then $S=\l(a,+\infty\r)_X\cap Y=\em$; otherwise, $S=\l(a,+\infty\r)_X\cap Y=Y$. In either case, we see that $S\in\mc{T}\l(\l.<\r|_Y\r)$.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** Convexity is _not_ a necessary condition; consider the real line $\tpl{\R,\sttopR}$ and the subset $Y\coloneqq\l(0,1\r)\cup\l(1,2\r)\subseteq\R$. Obviously $Y$ is not convex in $\R$, for $0.5,1.5\in Y$ but $1\not\in Y$.     The proof that the two topologies on $Y$ coincide follows exactly as above except when $a=1\not\in Y$. In this case, $1$ is neither a lower nor an upper bound of $Y$, but observe that $\l(1,+\infty\r)_\R\cap Y=\l(1,2\r)$ which _is_ open in $\mc{T}\l(\l.<\r|_Y\r)$; in general, this need not be the case.<span style="float:right;">$\blacklozenge$</span>
