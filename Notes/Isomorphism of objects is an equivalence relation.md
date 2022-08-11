<div class="topSpace"></div>

Date Created: 23/02/2022 16:57:55
Tags: #Proposition #Later/Category_Theory

Proved by: [[Identity morphism is an isomorphism]], [[Inverse of isomorphism is an isomorphism]], [[Composition of isomorphims are isomorphisms]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

**Remark.** Here, $\iso$ is taken as a $\textrm{`}$binary relation$\textrm{'}$ defined by $X\iso Y$ iff there exists a morphism $f:X\to Y$; it is _not_ a binary relation in the strict sense since $X$ and $Y$ need not be sets.<span style="float:right;">$\blacklozenge$</span>

``` ad-Proposition
title: Proposition.

_Let $\cat{C}$ be a category. Then the relation $\iso$ on any collection of $\cat{C}$-objects is an equivalence relation._

```

_Proof_. Let $X,Y,Z\in\obj\l(\cat{C}\r)$.
* (Reflexive): Observe that the identity morphism $\id_X:X\to X$ is an isomorphism, so $X\iso X$.
* (Symmetric): If $X\iso Y$, then there exists an isomorphism $f:X\to Y$. It follows that $f^{-1}:Y\to X$ is also an isomorphism and hence $Y\iso X$.
* (Transitive): If $X\iso Y$ and $Y\iso Z$, then there exist isomorphisms $f:X\to Y$ and $g:Y\to Z$. It follows that the composition $g\circ f:X\to Z$ is also an isomorphism and hence $X\iso Z$.<span style="float:right;">$\blacksquare$</span>
