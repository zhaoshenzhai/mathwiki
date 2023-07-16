<div class="topSpace"></div>

Date Created: 13/01/2023 14:38:57
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Universal Property of Localization]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $S\subseteq R$ be a multiplicative subset of a commutative ring $R$. Define the equivalence relation $\sim$ on $R\times S$ by $\tpl{r_1,s_1}\sim\tpl{r_2,s_2}$ iff $t\l(r_1s_2-r_2s_1\r)=0$ for some $t\in S$. The <b>localization of $R$ by $S$</b> is the ring $S^{-1}R$ consisting of all equivalence classes $r/s\coloneqq\l[\tpl{r,s}\r]$, equipped with the operations
$$\begin{equation}
    r_1/s_1+r_2/s_2\coloneqq\l(r_1s_2+r_2s_1\r)/\l(s_1s_2\r)\ \ \ \ \ \ \ \ \mathit{and}\ \ \ \ \ \ \ \ r_1/s_1\cdot r_2/s_2\coloneqq\l(r_1r_2\r)/\l(s_1s_2\r)
\end{equation}$$
and the natural map $\iota:R\to S^{-1}R$ mapping $r\mapsto r/1$.

```

<b>Remark.</b> If $R$ is an integral domain, then its localization $S^{-1}R$ is also an integral domain. Furthermore, if $0\not\in S$, then $\iota:R\into S^{-1}R$.
* If $S=R\comp\l\{0\r\}$, then the <b>fraction field of $R$</b> is the field $\Frac R\coloneqq S^{-1}R$, which is the smallest field containing $R$.<span style="float:right;">$\blacklozenge$</span>
