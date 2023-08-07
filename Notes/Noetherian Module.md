---
mathLink-blocks:
    Noetherian-ring: Noetherian Ring
---

<div class="topSpace"></div>

Date Created: 08/01/2023 22:12:15
Tags: #Type/Definition #Topic/Module_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Hilbert's Basis Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

An $R$-module $M$ over a commutative ring is said to be <b>Noetherian</b> if every submodule of $M$ is finitely-generated.

```

<b>Remark.</b> Noetherian modules can be defined in several equivalent ways. Indeed, $M$ is Noetherian iff every ascending chain $N_1\subseteq N_1\subseteq\cdots$ of submodules of $M$ stabilizes, which occurs iff every non-empty collection $\mc{F}$ of submodules of $M$ has a $\subseteq$-maximal element.
* ($1\Rightarrow2$). Suppose that $M$ is Noetherian and let $N_0\subseteq N_1\subseteq\cdots$ be an ascending chain of submodules of $M$. Then the union $N\coloneqq\bigcup_{i\in\N}N_i$ is a submodule of $M$, so it is finitely-generated, say $N=\gen{x_1,\dots,x_n}$. Since each $x_i\in N_{n_i}$ for some $n_i\in\N$, letting $n\coloneqq\max_in_i$ shows that $N\subseteq N_n\subseteq\cdots$
* ($2\Rightarrow3$). Let $\mc{F}$ be a non-empty collection of submodules of $M$ and suppose, for sake of contradiction, that it does not contain a maximal element. Choose $N_1\in\mc{F}$, so there is some $N_2\in\mc{F}$ such that $N_1\subset N_2$. Continuing this way gives us an ascending chain of submodules of $M$ that does not stabilize.
* ($3\Rightarrow1$). Let $N\subgrpeq M$ be a submodule of $M$ and consider the collection $\mc{F}$ of all finitely-generated submodules $P\subseteq N$. It is non-empty, so there is a $\subseteq$-maximal element $N_0=\gen{x_1,\dots,x_n}\in\mc{F}$. Then $N\subseteq N_0$ since for every $x\in N$, we have $\gen{x_1,\dots,x_n,x}\in\mc{F}$ and hence $n\in N_0$. Thus $N=N_0$ is finitely-generated.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We say that a commutative ring $R$ is Noetherian if it is Noetherian as an $R$-module.<span style="float:right;">$\blacklozenge$</span>
^Noetherian-ring
