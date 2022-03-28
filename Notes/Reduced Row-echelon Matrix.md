<br />
<br />

Date Created: 24/03/2022 14:12:37
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Rank (Matrix)]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Gauss-Jordan Algorithm]]
Equivalences: _Not Applicable_
Justifications: [[RREF of a matrix is unique]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N$. A matrix $R\in\mat{m\times n}{K}$ is said to be in **reduced row-echelon form (RREF)** if $R$ is in row-echelon form and, assuming that $R$ has $r$ non-zero rows:_
* $\axirref\bf{.}$ _For every non-zero row $i\in\l\{1,\dots,r\r\}$ of $R$, the leading $1$ is the only non-zero entry in its column:_
$$\begin{equation}
    \begin{aligned}
        \fa i\in\l\{1,\dots,r\r\},\fa i'\in\l\{1,\dots,r\r\}\setminus\l\{i\r\}:r_{i'k_i}=0. && \l(k_i\coloneqq\min\l\{j\in\l\{1,\dots,n\r\}\mid r_{ij}\neq0\r\}\r)
    \end{aligned}
\end{equation}$$

```

**Remark.** Since to every matrix $\v{M}\in\mat{m\times n}{K}$ there exists a unique matrix $R=\l(e_k\circ\cdots\circ e_l\r)\l(\v{M}\r)$ in reduced row-echelon form, we can consider the function
$$\begin{equation}
    \rref:\mat{m\times n}{K}\to\mat{m\times n}{K}\ \ \ \ \textrm{mapping}\ \ \ \ \v{M}\toR.\exqedin
\end{equation}$$
