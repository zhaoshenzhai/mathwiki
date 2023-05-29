<div class="topSpace"></div>

Date Created: 18/02/2022 16:17:33
Tags: #Type/Proposition #Later/Topology

Proved by: [[Criteria for fineness w.r.t. bases]], [[Subspace topology (basis)]], [[Product topology (basis; component from bases)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $I\coloneqq\l[0,1\r]\subseteq\R$, $<$ be the standard ordering on $\R$ restricted to $I$, and let $\sqsubset$ be the lexicographical ordering on $\R^2$. Then the subspace topology $\mc{T}_\textrm{sb}\coloneqq\l.\mc{T}\l(\sqsubset\r)\r|_{I^2}$ on $I^2$ is strictly finer than the product topology $\mc{T}_\textrm{pr}\coloneqq\mc{T}\l(<\r)^2$ on $I^2$.

```

_Proof_. Let $\mc{B}_\textrm{sb}$ and $\mc{B}_\textrm{pr}$ be bases for $\mc{T}_\textrm{sb}$ and $\mc{T}_\textrm{pr}$, respectively. Take $\tpl{x,y}\in I^2$ and $B_\textrm{pr}\in\mc{B}_\textrm{pr}$ containing $\tpl{x,y}$; it suffices to find some basis element $B_\textrm{sb}\in\mc{B}_\textrm{sb}$ such that $\tpl{x,y}\in B_\textrm{sb}\subseteq B_\textrm{pr}$. This is done graphically below, where the other cases ($\textrm{`}$bottom$\textrm{'}$, $\textrm{`}$right$\textrm{'}$, and the three $\textrm{`}$corners$\textrm{'}$) are also completely analogous.

![[Images/2022-02-18_215655/image.svg|530]]

The point $\tpl{x,y}$ is indicated in red and the basis $B_\textrm{sb}$ is indicated by green. Let $\mc{B}$ be the basis generating $\mc{T}\l(\sqsubset\r)$.

* (Interior): This is obvious; the same green interval is a basis element in $\mc{B}$ which is then intersected with $I^2$.

* (Top): The yellow interval (which extends downwards to the bottom of the green interval) is a basis element in $\mc{B}$ which results in the green interval when intersected with $I^2$. Note that the $\textrm{`}$top side$\textrm{'}$ of the shaded rectangle is included since intervals of the type $\l(a,1\r]$ are basis elements that generate $\mc{T}\l(<\r)$.
* (Left): Similarly for when $\tpl{x,y}$ is in the interior of $I^2$, but note that the $\textrm{`}$left-side$\textrm{'}$ of the shaded rectangle is included since intervals of the type $\l[0,b\r)$ are basis elements that generate $\mc{T}\l(<\r)$.
* (Corner): Combine the arguments above.

It follows then that $\mc{T}_\textrm{pr}\subseteq\mc{T}_\textrm{sb}$. To see that the converse does not hold, take any $\tpl{x,y}$ as in the first case; that is, take $\tpl{x,y}\in I^2$ such that $0<x,y<1$, and take any such green interval $B_\textrm{sb}$. Any basis $B_\textrm{pr}\in\mc{B}_\textrm{pr}$ containing $\tpl{x,y}$ necessarily contains some point $\tpl{x',y}$ where $x<x'\in B_\textrm{pr}$ but $x'\not\in B_\textrm{sb}$, so $B_\textrm{pr}\not\subseteq B_\textrm{sb}$ and thus $\mc{T}_\textrm{sb}\not\subseteq\mc{T}_\textrm{pr}$.<span style="float:right;">$\blacksquare$</span>
