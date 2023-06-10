<div class="topSpace"></div>

Date Created: 27/10/2022 13:01:39
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Abelianization of product is product of abelianization]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Function space constructed from a Cartesian product]]

``` ad-Definition
title: Definition.

Let $\l\{G_i\r\}$ be a family of groups (resp. rings, $R$-modules). The <b>direct product of $\l\{G_i\r\}$</b> is the Cartesian product $\prod G_i$ equipped with the component-wise defined binary operation (resp. multiplication, left $R$-action).

```

<b>Remark.</b> The direct product $\prod G_i$, equipped with the projection maps $\l\{\pi_i\r\}$, is a product in $\catgrp$ (resp. $\catring$, $\catmod$).<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> In particular, if $X$ is a non-empty set, then $\prod_{x\in X}G=G^X$ is the group (resp. ring/$R$-module) of functions from $X$ into $G$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Let $H_1,H_2\leq G$. If $G\iso H_1\times H_2$, then the product is said to be <b>internal</b>. A sufficient criterion for $G$ to be an internal direct product of $H_1$ and $H_2$ is that $G=H_1H_2$, $H_1\cap H_2=\l\{e\r\}$, and $H_1,H_2\nsubgrpeq G$. We claim that $\phi:H_1\times H_2\to G:\tpl{h_1,h_2}\to h_1h_2$ is an isomorphism.
* Indeed, the conditions ensure that $\phi$ is a surjective homomorphism. For injectivity, take $\tpl{h_1,h_2}\in\ker\phi$, so $h_1=h_2^{-1}$. But then $h_1\in H_1\cap H_2=\l\{e\r\}$, which forces $h_1=h_2=e$ and so $\phi$ is an isomorphism.

This isomorphism generalizes to all finite products by induction, but does <i>not</i> generalize to infinite products.<span style="float:right;">$\blacklozenge$</span>
