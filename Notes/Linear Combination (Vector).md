<br />
<br />

Date Created: 28/03/2022 16:07:17
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Matrix multiplication (columns)]], [[Matrix multiplication (rows)]]
Constructions: [[Linear span is set of all linear combinations]], [Linear subspace $\Leftrightarrow$ closed under linear combination](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md)
Generalizations: _Not Applicable_

Properties: [[Unique Representation Theorem (Linear Algebra)]], [[Linear combinations of solutions of homogeneous systems are solutions]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. A vector $v\in V$ is said to be a **linear combination of vectors in $S$** if_
$$\begin{equation}
    \ex n\in\N^\ast,\ex\alpha_1,\dots,\alpha_n\in K,\underbrace{\ex s_1,\dots,s_n\in S}_{\textrm{\it{distinct}}}:v=\sum_{i=1}^n\alpha_is_i.
\end{equation}$$

```

**Remark.**
* If $S=\l\{s_1,\dots,s_n\r\}$, then $v$ is said to be a **linear combination of the vectors $s_1,\dots,s_n$**.
* If each $\alpha_i=0$, then $v$ is said to be a **trivial linear combination of vectors in $S$**.<span style="float:right;">$\blacklozenge$</span>
