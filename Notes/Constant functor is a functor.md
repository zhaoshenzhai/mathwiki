<div class="topSpace"></div>

Date Created: 15/03/2022 13:00:33
Tags: #Type/Proposition #Later/Category_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\cat{J}$ and $\cat{C}$ be categories and fix $C\in\Obj\l(\cat{C}\r)$. Then the constant functor $\ms{C}_C:\cat{J}\to\cat{C}$ is a covariant functor.

```

<i>Proof.</i> It suffices to verify the axioms of a covariant functor.
* Take $j\in\Obj\l(\cat{J}\r)$ and observe that $\ms{C}_C\l(\id_j\r)=\id_C=\id_{\ms{C}_C\l(j\r)}$.
* Take $f:j\to k$ and $g:k\to l$ for any $j,k,l\in\Obj\l(\cat{J}\r)$ and observe that
$$\begin{equation}
    \ms{C}_C\l(g\circ f\r)=\id_C=\id_C\circ\id_C=\ms{C}_C\l(g\r)\circ\ms{C}_C\l(f\r).\qedin
\end{equation}$$
