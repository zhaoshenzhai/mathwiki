<div class="topSpace"></div>

Date Created: 01/02/2022 10:54:47
Tags: #Proposition #Later/Set_Theory

Proved by: [[Basic properties of unions, intersections, and power sets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let $R$ be a binary relation on $X$. Then the set_
$$\begin{equation}
    \rfcl R=R\cup\id_X
\end{equation}$$
_is the reflexive binary relation on $X$ contained in every reflexive binary relation that contains $R$._

```

_Proof_. We first verify that $\rfcl R$ is indeed a binary relation. To this end, take $u\in\rfcl R$, so either $u\in R$ or $u\in\id_X$.
* If $u\in R$, then, since $R$ is a binary relation $X$, we see that $\ex x_1,x_2\in X:u=\tpl{x_1,x_2}$.
* If $u\in\id_X$, then, by definition of the identity function, we see that $\ex x\in X:u=\tpl{x,x}$.

To show that $\rfcl R$ is reflexive, that $x\in X$ and observe that $\tpl{x,x}\in\id_X\subseteq\,\prec\cup\id_X=\rfcl\prec\,=\,\preceq$. Finally, let $\tilde{R}$ be any reflexive binary relation containing $R$, so $R\subseteq\tilde{R}$ and $\id_X\subseteq\tilde{R}$. It follows that
$$\begin{equation}
    \rfcl R=R\cup\id_X\subseteq\tilde{R}\cup\tilde{R}=\tilde{R}.\qedin
\end{equation}$$
