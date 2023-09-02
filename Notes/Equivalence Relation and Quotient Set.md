---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/01/2022 17:48:10
Tags: #Type/Definition #Topic/Set_Theory

Types: <i>Not Applicable</i>
Examples: [[Equinumerosity]], [[Group Action#^orbit]], [[Homotopy]]
Constructions: [[Quotient Group]]
Generalizations: <i>Not Applicable</i>

Properties: [[Universal Property of Quotients]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A binary relation $\sim$ is an <b>equivalence relation on $X$</b> if $\sim$ is reflexive, symmetric, and transitive on $X$.
* For all $x\in X$, the <b>equivalence class of $x$ under $\sim$</b> is the set $\l[x\r]_\sim\coloneqq\l\{y\in X\st x\sim y\r\}$.
* The <b>quotient set of $X$ under $\sim$</b> is the set $X/\!\sim\,\,\coloneqq\l\{\l[x\r]_\sim\in\pow\l(X\r)\st x\in X\r\}$ equipped with the <b>canonical projection</b> $\pi:X\to X/\!\sim$ mapping $x\mapsto\l[x\r]_\sim$.

```

<b>Remark.</b> Note that $x\sim y$ iff $\l[x\r]_\sim=\l[y\r]_\sim$.<span style="float:right;">$\blacklozenge$</span>
