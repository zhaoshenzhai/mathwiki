<div class="topSpace"></div>

Date Created: 17/02/2022 13:22:37
Tags: #Proposition #Closed 

Proved by: [[Rationals is dense in reals]], [[Root 2 is not rational]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{\Q,<}$ be the set of rational numbers equipped with its standard ordering and fix the subset_
$$\begin{equation}
    Y\coloneqq\l\{y\in\Q\mid0<y\land y^2<2\r\}.
\end{equation}$$
_Then $Y$ is convex in $\Q$ but cannot be written as an interval in $\Q$._

```

_Proof_. The fact that $Y$ is convex is easy to check, simply take $p,q\in Y$ with $p<q$ and take $y\in\l(p,q\r)_\Q$. Observe that $0<p<y$ and $y^2<q^2<2$, so $y\in Y$ and thus $\l(p,q\r)_\Q\subseteq Y$. Suppose now that there exist $a,b\in\Q$ such that $Y=\l(a,b\r)_\Q$; it is easy to see that $a=0$ since $<$ is a total order.
* ($a<0$): Observe that $a/2\in\l(a,b\r)_\Q$ but $a/2\not\in Y$, a contradiction.

* ($a>0$): By the Archimedean Property of $\R$, there exists $n\in\N$ such that $a^2/2<n<n^2$, so $\l(a/n\r)^2<2$ and thus $a/n\in Y$. However, observe that $a/n<a$ and thus $a/n\not\in\l(a,b\r)_\Q$, a contradiction.

Thus $Y=\l(0,b\r)_\Q$ for some $b\in\Q$; since $<$ is a total order, either $b^2=2$, $b^2<2$, or $b^2>2$. Recall that $\sqrt{2}\not\in\Q$, so $b^2\neq2$ and thus either $b^2<2$ or $b^2>2$.
* ($b^2<2$): It follows that $b<\sqrt{2}$ and since $\Q$ is dense in $\R$, there exists some $y\in\Q$ such that $b<y<\sqrt{2}$. Observe that $y>0$, so $y^2<2$ and thus $y\in Y$. However, we also have $b<y$, so $y\not\in\l(0,b\r)_\Q$ and we arrive at a contradiction.

* ($b^2>2$): It follows that $\sqrt{2}<b$ and since $\Q$ is dense in $\R$, there exists some $y\in\Q$ such that $\sqrt{2}<y<b$. Observe that $y>0$, so $y^2>2$ and thus $y\not\in Y$. However, we also have $y<b$, so $y\in\l(0,b\r)_\Q$ and we arrive at a contradiction.

It follows that $Y$ cannot be of the form of an open interval in $\Q$. Similarly, it is impossible for $Y$ to be of the form $\l(a,b\r]$, $\l[a,b\r)$, or $\l[a,b\r]$ in $\Q$.<span style="float:right;">$\blacksquare$</span>
