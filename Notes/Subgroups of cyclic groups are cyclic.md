<div class="topSpace"></div>

Date Created: 26/09/2022 22:50:21
Tags: #Proposition #Courses/MATH235

Proved by: [[Omega is an ordinal]], [[Division Algorithm]], [[Subgroup Test]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a cyclic group. Then every subgroup $H\subseteq G$ is also a cyclic group._

```

_Proof_. Since $G$ is cyclic, there exists some $x\in G$ such that $G=\l\langle x\r\rangle$. We wish to find some $y\in H$ such that $H=\l\langle y\r\rangle$.
* For the trivial case; that is, for $H=\l\{e\r\}$, we have $H=\l\langle e\r\rangle$.

Assume that $H\neq\l\{e\r\}$, so there exists some $g\in H$ such that $g\neq e$. Thus $g\in G$ too, so there exists some $k\in\Z$ such that $g=x^k$. Consider the set
$$\begin{equation}
    S\coloneqq\l\{n\in\N^+\mid x^n\in H\r\}.
\end{equation}$$
Now, since both $g=x^k$ and $g^{-1}=x^{-k}$ are in $H$ and one of $k$ and $-k$ are natural numbers, we see that either $g\in S$ or $g^{-1}\in S$. Well-ordering of $\N$ then furnishes a minimal $l\in S$. Set $y\coloneqq x^l$; we claim that $H=\l\langle y\r\rangle$.
* ($\subseteq$): Take $z\in\l\langle y\r\rangle$, so $z=y^m=\l(x^l\r)^m$ for some $m\in\Z$. Since $x^l=y\in H$ and $H\subseteq G$ is a subgroup, we see that $z\in H$.

* ($\supseteq$): Take $h\in H$, so $h\in G$ and hence $h=x^m$ for some $m\in\Z$; we wish to show that $x^m=h=y^q=\l(x^l\r)^q=x^{ql}$ for some $q\in\Z$. The Division Algorithm applied to $m$ and $l$ furnishes unique integers $q,r\in\Z$ with $0\leq r<l$ such that $m=ql+r$. Then
$$\begin{equation}
    x^m=x^{ql+r}=x^{ql}x^r,
\end{equation}$$
which implies that
$$\begin{equation}
    x^mx^{-ql}=x^{m-ql}=x^{ql+r-ql}=x^r.
\end{equation}$$
Since both $x^m,x^l\in H$, we see that $x^r\in H$. If $0<r<l$, then $r\in S$ which contradicts the minimality of $l\in S$. Thus $r=0$, so
$$\begin{equation}
    h=x^m=x^{ql}=\l(x^l\r)^q=y^q.\qedin
\end{equation}$$
