<div class="topSpace"></div>

Date Created: 28/03/2023 12:50:33
Tags: #Type/Definition #Topic/Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Riemann Integrable Function]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\l[a,b\r]\subseteq\R$ be an interval. A <b>partition</b> $\mc{P}$ of $\l[a,b\r]$ is a finite set $\l\{x_1,\dots,x_n\r\}$ such that $a\eqqcolon x_1<\cdots<x_n\coloneqq b$.
* If in addition we fix $t_i\in\l[x_{i-1},x_i\r]$ for each $1\leq i\leq n$, we say that $\mc{P}$, equipped with $\tpl{t_i}$, is a <b>tagged partition of $\l[a,b\r]$</b>.
* The <b>norm of $\mc{P}$</b> is $\|\mc{P}\|\coloneqq\underset{1\leq i\leq n}{\max}\l\{x_i-x_{i-1}\r\}$.
* A <b>refinement of $\mc{P}$</b> is any partition $\mc{P}^\ast\supseteq\mc{P}$. If $\mc{P}$ is tagged, then the common tags of $\mc{P}$ and $\mc{P}^\ast$ must agree. Note that $\|\mc{P}^\ast\|\leq\|\mc{P}\|$.

```
