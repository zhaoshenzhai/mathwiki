---
mathLink-blocks:
    Borel-function: Borel function
    continuous-implies-Borel: Continuous $\Rightarrow$ Borel
    push-forward-measure: Push-forward Measure
    measurable-almost-borel: $\mu$-measurable $\Rightarrow$ almost $\mc{B}$-measurable
---

<div class="top Space"></div>

Date Created: 20/10/2023 00:36:30
Tags: #Type/Definition #Topic/Real_Analysis

Types: [[Integral#^integrable-function]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Pointwise-limits of measurable functions are measurable]], [[An epsilon-trade for an easy life#^Luzin]], [[An epsilon-trade for an easy life#^Egorov]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>
^Borel-function

``` ad-Definition
title: Definition.

A function $f:\tpl{X,\mc{B}}\to\tpl{Y,\mc{C}}$ between measurable spaces is said to be <b>$\tpl{\mc{B},\mc{C}}$-measurable</b> if $f^{-1}\!\l(\mc{C}\r)\subseteq\mc{B}$.
* If $X$ and $Y$ are topological spaces, then $f:X\to Y$ is said to be <b>Borel</b> if it is $\tpl{\mc{B}\l(X\r),\mc{B}\l(Y\r)}$-measurable.
* If $\tpl{X,\mc{B},\mu}$ is a measure space and $Y$ is a topological space, then $f:X\to Y$ is said to be <b>$\mu$-measurable</b> if it is $\tpl{\Meas_\mu,\mc{B}\l(Y\r)}$-measurable.

If $f:X\to Y$ is $\tpl{\mc{B},\mc{C}}$-measurable and $\tpl{X,\mc{B},\mu}$ is a measure space, then the <b>push-forward</b> measure on $\tpl{Y,\mc{C}}$ is the measure $f_\ast\mu\l(C\r)\coloneqq\mu\l(f^{-1}\!\l(C\r)\r)$.

```
^push-forward-measure

<b>Remark.</b> Note that $f$ is $\tpl{\mc{B},\mc{C}}$-measurable whenever $\mc{C}=\gen{\mc{C}_0}_\sigma$ and $f^{-1}\!\l(\mc{C}_0\r)\subseteq\mc{B}$. Notably, all continuous maps $f:X\to Y$ are Borel. ^continuous-implies-Borel
* Indeed, let $\mc{S}\coloneqq\l\{C\in\mc{C}\st f^{-1}\!\l(C\r)\in\mc{B}\r\}$. We have $\mc{C}_0\subseteq\mc{S}$ by hypothesis, and $\mc{S}$ is a $\sigma$-algebra since preimages respect complements and countable disjoint unions.

If $\mc{C}_0$ is countable, then every $\mu$-measurable function $f:X\to Y$ is almost $\mc{B}$-measurable. Indeed, with $\mc{C}_0=\l\{C_n\r\}$, we show that each $f^{-1}\!\l(C_n\r)\in\mc{B}$. To this end, fix $n$ and let $B_n\in\mc{B}$ be such that $f^{-1}\!\l(C_n\r)\approx^\mu B_n$. They diff by a $\mu$-null set, so collecting all of them gives us a $\mu$-null set $Z\coloneqq\bigcup_n\!\l(f^{-1}\!\l(C_n\r)\symdiff B_n\r)$. Let $\hat{Z}\supseteq Z$ be a $\mu$-null set in $\mc{B}$ and let $X'\coloneqq X\comp\hat{Z}$. Then $\l.f\r|_{X'}$ is $\mc{B}$-measurable since $\l.f\r|_{X'}^{-1}\!\l(C_n\r)=X'\cap f^{-1}\!\l(C_n\r)=X'\cap B_n$. Letting $g:X\to Y$ defined by $\l.g\r|_{X'}\coloneqq\l.f\r|_{X'}$ and $\l.g\r|_{\hat{Z}}\coloneqq y_0$ for any $y_0\in Y$ gives us a $\mc{B}$-measurable function such that $f=g$ $\mu$-a.e., as desired.<span style="float:right;">$\blacklozenge$</span> ^measurable-almost-borel

---

<b>Remark.</b> Compositions of measurable functions need not be measurable. We thus strengthen to <i>universal measurability</i> $-$ that is, $f$ is $\mu$-measurable for <i>all</i> Borel probability measures $\mu$ on $X$ $-$ and in this case compositions of universally measurable functions $f:X\to Y$ and $g:Y\to Z$ is universally measurable. Indeed, let $\mu$ be a Borel probability measure on $X$ and let $B\in\mc{B}\l(Z\r)$ be Borel. Since the push-forward measure $f_\ast\mu$ is a Borel probability measure on $Y$, we see that $g^{-1}\!\l(B\r)$ is $f_\ast\mu$-measurable. But $f_\ast\mu\l(g^{-1}\!\l(B\r)\r)=\mu\l(f^{-1}\!\l(g^{-1}\!\l(B\r)\r)\r)=\mu\big(\l(g\circ f\r)^{-1}\!\l(B\r)\big)$, so $\l(g\circ f\r)^{-1}\!\l(B\r)$ is $\mu$-measurable as desired.<span style="float:right;">$\blacklozenge$</span>
