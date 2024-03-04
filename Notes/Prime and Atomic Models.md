---
mathLink: auto
mathLink-blocks:
    uniqueness-of-prime-models: Uniqueness of prime models
---

<div class="topSpace"></div>

Date Created: 17/02/2024 21:34:18
References: #Ref/Mar02
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Existence of prime and atomic models]], [[Ryll-Nardzewski Theorem]]
Equivalences: [[Prime iff atomic and countable]]
Justifications: [[Saturated iff homogeneous and universal#^homogeneous-realize-same-types-isomorphic]]

``` ad-Definition
title: Definition (Prime/Atomic Models).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. A model $\mc{M}\models T$ is said to be <b>prime</b> if $\mc{M}\eleminto\mc{N}$ for every $\mc{N}\models T$.
&emsp;&emsp; We say that $\mc{M}$ is <b>atomic</b> if $\tp^\mc{M}(\vec{a})$ is isolated in $S_n^\mc{M}(\em)$ for all $\vec{a}\in M^n$.

```

<b>Remark.</b> If $T$ has a prime model, then it is unique. Indeed, if $\mc{M},\mc{N}\models T$ are prime, then they are countable and atomic. Hence they are homogeneous and realize the same types in $S_n(T)$ $-$ namely, the isolated ones $-$ so $\mc{M}\iso\mc{N}$ by a back-and-forth argument.<span style="float:right;">$\blacklozenge$</span> ^uniqueness-of-prime-models
