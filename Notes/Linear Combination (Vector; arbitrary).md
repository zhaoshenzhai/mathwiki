<br />
<br />

Date Created: 24/04/2022 18:52:30
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Linear span is set of all linear combinations]], [[Linear Independence (arbitrary)]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Unique Representation Theorem (Hamel; arbitrary)]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a subset $U\subseteq V$ of a vector space over $K$. A vector $v\in V$ is said to be a **$K$-linear combination of vectors in $U$** if_
$$\begin{equation}
    \ex n\in\N^\ast,\ex u_1,\dots,u_n\in U:v\textrm{ \it{is a linear combination of }}\l\langle u_1,\dots,u_n\r\rangle.
\end{equation}$$

```

**Remark.** Although $U\subseteq V$ need not be finite, linear combinations of vectors in $U$ are _not_ infinite sums of the form
$$\begin{equation}
    v=\sum_{i=1}^\infty\alpha_iu_i,\ \ \ \ \ \ \ \ \textrm{or}\ \ \ \ \ \ \ \ v=\sum_{i\in\mc{I}}\alpha_iu_i,
\end{equation}$$
where $\mc{I}$ is an uncountable index set, since bare vector spaces have no notion of convergence. Rather, $v$ is a linear combination of vectors in $U$ if there exists a _finite sequence_ $u_1,\dots,u_n\in U$ and coefficients $\alpha_1,\dots,\alpha_n\in K$ such that
$$\begin{equation}
    v=\sum_{i=1}^n\alpha_iu_i.\exqedin
\end{equation}$$
