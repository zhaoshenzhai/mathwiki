<div class="topSpace"></div>

Date Created: 22/11/2023 20:23:27
References: #Ref/Fol07 #Ref/Anu23_564
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: [[Calculus on the Real Line#^bounded-variation]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Hahn Decomposition Theorem#^jordan-decomposition]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,\mc{B}}$ be a measure space. A <b>signed measure</b> on $\mc{B}$ is a map $\nu:\mc{B}\to\l[-\infty,\infty\r]$ sending $\em\mapsto0$ that is countably additive and attains at most one of $\pm\infty$.
* A set $B\in\mc{B}$ is <b>$\nu$-positive</b> if $\nu\l(B\r)\geq0$. In addition, if every subset $A\subseteq B$ in $\mc{B}$ is $\nu$-positive, then $B$ is <b>$\nu$-purely-positive</b>.

The <b>total variation</b> of a signed measure $\nu$ is the measure $\l|\nu\r|\coloneqq\nu_++\nu_-$, where $\nu=\nu_+-\nu_-$ is its Jordan Decomposition.

```

<b>Remark.</b> If $\mu$ and $\nu$ are measures where at least one is finite, then $\mu-\nu$ is a signed measure. The <i>Jordan Decomposition Theorem</i> asserts that all signed measures are of this form, so they are no more general.<span style="float:right;">$\blacklozenge$</span>
