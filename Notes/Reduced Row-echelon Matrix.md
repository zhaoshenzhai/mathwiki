<br />
<br />

Date Created: 24/03/2022 13:42:23
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Identity Matrix]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Gaussian Algorithm]]
Equivalences: _Not Applicable_
Justifications: [[RREF of a matrix is unique]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. A matrix $R\in\mat{m\times n}{K}$ is said to be in **reduced row-echelon form (RREF)** if:_
* _$\axiref[1]$ (Zero-rows)$\bf{.}$ All zero-rows of $R$, if any, are at the bottom._

_Assume now that $R$ has $r$ non-zero rows for some $r\in\l\{0,\dots,m\r\}$._
* _$\axiref[2]$ (Staircase of 1's)$\bf{.}$ The first non-zero entry from the left in each non-zero row $i\in\l\{1,\dots,r\r\}$, called the **leading entry of $i$** and whose column $k_i$ is called the **pivot column**, is $1$. Furthermore,_ $k_{i-1}<k_i$ _for all $i\in\l\{2,\dots,r\r\}$._

* _$\axiref[3]$ (Pivot columns have only 1's)$\bf{.}$ The leading $1$ in each non-zero row $i\in\l\{1,\dots,r\r\}$ is the only non-zero entry in its colum $k_i$._

```

**Remark.** Since the reduced row-echelon form of a matrix is unique, we may consider the function
$$\begin{equation}
    \rref:\mat{m\times n}{K}\to\mat{m\times n}{K}\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ A\mapsto\rref A.\exqedin
\end{equation}$$
