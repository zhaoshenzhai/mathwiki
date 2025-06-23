---
title: Urysohn's Lemma
date: 2025-06-20
tags: [In_Progress]
---

# Statement and Proof

\begin{theorem}[Urysohn's Lemma]

The following are equivalent for a \ref[topological space]{topological_space} $X$.
1. $X$ is \ref[normal]{normal_space}: every pair of disjoint closed sets $A,B\subeq X$ can be separated by disjoint open sets, i.e., there exist disjoint open sets $U\supseteq A$ and $V\supseteq B$.
2. For every closed set $A\subeq X$ and every open set $U\supseteq A$, there is an open set $V$ and a closed set $B$ such that $A\subeq V\subeq B\subeq U$.
3. Every pair of disjoint closed sets $A,B\subeq X$ can be separated by a continuous function, i.e., there is a continuous function $f:X\to[0,1]$ such that $A\subeq f^{-1}(0)$ and $B\subeq f^{-1}(1)$.
4. For every closed set $A\subeq X$ and every open set $U\supseteq A$, there is a continuous function $f:X\to[0,1]$ such that $\chi_A\leq f\leq\chi_U$ pointwise.

\end{theorem}

&emsp;&emsp;Urysohn's Lemma itself states that (1) implies (2): disjoint closed sets in a normal space can be separated by a continuous function. The other statements are here for convenience in the proof itself.

<div class="space"></div>

\begin{proof}

Taking complements, we have (1) $\Leftrightarrow$ (2), and similarly (3) $\Leftrightarrow$ (4). If (3) holds, then every pair $A,B\subeq X$ of disjoint closed sets can be separated by a continuous function $f:X\to[0,1]$, and let $U\coloneqq\l\\{x\in X\st f(x)<1/3\r\\}$ and $V\coloneqq\l\\{x\in X\st f(x)>2/3\r\\}$. Thus (3) $\Rightarrow$ (1). For the converse, it suffices to show that (2) $\Rightarrow$ (4). To this end, we will use (2) to construct open sets $U_q$ for each dyadic rational $q\in\Z[1/2]\cap[0,1]$, which we will then use to define the desired continuous function $f:X\to[0,1]$.

<br>

&emsp;&emsp;First, let $A\eqqcolon A_1\subeq U_0\coloneqq U$ be as in (4). Using (2), choose an open set $U_{1/2}$ and a closed set $A_{1/2}$ such that $A_1\subeq U_{1/2}\subeq A_{1/2}\subeq U_0$. Applying (2) twice again, we have
\begin{equation*}
    A_1\subeq U_{3/4}\subeq A_{3/4}\subeq U_{1/2}\subeq A_{1/2}\subeq U_{1/4}\subeq A_{1/4}\subeq U_0,
\end{equation*}
and iterating this process, we obtain open sets $U_q$ and closed sets $A_q$ for each $q\in\Z[1/2]\cap(0,1)$ such that $U_q\subeq A_q$ for all $q\in(0,1)$ and $A_{q'}\subeq U_q$ for all $0\leq q<q'\leq1$. With this, we define $f:X\to[0,1]$ by setting
\begin{equation*}
    f(x)\coloneqq\sup\l\\{q\in\Z[1/2]\cap(0,1)\st x\in U_q\r\\}=\inf\l\\{q\in\Z[1/2]\cap(0,1)\st x\not\in A_q\r\\}.
\end{equation*}
Then $f^{-1}(a,\infty)=\bigcup_{q>a}U_q$ and $f^{-1}(-\infty,a)=\bigcup_{q<a}X\comp A_q$ for each $a\in\R$, so $f$ is continuous. Moreover, we have $\chi_A\leq f\leq\chi_U$ since if $x\in A$, then $x\in U_q$ for all $q\in\Z[1/2]\cap(0,1)$, and hence $f(x)\geq1=\chi_A(x)$; Similarly, if $x\not\in U$, then $x\not\in A_q$ for all $q\in\Z[1/2]\cap(0,1)$, and hence $f(x)\leq0=\chi_U$.<span style="float:right;">$\blacksquare$</span>

\end{proof}
