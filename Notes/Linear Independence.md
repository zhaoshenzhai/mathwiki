<div class="topSpace"></div>

Date Created: 29/04/2022 20:37:44
Tags: #Type/Definition #Topic/Linear_Algebra

Types: [[Basis (Linear Algebra)]]
Examples: [[Distinct eigenvalues implies linearly independent eigenvectors]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Steinitz Exchange Lemma]], [[Basis Extension Theorem]], [[Linearly independent set with same cardinality as dimension (finite) is a basis]]
Sufficiencies: [[Orthonormal sets are linearly independent]], [[Basis iff maximal linearly independent set]]
Equivalences: [[Linearly dependent iff exists span redundant element]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $V$ be a $K$-vector space. A indexed subset $U\coloneqq\l\{u_i\r\}_{i\in I}\subseteq V$ is said to be **linearly independent** if the only vanishing linear combination thereof is the trivial one. Formally, if
$$\begin{equation}
    \fa\l\{\alpha_i\r\}_{i\in I}\!\subseteq K:\l(\sum\limits_{i\in I}\alpha_iu_i=0\Rightarrow\fa i\in I:\alpha_i=0\r)
\end{equation}$$
where $\alpha_i=0$ for all but finitely-many $i\in I$. Otherwise, $U$ is said to be **linearly dependent**.

```

<b>Remark.</b> Note that $\em$ is vacuously linearly independent. Observe that if $I=\l\{1,\dots,n\r\}$ for some $n\in\N^+$, the sequence of vectors $u_1,\dots,u_n$ is linearly independent if
$$\begin{equation}
    \fa\tpl{\alpha_i}_{i\in I}\!\in K^n:\l(\sum_{i=1}^n\alpha_iu_i=0\Rightarrow\fa i\in\l\{1,\dots,n\r\}:\alpha_i=0\r).
\end{equation}$$
We may then redefine linear independence for arbitrary $I$ by saying that $\l\{u_i\r\}_{i\in I}$ is linearly independent if every finite sequence thereof is.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Here, we need to define linear independence/dependence for indexed subsets of $V$ rather than for sets. To illustrate, consider the set $\l\{u\r\}$, which is obviously linearly independent. Letting $u_1,u_2\coloneqq u$, we see that $\l\{u_1,u_2\r\}=\l\{u\r\}$ is also linearly independent even though
$$\begin{equation}
    1\cdot u_1+\l(-1\r)\cdot u_2=0.
\end{equation}$$
This $\textrm{`}$contradiction$\textrm{'}$ is resolved by allowing for duplicates in $U$ which distinguishes between $\tpl{u}=\l\{u_i\r\}_{i\in\l\{1\r\}}$ and $\tpl{u,u}=\l\{u_i\r\}_{i\in\l\{1,2\r\}}$.

From this we also see that if $U$ is linearly independent, then it must not contain duplicate elements. Furthermore, the order structure of $I$, if any, can be ignored as vector addition is commutative. Thus we may consider $U$ as a sub<i>set</i> of $V$ and say that $U$ is linearly independent if any indexed set $\l\{u'_i\r\}_{i\in I}$ where each $u'_i\in U$ (without duplicates) is linearly independent.<span style="float:right;">$\blacklozenge$</span>
