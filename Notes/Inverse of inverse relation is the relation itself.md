<div class="topSpace"></div>

Date Created: 22/01/2022 09:43:31
Tags: #Proposition

Proved by: [[Inverse of a relation is a relation]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a binary relation. Then $\l(R^{-1}\r)^{-1}=R$._

```

_Proof_. By definition, we have $R^{-1}=\l\{\tpl{y,x}\mid xRy\r\}$. Taking the inverse again, we have

$\begin{alignat}{2}
    \l(R^{-1}\r)^{-1}&=\l\{\tpl{x,y}\mid yR^{-1}x\r\}\\
    &=\l\{\tpl{x,y}\mid xRy\r\}\\
    &=R.\qedin
\end{alignat}$
