<div class="topSpace"></div>

Date Created: 13/10/2022 13:43:43
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $H\subseteq G$ be a subgroup of a group $G$ and fix $g_1,g_2\in G$. Then the following are equivalent.
1. $g_1H=g_2H$.
2. $Hg_1^{-1}=Hg_2^{-1}$.
3. $g_1H\subseteq g_2H$.
4. $g_2\in g_1H$.
5. $g_1^{-1}g_2\in H$.

Similarly for right-cosets.

```

_Proof_. We shall prove that $1\Rightarrow2\Rightarrow3\Rightarrow4\Rightarrow5\Rightarrow1$, so all five statements are equivalent.
* ($1\Rightarrow2$): We shall prove that $Hg_1^{-1}\subseteq Hg_2^{-1}$; the other direction is similar. Take $x\in Hg_1^{-1}$, so $\ex h_1\in H:x=h_1g_1^{-1}$. Then $\l(h_1g_1^{-1}\r)^{-1}=g_1h_1^{-1}\in g_1H$, so $g_1h_1^{-1}\in g_2H$ and hence $\ex h_2\in H:g_1h_1^{-1}=g_2h_2$. Observe then that
$$\begin{equation}
    x=h_1g_1^{-1}=\l(g_1h_1^{-1}\r)^{-1}=\l(g_2h_2\r)^{-1}=h_2^{-1}g_2^{-1}\in Hg_2^{-1}.
\end{equation}$$

* ($2\Rightarrow3$): Take $x\in g_1H$, so $\ex h_1\in H:x=g_1h_1$. Then $\l(g_1h_1\r)^{-1}=h_1^{-1}g_1^{-1}\in Hg_1^{-1}$, so $\l(g_1h_1\r)^{-1}\in Hg_2^{-1}$ and hence $\ex h_2\in H:\l(g_1h_1\r)^{-1}=h_2g_2^{-1}$. Observe then that
$$\begin{equation}
    x=g_1h_1=\l(h_2g_2^{-1}\r)^{-1}=g_2h_2^{-1}\in g_2H.
\end{equation}$$
* ($3\Rightarrow4$): Take $x\in g_1H$, so $\ex h_1\in H:x=g_1h_1$. But then $\ex h_2\in H:x=g_2h_2$, so $g_1h_1=g_2h_2$ and hence
$$\begin{equation}
    g_2=\l(g_1h_1\r)h_2^{-1}=g_1\l(h_1h_2^{-1}\r)\in g_1H.
\end{equation}$$
* ($4\Rightarrow5$): Since $g_2\in g_1H$, we see that $\ex h\in H:g_2=g_1h$. Observe then that $g_1^{-1}g_2=h\in H$.
* ($5\Rightarrow1$): Since $g_1^{-1}g_2\in H$ and $H\subseteq G$ is a subgroup, we see that $\l(g_1^{-1}g_2\r)^{-1}=g_2^{-1}g_1\in H$. We shall prove that $g_1H\subseteq g_2H$; the other direction is similar. Take $x\in g_1H$, so $\ex h_1\in H:x=g_1h_1$. Observe then that
$$\begin{equation}
    g_1h_1=\l(g_2g_2^{-1}\r)g_1h_1=g_2\l(g_2^{-1}g_1\r)h_1=g_2\l[\l(g_2^{-1}g_1\r)h_1\r]\in g_2H.\qedin
\end{equation}$$
