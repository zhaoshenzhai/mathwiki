<div class="topSpace"></div>

Date Created: 22/01/2022 09:50:41
Tags: #Proposition

Lemma: _Not Applicable_
Proved by: [[Composition of relations is a relation]], [[Cartesian product is monotone w.r.t. subsets]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:X\to Y$ and $g:Y'\to Z$ be functions with $Y\subseteq Y'$. Then the relation $g\circ f$ is a function such that $g\circ f:X\to Z$._

```

_Proof_. To prove that $g\circ f$ is a function, take $x\in\dom\l(g\circ f\r)$; we need to prove that there exists a unique set $z$ such that $\tpl{x,z}\in g\circ f$. Suppose otherwise that $\tpl{x,z},\tpl{x,z'}\in g\circ f$, so, by definition of composition, there exist $y$ and $y'$ such that
$$\begin{equation}
    \tpl{x,y}\in f\land\tpl{y,z}\in g\ \ \ \ \textrm{and}\ \ \ \ \tpl{x,y'}\in f\land\tpl{y',z'}\in g.
\end{equation}$$
Since $f$ is a function, we have that $y=y'$. Similarly, $g$ is a function, so $z=z'$. Thus for all $x\in\dom\l(g\circ f\r)$, there exists a unique $z$ such that $\tpl{x,z}\in g\circ f$, and so $g\circ f$ is a function.

It remains to show that $\dom\l(g\circ f\r)=X$ and $\ran\l(g\circ f\r)\subseteq Z$. The latter is easy, for take $z\in\ran\l(g\circ f\r)$ and observe that there exists some $x$ such that
$$\begin{equation}
    \tpl{x,z}\in g\circ f\subseteq\dom f\times\ran g\subseteq\dom f\times Z.
\end{equation}$$
Thus $z\in Z$. We now prove, by double inclusion, that $\dom\l(g\circ f\r)=X$.
* ($\subseteq$): Take $x\in\dom\l(g\circ f\r)$, so there exists a set $z$ such that $\tpl{x,z}\in g\circ f$. In particular, this implies the existence of some set $y$ such that $\tpl{x,y}\in f$, so $x\in\dom f=X$.

* ($\supseteq$): Take $x\in X$. Since $f$ and $g$ are functions, there exists some $y\in Y$ and $z\in Z$ such that $\tpl{x,y}\in f$ and $\tpl{y,z}\in g$. But then $\tpl{x,z}\in g\circ f$, so $x\in\dom\l(g\circ f\r)$.<span style="float:right;">$\blacksquare$</span>
