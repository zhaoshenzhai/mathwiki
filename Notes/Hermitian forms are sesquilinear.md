<div class="topSpace"></div>

Date Created: 24/06/2022 11:32:29
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be a complex vector space. Then every hermitian form $\inprod{\slot}{\slot}:V\times V\to\C$ on $V$ is sesquilinear.

```

<i>Proof.</i> It suffices to prove that $\inprod{\slot}{\slot}$ is conjugate-linear is in second slot. Indeed, for all $v,w_1,w_2\in V$ and $\alpha\in\C$, we have
$$\begin{equation}
    \inprod{v}{w_1+\alpha w_2}=\bar{\inprod{w_1+\alpha w_2}{v}}=\bar{\inprod{w_1}{v}+\alpha\inprod{w_2}{v}}=\bar{\inprod{w_1}{v}}+\bar{\alpha}\bar{\inprod{w_2}{v}}=\inprod{v}{w_1}+\bar{\alpha}\inprod{v}{w_2}.\qedin
\end{equation}$$
