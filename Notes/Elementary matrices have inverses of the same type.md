<br />
<br />

Date Created: 08/04/2022 05:58:36
Tags: #Proposition #Closed

Proved by: [[Elementary row operations have inverses of the same type]], [[Left-multiplication by elementary matrix is action by its elementary row operation]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N$. Then all elementary matrices $E\in\mat{n}{K}$ are invertible with inverses of the same type._

```

_Proof_. Let $E=e\l(I\r)$ be an elementary matrix. Since each elementary row operation $e$ is invertible (as a function) with inverse of the same type, we claim that $E'\coloneqq e^{-1}\l(I\r)$ is the inverse of $E$. To this end, we verify that it is both a left and a right inverse thereof.
$$\begin{align}
    E'E&=e^{-1}\l(E\r) \hspace{1in}EE'\hspace{-0.4in}&&=e\l(E'\r) && \textrm{Elementary row operation is left-multiplication by its elementary matrix} \\
    &=e^{-1}\l(e\l(I\r)\r) &&=e\l(e^{-1}\l(I\r)\r) && \textrm{Substitution} \\
    &=\l(e^{-1}\circ e\r)\l(I\r) &&=\l(e\circ e^{-1}\r)\l(I\r) && \textrm{Definition of composition of functions} \\
    &=I &&=I. && \textrm{Definition of inverse function}\qedin
\end{align}$$
