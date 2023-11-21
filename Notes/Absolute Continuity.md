---
mathLink-blocks:
    characterization-of-absolute-continuity: Characterization of Absolute Continuity
---

<div class="topSpace"></div>

Date Created: 07/11/2023 13:39:35
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: [[Integral#^integral-measure-abs-cont-measure]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Borel-Cantelli Lemmas]], [[Basic properties of measures#^monotone-convergence-of-sets]]

``` ad-Definition
title: Definition.

For measures $\mu$ and $\nu$ on a measurable space $\tpl{X,\mc{B}}$, we say that $\nu$ is <b>absolutely continuous</b> w.r.t. $\mu$, and write $\nu\abscont\mu$, if every $\mu$-null set $B\in\mc{B}$ is $\nu$-null.

```

<b>Remark.</b> The terminology is motivated by the following characterization: if $\nu$ is a finite measure, then $\nu\abscont\mu$ iff for all $\epsilon>0$, there is some $\delta>0$ such that for each $B\in\mc{B}$, we have $\nu\l(B\r)<\epsilon$ whenever $\mu\l(\beta\r)<\delta$. ^characterization-of-absolute-continuity
* Indeed, the backwards direction is trivial. For the forwards, take $\epsilon>0$ and suppose for sake of contradiction that for any $\delta>0$, there is some $B_\delta\in\mc{B}$ with $\mu\l(B_\delta\r)<\delta$ such that $\nu\l(B\r)\geq\epsilon$. Thus $\mc{B}$ contains sets of arbitrarily small measure, so Borel-Cantelli gives us a decreasing sequence $B_n$ such that $\mu\l(\bigcap_nB_n\r)=0$. By absolute continuity, we have $\nu\l(\bigcap_nB_n\r)=0$ too, which contradicts the fact that $\nu\l(B_n\r)\decto\nu\l(\bigcap_nB_n\r)=0$.<span style="float:right;">$\blacklozenge$</span>
