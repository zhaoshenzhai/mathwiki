<div class="topSpace"></div>

Date Created: 27/10/2022 20:59:39
Tags: #Proposition #Topics/Group_Theory

Proved by: [[Basic properties of groups]], [[Subgroup Test]], [[Normal iff stable under conjuation]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G_1$ and $G_2$ be groups and consider a homomorphism $\phi:G_1\to G_2$. Let $H_1\subseteq G_1$ and $H_2\subseteq G_2$ be subgroups. Then the following properties hold._
* _(Preserves identity): $\phi\l(e_1\r)=e_2$._
* _(Preserve inverses): $\fa g\in G_1:\l[\phi\l(g\r)\r]^{-1}=\phi\l(g^{-1}\r)$._
* _(Image preserve subgroups):_ $\im_\phi\!\l(H_1\r)\subseteq G_2$ _is a subgroup._
* _(Preimage preserve subgroups):_ $\preim_\phi\!\l(H_2\r)\subseteq G_1$ _is a subgroup._
* _(Preimage preserve normality): If $H_2\nsubgrpeq G_2$, then_ $\preim_\phi\!\l(H_2\r)\nsubgrpeq G_1$_._

```

**Remark.** In particular, $\im\phi\subseteq G_2$ and $\ker\phi\nsubgrpeq G_1$ are subgroups.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_.
* Simply compute
$$\begin{equation}
    \begin{gathered}
        e_2\phi\l(e_1\r)=\phi\l(e_1\r)=\phi\l(e_1e_1\r)=\phi\l(e_1\r)\phi\l(e_1\r)\\
        \phi\l(g\r)\phi\l(g\r)^{-1}\!=e_2\!=\phi\l(e_1\r)=\phi\l(gg^{-1}\r)=\phi\l(g\r)\phi\l(g^{-1}\r)
    \end{gathered}
\end{equation}$$
and observe that the results follow from cancellation.

* We use the Subgroup Test.
    * (Identity): Since $e_1\in H_1$, we see that $e_2=\phi\l(e_1\r)\in\im_\phi\!\l(H_1\r)$.
    * (Closed under operation): Take $g_2,g_2'\in\im_\phi\!\l(H_1\r)$, so $g_2=\phi\l(g_1\r)$ and $g_2'=\phi\l(g_1'\r)$ for some $g_1,g_1'\in H_1$. Hence $g_1g_1'\in H_1$, so
    $$\begin{equation}
        g_1g_2'=\phi\l(g_1\r)\phi\l(g_1'\r)=\phi\l(g_1g_1'\r)\in\im_\phi\!\l(H_1\r).
    \end{equation}$$
    * (Closed under inversion): Take $g_2\in\im_\phi\!\l(H_1\r)$, so $g_2=\phi\l(g_1\r)$ for some $g_1\in H_1$. Hence $g_1^{-1}\in H_1$, so
    $$\begin{equation}
        g_2^{-1}=\l[\phi\l(g_1\r)\r]^{-1}=\phi\l(g_1^{-1}\r)\in\im_\phi\!\l(H_1\r).
    \end{equation}$$
* We use the Subgroup Test.
    * (Identity): Since $\phi\l(e_1\r)=e_2\in H_2$, we see that $e_1\in\preim_\phi\!\l(H_2\r)$.
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
