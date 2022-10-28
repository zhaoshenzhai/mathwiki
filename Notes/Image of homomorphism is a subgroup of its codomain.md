<div class="topSpace"></div>

Date Created: 26/10/2022 12:05:44
Tags: #Proposition #Courses/MATH235

Proved by: [[Subgroup Test]], [[Basic properties of group homomorphisms]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{G_1,e_1}$ and $\tpl{G_2,e_2}$ be groups and consider a homomorphism $\phi:G_1\to G_2$. Then, for every subgroup $H_1\subseteq G_1$,_ $\im_\phi\!\l(H_1\r)$ _is a subgroup of $G_2$. In particular, $\im\phi\subseteq G_2$ is a subgroup._

```

_Proof_. We use the Subgroup Test.
* (Identity): Since $e_1\in H_1$, we have that $e_2=\phi\l(e_1\r)\in\im_\phi\!\l(H_1\r)$.
* (Closed under operation): Take $g_2,g_2'\in\im_\phi!\l(H_1\r)$, so $g_2=\phi\l(g_1\r)$ and $g_2'=\phi\l(g_1'\r)$ for some $g_1,g_1'\in H_1$. Hence $g_1g_1'\in H_1$, so
$$\begin{equation}
    g_1g_2'=\phi\l(g_1\r)\phi\l(g_1'\r)=\phi\l(g_1g_1'\r)\in\im_\phi!\l(H_1\r).
\end{equation}$$
* (Closed under inversion): Take $g_2\in\im_\phi!\l(H_1\r)$, so $g_2=\phi\l(g_1\r)$ for some $g_1\in H_1$. Hence $g_1^{-1}\in H_1$, so
$$\begin{equation}
    g_2^{-1}=\l[\phi\l(g_1\r)\r]^{-1}=\phi\l(g_1^{-1}\r)\in\im_\phi!\l(H_1\r).\qedin
\end{equation}$$
