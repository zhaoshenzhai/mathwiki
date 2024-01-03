---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/12/2023 17:54:05
References:
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Characterizations of topology via nets#^sequential-characterizations-of-topology]], [[Metric Space#^metric-spaces-are-first-countable]], [[Metric Space#^metric-spaces-are-normal]], [[Characterizations of topology via nets#^hausdorff-iff-every-net-converges-to-at-most-one-point]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Cantor).

A metric space $X$ is complete iff for every decreasing sequence $\tpl{F_n}$ of non-empty closed sets in $X$ with $\diam F_n\to0$, the intersection $\bigcap_nF_n$ is a singleton.

```

<i>Proof.</i> Both directions use the fact that a sequence $x_\blob$ is Cauchy iff the diameter of its <i>$n$-tail</i> $\tpl{x_m}_{m\geq n}$ tends to $0$ as $n\to0$.
* Indeed, if $X$ is complete and $\tpl{F_n}$ is a sequence satisfying our hypothesis, construct $x_\blob$ by choosing $x_n\in F_n$ arbitrarily for each $n$. Its $n$-tail is contained in $F_n$, so $\diam\tpl{x_m}_{m\geq n}\leq\diam F_n\to0$ and hence $x_\blob$ is Cauchy. Thus $x_\blob\to x$ for some $x\in X$, but since each $F_n$ is closed, we see that $x\in\bigcap_nF_n$, as desired.
* Conversely, let $\tpl{x_n}$ be a Cauchy sequence in $X$ and let $F_n$ be the closure of $\tpl{x_m}_{m\geq n}$ for each $n\in\N$. Then $\diam F_n\to0$, and it is easily seen that the element $x\in\bigcap_nF_n$ is the limit of $x_\blob$.<span style="float:right;">$\blacksquare$</span>
