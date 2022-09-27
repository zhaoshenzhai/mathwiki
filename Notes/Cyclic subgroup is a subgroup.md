<div class="topSpace"></div>

Date Created: 27/09/2022 12:42:09
Tags: #Proposition #Courses/MATH235

Proved by: [[Subgroup Test]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{G,\ast}$ be a group and fix $x\in G$. Then $\l\langle x\r\rangle$ is the smallest subgroup of $G$ containing $x$ in the sense that if $H\subseteq G$ is a subgroup containing $x$, then $\l\langle x\r\rangle\subseteq H$._

```

_Proof_. We shall first apply the Subgroup Test to show that $\l\langle x\r\rangle\subseteq G$ is indeed a subgroup.
* Since $e=g^0$ and $0\in\Z$, we see that $e\in\l\langle x\r\rangle$.

* Take $g_1,g_2\in\l\langle x\r\rangle$, so there exist integers $n_1,n_2\in\Z$ such that $g_1=x^{n_1}$ and $g_2=x^{n_2}$. Then
$$\begin{equation}
    g_1g_2=x^{n_1}x^{n_2}=x^{n_1n_2},
\end{equation}$$
and since $n_1n_2\in\Z$, we see that $g_1g_2\in\l\langle x\r\rangle$.
* Take $g\in\l\langle x\r\rangle$, so there exists some $n\in\Z$ such that $g=x^n$. Then $g^{-1}=\l(x^n\r)^{-1}=x^{-n}$, and since $-n\in\Z$, we see that $g^{-1}\in\l\langle x\r\rangle$.

Now let $H\subseteq G$ be a subgroup containing $x$. Then $x^n\in H$ for all $n\in\Z$, so $\l\langle x\r\rangle\subseteq H$.<span style="float:right;">$\blacksquare$</span>
