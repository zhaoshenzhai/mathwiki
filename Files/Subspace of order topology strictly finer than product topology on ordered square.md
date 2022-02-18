<br />
<br />

Date Created: 18/02/2022 16:17:33
Tags: #Proposition #In_Progress

Proved by: [[Criteria for fineness w.r.t bases]], [[Subspace topology (basis)]], [[Product topology (basis; component from bases)]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $I\coloneqq\l[0,1\r]\subseteq\R$, $<$ be the standard ordering on $\R$ restricted to $I$, and let $\sqsubset$ be the lexicographical ordering on $\R^2$. Then the subspace topology_ $\mc{T}_\textrm{sb}\coloneqq\l.\mc{T}\l(\sqsubset\r)\r|_{I^2}$ _on $I^2$ is strictly finer than the product topology_ $\mc{T}_\textrm{pr}\coloneqq\mc{T}\l(<\r)^2$ on $I^2$_._

```

_Proof_. Let $\mc{B}_\textrm{sb}$ and $\mc{B}_\textrm{pr}$ be bases for $\mc{T}_\textrm{sb}$ and $\mc{T}_\textrm{pr}$, respectively. Take $\l\langle x,y\r\rangle\in I^2$ and $B\in\mc{B}_\textrm{pr}$ containing $\l\langle x,y\r\rangle$; it suffices to find some basis element $C\in\mc{B}_\textrm{sb}$ such that $x\in C\subseteq B$. This is done graphically below, where the other cases ($\textrm{`}$bottom$\textrm{'}$, $\textrm{`}$right$\textrm{'}$, and the three $\textrm{`}$corners$\textrm{'}$) are also completely analogous.

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/18-02-2022_2156/image.svg"></center>
