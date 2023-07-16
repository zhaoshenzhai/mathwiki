<div class="topSpace"></div>

Date Created: 13/01/2023 14:48:08
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
for all $r_1,r_2\in R$ and $s_1,s_2\in S$. Then $\sim$ is an equivalence relation on $R\times S$. Furthermore, letting $r/s\coloneqq\l[\tpl{r,s}\r]$ and $S^{-1}R$ denote the set of all equivalence classes, the operations $r_1/s_1+r_2/s_2\coloneqq\l(r_1s_2+r_2s_1\r)/\l(s_1s_2\r)$ and $r_1/s_1\cdot r_2/s_2\coloneqq\l(r_1r_2\r)/\l(s_1s_2\r)$ are well-defined and makes $\tpl{S^{-1}R,+,\cdot}$ into a commutative ring.
* Consider the map $\iota_S:R\to S^{-1}R$ mapping $r\mapsto r/1$. Then every element $s/1\in\iota_S\!\l(S\r)$ is invertible with inverse $1/s$.

Assume now that $R$ is an integral domain.
* For any multipliable subset $S\subseteq R$, the ring $S^{-1}R$ is also an integral domain.
* If $0\not\in S$, then $\iota_S$ is injective.
* If $S=R\comp\l\{0\r\}$, then $S^{-1}R$ is a field.

```

<i>Proof.</i> We first prove that $\sim$ is an equivalence relation. That $\sim$ is reflexive and symmetric is obvious, so we prove that it is transitive. Take $\l[\tpl{r_i,s_i}\r]\in S^{-1}R$ for $i\in\l\{1,2,3\r\}$ such that $\tpl{r_1,s_1}\sim\tpl{r_2,s_2}$ and $\tpl{r_2,s_2}\sim\tpl{r_3,s_3}$. Then $t\l(r_1s_2-r_2s_1\r)=0$ and $t'\l(r_2s_3-r_3s_2\r)=0$ for some $t,t'\in S$, so
$$\begin{equation}
    0=tt's_3\l(r_1s_2-r_2s_1\r)+tt's_1\l(r_2s_3-r_3s_2\r)=tt'\l(r_1s_2s_3-r_2s_1s_3+r_2s_1s_3-r_3s_1s_2\r)=tt's_2\l(r_1s_3-r_3s_1\r).
\end{equation}$$
Since $S$ is multiplicative, we see that $tt's_2\in S$ and hence $\tpl{r_1,s_1}\sim\tpl{r_3,s_3}$. We now show that the operations $+$ and $\cdot$ are well-defined. Indeed, if $\tpl{r_1,s_1}\sim\tpl{r_1',s_1'}$ and $\tpl{r_2,s_2}\sim\tpl{r_2',s_2'}$, then $t_1\l(r_1s_1'-r_1's_1\r)=0$ and $t_2\l(r_2s_2'-r_2's_2\r)=0$ for some $t_1,t_2\in S$. Observe then that
$$\begin{equation}
    0=t_1t_2\l(\l(r_1s_1'-r_1's_1\r)\l(s_2s_2'\r)+\l(r_2s_2'-r_2's_2\r)s_1s_1'\r)=t_1t_2\l(r_1s_2s_1's_2'+r_2s_1s_1's_2'-r_1's_1s_2s_2'-r_2's_1s_2s_1'\r)=t_1t_2\l(\l(r_1s_2+r_2s_1\r)s_1's_2'-\l(r_1's_2'+r_2's_1'\r)\l(s_1s_2\r)\r)
\end{equation}$$
so $\tpl{r_1s_2+r_2s_1,s_1s_2}\sim\tpl{r_1's_2'+r_2's_1',s_1's_2'}$ and hence $+$ is well-defined. Similarly, observe that
$$\begin{equation}
    0=t_1t_2\l(\l(r_1s_1'-r_1's_1\r)\l(r_2s_2'\r)+\l(r_2s_2'-r_2's_2\r)\l(r_1's_1\r)\r)=t_1t_2\l(r_1r_2s_1's_2'-r_1'r_2s_1s_2'+r_1'r_2s_1s_2'-r_1'r_2's_1s_2\r)=t_1t_2\l(r_1r_2s_1's_2'-r_1'r_2's_1s_2\r)
\end{equation}$$
so $\tpl{r_1r_2,s_1,s_2}\sim\tpl{r_1'r_2',s_1's_2'}$ and hence $\cdot$ is well-defined. We now verify the ring axioms, but it is clear that $+$ and $\cdot$ are commutative, associative, and that the distributive laws hold.
* (Additive identity): Take $r/s\in S^{-1}R$ and observe that $0/1+r/s=\l(0s+1\r)/\l(1s\r)=r/s$.
* (Additive inverse): Take $r/s\in S^{-1}R$ and observe that $a/s+\l(-a/s\r)=\l(as+\l(-as\r)\r)/\l(s^2\r)=0/s^2=0/1$ where the last equality follows from $0\cdot1-s^2\cdot0=0$.
* (Multiplicative identity): Take $r/s\in S^{-1}R$ and observe that $r/s\cdot1/1=\l(1r\r)/\l(1s\r)=r/s$.

Take $s\in S$, so $1/s\in S^{-1}R$. Then $s/1\cdot 1/s=\l(s1\r)/\l(1s\r)=1/1$, which proves that every element in $\iota_S\!\l(S\r)$ is invertible. Suppose now that $R$ is an integral domain.
* Take $r_1/s_1,r_2/s_2\in S^{-1}/R$ non-zero, $r_1,r_2\neq0$. Then $r_1r_2\neq0$, so $r_1/s_1\cdot r_2/s_2=\l(r_1r_2\r)/\l(s_1s_2\r)\neq0/1$.
* If $\iota_S\!\l(r_1\r)=\iota_S\!\l(r_2\r)$, then $r_1/1=r_2/1$ and hence $t\l(r_1-r_2\r)=0$ for some $t\in S$. But $t\neq0$, so $r_1=r_2$.
* Lastly, if $S=R\comp\l\{0\r\}$, then $r/s\in\iota_S\!\l(S\r)$ for every non-zero $r/s\neq0/1$.<span style="float:right;">$\blacksquare$</span>
