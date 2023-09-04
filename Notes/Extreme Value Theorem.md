<div class="topSpace"></div>

Date Created: 28/12/2022 21:42:50
Tags: #Type/Theorem #Topic/Topology

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: [[Compact Space#^compact-hausdorff-implies-closed]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Extreme Value Theorem).

Let $X$ and $Y$ be topological spaces, and consider a continuous function $f:X\to Y$. If $X$ is compact, then $f\l(X\r)$ is compact.

```

<b>Remark.</b> The classical statement is that every continuous function $f:X\to\R$ on a compact space $X$ admits both global extrema. Indeed, $f\l(X\r)$ is compact, so it is closed and bounded. Being bounded, the Dedekind-completeness of $\R$ furnishes a supremum $\alpha\coloneqq\sup f\l(X\r)\in\R$. Thus for each $n\in\N^+$, there exist some $y_n\in f\l(X\r)$ such that $\alpha-1/n<y_n<\alpha$, so $y_n\to\alpha$ by the Squeeze Theorem. But $f\l(X\r)$ is closed, so it contains the limit of all converging sequences in $f\l(X\r)$. Hence $\alpha\in f\l(X\r)$, showing that $f$ admits a global maximum. Similarly, $f$ admits $\beta\coloneqq\inf f\l(X\r)$ as its global minimum.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof.</i> Let $\l\{V_\alpha\r\}$ be a collection of open sets of $Y$ that covers $f\l(X\r)$. Since $f$ is continuous, each $\preim_f\!\l(V_\alpha\r)$ is open and hence $\l\{\preim_f\!\l(V_\alpha\r)\r\}$ is an open cover of $X$. But $X$ is compact, so there exist finitely-many indices $\alpha_1,\dots,\alpha_k$ such that $X=\bigcup_{i=1}^k\preim_f\!\l(V_{\alpha_i}\r)$. Observe then that
$$\begin{equation}
    f\l(X\r)=f\l(\bigcup_{i=1}^k\preim_f\!\l(V_{\alpha_i}\r)\r)=\bigcup_{i=1}^kf\l(\preim_f\!\l(V_{\alpha_i}\r)\r)\subseteq\bigcup_{i=1}^k V_{\alpha_i},
\end{equation}$$
so the finite collection $\l\{V_{\alpha_i}\r\}_{i=1}^k$ covers $f\l(X\r)$.<span style="float:right;">$\blacksquare$</span>
