<br />
<br />

Date Created: 27/03/2022 22:00:57
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Real Coordinate Space]]
Constructions: [[Standard Basis of Tuple Space]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [Coordinate representation of $V$](Coordinate%20Representation%20of%20Finite-dim.%20Vector%20Spaces.md)
Equivalences: [$\phi_\mc{B}:V\simto K^n$ ($\dim V=n$)](Linear%20isomorphism%20between%20finite-dim%20vector%20spaces%20and%20tuple%20spaces.md)
Justifications: [Direct product of vector spaces$\slash$function spaces are vector spaces](Direct%20product%20of%20vector%20spaces;%20function%20spaces%20are%20vector%20spaces.md)

``` ad-Definition
title: Definition.

_Let $\tpl{K,+,\cdot}$ be a field and fix $n\in\N^\ast$. The **$n$-tuple space over $K$** is the vector space $\tpl{K^n,K,\boxplus,\boxdot,\v{0}}$ over $K$, where $\v{0}\coloneqq\tpl{0,\dots,0}$ and_
$$\begin{equation}
    \begin{aligned}
        \boxplus:K^n\times K^n&\to K^n\\
        \tpl{\v{x},\v{y}}&\mapsto\tpl{x_1+y_1,\dots,x_n+y_n}
    \end{aligned}\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \boxdot:K\times K^n&\to K^n\\
        \tpl{\alpha,\v{x}}&\mapsto\tpl{\alpha\cdot x_1,\dots,\alpha\cdot x_n}.
    \end{aligned}
\end{equation}$$

```
