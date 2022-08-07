<br />
<br />

Date Created: 07/08/2022 14:28:31
Tags: #MOC

Context: [Zermelo-Fraenkel Set Theory](obsidian://open?file=Zermelo%20Fraenkel%20Set%20Theory.md)
Branches: _Not Applicable_
Extensions: [Functional Analysis](obsidian://open?file=Functional%20Analysis.md), [Multilinear Algebra](obsidian://open?file=Multilinear%20Algebra.md)

$\huge{\rm\bf{L}{\normalsize\bf{INEAR ALGEBRA}}}/\huge{\rm\bf{T}{\normalsize\bf{HEORY OF VECTOR SPACES}}}\Large{.}$

Linear Algebra is the study of the [category of vector spaces](obsidian://open?file=Category%20of%20Vector%20Spaces.md); that is, the study of [vector spaces](obsidian://open?file=Finite-Dimensional%20Vector%20Space.md) and [linear maps](obsidian://open?file=Linear%20Map.md) between them.

``` ad-Construction
title: Constructions.

_As with most categories, we can form [subobjects](obsidian://open?file=Linear%20Subspace.md), [products](obsidian://open?file=Direct%20Product%20(Vector%20Space)), [direct sums](obsidian://open?file=Internal%20Direct%20Sum%20(Linear%20Algebra).md), and [quotients](obsidian://open?file=) of vector spaces. Unique to Linear Algebra is the concept of the [dimension](obsidian://open?file=Dimension%20(Linear%20Algebra).md) of a vector space, defined as the cardinality of any [linearly independent](obsidian://open?file=Linear%20Independence.md) [spanning set](obsidian://open?file=Spanning%20Set.md), aka any [basis](obsidian://open?file=Hamel%20Basis.md), thereof._
* _The definition of subobjects (aka linear subspaces) lead naturally to the **problem of invariant subspaces**. This leads to the study of [eigenvectors](obsidian://open?file=Eigenvector.md), [eigenvalues](obsidian://open?file=Eigenvalue.md), and [diagonalization](obsidian://open?file=Diagonalizable%20Operator%20slash%20Matrix.md)._

_Similarly, as with most categories, we can define the [kernel](obsidian://open?file=Kernel;%20Null%20Space.md) of a linear map $T:V\to W$. Unique to Linear Algebra is its [rank](obsidian://open?file=Rank.md), and together, they satisfy the [Dimension Theorem](obsidian://open?file=Dimension%20Theorem.md) which states that_
$$\begin{equation}
    \dim\ker T+\dim\im T=\dim V.
\end{equation}$$

```

``` ad-Characterization
title: Characterizations.

_Vector spaces are characterized by their dimension in the sense that [two vector spaces are isomorphic $\Leftrightarrow$ their dimensions coincide](obsidian://open?file=Linearly%20isomorphic%20iff%20dimensions%20coincide%20(finite-dim.).md)._
* _For a finite-dimensional vector space, we can represent elements thereof by [coordinates](obsidian://open?file=Coordinate%20Representation%20of%20Finite-dim.%20Vector%20Spaces.md) once a basis is chosen._
* _Similarly, linear maps between finite-dimensional vector spaces can be represented by a [matrix](obsidian://open?file=Matrix.md). Composition [is represented by](obsidian://open?file=Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md) [matrix multiplication](obsidian://open?file=Matrix%20Multiplication.md), and its action on a vector [is represented by](obsidian://open?file=Action%20of%20linear%20map%20repr%20under%20basis%20left-multiplication%20of%20matrix%20representation.md) matrix-vector multiplication._

_Both representations depend on the choice of basis, but it is possible to define concepts using this representation if we show that they are invariant under a [change of basis](obsidian://open?file=Basis%20Transition%20Map;%20Change%20of%20Basis%20Matrix.md)._

```

``` ad-Computation
title: Compuatations.

_Most computations boil to down to solving a [system of linear equations](obsidian://open?file=Linear%20System%20of%20Equations.md), which can be reformulated as the problem of finding all $\v{x}\in K^n$ such that $A\v{x}=\v{b}$. [Elementary row operations](obsidian://open?file=Elementary%20Matrices%20and%20Operations.md), executed in accordance to the [Gaussian Algorithm](obsidian://open?file=Gaussian%20Algorithm.md), reduces the system to [reduced row-echelon form](obsidian://open?file=Reduced%20Row-echelon%20Matrix.md) from which solutions can simply be read off._
* _The rank of a linear map, when represented by a matrix $A$, [can be computed by counting](obsidian://open?file=Rank%20of%20matrix%20in%20RREF%20is%20number%20of%20pivot%20columns%20of%20non-zero%20rows.md) the number of pivot columns or non-zero rows of $\rref{A}$._

_[Other methods](obsidian://open?file=Solutions%20of%20linear%20system%20of%20equations.md) include finding a particular solution or inverting the coefficient matrix ([if possible](obsidian://open?file=Matrix%20Invertibility%20Theorem.md))._

```
