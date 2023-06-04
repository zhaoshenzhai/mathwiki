<div class="topSpace"></div>

Date Created: 27/10/2022 20:59:39
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Characterizations of normality]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $G_1$ and $G_2$ be groups and consider a homomorphism $\phi:G_1\to G_2$. Let $H_1\subseteq G_1$ and $H_2\subseteq G_2$ be subgroups. Then the following properties hold.
* (Preserves identity): $\phi\l(e_1\r)=e_2$.
* (Preserve inverses): $\fa g\in G_1:\l[\phi\l(g\r)\r]^{-1}=\phi\l(g^{-1}\r)$.
* (Image preserve subgroups): $\im_\phi\!\l(H_1\r)\subgrpeq G_2$. Furthermore, if $\phi$ is surjective and $H_1\nsubgrpeq G_1$, then $\im_\phi\!\l(H_1\r)\nsubgrpeq G_2$.
* (Preimage preserve subgroups): $\preim_\phi\!\l(H_2\r)\subgrpeq G_1$. Furthermore, if $H_2\nsubgrpeq G_2$, then $\preim_\phi\!\l(H_2\r)\nsubgrpeq G_1$.

Furthermore, $\phi$ is injective iff $\ker\phi=\l\{e_1\r\}$.

```

<b>Remark.</b> In particular, we have $\im\phi\subgrpeq G_2$ and $\ker\phi\nsubgrpeq G_1$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> 
* Note that $e_2\phi\l(e_1\r)=\phi\l(e_1\r)=\phi\l(e_1e_1\r)=\phi\l(e_1\r)\phi\l(e_1\r)$ and $\phi\l(g\r)\phi\l(g\r)^{-1}\!=e_2\!=\phi\l(e_1\r)=\phi\l(gg^{-1}\r)=\phi\l(g\r)\phi\l(g^{-1}\r)$, so the results follow by cancellation.
* Since $e_1\in H_1$, we see that $e_2=\phi\l(e_1\r)\in\im_\phi\!\l(H_1\r)$. For closure, take $g_2,g_2'\in\im_\phi\!\l(H_1\r)$, so $g_2=\phi\l(g_1\r)$ and $g_2'=\phi\l(g_1'\r)$ for some $g_1,g_1'\in H_1$. Hence $g_1g_1'\in H_1$, so
    $$\begin{equation}
        g_1g_2'=\phi\l(g_1\r)\phi\l(g_1'\r)=\phi\l(g_1g_1'\r)\in\im_\phi\!\l(H_1\r).
    \end{equation}$$
Also, $g_1^{-1}\in H_1$, so $g_2^{-1}=\l[\phi\l(g_1\r)\r]^{-1}=\phi\l(g_1^{-1}\r)\in\im_\phi\!\l(H_1\r)$. Assume now that $\phi$ is surjective and that $H_1\nsubgrpeq G_1$; it suffices to show that $g_2\l[\im_\phi\!\l(H_1\r)\r]g_2^{-1}\subseteq\im_\phi\!\l(H_1\r)$. Indeed, take $k\in\im_\phi\!\l(H_1\r)$, so $\phi\l(k'\r)=k$ for some $k'\in H_1$. Furthermore, since $\phi$ is surjective, $\phi\l(g_1\r)=g_2$ for some $g_1\in G_1$. Then
$$\begin{equation}
    g_2kg_2^{-1}=\phi\l(g_1\r)\phi\l(k'\r)\phi\l(g_1\r)^{-1}=\phi\l(g_1kg_1^{-1}\r)\in\im\phi\!\l(H_1\r)
\end{equation}$$
where the membership follows from the fact that $H_1\nsubgrpeq G_1$. Thus $g_1kg_1^{-1}\in\im_\phi\!\l(H_1\r)$.
* Since $\phi\l(e_1\r)=e_2\in H_2$, we see that $e_1\in\preim_\phi\!\l(H_2\r)$. For closure, take $g_1,g_1'\in\preim_\phi\!\l(H_2\r)$, so $\phi\l(g_1\r)=g_2$ and $\phi\l(g_1'\r)=g_2'$ for some $g_2,g_2'\in H_2$. Then
    $$\begin{equation}
        \phi\l(g_1g_1'\r)=\phi\l(g_1\r)\phi\l(g_1'\r)=g_2g_2'\in H_2.
    \end{equation}$$
Also, observe that $\phi\l(g_1^{-1}\r)=\l[\phi\l(g_1\r)\r]^{-1}=g_2^{-1}\in H_2$. Assume now that $H_2\nsubgrpeq G_2$; it suffices to show that $g_1\l[\preim_\phi\!\l(H_2\r)\r]g_1^{-1}\subseteq\preim_\phi\!\l(H_2\r)$. Indeed, take $k\in\preim_\phi\!\l(H_2\r)$, so $\phi\l(k\r)=k'$ for some $k'\in H_2$. Then
$$\begin{equation}
    \phi\l(g_1kg_1^{-1}\r)=\phi\l(g_1\r)\phi\l(k\r)\phi\l(g^{-1}\r)=\phi\l(g_1\r)k'\l[\phi\l(g_1\r)\r]^{-1}\in H_2,
\end{equation}$$
where the membership follows from the fact that $H_2\nsubgrpeq G_2$. Thus $g_1kg_1^{-1}\in\preim_\phi\!\l(H_2\r)$.

Finally, suppose that $\phi$ is injective and take $g\in\ker\phi$. Then $\phi\l(g\r)=e_2$, but since $\phi\l(e_1\r)=e_2$ too, we see that $g=e_1$. Conversely, suppose that $\phi\l(g\r)=\phi\l(g'\r)$ for some $g,g'\in G_1$. Then $\phi\l(gg'^{-1}\r)=\phi\l(g\r)\phi\l(g'\r)^{-1}=\phi\l(g\r)\phi\l(g\r)^{-1}=e_2$, so $gg'^{-1}=e_1$. Hence $g=g'$, as desired.<span style="float:right;">$\blacksquare$</span>
