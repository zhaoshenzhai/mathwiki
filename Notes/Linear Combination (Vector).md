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

_Let $K$ be a field and consider a subset $S\subseteq V$ of a vector space $V$ over $K$. A vector $v\in V$ is said to be a **$K$-linear combination of vectors in $S$** if_
$$\begin{equation}
    \ex n\in\N^\ast,\ex\alpha_1,\dots,\alpha_n\in K,\ex \l\langle s_1,\dots,s_n\r\rangle\in S^n:v=\sum_{i=1}^n\alpha_is_i.
\end{equation}$$
_The sequence $\l\langle\alpha_1,\dots,\alpha_n\r\rangle\in K^n$ is said to be the **coefficients of the linear combination**._

```

**Remark.** Two important remarks:
* Only finite sums are allowed since bare vector spaces have no notion of convergence. To emphasize this, we shall sometimes call $v$ a _finite_ linear combination of vectors in $S$.

* We may develop this definition in two steps.
    * Firstly, a vector $v\in V$ is said to be a **linear combination of a _finite sequence_ $s_1,\dots,s_n$ of vectors in $S$**, formally written as $\l\langle s_1,\dots,s_n\r\rangle\in S^n$, if $$\begin{equation}
        \ex\alpha_1,\dots,\alpha_n:v=\sum_{i=1}^n\alpha_is_i.
    \end{equation}$$
    * Next, a vector $v\in V$ is said to be a **linear combination of vectors in $S$** if there exists a finite sequence $s_1,\dots,s_n$ of vectors in $S$ such that $v$ is a linear combination thereof.

  This emphasizes how despite $S$ may be an infinite set, we shall only consider finite linear combinations.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.**
* If $S=\l\{s_1,\dots,s_n\r\}$, then, abusing notation, $v$ is said to be a **linear combination of the vectors $s_1,\dots,s_n$**.
* If each $\alpha_i=0$, then $v$ is said to be a **trivial linear combination of vectors in $S$**. Observe that $v$ need not be the zero vector.<span style="float:right;">$\blacklozenge$</span>
