<br />
<br />

Date Created: 03/04/2022 20:31:04
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [[Column Space]], [[Row Space]], [[Null Space]]
Constructions: [[Spanning Set]]
Generalizations: _Not Applicable_

Properties: [Linearly dependent $\Leftrightarrow$ exists span redundant element](Linearly%20dependent%20iff%20exists%20span%20redundant%20element.md)
Sufficiencies: _Not Applicable_
Equivalences: [[Linear span is set of all linear combinations]]
Justifications: [[Arbitrary intersection of linear subspaces is a linear subspace]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider an indexed subset_ $S\subseteq V$ _of a vector space $V$ over $K$. The **linear subspace spaned by $S$** is the linear subspace of $V$ consisting of the set_
$$\begin{equation}
    \span\l(S\r)\coloneqq\bigcap\l\{U\subseteq V\mid S\subseteq U\land U\textrm{\it{ is a linear subspace of }}V\r\}
\end{equation}$$
_together with the restricted operations on $\span\l(S\r)$._

```

**Remark.** In other words, $\span\l(S\r)$ is the $\textrm{`}$smallest$\textrm{'}$ subspace of $V$ containing $S$ in the sense that if $W$ is a subspace containing $S$, then $\span\l(S\r)\subseteq W$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Here, we consider $S$ as an indexed subset of $V$ for consistency; the indexing structure is not needed so we may talk about the linear subspace spanned by sub_sets_ of $V$. Note that $S\subseteq U$ really means that the underlying set of $S$ is a subset of $U$.<span style="float:right;">$\blacklozenge$</span>
