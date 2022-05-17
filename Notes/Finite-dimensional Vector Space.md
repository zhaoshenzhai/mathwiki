<br />
<br />

Date Created: 04/04/2022 23:35:21
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Tuple Space (Linear Algebra)]], [$\mat{m\times n}{K}$ (Vector Space)](Vector%20Space%20of%20Matrices.md), [[Zero Vector Space]]
Constructions: [[Standard Representation of Finite-dim. Vector Spaces]]
Generalizations: _Not Applicable_

Properties: [$\dim U\leq\dim V$ for $U\subseteq V$ finite-dim.; strict $\Leftrightarrow$ $U\subset V$](Dimension%20of%20subspace%20less%20than%20dimension%20of%20vector%20space%20(finite-dim.;%20strict%20iff%20proper).md)
Sufficiencies: _Not Applicable_
Equivalences: [$V\iso K^n$ ($\dim V=n$)](Linear%20isomorphism%20between%20finite-dim%20vector%20spaces%20and%20tuple%20spaces.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field. A vector space $V$ over $K$ is said to be **finite-dimensional** if $V$ has a finite spanning set._

```

**Remark.** Observe that $V$ is finite-dimensional iff $\dim V<\infty$; that is, iff every basis $\mc{B}$ is such that $\l|\mc{B}\r|<\infty$. This follows from the fact that every linearly independent subset in $V$ must contain no more elements than spanning sets of $V$, so if $V$ is spanned by a finite set, every basis thereof is also finite. Conversely, if every basis of $V$ is finite, then, since every vector space has a basis, we see that there exists a finite spanning set for $V$.<span style="float:right;">$\blacklozenge$</span>
