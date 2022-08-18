<div class="topSpace"></div>

Date Created: 27/03/2022 22:00:57
Tags: #Definition

Types: _Not Applicable_
Examples: [[Real Coordinate Space]]
Constructions: [[Standard Basis of Tuple Space]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Coordinate Representation of Finite-dim. Vector Spaces]]
Equivalences: [[Linear isomorphism between finite-dim vector spaces and tuple spaces]]
Justifications: [[Direct product of vector spaces; function spaces are vector spaces]]

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
