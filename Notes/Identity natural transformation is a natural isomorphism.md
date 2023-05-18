<div class="topSpace"></div>

Date Created: 12/03/2022 17:39:47
Tags: #Type/Proposition #Later/Category_Theory

Proved by: [[Identity functor is the identity of functor composition]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ and $\cat{D}$ be categories and fix a functor $\ms{F}:\cat{C}\to\cat{D}$. Then the identity natural transformation_ $\natid_\ms{F}$ _is a natural isomorphism on $\ms{F}$._

```

_Proof_. It suffices to prove that $\natid_\ms{F}$ is a natural transformation since for all $X\in\Obj\l(\cat{C}\r)$, the morphism $\id_{\ms{F}\l(X\r)}$ are isomorphisms. To this end, take $\alpha:X\to Y$ for any $X,Y\in\Obj\l(\cat{C}\r)$; we need to prove that the diagram

![[Images/2022-03-12_184050/image.svg|220]]

commutes. This is seen by the following computation:

$\begin{align}
    \ms{F}\l(\alpha\r)&=\ms{F}\l(\alpha\r)&&\textrm{Equlity is reflexive}\\
    \ms{F}\l(\id_Y\circ\alpha\r)&=\ms{F}\l(\alpha\circ\id_X\r)&&\textrm{Identity functor is the identity of functor composition}\\
    \ms{F}\l(\id_Y\r)\circ\ms{F}\l(\alpha\r)&=\ms{F}\l(\alpha\r)\circ\ms{F}\l(\id_X\r)&&\axifunctor[2]\textrm{ of }\ms{F}\\
    \id_{\ms{F}\l(Y\r)}\circ\ms{F}\l(\alpha\r)&=\ms{F}\l(\alpha\r)\circ\id_{\ms{F}\l(X\r)}.&&\axifunctor[1]\textrm{ of }\ms{F}\qedin
\end{align}$
