---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 25/09/2022 19:45:33
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Archimedean Property of R]], [[Omega is an ordinal]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition ($\Q$ is dense in $\R$).

Fix $x,y\in\R$ such that $x<y$. Then there exists some $q\in\Q$ such that $x<q<y$.

```

<i>Proof.</i> By Archimedeanity of $\R$, there exists some $m\in\N$ such that $m\l(y-x\r)>1$. This shows that $x$ and $y$ are at least $1/m$ apart, and in particular
$$\begin{equation}
    x<y-\frac{1}{m}.\cref{\ast}
\end{equation}$$
Fix any $l\in\Q$ with $l<x$, and consider the set $A\coloneqq\l\{q\in\Q\st\ex n\in\N:q=n/m\land l\leq q<y\r\}$. The idea is to ‘sweep’ through all rationals starting from $l$, with each step size being $1/n$, until we reach some rational $n/m$ between $x$ and $y$. Formalizing this, let $I\coloneqq\l\{i\in\N\st i\geq my\r\}$. Archimedeanity of $\R$ furnishes some $j\in\N$ such that $j>my$, so $I\neq\em$. Hence, by well-ordering of $\N$, there exists a minimal element $k\in I$; that is, $k\geq my$ but $k-1<my$. Set
$$\begin{equation}
    p\coloneqq\frac{k-1}{m}.
\end{equation}$$
Thus $p<y$, so it suffices to show that $x<p$. Indeed, $\ref{\ast}$ implies that
$$\begin{equation}
    x<y-\frac{1}{m}\leq\frac{k}{m}-\frac{1}{m}=\frac{k-1}{m}=p,
\end{equation}$$
so we are done.<span style="float:right;">$\blacksquare$</span>
