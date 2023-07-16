<div class="topSpace"></div>

Date Created: 15/07/2023 22:59:12
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a commutative ring and let $S\subseteq R$ be a multiplicative subset. Define the relation $\sim$ on $R\times S$ by
$$\begin{equation}
    \tpl{r_1,s_1}\sim\tpl{r_2,s_2}\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ \ex t\in S:t\l(r_1s_2-r_2s_1\r)=0
\end{equation}$$
for all $r_1,r_2\in R$ and $s_1,s_2\in S$. Then $\sim$ is an equivalence relation, and if we let $S^{-1}R$ denote the equivalence classes $r/s\coloneqq\l[\tpl{r,s}\r]$, then the operations
$$\begin{equation}
    r_1/s_1+r_2/s_2\coloneqq\l(r_1s_2+r_2s_1\r)/\l(s_1s_2\r)\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ r_1/s_1\cdot r_2/s_2\coloneqq\l(r_1r_2\r)/\l(s_1s_2\r)
\end{equation}$$
are well-defined and makes $\tpl{S^{-1}R,+,\cdot}$ a commutative ring.

```

<i>Proof.</i> The claims are mostly straightforward.
* (Equivalence relation). That $\sim$ is reflexive and symmetric is obvious, so we prove that it is transitive. Take $\l[\tpl{r_i,s_i}\r]\in S^{-1}R$ for $i\in\l\{1,2,3\r\}$ such that $\tpl{r_1,s_1}\sim\tpl{r_2,s_2}$ and $\tpl{r_2,s_2}\sim\tpl{r_3,s_3}$. Then $t\l(r_1s_2-r_2s_1\r)=0$ and $t'\l(r_2s_3-r_3s_2\r)=0$ for some $t,t'\in S$, so
$$\begin{equation}
    0=tt's_3\l(r_1s_2-r_2s_1\r)+tt's_1\l(r_2s_3-r_3s_2\r)=tt'\l(r_1s_2s_3-r_2s_1s_3+r_2s_1s_3-r_3s_1s_2\r)=tt's_2\l(r_1s_3-r_3s_1\r).
\end{equation}$$
Since $S$ is multiplicative, we see that $tt's_2\in S$ and hence $\tpl{r_1,s_1}\sim\tpl{r_3,s_3}$.
* (Well-definition) If $\tpl{r_1,s_1}\sim\tpl{r_1',s_1'}$ and $\tpl{r_2,s_2}\sim\tpl{r_2',s_2'}$, then $t_1\l(r_1s_1'-r_1's_1\r)=0$ and $t_2\l(r_2s_2'-r_2's_2\r)=0$ for some $t_1,t_2\in S$. Observe then that
$$\begin{equation}
    0=t_1t_2\l(\l(r_1s_1'-r_1's_1\r)\l(s_2s_2'\r)+\l(r_2s_2'-r_2's_2\r)s_1s_1'\r)=t_1t_2\l(r_1s_2s_1's_2'+r_2s_1s_1's_2'-r_1's_1s_2s_2'-r_2's_1s_2s_1'\r)=t_1t_2\l(\l(r_1s_2+r_2s_1\r)s_1's_2'-\l(r_1's_2'+r_2's_1'\r)\l(s_1s_2\r)\r)
\end{equation}$$
so $\tpl{r_1s_2+r_2s_1,s_1s_2}\sim\tpl{r_1's_2'+r_2's_1',s_1's_2'}$ and hence $+$ is well-defined. Similarly, observe that
$$\begin{equation}
    0=t_1t_2\l(\l(r_1s_1'-r_1's_1\r)\l(r_2s_2'\r)+\l(r_2s_2'-r_2's_2\r)\l(r_1's_1\r)\r)=t_1t_2\l(r_1r_2s_1's_2'-r_1'r_2s_1s_2'+r_1'r_2s_1s_2'-r_1'r_2's_1s_2\r)=t_1t_2\l(r_1r_2s_1's_2'-r_1'r_2's_1s_2\r)
\end{equation}$$
so $\tpl{r_1r_2,s_1,s_2}\sim\tpl{r_1'r_2',s_1's_2'}$ and hence $\cdot$ is well-defined.

* (Ring axioms): it is clear that $+$ and $\cdot$ are commutative, associative, and that the distributive laws hold. Take $r/s\in S^{-1}R$ and observe that
$$\begin{equation}
    0/1+r/s=\l(0s+1\r)/\l(1s\r)=r/s,\ \ \ \ \ \ \ \ a/s+\l(-a/s\r)=\l(as+\l(-as\r)\r)/\l(s^2\r)=0/s^2=0/1,\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ r/s\cdot1/1=\l(1r\r)/\l(1s\r)=r/s.\qedin
\end{equation}$$
