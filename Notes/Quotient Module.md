<div class="topSpace"></div>

Date Created: 16/07/2023 19:41:19
References:
Tags: #Type/Definition #Topic/Rings_and_Modules/Module_Theory

Types: <i>Not Applicable</i>
Examples: [[Kernel and Cokernel (Module Theory)]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Universal Property of Quotients]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $N\substructeq M$ be a submodule of a left $R$-module $M$. The <b>quotient module of $M$ under $N$</b> is the module $\tpl{M/N,+,\cdot}$, where
* $\tpl{M/N,+}$ is the quotient group of $M$ under $N$, viewed as abelian groups, and
* $\cdot$ is the left $R$-action on $M/N$ defined by $r\cdot\l(m+N\r)\coloneqq rm+N$ for all $r\in R$ and $m\in M$.

```

<b>Remark.</b> All the $R$-module axioms of $M/N$ are inherited from that of $M$, so it suffices to show that $\cdot$ is well-defined. Take $m_1+N=m_2+N$, so $m_1-m_2\in N$ and hence $rm_1-rm_2=r\l(m_1-m_2\r)\in rN=N$. Hence $rm_1+N=rm_2+N$, as desired. Also, note that the definition makes $\pi:M\to M/N$ a module homomorphism.<span style="float:right;">$\blacklozenge$</span>
