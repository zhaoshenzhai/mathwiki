<br />
<br />

Date Created: 04/04/2022 19:55:14
Tags: #Definition #Closed

Types: [[Hamel Basis]]
Examples: _Not Applicable_
Constructions: [[Linear Dependence]]
Generalizations: _Not Applicable_

Properties: [$\l|\textrm{Linearly independent set}\r|\leq\l|\textrm{Spanning set}\r|$ (finite-dim.)](Cardinality%20of%20linearly%20independent%20sets%20no%20more%20than%20that%20of%20spanning%20sets%20(finite-dim.).md), [[Linearly independent subset of a finite-dim. vector space extends to a basis]], [[Enlargement of linearly independent set by adjoining non-spanned vector]], [[Linearly independent subset cannot contain the zero vector]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a vector space $V$ over $K$. A subset $U\subseteq V$ is said to be **linearly independent** if the only vanishing linear combination of vectors in $U$ is the trivial one. Formally, if_
$$\begin{equation}
    \fa n\in\N^\ast,\fa\l\langle u_1,\dots,u_n\r\rangle\in U^n,\fa\alpha_1,\dots,\alpha_n\in K:\l(\sum_{i=1}^n\alpha_iu_i=0_V\Rightarrow\alpha_1=\cdots=\alpha_n=0\r).
\end{equation}$$

```

**Remark.** Note that all vector in $U$ must all be distinct; if $u_i=u_j$ for some $i\neq j$, then the non-trivial linear combination
$$\begin{equation}
    1\cdot u_i+\l(-1\r)\cdot u_j
\end{equation}$$
formed by $\l\langle u_i,u_j\r\rangle$ with constants $\l\langle1,-1\r\rangle$ vanishes.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Note that the statement (vacuously) holds for $n=0$, so to prove that $U$ is linearly independent, it suffices to check it for $n\geq1$.<span style="float:right;">$\blacklozenge$</span>
