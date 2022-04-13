<br />
<br />

Date Created: 03/04/2022 20:31:04
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Column Space]], [[Row Space]]
Constructions: [[Spanning Set]]
Generalizations: _Not Applicable_

Properties: [[Unique Representation Theorem (Linear Algebra)]], [Linearly dependent $\Leftrightarrow$ exists span redundant element](Linearly%20dependent%20iff%20exists%20span%20redundant%20element.md)
Sufficiencies: _Not Applicable_
Equivalences: [[Linear span is set of all linear combinations]]
Justifications: [[Arbitrary intersection of linear subspaces is a linear subspace]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. The **linear subspace spaned by $S$** is the linear subspace consisting of the set_
$$\begin{equation}
    \span\l(S\r)\coloneqq\bigcap\l\{U\subseteq V\mid S\subseteq U\land U\textrm{\it{ is a linear subspace of }}V\r\}
\end{equation}$$
_together with the restricted operations on $\span\l(S\r)$._

```

**Remark.**
* If $S=\l\{s_1,\dots,s_n\r\}$, then, abusing notation, we shall call $\span\l(S\r)$ the **linear subspace spanned by $s_1,\dots,s_n$**.<span style="float:right;">$\blacklozenge$</span>
