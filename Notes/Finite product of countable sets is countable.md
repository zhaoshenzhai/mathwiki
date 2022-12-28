<div class="topSpace"></div>

Date Created: 28/12/2022 16:06:39
Tags: #Proposition #Topics/Set_Theory

Proved by: [[Countable iff injects into naturals]], [[Fundamental Theorem of Arithmetic]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $n\in\omega$ and let_ $X_1,\dots,X_n$ _be countable sets. Then_ $\prod_{i=1}^nX_i$ _is countable._

```

_Proof_. By induction, it suffices to show that $X_1\times X_2$ is countable. Since $X_1$ and $X_2$ are countable, there exist injections $\phi_1:X_1\into\omega$ and $\phi_2:X_2\into\omega$. Then
$$\begin{equation}
    \phi:X_1\times X_2\to\omega\times\omega\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \tpl{x_1,x_2}\mapsto\tpl{\phi_1\l(x_1\r),\phi_2\l(x_2\r)}
\end{equation}$$
is an injection, so it suffices to show that $\omega\times\omega$ injects into $\omega$. Indeed, consider the function
$$\begin{equation}
    \psi:\omega\times\omega\to\omega\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \tpl{n,m}\mapsto2^n3^m.
\end{equation}$$
Then, if $f\l(n_1,m_1\r)=f\l(n_2,m_2\r)$ for any $n_1,m_1,n_2,m_2\in\omega$, the Fundamental Theorem of Arithmetic forces $\tpl{n_1,m_1}=\tpl{n_2,m_2}$. Thus $\psi$ is injective, so we are done.<span style="float:right;">$\blacksquare$</span>
