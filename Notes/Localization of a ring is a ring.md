<div class="topSpace"></div>

Date Created: 13/01/2023 14:48:08
Tags: #Proposition #In_Progress

Proved by: [[Integral domain iff cancellable]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be an integral domain and let $S\subseteq R$ be multiplicative. Define the relation $\sim$ on $R\times S$ by_
$$\begin{equation}
    \tpl{r_1,s_1}\sim\tpl{r_2,s_2}\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ r_1s_2=r_2s_1
\end{equation}$$
_for all $r_1,r_2\in R$ and $s_1,s_2\in S$. Then $\sim$ is an equivalence relation on $R\times S$. Furthermore, letting $\frac{r}{s}\coloneqq\l[\tpl{r,s}\r]$ and $S^{-1}R$ denote the set of all equivalence classes, the operations_
$$\begin{equation}
    \begin{aligned}
        +:S^{-1}R\times S^{-1}R&\to S^{-1}R \\
        \tpl{\frac{r_1}{s_1},\frac{r_2}{s_2}}&\mapsto\frac{r_1s_2+r_2s_1}{s_1s_2}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \cdot:S^{-1}R\times S^{-1}R&\to S^{-1}R \\
        \tpl{\frac{r_1}{s_1},\frac{r_2}{s_2}}&\mapsto\frac{r_1r_2}{s_1s_2}
    \end{aligned}
\end{equation}$$
_are well-defined and makes $\tpl{S^{-1}R,+,\cdot}$ into an integral domain._

```

_Proof_. We first prove that $\sim$ is an equivalence relation. That $\sim$ is reflexive and symmetric is obvious, so we prove that it is transitive. Take $\l[\tpl{r_i,s_i}\r]\in S^{-1}R$ for $i\in\l\{1,2,3\r\}$ such that $\tpl{r_1,s_1}\sim\tpl{r_2,s_2}$ and $\tpl{r_2,s_2}\sim\tpl{r_3,s_3}$. Then $r_1s_2=r_2s_1$ and $r_2s_3=r_3s_2$, so
$$\begin{equation}
    r_1s_2s_3=r_2s_1s_3=r_3s_1s_2.
\end{equation}$$
Since $R$ is an integral domain, we see that $r_1s_3=r_3s_1$, and hence $\tpl{r_1,s_1}\sim\tpl{r_3,s_3}$.
