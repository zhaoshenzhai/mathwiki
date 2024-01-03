---
mathLink: Properties of $\Isom M^n_\kappa$
---

<div class="topSpace"></div>

Date Created: 15/09/2023 22:09:32
References: #Ref/BH99
Tags: #Type/Proposition #Topic/Metric_Geometry

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Fix $n\geq1$ and $\kappa\in\R$. Then $\Isom M^n_\kappa$ acts $k$-transitively for all $k\geq1$, and any isometry $\phi\in\Isom M^n_\kappa$ can be written as a composition of at most $n+1$ reflections through hyperplanes.

```

<i>Proof.</i> For the first claim, we proceed by induction on $k$. The base with $k=1$ hold by considering the hyperplane bisector of $x$ and $y$. Assume now that there is an isometry $\phi$ such that $\phi\l(x_i\r)=y_i$ for all $i<k$. If $\phi\l(x_k\r)=y_k$, we are done. Otherwise, let $r$ be the reflection mapping $\phi\l(x_k\r)$ to $y_k$. For $i<k$, note that
$$\begin{equation}
    d\l(y_k,y_i\r)=d\l(x_k,x_i\r)=d\l(\phi\l(x_k\r),\phi\l(x_i\r)\r)=d\l(\phi\l(x_k\r),y_i\r),
\end{equation}$$
so $\phi\l(x_i\r)=y_i$ lies in the hyperplane bisector of $\phi\l(x_k\r)$ and $y_k$ and is hence fixed by $r$. Thus $r\circ\phi\l(x_j\r)=y_j$ for all $j$, so $r\circ\phi$ is the desired isometry. For the second claim, we need a lemma.
* If $\phi\neq\id$, then its fixed points is contained in a hyperplane. Indeed, there is some $x\in M^n_\kappa$ such that $\phi\l(x\r)\neq x$. Then any $y\in M^n_\kappa$ fixed by $\phi$ is contained in the hyperplane bisector of $x$ and $\phi\l(x\r)$, since $d\l(x,y\r)=d\l(\phi\l(x\r),\phi\l(y\r)\r)=d\l(\phi\l(x\r),y\r)$.

Fix a collection of $n+1$ points $x_i\in M^n_\kappa$ in general position and set $y_i\coloneqq\phi\l(x_i\r)$. By the first claim, there is an isometry $\psi:x_i\mapsto y_i$ for all $i$ that can be written as the composition of at most $n+1$ reflections through hyperplanes. But then $\psi^{-1}\circ\phi$ fixes each $x_i$, so the lemma forces $\phi=\psi$.<span style="float:right;">$\blacksquare$</span>
