<div class="topSpace"></div>

Date Created: 18/02/2022 16:18:53
Tags: #Type/Proposition #Later/Topology

Proved by: [[Criteria for fineness w.r.t. bases]], [[Product topology (basis; component from bases)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{I^2,\mc{T}_\textrm{or}}$ be the ordered square and let $<$ be the standard ordering on $\R$ restricted to $I$. Then $\mc{T}_\textrm{or}$ is not comparable with the product topology $\mc{T}_\textrm{pr}\coloneqq\mc{T}\l(<\r)^2$ on $I^2$.

```

<i>Proof.</i> Let $\mc{B}_\textrm{or}$ and $\mc{B}_\textrm{pr}$ be bases for $\mc{T}_\textrm{or}$ and $\mc{T}_\textrm{pr}$, respectively. Here, their elements are represented by blue and green intervals, respectively.
* ($\mc{T}_\textrm{or}\not\subseteq\mc{T}_\textrm{pr}$): Take $\tpl{x,y}\coloneqq\tpl{0.5,0.5}\in I^2$ and let
$$\begin{equation}
    B_\textrm{or}\coloneqq\l(\tpl{0.5,0.2},\tpl{0.5,0.8}\r)\in\mc{B}_\textrm{or}
\end{equation}$$

![[Images/2022-02-19_122650/image.svg|160]]

which certainly contains $\tpl{x,y}$. Any basis $B_\textrm{pr}\in\mc{B}_\textrm{pr}$ containing $\tpl{x,y}$ necessarily contains some point $\tpl{x',y}\in B_\textrm{pr}$ where $x'\neq x$ but $\tpl{x',y}\not\in B_\textrm{or}$, so $B_\textrm{pr}\not\subseteq B_\textrm{or}$ and thus $\mc{T}_\textrm{or}\not\subseteq\mc{T}_\textrm{pr}$.
* ($\mc{T}_\textrm{pr}\not\subseteq\mc{T}_\textrm{or}$): Take $\tpl{x,y}\coloneqq\tpl{0.5,0}\in I^2$ and let
$$\begin{equation}
    B_\textrm{pr}\coloneqq\l(0.25,0.75\r)\times\l[0,0.5\r)\in\mc{B}_\textrm{pr}
\end{equation}$$

![[Images/2022-02-19_124825/image.svg|160]]

which certainly contains $\tpl{x,y}$. Any $B_\textrm{or}\in\mc{B}_\textrm{or}$ containing $\tpl{x,y}$ necessarily contains some $\tpl{x',1}\in I^2$ where $x'<x$ but $\tpl{x',1}\not\in B_\textrm{pr}$, so $B_\textrm{or}\not\subseteq B_\textrm{pr}$ and thus $\mc{T}_\textrm{pr}\not\subseteq\mc{T}_\textrm{or}$.<span style="float:right;">$\blacksquare$</span>
