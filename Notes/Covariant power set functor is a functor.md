<div class="topSpace"></div>

Date Created: 08/03/2022 14:00:38
Tags: #Proposition #Later/Category_Theory

Proved by: [[Image slash preimage of compositions]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The covariant power set functor $\ms{P}:\catset\to\catset$ is a covariant functor._

```

_Proof_. It suffices to verify the axioms of a covariant functor.
* ($\axifunctor[1]$): Take a set $X$; we need to prove that $\ms{P}\l(\id_X\r)=\id_{\pow\l(X\r)}$. To do so, we simply compare their domains, codomains, and their function values:

    * Recall that $\ms{P}\l(\id_X\r)$ is defined as the function $\im:\pow\l(X\r)\to\pow\l(X\r)$ that sends each subset $S\subseteq X$ to the image $\im_{\id_X}\l(S\r)$ which, by the definition of the identity function, is $S$ itself. Thus$$\begin{equation}
        \dom\ms{P}\l(\id_X\r)=\cdm\ms{P}\l(\id_X\r)=\pow\l(X\r)\ \ \ \ \textrm{and}\ \ \ \ \fa S\in\pow\l(X\r):\l[\ms{P}\l(\id_X\r)\r]\l(S\r)=S.
    \end{equation}$$
    * The fact that $\dom\id_{\pow\l(X\r)}=\cdm\id_{\pow\l(X\r)}=\pow\l(X\r)$ and $\fa S\in\pow\l(X\r):\id_{\pow\l(X\r)}\l(S\r)=S$ follows by definition.
* ($\axifunctor[2]$): Take functions $f:X\to Y$ and $g:Y\to Z$ for any sets $X$, $Y$, and $Z$; we need to prove that $\ms{P}\l(g\circ f\r)=\ms{P}\l(g\r)\circ\ms{P}\l(f\r)$. Again, we compare domains, codomains, and function values:
    * Since $g\circ f:X\to Z$, we see that $\ms{P}:Z^X\to\pow\l(Z\r)^{\pow\l(X\r)}$ and thus$$\begin{equation}
        \dom\ms{P}\l(g\circ f\r)=\pow\l(X\r)\ \ \ \ \textrm{and}\ \ \ \ \cdm\ms{P}\l(g\circ f\r)=\pow\l(Z\r).
    \end{equation}$$
    For the function values, recall that $\ms{P}\l(g\circ f\r)$ is the function that sends each subset $S\subseteq X$ to the image $\im_{g\circ f}\l(S\r)=\im_g\l(\im_f\l(S\r)\r)$ and thus$$\begin{equation}
        \fa S\in\pow\l(X\r):\l[\ms{P}\l(g\circ f\r)\r]\l(S\r)=\im_g\l(\im_f\l(S\r)\r).
    \end{equation}$$
    * By definition, we have that $\dom\ms{P}\l(f\r)=\pow\l(X\r)$, $\cdm\ms{P}\l(f\r)=\dom\ms{P}\l(g\r)=\pow\l(Y\r)$, and $\cdm\ms{P}\l(g\r)=\pow\l(Z\r)$. It follows then that$$\begin{equation}
        \dom\l[\ms{P}\l(g\r)\circ\ms{P}\l(f\r)\r]=\pow\l(X\r)\ \ \ \ \textrm{and}\ \ \ \ \cdm\l[\ms{P}\l(g\r)\circ\ms{P}\l(f\r)\r]=\pow\l(Z\r).
    \end{equation}$$
    For the function values, recall that $\ms{P}\l(f\r)$ sends each subset $S\subseteq X$ to the image $\im_f\l(S\r)$, and $\ms{P}\l(g\r)$ sends each subset $T\subseteq Y$ to the image $\im_g\l(T\r)$. By definition of the composition, we have that$$\begin{equation}
        \fa S\in\pow\l(X\r):\l[\ms{P}\l(g\r)\circ\ms{P}\l(f\r)\r]\l(S\r)=\im_g\l(\im_f\l(S\r)\r).\qedin
    \end{equation}$$
