<div class="topSpace"></div>

Date Created: 03/04/2022 20:31:04
Tags: #Definition #Topics/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Spanning Set]], [[Minkowski Sum (Linear Algebra)]]
Generalizations: _Not Applicable_

Properties: [[Linearly dependent iff exists span redundant element]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider an (indexed) subset_ $S\subseteq V$ _of a $K$-vector space $V$. The **linear subspace spanned by $S$** is the $\textrm{`}$smallest$\textrm{'}$ subspace of $V$ containing $S$ (in the sense that if $W$ is a subspace containing $S$, then $\span S\subseteq W$):_
$$\begin{equation}
    \span S\coloneqq\sgrp{S}\coloneqq\bigcap\l\{U\subseteq V\mid S\subseteq U\land U\textrm{\it{ is a linear subspace of }}V\r\}.
\end{equation}$$

```

**Remark.** Equivalently, $\span S$ is the subspace containing all (finite) linear combinations of vectors in $S$.<span style="float:right;">$\blacklozenge$</span>
