<div class="topSpace"></div>

Date Created: 04/05/2022 17:13:39
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Integers]]
Constructions: [[Ring]], [[Module#^category-of-abelian-groups]]
Generalizations: [[Module]]

Properties: [[Structure Theorem]], [[Abelian group is simple iff cyclic of prime order]]
Sufficiencies: [[Abelianization]], [[Quotient by center cyclic implies abelian]], [[Free Module#^free-abelian-group]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A group $\tpl{G,\ast}$ is said to be <b>abelian</b> if the binary operation $\ast$ commutes.

```

<b>Remark.</b> Every abelian group $M$ can be equipped with a unique $\Z$-module structure. Indeed, since $\Z$ is initial in $\catring$, there is a unique $\Z$-action on $M$ given by $0m\coloneqq0$, $nm\coloneqq m+\cdots+m$ ($n$ times) for $n\in\Z^+$, and $nm\coloneqq\l(-n\r)m$ for $n\in\Z^-$. In this way, the categories $\catabgrp$ and $\catmod[\Z]$ are equivalent.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $X$ is any set and $G$ is an abelian group, then $G^X=\Hom_\catset\!\l(X,G\r)$ is an abelian group via the component-wise addition.<span style="float:right;">$\blacklozenge$</span>
