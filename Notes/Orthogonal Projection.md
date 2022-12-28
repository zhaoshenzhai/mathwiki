<div class="topSpace"></div>

Date Created: 28/06/2022 22:58:12
Tags: #Definition #Later/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Orthogonal projection minimizes distances]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Orthogonal Decomposition]], [[Basic properties of orthogonal projections]]

``` ad-Definition
title: Definition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. For $U$ a finite-dimensional linear subspace of $V$, the **orthogonal projection of $V$ onto $U$** is the linear operator_
$$\begin{equation}
    \proj_U\!:V\to V\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ v\mapsto\proj_U\!\l(v\r)
\end{equation}$$
_where $\proj_U\!\l(v\r)$ is the unique element in $U$ such that $v-\proj_U\!\l(v\r)\in U^\perp$._

```

**Remark.** In other words, decomposing $V$ into $U\oplus U^\perp$, we may write every $v\in V$ uniquely as a sum $v=u+w$ with $u\in U$ and $w\in U^\perp$. The orthogonal projection is then $\proj_U\!\l(v\r)\coloneqq u$.<span style="float:right;">$\blacklozenge$</span>
