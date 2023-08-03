---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/07/2023 19:06:09
Tags: #Type/Definition #Topic/Module_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Structure Theorem]]
Sufficiencies: [[Characterizations of fields]], [[Characterizations of PIDs]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $M$ be an $R$-module. The <b>torsion of $M$</b> is $\Tor M\coloneqq\l\{m\in M\st\ex r\in R\comp\l\{0\r\}:rm=0\r\}$, whose elements are called <b>torsion elements of $M$</b>.
* A module $M$ is <b>torsion-free</b> if $\Tor M=\l\{0\r\}$, and is <b>torsion</b> if $\Tor M=M$.
* If $R$ is an integral domain, then $\Tor M\subgrpeq M$ is a submodule and $M/\Tor M$ is torsion-free.

```

<b>Remark.</b> We list some basic observations.
* A commutative ring $R$ is torsion-free (as an $R$-module) iff $R$ is an integral domain.
* Submodules and direct sums of torsion-free modules are torsion-free.

Those observations show that free modules $R^{\oplus n}$ over an integral domain $R$ are all torsion-free. The converse occurs iff $R$ is a PID.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Note that if $M$ is finitely-generated and $R$ is an integral domain, then $M$ is torsion iff $\Ann M\neq\l\{0\r\}$.<span style="float:right;">$\blacklozenge$</span>
