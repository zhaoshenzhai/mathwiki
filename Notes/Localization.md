<div class="topSpace"></div>

Date Created: 13/01/2023 14:38:57
Tags: #Type/Definition #Topic/Ring_Theory #Courses/MATH457

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

Let $R$ be an integral domain and let $S\subseteq R$ be multiplicative. Define the equivalence relation $\sim$ on $R\times S$ by
$$\begin{equation}
    \tpl{r_1,s_1}\sim\tpl{r_2,s_2}\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ r_1s_2=r_2s_1
\end{equation}$$
for all $r_1,r_2\in R$ and $s_1,s_2\in S$. Write $\frac{r}{s}\coloneqq\l[\tpl{r,s}\r]$. The <b>localization of $R$ by $S$</b> is the commutative ring $S^{-1}R\coloneqq\l\{\frac{r}{s}\st r\in R\land s\in S\r\}$ equipped with the operations
$$\begin{equation}
    \begin{aligned}
        +:S^{-1}R\times S^{-1}R&\to S^{-1}R \\
        \tpl{\frac{r_1}{s_1},\frac{r_2}{s_2}}&\mapsto\frac{r_1s_2+r_2s_1}{s_1s_2}
    \end{aligned}\ \ \ \ \ \ \ \ \mathit{and}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \cdot:S^{-1}R\times S^{-1}R&\to S^{-1}R \\
        \tpl{\frac{r_1}{s_1},\frac{r_2}{s_2}}&\mapsto\frac{r_1r_2}{s_1s_2}.
    \end{aligned}
\end{equation}$$
If $S=R\comp\l\{0\r\}$, then $S^{-1}R$ is called the <b>field of fractions of $R$</b>.

```

<b>Remark.</b> There is a canonical embedding $\iota:R\into S^{-1}R:r\mapsto\frac{r}{1}$.<span style="float:right;">$\blacklozenge$</span>
