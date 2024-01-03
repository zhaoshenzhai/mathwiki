<div class="topSpace"></div>

Date Created: 16/11/2022 14:28:08
References: #Ref/Alu09
Tags: #Type/Definition #Topic/Rings_and_Modules/Ring_Theory

Types: <i>Not Applicable</i>
Examples: [[Integers#^quotients-of-integers]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Universal Property of Quotients]], [[Ideal is maximal iff quotient is a field]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\mf{a}\idealeq R$ be an ideal of a ring $R$. The <b>quotient ring of $R$ under $\mf{a}$</b> is the ring $\tpl{R/\mf{a},+,\blob}$, where
* $\tpl{R/\mf{a},+}$ is the quotient group of $R$ under $\mf{a}$, viewed as abelian groups, and
* $\blob$ is the binary operation on $R/\mf{a}$ defined by $\l(r_1+\mf{a}\r)\blob\l(r_2+\mf{a}\r)\coloneqq r_1r_2+\mf{a}$ for all $r_1,r_2\in R$.

```

<b>Remark.</b> All the ring axioms of $R/\mf{a}$ are inherited from that of $R$, so it suffices to show that $\blob$ is well-defined. Take $r_1\sim r_1'$ and $r_2\sim r_2'$, so $r_1'=r_1+a$ and $r_2'=r_2+b$ for some $a,b\in\mf{a}$. Then $r_1'r_2'=r_1r_2+r_1a+r_2b+ab\in r_1r_2+\mf{a}$, as desired. Also, note that the definition makes $\pi:R\to R/\mf{a}$ a ring homomorphism.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $\mf{a}$ is only a left ideal of $R$, then the group $R/\mf{a}$ no longer has a ring structure. However, it is still a left $R$-module via the action $r\cdot\l(x+\mf{a}\r)\mapsto rx+\mf{a}$. This map is well-defined since for any $x+\mf{a}=y+\mf{a}\in R/\mf{a}$ and any $r\in R$, we have that $rx-ry=r\l(x-y\r)\in\mf{a}$, and hence $rx+\mf{a}=ry+\mf{a}$. The $R$-module axioms then follow from the ring axioms for $R$.<span style="float:right;">$\blacklozenge$</span>
