---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 05/12/2022 19:06:38
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Extreme Value Theorem]], [[Compact implies closed (Hausdorff)]], [[Sequential characterization of closed sets (metric)]]

``` ad-Definition
title: Definition.

Let $X$ be a metric space and let $f:X\to\R$. A point $p\in X$ is said to be a <b>local maximum</b> of $f$ if $\ex\delta>0,\fa x\in B_\delta\!\l(p\r)\cap X:f\l(x\r)\leq f\l(p\r)$.
* If the statement holds for all $x\in X$, then $p$ is said to be a <b>global maximum</b> of $f$.

```

<b>Remark.</b> Similarly for local/global minimum, and if $f$ has either a minimum or maximum and $p$, then $p$ is said to be an <b>extremum of $f$</b>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $X$ is compact, then $f$ admits both global extrema. Indeed, $Y\coloneqq f\l(X\r)$ is compact by the Extreme Value Theorem, so it is closed and bounded. Being bounded, Dedekind-completeness of $\R$ furnishes a supremum $\alpha\coloneqq\sup Y\in\R$. Now, for each $n\in\N^+$, there exist some $y_n\in Y$ such that $\alpha-1/n<y_n<\alpha$, so $y_n\to\alpha$ by the Squeeze Theorem. But $Y$ is closed, so it contains the limit of all converging sequences in $Y$. Hence $\alpha\in Y$, showing that $f$ admits a global maximum.<span style="float:right;">$\blacksquare$</span>
