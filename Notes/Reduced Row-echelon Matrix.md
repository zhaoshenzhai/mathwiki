<br />
<br />

Date Created: 24/03/2022 14:12:37
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Gauss-Jordan Algorithm]]
Equivalences: _Not Applicable_
Justifications: [[RREF of matrix is unique]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N$. A matrix $\v{R}\in\mat{m\times n}{K}$ is said to be in **reduced row-echelon form** if $\v{R}$ is in row-echelon form and, assuming that $\v{R}$ has $r$ non-zero rows:_
* _For every non-zero row $i\in\l\{1,\dots,r\r\}$ of $\v{R}$, the leading $1$ is the only non-zero entry in its column:_
$$\begin{equation}
    \begin{aligned}
        \fa i\in\l\{1,\dots,r\r\},\fa i'\in\l\{1,\dots,r\r\}\setminus\l\{i\r\}:R_{i'k_i}=0. && \l(k_i\coloneqq\min\l\{j\in\l\{1,\dots,n\r\}\mid R_{ij}\neq0\r\}\r)
    \end{aligned}
\end{equation}$$

```

**Remark.** Since to every matrix $\v{M}\in\mat{m\times n}{K}$ there exists a unique matrix $\v{R}=\l(e_k\circ\cdots\circ e_l\r)\l(\v{M}\r)$ in reduced row-echelon form, we can consider the function
$$\begin{equation}
    \rref:\mat{m\times n}{K}\to\mat{m\times n}{K}\ \ \ \ \textrm{mapping}\ \ \ \ \v{M}\to\v{R}.\exqedin
\end{equation}$$
