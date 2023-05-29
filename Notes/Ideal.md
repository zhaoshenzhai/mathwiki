<div class="topSpace"></div>

Date Created: 16/11/2022 14:06:35
Tags: #Type/Definition #Topic/Ring_Theory

Types: [[Maximal Ideal]], [[Prime Ideal]]
Examples: [[Principal Ideal]]
Constructions: [[Quotient Ring]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $R$ be a ring. A subring $I\subseteq R$ is a **left ideal in $R$** if it is stable under left multiplication; that is, if
$$\begin{equation}
    \fa r\in R:rI\subseteq I.
\end{equation}$$
Similarly for a **right ideal in $R$**. A two-sided ideal in $R$ is called an **ideal in $R$**.

```

**Remark.** If one takes rings as having unity, then ideals are defined to be sub_group_ of $R$ that is stable under multiplication. Otherwise, the only ideal of $R$ is the trivial ideal $\sring{0}$ and $R$ itself.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** A left ideal $I\subseteq R$ is a left $R$-module via the action $R\times I\to I:\tpl{r,i}\mapsto ri$; being a left-ideal ensures that $ri\in I$. Indeed $I$ is a left $R$-submodule of $R$, where $R$ is viewed as a left $R$-module over itself.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Since the additive group of $R$ is abelian, we see that every ideal in $R$ is a normal subgroup thereof.<span style="float:right;">$\blacklozenge$</span>
