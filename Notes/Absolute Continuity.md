---
mathLink-blocks:
    characterization-of-absolute-continuity: Characterization of Absolute Continuity
---

<div class="topSpace"></div>

Date Created: 07/11/2023 13:39:35
References: #Ref/Fol07 #Ref/Anu23_564
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: [[Integral#^integral-measure-abs-cont-measure]], [[Calculus on the Real Line#^absolutely-continuous-function]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Lebesgue-Radon-Nikodym Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Borel-Cantelli Lemmas]], [[Basic properties of measures#^monotone-convergence-of-sets]], [[Hahn Decomposition Theorem]]

``` ad-Definition
title: Definition.

For measures $\mu$ and $\nu$ on a measurable space $\tpl{X,\mc{B}}$, we say that $\mu$ is <b>absolutely continuous</b> w.r.t. $\nu$, and write $\mu\abscont\nu$, if every $\nu$-null set $B\in\mc{B}$ is $\mu$-null.
* We say that the measures $\mu$ and $\nu$ are <b>equivalent</b>, and write $\mu\sim\nu$, if both $\mu\abscont\nu$ and $\nu\abscont\mu$.

```

<b>Remark.</b> The terminology is motivated by the following characterization: if $\mu$ is a finite measure, then $\mu\abscont\nu$ iff for all $\epsilon>0$, there is some $\delta>0$ such that for each $B\in\mc{B}$, we have $\mu\l(B\r)<\epsilon$ whenever $\nu\l(B\r)<\delta$. ^characterization-of-absolute-continuity
* Indeed, the backwards direction is trivial. For the forwards, take $\epsilon>0$ and suppose for sake of contradiction that for any $\delta>0$, there is some $B_\delta\in\mc{B}$ with $\nu\l(B_\delta\r)<\delta$ such that $\mu\l(B\r)\geq\epsilon$. Thus $\mc{B}$ contains sets of arbitrarily small measure, so Borel-Cantelli gives us a decreasing sequence $B_n$ such that $\nu\l(\bigcap_nB_n\r)=0$. By absolute continuity, we have $\mu\l(\bigcap_nB_n\r)=0$ too, which contradicts the fact that $\mu\l(B_n\r)\decto\mu\l(\bigcap_nB_n\r)=0$.

If $\mu$ is a signed measure, then the same holds with $\l|\mu\l(B\r)\r|<\epsilon$ instead. Indeed, this follows since $\mu\abscont\nu$ iff $\l|\mu\r|\abscont\nu$, and $\l|\mu\l(B\r)\r|\leq\l|\mu\l(B\r)\r|$. The backwards direction and the latter claims are trivial. For the forward, let $X=X_+\sqcup X_-$ be the Hahn decomposition for $\mu$ and let $B$ be a $\nu$-null set. Then $\nu\l(B\cap X_+\r)=\nu\l(B\cap X_-\r)=0$, so $\mu\l(B\cap X_+\r)=\mu\l(B\cap X_-\r)=0$. But this is precisely $\mu_+\!\l(B\r)=\mu_-\!\l(B\r)=0$, so $\l|\mu\r|\l(B\r)=0$ as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The opposite notion of absolute continuity is <i>orthogonality</i>: two measures $\mu$ and $\nu$ on a measurable space $\tpl{X,\mc{B}}$ are <i>orthogonal</i>, denoted $\mu\perp\nu$, if there is a partition $X=X_\mu\sqcup X_\nu$ such that $\mu\l(X_\nu\r)=0$ and $\nu\l(X_\mu\r)=0$. The <i>Lebesgue Decomposition Theorem</i> ensures that if $\mu$ and $\nu$ are $\sigma$-finite, then there is a partition $X=X_0\sqcup X_1$ such that $\mu\perp\nu$ on $X_0$ and $\mu\abscont\nu$ on $X_1$. Applying this decomposition again on $X_1$, we may also w.l.o.g. assume that $\mu\sim\nu$ on $X_1$.<span style="float:right;">$\blacklozenge$</span>
