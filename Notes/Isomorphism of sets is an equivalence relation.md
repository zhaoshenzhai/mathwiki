<div class="topSpace"></div>

Date Created: 27/01/2022 17:19:03
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Identity function is the identity of function composition]]
References: [[Russel's Paradox]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: [[Isomorphism of objects is an equivalence relation]]

``` ad-Proposition
title: Proposition.

The relation $\iso$ on any collection of sets is an equivalence relation.

```

<b>Remark.</b> Here, $\iso$ is taken as a ‘binary relation$\textrm{'}$ defined by $X\iso Y$ iff there exists an isomorphism $f:X\to Y$; it is <i>not</i> a binary relation in the strict sense since the universal class $V$ is not a set.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $X,Y,Z$ be sets.
* (Reflexivity): Since $\id_X\circ\id_X=\id_X$, we see that that $\id_X$ is invertible with $\id_X^{-1}=\id_X$.

* (Symmetry): If $X\iso Y$, then there exists an invertible function $f:X\to Y$. It suffices to show that $f^{-1}$ has both a left and right-inverse, but this follows directly from the fact that $f^{-1}$ is the inverse of $f$, which states
$$\begin{equation}
    f^{-1}\circ f=\id_X\ \ \ \ \textrm{and}\ \ \ \ f\circ f^{-1}=\id_Y.
\end{equation}$$
* (Transitivity): If $X\iso Y$ and $Y\iso Z$, then there exist invertible functions $f:X\to Y$ and $g:Y\to Z$. It suffices to show that $g\circ f$ has an inverse. Indeed, we claim that $\l(g\circ f\r)^{-1}=f^{-1}\circ g^{-1}$. To see this, compute
$$\begin{equation}
    \begin{aligned}
        \l(g\circ f\r)\circ\l(f^{-1}\circ g^{-1}\r)&=g\circ\l(f\circ f^{-1}\r)\circ g^{-1} && \textrm{Composition is associative} \\
        &=g\circ\id_Y\circ g^{-1} && \textrm{Definition of the inverse} \\
        &=g\circ g^{-1} && \textrm{Identity function is the identity of function composition} \\
        &=\id_Z && \textrm{Definition of the inverse}
    \end{aligned}
\end{equation}$$
and
$$\begin{equation}
    \begin{aligned}
        \l(f^{-1}\circ g^{-1}\r)\circ\l(g\circ f\r)&=f^{-1}\circ\l(g^{-1}\circ g\r)\circ f && \textrm{Composition is associative} \\
        &=f^{-1}\circ\id_Y\circ f && \textrm{Definition of the inverse} \\
        &=f^{-1}\circ f && \textrm{Identity function is the identity of function composition} \\
        &=\id_X. && \textrm{Definition of the inverse}
    \end{aligned}
\end{equation}$$
from which it follows that $f^{-1}\circ g^{-1}$ is both a left and a right-inverse of $g\circ f$.<span style="float:right;">$\blacksquare$</span>
