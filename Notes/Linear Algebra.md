<div class="topSpace"></div>

Date Created: 07/08/2022 14:28:31
Tags: #MOC #Later/Linear_Algebra

Context: [Zermelo Fraenkel Set Theory](obsidian://open?file=TODO)
Excursions: [Functional Analysis](obsidian://open?file=TODO), [Multilinear Algebra](obsidian://open?file=TODO)
Abstractions: [Category Theory](obsidian://open?file=TODO)

$\huge\rm\bf{L}\normalsize\rm\bf{INEAR ALGEBRA}$ is the study of the [category of vector spaces](Category%20of%20Vector%20Spaces.md); that is, the study of [vector spaces](Vector%20Space.md) and [linear maps](Linear%20Map.md) between them.

---

**Constructions.** As with most categories, $\catvect$ has [subobjects](Linear%20Subspace.md), [products](External%20Direct%20Product%20(Vector%20Space).md), [direct sums](Internal%20Direct%20Sum%20(Linear%20Algebra).md), and [quotients](obsidian://open?file=TODO). Unique to Linear Algebra is the concept of the [dimension](Dimension%20(Linear%20Algebra).md) of a [vector space](Vector%20Space.md), defined as the cardinality of any [linearly independent](Linear%20Independence.md) [spanning set](Spanning%20Set.md), aka any [basis](Hamel%20Basis.md), thereof.

Similarly, as with most categories, we can define the [kernel](Kernel;%20Null%20Space.md) of a [linear map](Linear%20Map.md) $T:V\to W$. Unique to Linear Algebra is its [rank](Rank.md) (defined as $\dim\im T$); together, they satisfy the [Dimension Theorem](Dimension%20Theorem.md) which states that
$$\begin{equation}
    \dim\ker T+\dim\im T=\dim V.\exqedin
\end{equation}$$

---

**Characterizations.** As with most categories, vector spaces are [identified](Isomorphic%20Vector%20Spaces.md) up to [isomorphism](Linear%20Isomorphism.md). Indeed, they are characterized by their dimension, in the sense that they are [linearly isomorphic $\Leftrightarrow$ their dimensions coincide](Linearly%20isomorphic%20iff%20dimensions%20coincide%20(finite-dim.).md). Thus in the finite-dimensional case, we can, under a choice of basis:
* [Represent](Linear%20isomorphism%20between%20finite-dim%20vector%20spaces%20and%20tuple%20spaces.md) vectors by tuples in $K^n$ (thereby establishing a [coordinate system](Coordinate%20Representation%20of%20Finite-dim.%20Vector%20Spaces.md)).
* [Represent](Linear%20isomorphism%20between%20linear%20maps%20and%20matrices.md) linear maps by [matrices](Matrix.md) (their actions on a vector [are represented by](Action%20of%20linear%20map%20repr%20under%20basis%20left-multiplication%20of%20matrix%20representation.md) matrix-vector multiplication, and compositions between linear maps [are represented by](Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md) matrix multiplication).

If a concept is defined via a choice of basis, we must ensure that it is invariant under a [change of basis](Basis%20Transition%20Map;%20Change%20of%20Basis%20Matrix.md).

Bases themselves can be characterized as both [maximally linearly independent sets](obsidian://open?file=TODO) and as [minimal spanning sets](obsidian://open?file=TODO). Indeed, every linearly independent set [extends to](Linearly%20independent%20set%20extends%20to%20a%20basis.md) a basis, and every spanning set [cuts down](Spanning%20set%20cuts%20down%20to%20a%20basis.md) to a basis. This shows, under the assumption of Choice, that [every vector space has a basis](Every%20vector%20space%20has%20a%20basis.md).<span style="float:right;">$\blacklozenge$</span>

---

**Computations.** Most computations boil to down to solving a [system of linear equations](Linear%20System%20of%20Equations.md), which can be reformulated as the problem of finding all $\v{x}\in K^n$ such that $A\v{x}=\v{b}$. [Elementary row operations](Elementary%20Matrices%20and%20Operations.md), executed in accordance to the [Gaussian Algorithm](Gaussian%20Algorithm.md), reduces the system to [reduced row-echelon form](Reduced%20Row-echelon%20Matrix.md) from which solutions can simply be read off.
* The rank of a linear map, when represented by a matrix $A$, can be computed by [counting](Rank%20of%20matrix%20in%20RREF%20is%20number%20of%20pivot%20columns%20of%20non-zero%20rows.md) the number of pivot columns or non-zero rows of $\rref{A}$.

[Other methods](Solutions%20of%20linear%20system%20of%20equations.md) include finding a particular solution or inverting the coefficient matrix ([if possible](Matrix%20Invertibility%20Theorem.md)).<span style="float:right;">$\blacklozenge$</span>
