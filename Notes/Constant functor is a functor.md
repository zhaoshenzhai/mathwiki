<br />
<br />

Date Created: 15/03/2022 13:00:33
Tags: #Proposition #Closed 

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\cat{J}$ and $\cat{C}$ be categories and fix $C\in\obj\l(\cat{C}\r)$. Then the constant functor $\ms{C}_C:\cat{J}\to\cat{C}$ is a covariant functor._

```

_Proof_. It suffices to verify the axioms of a covariant functor.
* ($\axifunctor[1]$): Take $j\in\obj\l(\cat{J}\r)$ and observe that $\ms{C}_C\l(\id_j\r)=\id_C=\id_{\ms{C}_C\l(j\r)}$.
* ($\axifunctor[2]$): Take $f:j\to k$ and $g:k\to l$ for any $j,k,l\in\obj\l(\cat{J}\r)$ and observe that
$$\begin{equation}
    \ms{C}_C\l(g\circ f\r)=\id_C=\id_C\circ\id_C=\ms{C}_C\l(g\r)\circ\ms{C}_C\l(f\r).\qedin
\end{equation}$$
