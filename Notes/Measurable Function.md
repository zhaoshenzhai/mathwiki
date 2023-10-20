---
mathLink-blocks:
    Borel-function: Borel function
---

<div class="top Space"></div>

Date Created: 20/10/2023 00:36:30
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A function $f:\tpl{X,\mc{B}}\to\tpl{Y,\mc{C}}$ between measurable spaces is said to be <b>$\tpl{\mc{B},\mc{C}}$-measurable</b> if $f^{-1}\!\l(\mc{C}\r)\subseteq\mc{B}$.
* If $X$ and $Y$ are topological spaces, then $f:X\to Y$ is said to be <b>Borel</b> if it is $\tpl{\mc{B}\l(X\r),\mc{B}\l(Y\r)}$-measurable.
* If $\tpl{X,\mc{B},\mu}$ is a measure space and $Y$ is a topological space, then $f:X\to Y$ is said to be <b>$\mu$-measurable</b> if it is $\tpl{\Meas_\mu,\mc{B}\l(Y\r)}$-measurable.

```
^Borel-function

<b>Remark.</b> Compositions of measurable functions need not be measurable. We thus strengthen to <i>universal measurability</i> $-$ that is, $f$ is $\mu$-measurable for <i>all</i> Borel probability measures $\mu$ on $X$ $-$ and in this case compositions of universally measurable functions $f:X\to Y$ and $g:Y\to Z$ is universally measurable. Indeed, let $\mu$ be a Borel probability measure on $X$ and let $B\in\mc{B}\l(Z\r)$ be Borel. Since the push-forward measure $f_\ast\mu$ is a Borel probability measure on $Y$, we see that $g^{-1}\!\l(B\r)$ is $f_\ast\mu$-measurable. But $f_\ast\mu\l(g^{-1}\!\l(B\r)\r)=\mu\l(f^{-1}\!\l(g^{-1}\!\l(B\r)\r)\r)=\mu\big(\l(g\circ f\r)^{-1}\!\l(B\r)\big)$, so $\l(g\circ f\r)^{-1}\!\l(B\r)$ is $\mu$-measurable as desired.<span style="float:right;">$\blacklozenge$</span>
