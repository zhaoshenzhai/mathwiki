<div class="topSpace"></div>

Date Created: 29/04/2022 18:22:52
Tags: #Type/Definition #Topic/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Linear Independence]], [[Generated Linear Subspace]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Unique Representation Theorem (Basis)]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $K$ be a field and consider an indexed subset $U\coloneqq\l\{u_i\r\}_{i\in I}\subseteq V$ of a $K$-vector space $V$. A vector $v\in V$ is said to be a **$K$-linear combination of vectors in $U$** if for all $i\in I$, there exists $\alpha_i\in K$ such that $v=\sum_{i\in I}\alpha_iu_i$ where $\alpha_i=0$ for all but finitely-many $i\in I$.

```

<b>Remark.</b> Note that we intensionally exclude infinite sums since bare vector spaces have no notion of convergence (if $U$ is uncountable, not even a series can be written). Indeed, we may rephrase this definition by saying that $v$ is a $K$-linear combination of vectors in $U$ if
$$\begin{equation}
    \ex n\in\N,\fa i\in\l\{1,\dots,n\r\},\ex\alpha_i\in K,\ex u_i\in U:v=\sum\limits_{i=1}^n\alpha_iu_i.
\end{equation}$$
Redefining $I=\l\{1,\dots,n\r\}$, we see that $I$ carries an order structure and hence we may say that $v$ is a **$K$-linear combination of the sequence $\tpl{u_i}_{i\in I}$ with coefficients $\tpl{\alpha_i}_{i\in I}$**.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Here, we consider $U$ as an indexed subset of $V$ for convenience; the indexing structure is not needed so we may talk about linear combinations of vectors in sub<i>sets</i> of $V$. However, if $I$ carries an order structure (say $I=\l\{1,\dots,n\r\}$ for some $n\in\N$ or $I=\N$ itself), we may identify $\l\{u_i\r\}_{i\in I}$ with the $I$-tuple $\tpl{u_i}_{i\in I}$ which allows us to talk about ordered bases, which _is_ important.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If each $\alpha_i=0$, then $v$ is said to be the **trivial linear combination of vectors in $U$**.<span style="float:right;">$\blacklozenge$</span>
