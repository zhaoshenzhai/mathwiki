<div class="topSpace"></div>

Date Created: 01/02/2022 10:54:47
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Basic properties of unions, intersections, and power sets]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set and let $R$ be a binary relation on $X$. Then the set
$$\begin{equation}
    \rfcl R=R\cup\id_X
\end{equation}$$
is the reflexive binary relation on $X$ contained in every reflexive binary relation that contains $R$.

```

<i>Proof.</i> We first verify that $\rfcl R$ is indeed a binary relation. To this end, take $u\in\rfcl R$, so either $u\in R$ or $u\in\id_X$.
* If $u\in R$, then, since $R$ is a binary relation $X$, we see that $\ex x_1,x_2\in X:u=\tpl{x_1,x_2}$.
* If $u\in\id_X$, then, by definition of the identity function, we see that $\ex x\in X:u=\tpl{x,x}$.

To show that $\rfcl R$ is reflexive, that $x\in X$ and observe that $\tpl{x,x}\in\id_X\subseteq\,\prec\cup\id_X=\rfcl\prec\,=\,\preceq$. Finally, let $\widetilde{R}$ be any reflexive binary relation containing $R$, so $R\subseteq\widetilde{R}$ and $\id_X\subseteq\widetilde{R}$. It follows that
$$\begin{equation}
    \rfcl R=R\cup\id_X\subseteq\widetilde{R}\cup\widetilde{R}=\widetilde{R}.\qedin
\end{equation}$$
