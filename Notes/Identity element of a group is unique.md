<div class="topSpace"></div>

Date Created: 04/05/2022 16:22:55
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{G,\ast}$ be a group. Then the identity element of $G$ is unique._

```

_Proof_. Suppose, for sake of contradiction, that $e,e'\in G$ are both identity elements of $G$; that is, suppose
$$\begin{equation}
    g\ast e=g=e\ast g\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ g\ast e'=g=e'\ast g
\end{equation}$$
for all $g\in G$. Since the first set of equalities hold for all $g\in G$, let $g=e'$ and observe that
$$\begin{equation}
    e'\ast e=e'=e\ast e'.
\end{equation}$$
Similarly, we have that
$$\begin{equation}
    e\ast e'=e=e'\ast e,
\end{equation}$$
so, combining the equalities, we see that $e=e'\ast e=e'$.<span style="float:right;">$\blacksquare$</span>
