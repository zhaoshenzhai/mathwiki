<div class="topSpace"></div>

Date Created: 21/12/2023 14:38:27
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

Let $\mc{A}$ and $\mc{B}$ be $\sigma$-structures. We say that $\mc{A}$ <b>elementarily embeds</b> in $\mc{B}$, written $\mc{A}\into_e\mc{B}$, if there is a homomorphism $h:\mc{A}\to\mc{B}$ such that for all $\sigma$-formulas $\phi(\vec{v})$ and $\vec{a}\in A^{|\vec{v}|}$, we have $\mc{A}\models\phi(\vec{a})$ iff $\mc{B}\models\phi(h(\vec{a}))$. Such a homomorphism $h$ is said to be an <b>elementary embedding</b>, written $h:\mc{A}\into_e\mc{B}$.
* A substructure $\mc{A}\substructeq\mc{B}$ is said to be <b>elementary</b>, written $\mc{A}\elem\mc{B}$, if $\iota:\mc{A}\into_e\mc{B}$.

```
