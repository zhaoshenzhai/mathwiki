<div class="topSpace"></div>

Date Created: 27/09/2022 12:42:09
Tags: #Proposition #Topics/Group_Theory

Proved by: [[Subgroup Test]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{G,\ast}$ be a group and fix $x\in G$. Then $\cyclic{x}$ is the smallest subgroup of $G$ containing $x$ in the sense that if $H\subseteq G$ is a subgroup containing $x$, then $\cyclic{x}\subseteq H$._

```

_Proof_. We shall first apply the Subgroup Test to show that $\cyclic{x}\subseteq G$ is indeed a subgroup.
* Since $e=g^0$ and $0\in\Z$, we see that $e\in\cyclic{x}$.

* Take $g_1,g_2\in\cyclic{x}$, so there exist integers $n_1,n_2\in\Z$ such that $g_1=x^{n_1}$ and $g_2=x^{n_2}$. Then
$$\begin{equation}
    g_1g_2=x^{n_1}x^{n_2}=x^{n_1n_2},
\end{equation}$$
and since $n_1n_2\in\Z$, we see that $g_1g_2\in\cyclic{x}$.
* Take $g\in\cyclic{x}$, so there exists some $n\in\Z$ such that $g=x^n$. Then $g^{-1}=\l(x^n\r)^{-1}=x^{-n}$, and since $-n\in\Z$, we see that $g^{-1}\in\cyclic{x}$.

Now let $H\subseteq G$ be a subgroup containing $x$. Then $x^n\in H$ for all $n\in\Z$, so $\cyclic{x}\subseteq H$.<span style="float:right;">$\blacksquare$</span>
