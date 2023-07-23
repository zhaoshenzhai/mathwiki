<div class="topSpace"></div>

Date Created: 22/01/2022 09:52:31
Tags: #Type/Proposition #Topic/Set_Theory/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ and $S$ be binary relations. Then $\l(S\circ R\r)^{-1}=R^{-1}\circ S^{-1}$.

```

<i>Proof.</i> Take $\tpl{x,y}\in \l(S\circ R\r)^{-1}$. The result follows from the following chain of equivalences:
$$\begin{equation}
    \begin{alignedat}{2}
        \tpl{x,y}\in \l(S\circ R\r)^{-1}&\Leftrightarrow\tpl{y,x}\in S\circ R&&\textrm{Definition of inverse relation}\\
        &\Leftrightarrow\ex t\l(yRt\land tSx\r)&&\textrm{Definition of composition of relations}\\
        &\Leftrightarrow\ex t\l(xS^{-1}t\land tR^{-1}y\r)\ \ \ \ \ \ \ \ &&\textrm{Definition of inverse relation}\\
        &\Leftrightarrow\tpl{x,y}\in R^{-1}\circ S^{-1}.&&\textrm{Definition of composition of relations}
    \end{alignedat}
\end{equation}$$
