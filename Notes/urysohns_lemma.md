---
title: Urysohn's Lemma
date: 2025-06-20
tags: [In_Progress]
---

# Statement and Proof

\begin{theorem}[Urysohn]

The following are equivalent for a \ref[topological space]{topological_space} $X$.
1. $X$ is \ref[normal]{normal_space}: every pair of disjoint closed sets $A,B\subeq X$ can be separated by disjoint open sets, i.e., there exist disjoint open sets $U\supseteq A$ and $V\supseteq B$.
2. For every closed set $A\subeq X$ and every open set $U\supseteq A$, there is an open set $V$ and a closed set $B$ such that $A\subeq V\subeq B\subeq U$.
3. Every pair of disjoint closed sets $A,B\subeq X$ can be separated by a continuous function, i.e., there is a continuous function $f:X\to[0,1]$ such that $A\subeq f^{-1}(0)$ and $B\subeq f^{-1}(1)$.
4. For every closed set $A\subeq X$ and every open set $U\supseteq A$, there is a continuous function $f:X\to[0,1]$ such that $\chi_A\leq f\leq\chi_U$ pointwise.

\end{theorem}

\begin{proof}

Taking complements, we have (1) $\Leftrightarrow$ (2), and similarly (3) $\Leftrightarrow$ (4). If (3) holds, then every pair $A,B\subeq X$ of disjoint closed sets can be separated by a continuous function $f:X\to[0,1]$, and let $U\coloneqq\l\\{x\in X\st f(x)<1/3\r\\}$ and $V\coloneqq\l\\{x\in X\st f(x)>2/3\r\\}$.

<br>

&emsp;&emsp;It remains to show that (1) $\Rightarrow$ (3). To this end, let $A\eqqcolon A_1\subeq U_0\coloneqq U$ be as in (1). By (2), there is an open set $U_{1/2}$ and a closed set $A_{1/2}$ such that $A_1\subeq U_{1/2}\subeq A_{1/2}\subeq U_0$. Applying (2) twice again, we have
\begin{equation*}
    A_1\subeq U_{3/4}\subeq A_{3/4}\subeq U_{1/2}\subeq A_{1/2}\subeq U_{1/4}\subeq A_{1/4}\subeq U_0,
\end{equation*}
and iterating this process, we obtain open sets $U_q$ and closed sets $A_q$ for each dyadic rational $q=n/2^m\in[0,1]$ such that $U_q\subeq A_q$ for all $q\in(0,1)$ and $A_{q'}\subeq U_q$ for all $0\leq q<q'\leq1$. \TODO

\end{proof}
