---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 25/09/2022 19:45:33
Tags: #Proposition #Analysis #Courses/MATH254

Proved by: [[Archimedean Property of R]], [[Omega is an ordinal]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition ($\Q$ is dense in $\R$).

_Fix $x,y\in\R$ such that $x<y$. Then there exists some $q\in\Q$ such that $x<q<y$._

```

_Proof_. By Archimedeanity of $\R$, there exists some $m\in\N$ such that $m\l(y-x\r)>1$. This shows that $x$ and $y$ are at least $1/m$ apart, and in particular
$$\begin{equation}
    x<y-\frac{1}{m}.\cref{\ast}
\end{equation}$$
Fix any $l\in\Q$ with $l<x$, and consider the set $A\coloneqq\l\{q\in\Q\mid\ex n\in\N:q=n/m\land l\leq q<y\r\}$. The idea is to $\textrm{`}$sweep$\textrm{'}$ through all rationals starting from $l$, with each step size being $1/n$, until we reach some rational $n/m$ between $x$ and $y$. Formalizing this, let $I\coloneqq\l\{i\in\N\mid i\geq my\r\}$. Archimedeanity of $\R$ furnishes some $j\in\N$ such that $j>my$, so $I\neq\em$. Hence, by well-ordering of $\N$, there exists a minimal element $k\in I$; that is, $k\geq my$ but $k-1<my$. Set
$$\begin{equation}
    p\coloneqq\frac{k-1}{m}.
\end{equation}$$
Thus $p<y$, so it suffices to show that $x<p$. Indeed, $\ref{\ast}$ implies that
$$\begin{equation}
    x<y-\frac{1}{m}\leq\frac{k}{m}-\frac{1}{m}=\frac{k-1}{m}=p,
\end{equation}$$
so we are done.<span style="float:right;">$\blacksquare$</span>
