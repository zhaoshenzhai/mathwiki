<div class="topSpace"></div>

Date Created: 25/01/2024 17:20:11
References: #Ref/NONE
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Ultrafilter#^ultrafilter-lemma]]

``` ad-Definition
title: Definition (Ultraproduct).

Let $\sigma$ be a signature in $\FOL$ and fix an ultrafilter $U$ on a set $I$. The <b>ultraproduct</b> of a family $\l\{\mc{A}_i\r\}$ of $\sigma$-structures modulo $U$ is the $\sigma$-structure $\mc{A}_\blob\coloneqq\prod_i\mc{A}_i\big/U$ whose universe is the quotient set $\prod_i\mc{A}_i\big/\!\sim$, where $a_\blob\sim b_\blob$ iff $\l\{i\in I\st a_i=b_i\r\}\in U$, and whose interpretations of $\sigma=\tpl{\mc{C},\mc{F},\mc{R}}$ are gives as follows.
* For each $c\in\mc{C}$, let $c^{\mc{A}_\blob}\coloneqq[(c^{\mc{A}_i}_i)_{i\in I}]$, and for each $f\in\mc{F}_n$ and $a_\blob^1,\dots,a_\blob^n\in\prod_i\mc{A}_i$, let $f^{\mc{A}_\blob}\!\l([a_\blob^1],\dots,[a_\blob^n]\r)\coloneqq\l[\tpl{f(a_i^1,\dots,a_i^n)}_{i\in I}\r]$.
* For each $R\in\mc{R}_n$ and $a_\blob^1,\dots,a_\blob^n\in\prod_i\mc{A}_i$, let $\tpl{[a_\blob^1],\dots,[a_\blob^n]}\in R^{\mc{A}_\blob}$ iff $\l\{i\in I\st\mc{A}_i\models R(a_i^1,\dots,a_i^n)\r\}\in U$.

```
