<div class="topSpace"></div>

Date Created: 08/03/2022 15:07:03
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category. Then the identity functor_ $\Id_\cat{C}:\cat{C}\to\cat{C}$ _is a covariant functor._

```

_Proof_. It suffices to verify the axioms of a covariant functor.
* ($\axifunctor[1]$): Take $X\in\obj\l(\cat{C}\r)$. The fact that $\Id\l(\id_X\r)=\id_{\Id\l(X\r)}$ follows directly since both evaluate to $\id_X$.
* ($\axifunctor[2]$): Take $f\in\hom\l(X,Y\r)$ and $g\in\hom\l(Y,Z\r)$ for any $X,Y,Z\in\obj\l(\cat{C}\r)$. The fact that $\Id\l(g\circ f\r)=\Id\l(g\r)\circ\Id\l(f\r)$ follows directly since both evaluate to $g\circ f$.<span style="float:right;">$\blacksquare$</span>
