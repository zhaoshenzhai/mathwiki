<div class="topSpace"></div>

Date Created: 17/10/2022 11:19:42
Tags: #Proposition #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group. Then the conjugacy relation $\sim$ on $G$ defined by_
$$\begin{equation}
    x\sim y\ \ \ \ \ \ \ \ \,\colon\!\Leftrightarrow\ \ \ \ \ \ \ \ \ex g\in G:x=g^{-1}yg
\end{equation}$$
_is an equivalence relation on $G$._

```

_Proof_. We verify the axioms for an equivalence relation on $G$.
* (Reflexive): Take $x\in G$ and observe that $x=e^{-1}xe$.

* (Symmetry): Take $x,y\in G$ such that $x\sim y$, so $\ex g\in G:x=g^{-1}yg$. Observe then that $y=gxg^{-1}=\l(g^{-1}\r)^{-1}xg^{-1}$, so $y\sim x$.
* (Transitivity): Take $x,y,z\in G$ such that $x\sim y\sim z$. Thus $\ex g_1,g-2\in G:x=g_1^{-1}yg_1\land y=g_2^{-1}zg_2$, so
$$\begin{equation}
    x=g_1^{-1}\l(g_2^{-1}zg_2\r)g_1=\l(g_1^{-1}g_2^{-1}\r)z\l(g_2g_1\r)=\l(g_2g_1\r)^{-1}z\l(g_2g_1\r).
\end{equation}$$
Thus $x\sim z$.<span style="float:right;">$\blacksquare$</span>
