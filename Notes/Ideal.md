<div class="topSpace"></div>

Date Created: 16/11/2022 14:06:35
Tags: #Type/Definition #Topic/Ring_Theory

Types: [[Maximal Ideal]], [[Prime Ideal]]
Examples: [[Principal Ideal]]
Constructions: [[Quotient Ring]]
Generalizations: <i>Not Applicable</i>

Properties: [[Chinese Remainder Theorem]], [[Basic properties of ideals]]
Sufficiencies: [[Generating Set (Ideal)]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a ring. A subset $\mf{a}\subseteq R$ is a <b>left ideal in $R$</b> if it is an additive subgroup of $R$ such that $R\mf{a}\subseteq\mf{a}$, in which case we write $\mf{a}\idealeq R$.
* Similarly for a <b>right ideal in $R$</b>. A two-sided ideal in $R$ is called an <b>ideal in $R$</b>. If $R$ is commutative, then every ideal is two-sided.

Two ideals $\mf{a},\mf{b}\ideal R$ are said to be <b>coprime/comaximal</b> if $\mf{a}+\mf{b}=R$.

```

<b>Remark.</b> A left ideal $\mf{a}\idealeq R$ is a left $R$-module via the action $R\times\mf{a}\to\mf{a}:\tpl{r,i}\mapsto ri$; being a left-ideal ensures that $ri\in\mf{a}$. Indeed $\mf{a}$ is a left $R$-submodule of $R$, where $R$ is viewed as a left $R$-module over itself.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $\mf{a}\idealeq R$ is an ideal, then it is the kernel of the projection $\pi:R\to R/\mf{a}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Since the additive group of $R$ is abelian, we see that every ideal in $R$ is a normal subgroup thereof. Also, it is clear that the intersection of an arbitrary family of ideals is also an ideal.<span style="float:right;">$\blacklozenge$</span>
