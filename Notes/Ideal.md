<div class="topSpace"></div>

Date Created: 16/11/2022 14:06:35
Tags: #Type/Definition #Topic/Ring_Theory

Types: [[Maximal Ideal]], [[Prime Ideal]]
Examples: [[Principal Ideal]]
Constructions: [[Quotient Ring]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a ring. A subring $I\subseteq R$ is a <b>left ideal in $R$</b> if it is stable under left multiplication; that is, if
$$\begin{equation}
    \fa r\in R:rI\subseteq I.
\end{equation}$$
Similarly for a <b>right ideal in $R$</b>. A two-sided ideal in $R$ is called an <b>ideal in $R$</b>.

```

<b>Remark.</b> If one takes rings as having unity, then ideals are defined to be sub<i>groups</i> of $R$ that are stable under multiplication. Otherwise, the only ideal of $R$ is the trivial ideal $\sring{0}$ and $R$ itself.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A left ideal $I\subseteq R$ is a left $R$-module via the action $R\times I\to I:\tpl{r,i}\mapsto ri$; being a left-ideal ensures that $ri\in I$. Indeed $I$ is a left $R$-submodule of $R$, where $R$ is viewed as a left $R$-module over itself.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Since the additive group of $R$ is abelian, we see that every ideal in $R$ is a normal subgroup thereof.<span style="float:right;">$\blacklozenge$</span>
