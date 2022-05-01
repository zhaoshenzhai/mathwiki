<br />
<br />

Date Created: 04/04/2022 23:35:21
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Tuple Space (Linear Algebra)]], [[Vector Space of Matrices]], [[Zero Vector Space]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [$\dim U<\dim V$ for $U\subset V$ strict linear subspace](Dimension%20of%20proper%20subspace%20strictly%20less%20than%20dimension%20of%20vector%20space%20(finite-dim.).md)
Sufficiencies: _Not Applicable_
Equivalences: [Vector space $V$ is finite-dimensional $\Leftrightarrow$ $\dim V<\infty$](Finite-dimensional%20iff%20dimension%20is%20finite.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field. A vector space $V$ over $K$ is said to be **finite-dimensional** if $V$ has a finite spanning set._

```

**Remark.** Equivalently, $V$ is finite-dimensional if $\dim V<\infty$; that is, if every basis $\mc{B}$ is such that $\l|\mc{B}\r|<\infty$. This follows from the fact that every linearly independent subset in $V$ must contain no more elements than spanning sets of $V$, so if $V$ is spanned by a finite set, every basis thereof is also finite.

However, the drawback of _defining_ finite-dimensional vector spaces as vector spaces $V$ with $\dim V<\infty$ is that one needs to prove that every vector space has basis in the first place to even write down $\textrm{`}\dim V<\infty\textrm{'}$. This can be done, but it is not economical since one needs to deal with the general case before tackling the simpler one.<span style="float:right;">$\blacklozenge$</span>
