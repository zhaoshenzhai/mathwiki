<br />
<br />

Date Created: 04/05/2022 11:34:58
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Tuple Space (Linear Algebra)]], [$\mat{m\times n}{K}$ (Vector Space)](Vector%20Space%20of%20Matrices.md)
Constructions: [$\hom_{\catvect[K]}\!\l(V,W\r)$](Vector%20Space%20of%20Linear%20Maps.md)
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Function space over a field is a vector space]]

``` ad-Definition
title: Definition.

_Let $X$ be a non-empty set and let $K$ be a field. The **vector space of functions from $X$ to $K$** is the vector space $\l\langle K^X,K,\oplus,\odot,0_f\r\rangle$ over $K$ consisting of_
* _the additive group of functions $\l\langle K^X,\oplus,0_f\r\rangle$,_
* _the field $\l\langle K,+,\cdot\r\rangle$ of scalars, and_
* _the function $\odot:K\times K^X\to K^X$ of scalar multiplication defined, for all $\alpha\in K$ and $f\in K^X$, by $\l(\alpha\odot f\r)\l(x\r)\coloneqq\alpha\cdot f\l(x\r)$ for all $x\in X$._

```
