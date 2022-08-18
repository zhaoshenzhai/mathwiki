<div class="topSpace"></div>

Date Created: 29/04/2022 18:22:52
Tags: #Definition

Types: _Not Applicable_
Examples: [[Matrix multiplication (columns slash rows)]]
Constructions: [[Linear Independence]], [[Linear Span]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Unique Representation Theorem (Hamel)]]
Equivalences: [[Linear combination iff in smallest containing subspace]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider an indexed subset_ $U\coloneqq\l\{u_i\r\}_{i\in I}\subseteq V$ _of a vector space $V$ over $K$. A vector $v\in V$ is said to be a **$K$-linear combination of vectors in $U$** if_
$$\begin{equation}
    \fa i\in I,\ex\alpha_i\in K:v=\sum\limits_{i\in I}\alpha_iu_i
\end{equation}$$
_where $\alpha_i=0$ for all but finitely-many $i\in I$._

```

**Remark.** Note that we intensionally exclude infinite sums since bare vector spaces have no notion of convergence (if $U$ is uncountable, not even a series can be written). Indeed, we may rephrase this definition by saying that $v$ is a $K$-linear combination of vectors in $U$ if
$$\begin{equation}
    \ex n\in\N,\fa i\in\l\{1,\dots,n\r\},\ex\alpha_i\in K,\ex u_i\in U:v=\sum\limits_{i=1}^n\alpha_iu_i.
\end{equation}$$
Redefining $I=\l\{1,\dots,n\r\}$, we see that $I$ carries an order structure and hence we may say that $v$ is a **$K$-linear combination of the sequence $\tpl{u_i}_{i\in I}$ with coefficients $\tpl{\alpha_i}_{i\in I}$**.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Here, we consider $U$ as an indexed subset of $V$ for convenience; the indexing structure is not needed so we may talk about linear combinations of vectors in sub_sets_ of $V$. However, if $I$ carries an order structure (say $I=\l\{1,\dots,n\r\}$ for some $n\in\N$ or $I=\N$ itself), we may identify $\l\{u_i\r\}_{i\in I}$ with the $I$-tuple $\tpl{u_i}_{i\in I}$ which allows us to talk about ordered bases, which _is_ important.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** If each $\alpha_i=0$, then $v$ is said to be the **trivial linear combination of vectors in $U$**. Observe that if $U$ has duplicate elements, then $v$ need not be the zero vector.<span style="float:right;">$\blacklozenge$</span>
