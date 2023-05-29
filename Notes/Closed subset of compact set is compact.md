<div class="topSpace"></div>

Date Created: 05/01/2023 18:33:25
Tags: #Type/Proposition #Topic/Topology

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mc{T}}$ be a topological space and let $S\subseteq K$ be a closed subset of a compact set $K\subseteq X$. Then $S$ is compact.

```

<i>Proof.</i> Let $\l\{U_\alpha\r\}_{\alpha\in\mc{A}}$ be an open cover of $S$. Note that $X\comp S$ is open and
$$\begin{equation}
    K\subseteq X=\l(X\comp S\r)\cup S\subseteq\l(X\comp S\r)\cup\bigcup_{\alpha\in\mc{A}}U_\alpha
\end{equation}$$
so $\l\{U_\alpha\r\}_{\alpha\in\mc{A}}\cup\l\{X\comp S\r\}$ is an open cover of $K$. Compactness of $K$ then furnishes indices $\alpha_1,\dots,\alpha_k\in\mc{A}$ such that
$$\begin{equation}
    S\subseteq K\subseteq\l(X\comp S\r)\cup\bigcup_{i=1}^{k}U_{\alpha_i}.
\end{equation}$$
Thus $S\subseteq\bigcup_{i=1}^{k}U_{\alpha_i}$, so $S$ is compact.<span style="float:right;">$\blacksquare$</span>
