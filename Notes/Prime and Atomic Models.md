---
mathLink: auto
mathLink-blocks:
    atomic-iff-omits-negation-of-isolating-formulas: $\mc{M}\models T$ atomic $\Leftrightarrow$ $\mc{M}$ isolates each $\l\{\lnot\phi\st\phi\textrm{ isolates }p\in S_n(T)\r\}$
    uniqueness-of-prime-models: Uniqueness of prime models
---

<div class="topSpace"></div>

Date Created: 17/02/2024 21:34:18
References: #Ref/Mar02
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: [[Prime Field]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Saturated iff homogeneous and universal#^uniqueness-of-prime-models]]
Sufficiencies: [[Existence of prime and atomic models]], [[Ryll-Nardzewski Theorem]]
Equivalences: [[Prime iff atomic and countable]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Prime/Atomic Models).

Let $T$ be a complete $\mc{L}$-theory with infinite models over a countable language $\mc{L}$. A model $\mc{M}\models T$ is said to be <b>prime</b> if $\mc{M}\eleminto\mc{N}$ for every $\mc{N}\models T$.
&emsp;&emsp; We say that $\mc{M}$ is <b>atomic</b> if $\tp^\mc{M}(\vec{a})$ is isolated in $S_n^\mc{M}(\em)$ for all $\vec{a}\in M^n$.

```

<b>Remark.</b> Atomic models $\mc{M}\models T$ realize the ‘least’ types, in the sense that $p(\vec{x})=\tp^\mc{M}(\vec{a})$ for some $\vec{a}\in M$ iff $p(\vec{x})$ is isolated. An alternative characterization is that $\mc{M}\models T$ is atomic iff $\mc{M}$ omits the collection $\Sigma\coloneqq\l\{p_n(\vec{x})\r\}_{n<\omega}$, where each $p_n(\vec{x})\coloneqq\l\{\lnot\phi(\vec{x})\st\phi(\vec{x})\textrm{ isolates a type in }S_n(T)\r\}$.
&emsp;&emsp;Indeed, if $\mc{M}$ omits $\Sigma$, then for each $\vec{a}\in M$, there is some $\lnot\phi(\vec{x})\in p_n(\vec{x})$ such that $\mc{M}\models\phi(\vec{a})$. Hence $\tp^\mc{M}(\vec{a})$ is isolated by $\phi(\vec{x})$. Conversely, since each $\tp^\mc{M}(\vec{a})$ is isolated $-$ say by $\phi_\vec{a}(\vec{x})$ $-$ we see that $\lnot\phi_\vec{a}(\vec{x})\in p_n(\vec{x})$. But $\mc{M}\not\models\lnot\phi_\vec{a}(\vec{a})$, so $\mc{M}$ omits $p_n(\vec{x})$. This holds for each $n$, so $\mc{M}$ omits $\Sigma$.<span style="float:right;">$\blacklozenge$</span> ^atomic-iff-omits-negation-of-isolating-formulas