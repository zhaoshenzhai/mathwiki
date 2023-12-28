---
mathLink: $1^\textrm{st}/2^\textrm{nd}$-Countable Space
mathLink-blocks:
    first-countable-implies-frechet: $1^\textrm{st}$-countable $\Rightarrow$ Fréchet
---

<div class="topSpace"></div>

Date Created: 27/12/2023 16:01:46
Tags: #Type/Definition #Topic/Topology/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[First and Second Countable Spaces#^first-countable-implies-frechet]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A topological space $X$ is <b>first-countable</b> if every $x\in X$ admits a countable neighborhood basis, and <b>second-countable</b> if $X$ admits a countable basis.

```

<b>Remark.</b> The countable family $\l\{U_n\r\}$ witnessing first-countability of $X$ can always be assumed to be decreasing, since we may replace each $U_n$ by $U_n'\coloneqq\bigcap_{i\leq n}U_i$. It is clear that every second-countable space is first-countable. Furthermore, every first-countable space is Fréchet. ^first-countable-implies-frechet
* Indeed, for any $A\subseteq X$ and $x\in\bar{A}$, let $\l\{U_n\r\}$ be a countable family witnessing first-countability of $x\in X$ and choose $x_n\coloneqq A\cap\bigcap_{i\leq n}U_i$; observe that $x_n\to x$.<span style="float:right;">$\blacklozenge$</span>
