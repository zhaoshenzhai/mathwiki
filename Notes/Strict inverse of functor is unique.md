<br />
<br />

Date Created: 11/03/2022 21:51:28
Tags: #Proposition #Closed 

Proved by: [[Composition with identities preserve functors]], [[Composition of functors is associative]]
Generalizations: _Not Applicable_

Converses: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ and $\cat{D}$ be categories and fix a functor $\ms{F}:\cat{C}\to\cat{D}$. Then the strict inverse of $\ms{F}$ is unique._

```

_Proof_. If $\ms{G},\ms{G}':\cat{D}\to\cat{C}$ are both strict inverses of $\ms{F}$, then

$\begin{align}
    \ms{G}&=\ms{G}\circ\Id_\cat{D}&&\textrm{Composition with identities preserve functors}\\
    &=\ms{G}\circ\l(\ms{F}\circ\ms{G}'\r)&&\ms{G}'\textrm{ is a strict right inverse of }\ms{F}\\
    &=\l(\ms{G}\circ\ms{F}\r)\circ\ms{G}'&&\textrm{Composition of functors is associative}\\
    &=\Id_\cat{C}\circ\ms{G}'&&\ms{G}\textrm{ is a strict left inverse of }\ms{F}\\
    &=\ms{G}'.&&\textrm{Composition with identities preserve functors}\qedin
\end{align}$
