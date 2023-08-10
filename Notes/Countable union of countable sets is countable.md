<div class="topSpace"></div>

Date Created: 28/12/2022 16:13:51
Tags: #Type/Proposition #Topic/Set_Theory/Later/Ordinal

Proved by: [[Countable iff injects into naturals]], [[Omega is an ordinal]], [[Finite product of countable sets is countable]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X_n}_{n\in\omega}$ be a sequence of countable sets. Then $\bigcup_{n\in\omega}X_n$ is countable.

```

<i>Proof.</i> Set $X\coloneqq\bigcup_{n\in\omega}X_n$. For each $n\in\omega$, there exists an injection $\phi_n:X_n\into\omega$, so consider the function
$$\begin{equation}
    \phi:X\to\omega\times\omega\ \ \ \ \ \ \ \ \mathit{mapping}\ \ \ \ \ \ \ \ x\mapsto\tpl{m,\phi_m\l(x\r)}
\end{equation}$$
where $m\in\omega$ is the (unique) minimal element of the set $\l\{n\in\omega\st x\in X_n\r\}$. It suffices to show that $\phi$ is an injection, for then $X\into\omega\times\omega\into\omega$. Indeed, for all $x_1,x_2\in X$, $\tpl{m_1,\phi_{m_1}\l(x_1\r)}=\tpl{m_2,\phi_{m_2}\l(x_2\r)}$ implies that $m\coloneqq m_1=m_2$, so injectivity of $\phi_m$ establishes $x_1=x_2$.<span style="float:right;">$\blacksquare$</span>
