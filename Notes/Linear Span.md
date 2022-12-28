<div class="topSpace"></div>

Date Created: 03/04/2022 20:31:04
Tags: #Definition #Later/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Spanning Set]], [[Minkowski Sum (Linear Algebra)]]
Generalizations: _Not Applicable_

Properties: [[Linearly dependent iff exists span redundant element]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Linear combination iff in smallest containing subspace]], [[Arbitrary intersection of linear subspaces is a linear subspace]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider an indexed subset_ $S\subseteq V$ _of a vector space $V$ over $K$. The **linear subspace spaned by $S$** is, equivalently:_
* _The $\textrm{`}$smallest$\textrm{'}$ subspace of $V$ containing $S$ (in the sense that if $W$ is a subspace continaining $S$, then $\span S\subseteq W$):_
$$\begin{equation}
    \span S\coloneqq\bigcap\l\{U\subseteq V\mid S\subseteq U\land U\textrm{\it{ is a linear subspace of }}V\r\}.
\end{equation}$$
* _The linear subspace containing all linear combinations of vectors in $S$:_
$$\begin{equation}
    \span S\coloneqq\l\{v\in V\mid v\textrm{\it{ is a linear combination of vectors in }}S\r\}.
\end{equation}$$

```

**Remark.** Here, we consider $S$ as an indexed subset of $V$ for consistency; the indexing structure is not needed so we may talk about the linear subspace spanned by sub_sets_ of $V$. Note that $S\subseteq U$ really means that the underlying set of $S$ is a subset of $U$.<span style="float:right;">$\blacklozenge$</span>
