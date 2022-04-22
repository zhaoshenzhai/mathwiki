<br />
<br />

Date Created: 04/04/2022 19:55:14
Tags: #Definition #Closed

Types: [[Basis (Linear Algebra)]]
Examples: _Not Applicable_
Constructions: [[Linear Dependence]]
Generalizations: _Not Applicable_

Properties: [$\l|\textrm{Linearly independent set}\r|\leq\l|\textrm{Spanning set}\r|$](Cardinality%20of%20linearly%20independent%20sets%20no%20more%20than%20that%20of%20spanning%20sets.md), [[Enlargement of linearly independent set by adjoining non-spanned vector]], [[Linearly independent subset cannot contain the zero vector]]
Sufficiencies: _Not Applicable_
Equivalences: [[Unique Representation Theorem (Linear Algebra)]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a vector space $V$ over $K$. A subset $S\subseteq V$ is said to be **linearly independent** if the only vanishing linear combination of vectors in $S$ is the trivial one. Formally, if_
$$\begin{equation}
    \fa n\in\N^\ast,\fa\l\langle s_1,\dots,s_n\r\rangle\in S^n,\fa\alpha_1,\dots,\alpha_n\in K:\l(\sum_{i=1}^n\alpha_is_i=0_V\Rightarrow\alpha_1=\cdots=\alpha_n=0\r).
\end{equation}$$

```

**Remark.** Note that all vector in $S$ must all be distinct; if $s_i=s_j$ for some $i\neq j$, then the non-trivial linear combination
$$\begin{equation}
    1\cdot s_i+\l(-1\r)\cdot s_j=0_V
\end{equation}$$
formed by $\l\langle s_i,s_j\r\rangle$ with constants $\l\langle1,-1\r\rangle$ vanishes.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Note that the statement (vacuously) holds for $n=0$, so to prove that $S$ is linearly independent, it suffices to check it for $n\geq1$.<span style="float:right;">$\blacklozenge$</span>
