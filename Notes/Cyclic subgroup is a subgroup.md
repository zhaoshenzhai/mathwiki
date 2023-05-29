<div class="topSpace"></div>

Date Created: 27/09/2022 12:42:09
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{G,\ast}$ be a group and fix $x\in G$. Then $\gen{x}$ is the smallest subgroup of $G$ containing $x$ in the sense that if $H\subseteq G$ is a subgroup containing $x$, then $\gen{x}\subseteq H$.

```

<i>Proof.</i> We shall first apply the Subgroup Test to show that $\gen{x}\subseteq G$ is indeed a subgroup.
* Since $e=g^0$ and $0\in\Z$, we see that $e\in\gen{x}$.

* Take $g_1,g_2\in\gen{x}$, so there exist integers $n_1,n_2\in\Z$ such that $g_1=x^{n_1}$ and $g_2=x^{n_2}$. Then
$$\begin{equation}
    g_1g_2=x^{n_1}x^{n_2}=x^{n_1n_2},
\end{equation}$$
and since $n_1n_2\in\Z$, we see that $g_1g_2\in\gen{x}$.
* Take $g\in\gen{x}$, so there exists some $n\in\Z$ such that $g=x^n$. Then $g^{-1}=\l(x^n\r)^{-1}=x^{-n}$, and since $-n\in\Z$, we see that $g^{-1}\in\gen{x}$.

Now let $H\subseteq G$ be a subgroup containing $x$. Then $x^n\in H$ for all $n\in\Z$, so $\gen{x}\subseteq H$.<span style="float:right;">$\blacksquare$</span>
