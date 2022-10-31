<div class="topSpace"></div>

Date Created: 28/10/2022 15:06:25
Tags: #Proposition #Courses/MATH235

Proved by: [[Subgroup Test]], [[Basic properties of group homomorphisms]], [[Normal iff stable under conjuation]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{G_1,e_1}$ and $\tpl{G_2,e_2}$ be groups and consider a homomorphism $\phi:G_1\to G_2$. Then, for every subgroup $H_2\subseteq G_2$, _$\preim_\phi\!\l(H_2\r)$ _is a subgroup of $G_2$. Furthermore, if $H_2\nsubgrpeq G_2$, then_ $\preim_\phi\!\l(H_2\r)\nsubgrpeq G_1$_._

```

_Proof_. We use the Subgroup Test.
* (Identity): Since $\phi\l(e_1\r)=e_2$, we see that $e_1\in\preim_\phi\!\l(H_2\r)$.

* (Closed under operation): Take $g_1,g_1'\in\preim_\phi\!\l(H_2\r)$, so there exist $g_2,g_2'\in H_2$ such that $\phi\l(g_1\r)=g_2$ and $\phi\l(g_1'\r)=g_2'$. Hence
$$\begin{equation}
    \phi\l(g_1g_1'\r)=\phi\l(g_1\r)\phi\l(g_1'\r)=g_2g_2'\in H_2.
\end{equation}$$
* (Closed under inversion): Take $g_1\in\preim_\phi\!\l(H_2\r)$, so there exists $g_2\in H_2$ such that $\phi\l(g_1\r)=g_2$. Then
$$\begin{equation}
    \phi\l(g_1^{-1}\r)=\l[\phi\l(g_1\r)\r]^{-1}=g_2^{-1}\in H_2.
\end{equation}$$

Assume now that $H_2\nsubgrpeq G_2$; it suffices to show that $g_1\l[\preim_\phi\!\l(H_2\r)\r]g_1^{-1}\subseteq\preim_\phi\!\l(H_2\r)$. Indeed, take $k\in\preim_\phi\!\l(H_2\r)$, so $\phi\l(k\r)=k'$ for some $k'\in H_2$. Then
$$\begin{equation}
    \phi\l(g_1kg_1^{-1}\r)=\phi\l(g_1\r)\phi\l(k\r)\phi\l(g^{-1}\r)=\phi\l(g_1\r)k'\l[\phi\l(g_1\r)\r]^{-1}\in H_2,
\end{equation}$$
where the membership follows from the fact that $H_2\nsubgrpeq G_2$. Thus $g_1kg_1^{-1}\in\preim_\phi\!\l(H_2\r)$.<span style="float:right;">$\blacksquare$</span>
