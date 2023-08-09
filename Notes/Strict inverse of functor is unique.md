<div class="topSpace"></div>

Date Created: 11/03/2022 21:51:28
Tags: #Type/Proposition #Topic/Category_Theory/Later

Proved by: [[Composition of functors is associative]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\cat{C}$ and $\cat{D}$ be categories and fix a strictly invertible functor $\ms{F}:\cat{C}\to\cat{D}$. Then the strict inverse of $\ms{F}$ is unique.

```

<i>Proof.</i> If $\ms{G},\ms{G}':\cat{D}\to\cat{C}$ are both strict inverses of $\ms{F}$, then

$\begin{align}
    \ms{G}&=\ms{G}\circ\Id_\cat{D}&&\textrm{Identity functor is the identity of functor composition}\\
    &=\ms{G}\circ\l(\ms{F}\circ\ms{G}'\r)&&\ms{G}'\textrm{ is a strict right-inverse of }\ms{F}\\
    &=\l(\ms{G}\circ\ms{F}\r)\circ\ms{G}'&&\textrm{Composition of functors is associative}\\
    &=\Id_\cat{C}\circ\ms{G}'&&\ms{G}\textrm{ is a strict left-inverse of }\ms{F}\\
    &=\ms{G}'.&&\textrm{Identity functor is the identity of functor composition}\qedin
\end{align}$
