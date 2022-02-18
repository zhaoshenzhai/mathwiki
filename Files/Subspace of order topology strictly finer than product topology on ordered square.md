<br />
<br />

Date Created: 18/02/2022 16:17:33
Tags: #Proposition #Closed 

Proved by: [[Criteria for fineness w.r.t bases]], [[Subspace topology (basis)]], [[Product topology (basis; component from bases)]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $I\coloneqq\l[0,1\r]\subseteq\R$, $<$ be the standard ordering on $\R$ restricted to $I$, and let $\sqsubset$ be the lexicographical ordering on $\R^2$. Then the subspace topology_ $\mc{T}_\textrm{sb}\coloneqq\l.\mc{T}\l(\sqsubset\r)\r|_{I^2}$ _on $I^2$ is strictly finer than the product topology_ $\mc{T}_\textrm{pr}\coloneqq\mc{T}\l(<\r)^2$ on $I^2$_._

```

_Proof_. Let $\mc{B}_\textrm{sb}$ and $\mc{B}_\textrm{pr}$ be bases for $\mc{T}_\textrm{sb}$ and $\mc{T}_\textrm{pr}$, respectively. Take $\l\langle x,y\r\rangle\in I^2$ and $B\in\mc{B}_\textrm{pr}$ containing $\l\langle x,y\r\rangle$; it suffices to find some basis element $C\in\mc{B}_\textrm{sb}$ such that $\l\langle x,y\r\rangle\in C\subseteq B$. This is done graphically below, where the other cases ($\textrm{`}$bottom$\textrm{'}$, $\textrm{`}$right$\textrm{'}$, and the three $\textrm{`}$corners$\textrm{'}$) are also completely analogous.

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/18-02-2022_2156/image.svg", width=50%></center>

The point $\l\langle x,y\r\rangle$ is indicated in red and the basis $C$ is indicated by green. Let $\mc{B}$ be the basis generating $\mc{T}\l(\sqsubset\r)$.

* (Interior): This is obvious; the same green interval is a basis element in $\mc{B}$ which is then intersected with $I^2$.

* (Top): The yellow interval (which extends downwards to the bottom of the green interval) is a basis element in $\mc{B}$ which results in the green interval when intersected with $I^2$. Note that the $\textrm{`}$top side$\textrm{'}$ of the shaded rectangle is included since intervals of the type $\l(a,1\r]$ are basis elements that generate $\mc{T}\l(<\r)$.
* (Left): Similarly for when $\l\langle x,y\r\rangle$ is in the interior of $I^2$, but note that the $\textrm{`}$left-side$\textrm{'}$ of the shaded rectangle is included since intervals of the type $\l[0,b\r)$ are basis elements that generate $\mc{T}\l(<\r)$.
* (Corner): Combine the arguments above.

It follows then that $\mc{T}_\textrm{pr}\subseteq\mc{T}_\textrm{sb}$. To see that the converse does not hold, take any $\l\langle x,y\r\rangle$ as in the first case, that is, take $\l\langle x,y\r\rangle\in I^2$ such that $0<x,y<1$, and take any such green interval $C$. Any basis $B\in\mc{B}_\textrm{pr}$ containing $\l\langle x,y\r\rangle$ necessarily contains some point $\l\langle x',y\r\rangle$ where $x<x'\in B$ but $x'\not\in C$, so $B\not\subseteq C$ and thus $\mc{T}_\textrm{sb}\not\subseteq\mc{T}_\textrm{pr}$.<span style="float:right;">$\blacksquare$</span>
