<br />
<br />

Date Created: 12/03/2022 18:33:26
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$, $\cat{D}$, $\cat{E}$, and $\cat{F}$ be categories and consider functors_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-13_003038/image.svg", width=220></center>

_Then $\l(\ms{H}\circ\ms{G}\r)\circ\ms{F}=\ms{H}\circ\l(\ms{G}\circ\ms{F}\r)$; that is, the diagram_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-13_003322/image.svg", width=220></center>

_commutes._

```

_Proof_. We shall prove that $\l[\l(\ms{H}\circ\ms{G}\r)\circ\ms{F}\r]^{\obj}=\l[\ms{H}\circ\l(\ms{G}\circ\ms{F}\r)\r]^{\obj}$; the proof for the morphisms part is identical. Take $X\in\obj\l(\cat{C}\r)$; the result follows by repeated application of the definition:

$\begin{align}
    \l[\l(\ms{H}\circ\ms{G}\r)\circ\ms{F}\r]^{\obj}\l(X\r)&=\l(\ms{H}\circ\ms{G}\r)^{\obj}\l[\ms{F}^{\obj}\l(X\r)\r]\\
    &=\ms{H}^{\obj}\l(\ms{G}^{\obj}\l(\ms{F}^{\obj}\l(X\r)\r)\r)\\
    &=\ms{H}^{\obj}\l[\l(\ms{G}\circ\ms{F}\r)^{\obj}\l(X\r)\r]\\
    &=\l[\ms{H}\circ\l(\ms{G}\circ\ms{F}\r)\r]^{\obj}\l(X\r).\qedin
\end{align}$
