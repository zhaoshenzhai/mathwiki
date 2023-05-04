<div class="topSpace"></div>

Date Created: 07/08/2022 14:28:31
Tags: #MOC #Later/Linear_Algebra

Context: [Zermelo Fraenkel Set Theory](obsidian://open?file=TODO)
Excursions: [Functional Analysis](obsidian://open?file=TODO), [Multilinear Algebra](obsidian://open?file=TODO)
Abstractions: [Category Theory](obsidian://open?file=TODO)

$\huge\rm\bf{L}\normalsize\rm\bf{INEAR ALGEBRA}$ is the study of the [category of vector spaces](Category%20of%20Vector%20Spaces.md); that is, the study of [vector spaces](Vector%20Space.md) and [linear maps](Linear%20Map.md) between them.

---

**Constructions.** As with most categories, $\catvect$ has [subobjects](Linear%20Subspace.md), [products](External%20Direct%20Product%20(Vector%20Space).md), [direct sums](Internal%20Direct%20Sum%20(Linear%20Algebra).md), and [quotients](obsidian://open?file=TODO). Unique to Linear Algebra is the concept of the [dimension](Dimension%20(Linear%20Algebra).md) of a [vector space](Vector%20Space.md), defined as the cardinality of any [linearly independent](Linear%20Independence.md) [spanning set](Generated%20Linear%20Subspace.md), aka any [basis](Basis%20(Linear%20Algebra).md), thereof.

Similarly, as with most categories, we can define the [kernel](Kernel%20slash%20Nullity.md) of a [linear map](Linear%20Map.md) $T:V\to W$. Unique to Linear Algebra is its [rank](Image%20slash%20Rank.md) (defined as $\dim\im T$); together, they satisfy the [Dimension Theorem](Dimension%20Theorem.md) which states that $\dim V=\dim\ker T+\dim\im T$.<span style="float:right;">$\blacklozenge$</span>

---

**Characterizations.** As with most categories, vector spaces are identified up to [isomorphism](Linear%20Isomorphism.md). Indeed, they are characterized by their dimension, in the sense that they are [linearly isomorphic $\Leftrightarrow$ their dimensions coincide](Linearly%20isomorphic%20iff%20dimensions%20coincide%20(finite-dim.).md). Thus in the finite-dimensional case, we can, under a choice of basis:
* [Represent](Coordinate%20representation%20of%20vector%20spaces.md) vectors by tuples in $K^n$, thereby establishing a coordinate system.
* [Represent](Matrix%20representation%20of%20linear%20maps.md) linear maps by matrices, and if we define multiplication of matrices as the composition of linear maps, their action of on a vector are then [represented](Action%20of%20linear%20map%20repr%20under%20basis%20left-multiplication%20of%20matrix%20representation.md) by matrix-vector multiplication.

If a concept is defined via a choice of basis, we must ensure that it is invariant under a [change of basis](Basis%20Transition%20Map.md).

Bases themselves can be characterized as both [maximally linearly independent sets](Basis%20iff%20maximal%20linearly%20independent%20set.md) and as [minimal spanning sets](Basis%20iff%20minimal%20spanning%20set.md). Indeed, every linearly independent set [extends to](Basis%20Extension%20Theorem.md) a basis, and every spanning set [cuts down](Basis%20Extraction%20Theorem.md) to a basis. This shows, under the assumption of Choice, that [every vector space has a basis](Every%20vector%20space%20has%20a%20basis.md).<span style="float:right;">$\blacklozenge$</span>
