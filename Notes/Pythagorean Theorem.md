<div class="topSpace"></div>

Date Created: 26/06/2022 16:54:24
Tags: #Type/Theorem #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Pythagoras).

Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If $u\perp v$, then $\|u+v\|^2=\|u\|^2+\|v\|^2$. The converse holds if $K=\R$.

```

_Proof_. Simply observe that
$$\begin{equation}
    \|u+v\|^2=\inprod{u+v}{u+v}=\inprod{u}{u}+\inprod{u}{v}+\bar{\inprod{u}{v}}+\inprod{v}{v}=\|u\|^2+\|v\|^2+2\Re\inprod{u}{v}.
\end{equation}$$
Thus, if $\inprod{u}{v}=0$, then $\|u+v\|^2=\|u\|^2+\|v\|^2$. Conversely, if $K=\R$, then $\Re\inprod{u}{v}=\inprod{u}{v}$ and the result follows.<span style="float:right;">$\blacksquare$</span>
