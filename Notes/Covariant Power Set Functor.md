<br />
<br />

Date Created: 08/03/2022 13:46:59
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Covariant power set functor is a functor]]

``` ad-Definition
title: Definition.

_Consider the category $\cat{Set}$. The **(covariant) power set functor on $\cat{Set}$** is the covariant functor $\ms{P}:\cat{Set}\to\cat{Set}$ defined by:_
* _The (class) function $\ms{P}$ which sends each set $X$ to its power set $\pow\l(X\r)$._
* _For all sets $X$ and $Y$, the function_
$$\begin{equation}
    \begin{aligned}
        \ms{P}:Y^X&\to\pow\l(Y\r)^{\pow\l(X\r)}\\
        f&\mapsto\l(S\mapsto\im_f\l(S\r)\r)
    \end{aligned}
\end{equation}$$
sending each function $f:X\to Y$ to the function $\im:\pow\l(X\r)\to\pow\l(Y\r)$ which sends each subset $S\subseteq X$ to its image $\im_f\l(S\r)$.

```
