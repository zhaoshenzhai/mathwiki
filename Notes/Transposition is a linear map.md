<div class="topSpace"></div>

Date Created: 07/05/2022 17:14:04
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^+$. Then the transposition function_
$$\begin{equation}
    \begin{aligned}
        \l(\slot\r)^\trans:\mat{m\times n}{K}&\to\mat{n\times m}{K} \\
        \l[a_{ij}\r]&\mapsto\l[a_{ji}\r]
    \end{aligned}
\end{equation}$$
_is a linear map._

```

_Proof_. Take $\alpha\in K$ and $\l[a_{ij}\r],\l[b_{ij}\r]\in\mat{m\times n}{K}$, and observe that
$$\begin{align}
    \l(\alpha\l[a_{ij}\r]+\l[b_{ij}\r]\r)^\trans&=\l[\alpha a_{ij}+b_{ij}\r]^\trans && \textrm{Matrix arithmetic} \\
    &=\l[\alpha a_{ji}+b_{ji}\r] && \textrm{Definition of transposition} \\
    &=\alpha\l[a_{ji}\r]+\l[b_{ji}\r] && \textrm{Matrix arithmetic} \\
    &=\alpha\l[a_{ij}\r]^\trans+\l[b_{ij}\r]^\trans. && \textrm{Definition of transposition}\qedin
\end{align}$$
