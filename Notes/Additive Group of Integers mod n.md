---
mathLink: $\tpl{\Z_n,+}$
---

<div class="topSpace"></div>

Date Created: 27/09/2022 14:25:37
Tags: #Definition #Topics/Group_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Ring or Field of Integers mod n]]
Generalizations: _Not Applicable_

Properties: [[Order of additive group of integers mod n is n]], [[Decomposition of additive group of integers mod n if relatively prime]]
Sufficiencies: [[Generates additive group of integers mod n iff relatively prime]], [[Cyclic groups are Z or Zn]]
Equivalences: _Not Applicable_
Justifications: [[Quotient group is a group]]

``` ad-Definition
title: Definition.

_Fix $n\in\N^+$ and consider the normal subgroup $n\Z\nsubgrpeq\Z$ defined as_
$$\begin{equation}
    n\Z\coloneqq\l\{a\in\Z\mid n\textrm{\it{ divides }}a\r\}.
\end{equation}$$
_The **additive group of integers modulo $n$** is the quotient group $\l(\Z/n\Z,+_n\r)$ of $\Z$ under $n\Z$._

```

**Remark.** Unraveling the definition, we see that elements $a+n\Z\in\Z/n\Z$ are equivalence classes containing all integers $b\in\Z$ such that $n\divides\l(b-a\r)$; that is, all $b\in\Z$ such that $b=a+nk$ for some $k\in\Z$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Write $\Z_n\coloneqq\Z/n\Z$ instead. Also, since $\Z$ is Abelian, we see that $\Z_n$ is Abelian too.<span style="float:right;">$\blacklozenge$</span>
