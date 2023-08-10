<div class="topSpace"></div>

Date Created: 14/01/2022 17:57:16
Tags: #Type/Definition #Topic/Set_Theory

Types: [[Function]], [[Equivalence Relation and Quotient Set]], [[Preordered Set]], [[Well-founded Relation]]
Examples: <i>Not Applicable</i> 
Constructions: [[Category of Relations]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A set $R$ is a <b>binary relation</b> if $R$ is a set of ordered pairs. Formally, if $\fa u\in R:\ex x,y:u=\tpl{x,y}$. 

```

<b>Remark.</b> If $R$ is a binary relation and $\tpl{x,y}\in R$, write $xRy$. The <i>domain/range</i> of $R$ are $\dom R\coloneqq\l\{x\st\ex y:xRy\r\}$ and $\ran R\coloneqq\l\{y\st\ex x:xRy\r\}$ respectively. Note that $R\subseteq\dom R\times\ran R$. Let $S\subseteq\dom R$ and $T\subseteq\ran R$.
* The <i>restriction</i> of $R$ to $S$ is the binary relation $\l.R\r|_S\coloneqq\l\{u\in R\st\ex x,y:u=\tpl{x,y}\land x\in S\r\}$.
* The <i>image</i> of $R$ under $S$ is the set $R\l(S\r)\coloneqq\ran\l(\l.R\r|_S\r)$. Clearly $R\l(\dom R\r)=\ran R$.
* The <i>inverse</i> of $R$ is the binary relation $R^{-1}\coloneqq\l\{\tpl{y,x}\in\ran R\times\dom R\st xRy\r\}$. Clearly $R^{-1}\!\l(\ran R\r)=\dom R$ and $\l(R^{-1}\r)^{-1}=R$.
* The image $R^{-1}\!\l(T\r)$ is the <i>preimage</i> of $R$ under $T$. Clearly $\dom R^{-1}=\ran R$ and $\ran R^{-1}=\dom R$.

We now define several basic types of relations. Let $X$ be a set. Quantified over all $x,y,z\in X$, we define:
* A binary relation $R$ is <i>reflexive</i> if $xRx$, <i>symmetric</i> if $xRy\Leftrightarrow yRx$, <i>transitive</i> if $\l(xRy\land yRz\r)\Rightarrow xRz$, <i>irreflexive</i> if $\lnot xRx$, <i>asymmetric</i> if $\lnot\l(xRy\land yRx\r)$, and <i>antisymmetric</i> if $\l(xRy\land yRx\r)\Rightarrow x=y$.
* A binary relation $R$ is <i>connected</i> if one of $xRy$, $yRx$, or $x=y$ holds, and is <i>trichotomous</i> if exactly one of the three holds.<span style="float:right;">$\blacklozenge$</span>
