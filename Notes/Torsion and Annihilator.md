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
Sufficiencies: [[Characterizations of fields]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $M$ be an $R$-module. The <b>torsion of $M$</b> is $\Tor M\coloneqq\l\{m\in M\st\ex r\in R\comp\l\{0\r\}:rm=0\r\}$, whose elements are called <b>torsion elements of $M$</b>.
* A module $M$ is <b>torsion-free</b> if $\Tor M=\l\{0\r\}$, and is <b>torsion</b> if $\Tor M=M$.
* If $R$ is an integral domain, then $\Tor M\subgrpeq M$ is a submodule.

For a subset $X\subseteq M$, the <b>annihilator of $X$</b> is $\Ann X\coloneqq\l\{r\in R\st\fa x\in X:rx=0\r\}$.

```

<b>Remark.</b> We list some basic observations.
* A commutative ring $R$ is torsion-free (as an $R$-module) iff $R$ is an integral domain.
* Submodules and direct sums of torsion-free modules are torsion-free.

Those observations show that free modules $R^{\oplus n}$ over an integral domain $R$ are all torsion-free.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Observe that $\Ann M\nsubgrpeq M$ is an ideal. Also, if $M$ is finitely-generated and $R$ is an integral domain, then $M$ is torsion iff $\Ann M\neq\l\{0\r\}$.
* The converse is trivial. For the forwards, let $m\in M$ and choose $x_i\in M$ so that $m=\sum_{i=1}^{n}s_ix_i$ for some $s_i\in R$. Since $M$ is torsion, for all $1\leq i\leq n$ we have $r_ix_i=0$ for some non-zero $r_i\in R$. Set $r\coloneqq\prod_{i=1}^{n}r_i$, which is non-zero since $R$ is an integral domain, and observe that
$$\begin{equation}
    rm=\prod_{i=1}^{n}r_i\sum_{i=1}^{n}s_ix_i=\sum_{i=1}^{n}s_i\l(\prod_{i=1}^{n}r_ix_i\r)=0.\exqedin
\end{equation}$$
