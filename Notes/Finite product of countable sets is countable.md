<div class="topSpace"></div>

Date Created: 28/12/2022 16:06:39
References: #Ref/NONE
Tags: #Type/Proposition #Topic/Set_Theory/Later/Ordinal

Proved by: [[Countable iff injects into naturals]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Fix $n\in\omega$ and let $X_1,\dots,X_n$ be countable sets. Then $\prod_{i=1}^nX_i$ is countable.

```

<i>Proof.</i> By induction, it suffices to show that $X_1\times X_2$ is countable. Since $X_1$ and $X_2$ are countable, there exist injections $\phi_1:X_1\into\omega$ and $\phi_2:X_2\into\omega$. Then
$$\begin{equation}
    \phi:X_1\times X_2\to\omega\times\omega\ \ \ \ \ \ \ \ \mathit{mapping}\ \ \ \ \ \ \ \ \tpl{x_1,x_2}\mapsto\tpl{\phi_1\l(x_1\r),\phi_2\l(x_2\r)}
\end{equation}$$
is an injection, so it suffices to show that $\omega\times\omega$ injects into $\omega$. Indeed, consider the function
$$\begin{equation}
    \psi:\omega\times\omega\to\omega\ \ \ \ \ \ \ \ \mathit{mapping}\ \ \ \ \ \ \ \ \tpl{n,m}\mapsto2^n3^m.
\end{equation}$$
Then, if $f\l(n_1,m_1\r)=f\l(n_2,m_2\r)$ for any $n_1,m_1,n_2,m_2\in\omega$, the Fundamental Theorem of Arithmetic forces $\tpl{n_1,m_1}=\tpl{n_2,m_2}$. Thus $\psi$ is injective, so we are done.<span style="float:right;">$\blacksquare$</span>
