<div class="topSpace"></div>

Date Created: 13/01/2023 14:38:57
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Universal Property of Localization]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Localization of a ring is a ring]]

``` ad-Definition
title: Definition.

Let $R$ be an commutative ring and let $S\subseteq R$ be a multiplicative subset. Define the equivalence relation $\sim$ on $R\times S$ by
$$\begin{equation}
    \tpl{r_1,s_1}\sim\tpl{r_2,s_2}\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ \ex t\in S:t\l(r_1s_2-r_2s_1\r)=0
\end{equation}$$
for all $r_1,r_2\in R$ and $s_1,s_2\in S$. Write $r/s\coloneqq\l[\tpl{r,s}\r]$. The <b>localization of $R$ by $S$</b> is the commutative ring $S^{-1}R\coloneqq\l\{\frac{r}{s}\st r\in R\land s\in S\r\}$ equipped with the operations $r_1/s_1+r_2/s_2\coloneqq\l(r_1s_2+r_2s_1\r)/\l(s_1s_2\r)$ and $r_1/s_1\cdot r_2/s_2\coloneqq\l(r_1r_2\r)/\l(s_1s_2\r)$.
* If $R$ is an integral domain and $S=R\comp\l\{0\r\}$, then $\Frac{R}\coloneqq S^{-1}R$ is a field, called the <b>fraction field of $R$</b>.

```
