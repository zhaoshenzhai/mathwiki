<br />
<br />

Date Created: 28/03/2022 16:07:17
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Matrix multiplication (columns)]], [[Matrix multiplication (rows)]]
Constructions: [[Linear Combination (Vector; arbitrary)]], [[Linear Independence (sequence)]], [Linear subspace $\Leftrightarrow$ closed under linear combination](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md)
Generalizations: _Not Applicable_

Properties: [[Linear combinations of solutions of homogeneous systems are solutions]]
Sufficiencies: [[Unique Representation Theorem (Hamel; finite)]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a finite sequence $\l\langle u_1,\dots,u_n\r\rangle\in V^n$ of a vector space $V$ over $K$. A vector $v\in V$ is said to be a **$K$-linear combination of $\l\langle u_i\r\rangle$** if_
$$\begin{equation}
    \ex\alpha_1,\dots,\alpha_n\in K:v=\sum_{i=1}^n\alpha_iu_i.
\end{equation}$$
_The sequence $\l\langle\alpha_1,\dots,\alpha_n\r\rangle\in K^n$ is said to be the **coefficients of the linear combination**._

```

**Remark.** Only finite sums are allowed since bare vector spaces have no notion of convergence. To emphasize this, we shall sometimes call $v$ a _finite_ linear combination of vectors in $U$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** If each $\alpha_i=0$, then $v$ is said to be a **trivial linear combination of vectors in $U$**. Observe that $v$ need not be the zero vector.<span style="float:right;">$\blacklozenge$</span>
