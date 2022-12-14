---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 25/02/2022 13:16:20
Tags: #Proposition #Later/Category_Theory

Proved by: [[Category of sets is a locally-small category]], [[Axiom Schema of Specification]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The category of relations $\catrel$ (with objects $\tpl{X,\rho}$ and morphisms relation-preserving maps) is a locally-small category._

```

_Proof_.  It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\catset$; $\catrel$ is locally-small follows from the fact that for all pairs $\tpl{X,\rho}$ and $\tpl{Y,\sigma}$, we have that
$$\begin{equation}
    \hom\l(\tpl{X,\rho},\tpl{Y,\sigma}\r)\subseteq Y^X
\end{equation}$$
and is thus a set by $\axispec$.
* Take $\tpl{X,\rho}\in\obj\l(\catrel\r)$ and $x_1,x_2\in X$. If $\tpl{x_1,x_2}\in\rho$, observe that
$$\begin{equation}
    \tpl{\id_{\tpl{X,\rho}}\l(x_1\r),\id_{\tpl{X,\rho}}\l(x_2\r)}=\tpl{\id_X\l(x_1\r),\id_X\l(x_2\r)}=\tpl{x_1,x_2}\in\rho
\end{equation}$$
too and thus $\id_{\tpl{X,\rho}}\in\hom\l(X,X\r)$.

* Take morphisms $f:\tpl{X,\rho}\to\tpl{Y,\sigma}$ and $g:\tpl{Y,\sigma}\to\tpl{Z,\tau}$; we need to prove that for all $x_1,x_2\in X$,
$$\begin{equation}
    \tpl{x_1,x_2}\in\rho\ \ \ \ \Rightarrow\ \ \ \ \tpl{\l(g\circ f\r)\l(x_1\r),\l(g\circ f\r)\l(x_2\r)}\in\tau.
\end{equation}$$
To do so, observe that $f\l(x_1\r)$ and $f\l(x_2\r)$ are elements in $Y$ such that $\tpl{f\l(x_1\r),f\l(x_2\r)}\in\sigma$, so, since $g$ is a morphism, we have that $\tpl{g\l(f\l(x_1\r)\r),g\l(f\l(x_2\r)\r)}\in\tau$. The result then follows from the definition of composition of functions.<span style="float:right;">$\blacksquare$</span>
