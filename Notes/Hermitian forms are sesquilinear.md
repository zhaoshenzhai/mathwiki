<div class="topSpace"></div>

Date Created: 24/06/2022 11:32:29
Tags: #Proposition

Proved by: [[Basic properties of complex conjugation]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a complex vector space. Then every hermitian form $\bilform{\slot}{\slot}:V\times V\to\C$ on $V$ is sesquilinear._

```

_Proof_. It suffices to prove that $\bilform{\slot}{\slot}$ is conjugate-linear is in second slot. Take $v,w_1,w_2\in V$ and $\beta\in\C$, and observe that
$$\begin{align}
    \bilform{v}{\beta w_1+w_2}&=\bar{\bilform{\beta w_1+w_2}{v}} && \textrm{Conjugate-symmetry} \\
    &=\bar{\beta\bilform{w_1}{v}+\bilform{w_2}{v}} && \textrm{Linearity in the first slot} \\
    &=\bar{\beta\bilform{w_1}{v}}+\bar{\bilform{w_2}{v}} && \textrm{$\bar{\l(\slot\r)}$ distributes over $+$} \\
    &=\bar{\beta}\bar{\bilform{w_1}{v}}+\bar{\bilform{w_2}{v}} && \textrm{$\bar{\l(\slot\r)}$ distributes over $\cdot$} \\
    &=\bar{\beta}\bar{\bar{\bilform{v}{w_1}}}+\bar{\bar{\bilform{v}{w_2}}} && \textrm{Conjugate-symmetry} \\
    &=\bar{\beta}\bilform{v}{w_1}+\bilform{v}{w_2}. && \textrm{$\bar{\l(\slot\r)}$ is an involution}\qedin
\end{align}$$
