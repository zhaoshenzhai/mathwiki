<div class="topSpace"></div>

Date Created: 24/06/2022 11:32:29
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Basic properties of complex conjugation]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a complex vector space. Then every hermitian form $\inprod{\slot}{\slot}:V\times V\to\C$ on $V$ is sesquilinear._

```

_Proof_. It suffices to prove that $\inprod{\slot}{\slot}$ is conjugate-linear is in second slot. Take $v,w_1,w_2\in V$ and $\beta\in\C$, and observe that
$$\begin{align}
    \inprod{v}{\beta w_1+w_2}&=\bar{\inprod{\beta w_1+w_2}{v}} && \textrm{Conjugate-symmetry} \\
    &=\bar{\beta\inprod{w_1}{v}+\inprod{w_2}{v}} && \textrm{Linearity in the first slot} \\
    &=\bar{\beta\inprod{w_1}{v}}+\bar{\inprod{w_2}{v}} && \textrm{$\bar{\l(\slot\r)}$ distributes over $+$} \\
    &=\bar{\beta}\bar{\inprod{w_1}{v}}+\bar{\inprod{w_2}{v}} && \textrm{$\bar{\l(\slot\r)}$ distributes over $\cdot$} \\
    &=\bar{\beta}\bar{\bar{\inprod{v}{w_1}}}+\bar{\bar{\inprod{v}{w_2}}} && \textrm{Conjugate-symmetry} \\
    &=\bar{\beta}\inprod{v}{w_1}+\inprod{v}{w_2}. && \textrm{$\bar{\l(\slot\r)}$ is an involution}\qedin
\end{align}$$
