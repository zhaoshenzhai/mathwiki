---
mathLink: Norms on $\catfgvect[\C\!]$
---

<div class="topSpace"></div>

Date Created: 21/02/2023 10:19:11
References: #Ref/Fol07
Tags: #Type/Proposition #Topic/Functional_Analysis

Proved by: [[Real Numbers#^heine-borel]], [[Compact Space#^extreme-value-theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Any two norms on a finite dimensional vector space $V$ are equivalent, and hence all linear maps between finite dimensional spaces are bounded.

```

<i>Proof.</i> Since $V$ is finite-dimensional, it admits a basis $\l\{e_i\r\}_{i=1}^n$ for some $n\in\N^+$. To show that all norms on $V$ are equivalent, it suffices to take any norm $\|\slot\|$ on $V$ and show that it is equivalent to the $\sup$-norm $\|v\|_\infty\coloneqq\max\l|\alpha_i\r|$ for all $v\in V$ where $v=\sum_i\alpha_ie_i$. Indeed, for all $v\in V$, we have
$$\begin{equation}
    \|v\|=\l\|\sum_i\alpha_ie_i\r\|\leq\sum_i\l|\alpha_i\r|\|e_i\|\leq\l(\max_i\|e_i\|\r)\max_i\l|\alpha_i\r|=\l(n\max_i\|e_i\|\r)\|v\|_\infty,
\end{equation}$$
so $\|v\|\leq c_1\|v\|_\infty$ for $c_1\coloneqq n\max_i\|e_i\|$ as above. Conversely, note that $f:V\to\R:v\mapsto\|v\|$ is Lipschitz w.r.t. the $\|\slot\|_\infty$ norm; indeed, for all $v,w\in V$, we have that
$$\begin{equation}
    \l|f\l(v\r)-f\l(w\r)\r|=\l|\|v\|-\|w\|\r|\leq\|v-w\|\leq c_1\|v-w\|_\infty.
\end{equation}$$
Consider the unit sphere $S\coloneqq\l\{v\in V\st\|v\|_\infty=1\r\}$. It is clearly closed and bounded w.r.t $\|\slot\|_\infty$, and since the norms $\|\slot\|_\infty$ and $\|\slot\|_2$ are equivalent, Heine-Borel shows that $S$ is compact in $\|\slot\|_\infty$. By the Extreme Value Theorem, $\l.f\r|_S$ attains its minimum at some $v_0\in S$; let $c_2\coloneqq1/\|v_0\|>0$. This is the desired constant, for take $v\in V\comp\l\{0\r\}$ and note that $w\coloneqq v/\|v\|_\infty\in S$, so $\|w\|\geq\|v_0\|$ and thus $\|v\|_\infty=\|v\|/\|w\|\leq\|v\|/\|v_0\|=c_2\|v\|$.
* Finally, let $T:V\to W$ be linear. Since $V$ is finite dimensional, we may w.l.o.g. assume that it is equipped with the $\sup$-norm $\|\slot\|_\infty$. Then $T$ is bounded since
    $$\begin{equation}
        \|Tv\|=\l\|\sum_i\alpha_iTe_i\r\|\leq\sum_i\l|\alpha_i\r|\l\|Te_i\r\|\leq\l(\sum_i\l\|Te_i\r\|\r)\max_i\l|\alpha_i\r|=\l(\sum_i\l\|Te_i\r\|\r)\|v\|_\infty.\qedin
    \end{equation}$$
