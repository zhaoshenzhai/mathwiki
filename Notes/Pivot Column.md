<br />
<br />

Date Created: 12/04/2022 18:28:48
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Column rank is number of pivot columns]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[RREF of a matrix is unique]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider a matrix $A\in\mat{m\times n}{K}$ for some fixed $m,n\in\N^\ast$. A column_ $\v{a}_k\in\mat{m\times1}{K}$ _of $A$ is said to be a **pivot column of $A$** if the $k^{th}$ column of $R\coloneqq\rref\l(A\r)$ is a pivot column._

```

**Remark.** Recall that a pivot column of a matrix $R$ in RREF is any column containing the leading $1$ in the non-zero rows. Abusing notation, we shall sometimes call $k$ a pivot column of $A$, and we shall write
$$\begin{equation}
    \mc{K}\coloneqq\l\{k_i\in\N\mid k_i\textrm{ is a pivot column}\r\}.\exqedin
\end{equation}$$
