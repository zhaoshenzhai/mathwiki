---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 06/04/2022 21:08:27
Tags: #Type/Definition #Topic/Linear_Algebra

Types: [[Basis (Linear Algebra)]]
Examples: <i>Not Applicable</i>
Constructions: [[Finite-dimensional Vector Space]]
Generalizations: <i>Not Applicable</i>

Properties: [[Steinitz Exchange Lemma]], [[Basis Extraction Theorem]], [[Spanning subset with same cardinality as dimension (finite) is a basis]], [[Linearly dependent iff exists span redundant element]]
Sufficiencies: [[Basis iff minimal spanning set]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $V$ be a vector space and fix a subset $S\subseteq V$. The <b>linear subspace spanned by $S$</b> is the smallest subspace of $V$ containing $S$:
$$\begin{equation}
    \span S\coloneqq\gen{S}\coloneqq\bigcap\l\{U\subseteq V\mid S\subseteq U\land U\textrm{\it{ is a linear subspace of }}V\r\}.
\end{equation}$$
If $\gen{S}=V$, then $S$ is said to <b>span/generate $V$</b>.

```

<b>Remark.</b> Equivalently $\gen{S}\coloneqq\l\{v\in V\mid\ex\alpha_i\in K\land s_i\in S:v=\alpha_1s_1+\cdots\alpha_n\r\}$ contains all elements $v\in V$ that can be expressed as a (finite) linear combination of vectors in $V$.<span style="float:right;">$\blacklozenge$</span>
