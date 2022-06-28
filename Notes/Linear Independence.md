<br />
<br />

Date Created: 29/04/2022 20:37:44
Tags: #Definition #Closed

Types: [[Hamel Basis]]
Examples: [Homogeneous system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ columns$\slash$rows of $A$ are linearly independent](Homogeneous%20linear%20system%20only%20trivial%20solution%20iff%20columns%20slash%20rows%20of%20coefficient%20matrix%20are%20linearly%20independent.md), [Distinct eigenvalues $\Rightarrow$ linearly independent eigenvectors](Distinct%20eigenvalues%20implies%20linearly%20independent%20eigenvectors.md)
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Steinitz Exchange Lemma]], [[Linearly independent set extends to a basis]], [Linearly independent $U\subseteq V$ with $\l|U\r|=\dim V<\infty$ is a basis](Linearly%20independent%20set%20with%20same%20cardinality%20as%20dimension%20(finite)%20is%20a%20basis.md), [[Linearly independent subset cannot contain the zero vector]]
Sufficiencies: [[Orthonormal sets are linearly independent]]
Equivalences: [Linearly dependent $\Leftrightarrow$ scalar multiple](Linearly%20dependent%20iff%20scalar%20multiple.md), [Linearly dependent $\Leftrightarrow$ exists span redundant element](Linearly%20dependent%20iff%20exists%20span%20redundant%20element.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a vector space $V$ over $K$. A indexed subset_ $U\coloneqq\l\{u_i\r\}_{i\in I}\subseteq V$ _is said to be **linearly independent** if the only vanishing linear combination thereof is the trivial one. Formally, if_
$$\begin{equation}
    \fa\l\{\alpha_i\r\}_{i\in I}\!\subseteq K:\l(\sum\limits_{i\in I}\alpha_iu_i=0\Rightarrow\fa i\in I:\alpha_i=0\r)
\end{equation}$$
_where $\alpha_i=0$ for all but finitely-many $i\in I$. Otherwise, $U$ is said to be **linearly dependent**._

```

**Remark.** Note that $\em$ is vacuously linearly independent. Observe that if $I=\l\{1,\dots,n\r\}$ for some $n\in\N^\ast$, the sequence of vectors $u_1,\dots,u_n$ is linearly independent if
$$\begin{equation}
    \fa\tpl{\alpha_i}_{i\in I}\!\in K^n:\l(\sum_{i=1}^n\alpha_iu_i=0\Rightarrow\fa i\in\l\{1,\dots,n\r\}:\alpha_i=0\r).
\end{equation}$$
We may then redefine linear independence for arbitrary $I$ by saying that $\l\{u_i\r\}_{i\in I}$ is linearly independent if every finite sequence thereof is.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Here, we need to define linear independence/dependence for indexed subsets of $V$ rather than for sets. To illustrate, consider the set $\l\{u\r\}$, which is obviously linearly independent. Letting $u_1,u_2\coloneqq u$, we see that $\l\{u_1,u_2\r\}=\l\{u\r\}$ is also linearly independent even though
$$\begin{equation}
    1\cdot u_1+\l(-1\r)\cdot u_2=0.
\end{equation}$$
This contradiction is resolved by allowing for duplicates in $U$ which distinguishes between $\tpl{u}=\l\{u_i\r\}_{i\in\l\{1\r\}}$ and $\tpl{u,u}=\l\{u_i\r\}_{i\in\l\{1,2\r\}}$.

From this we also see that if $U$ is linearly independent, then it must not contain duplicate elements. Furthermore, the order structure of $I$, if any, can be ignored as vector addition is commutative. Thus we may consider $U$ as a sub_set_ of $V$ and say that $U$ is linearly independent if any indexed set $\l\{u'_i\r\}_{i\in I}$ where each $u'_i\in U$ (without duplicates) is linearly independent.<span style="float:right;">$\blacklozenge$</span>
