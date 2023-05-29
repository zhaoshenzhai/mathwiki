<div class="topSpace"></div>

Date Created: 24/06/2022 11:32:29
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $V$ be a complex vector space. Then every hermitian form $\inprod{\slot}{\slot}:V\times V\to\C$ on $V$ is sesquilinear.

```

_Proof_. It suffices to prove that $\inprod{\slot}{\slot}$ is conjugate-linear is in second slot. Indeed, for all $v,w_1,w_2\in V$ and $\alpha\in\C$, we have
$$\begin{equation}
    \inprod{v}{w_1+\alpha w_2}=\bar{\inprod{w_1+\alpha w_2}{v}}=\bar{\inprod{w_1}{v}+\alpha\inprod{w_2}{v}}=\bar{\inprod{w_1}{v}}+\bar{\alpha}\bar{\inprod{w_2}{v}}=\inprod{v}{w_1}+\bar{\alpha}\inprod{v}{w_2}.\qedin
\end{equation}$$
