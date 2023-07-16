---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 09/01/2023 12:16:56
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: [[Zorn's Lemma]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Krull).

Every proper ideal $\mf{a}\nsubgrp R$ in a commutative ring $R$ is contained in a maximal ideal $\mf{m}\nsubgrp R$.

```

<b>Remark.</b> In particular, every (non-trivial) commutative ring has a maximal ideal.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\mc{A}$ be the set of all proper ideals of $R$ containing $\mf{a}$, so in particular $\mc{A}\neq\em$. Let $\mc{C}\subseteq\mc{A}$ be a chain. We claim that $\bigcup\mc{C}$ is an ideal in $R$.
* Obviously $0\in\bigcup\mc{C}$. Take $x_1,x_2\in\bigcup\mc{C}$, so there exists $\mf{c}_1,\mf{c}_2\in\mc{C}$ such that $x_1\in\mf{c}_1$ and $x_2\in\mf{c}_2$. Since $\mc{C}$ is a chain, we may w.l.o.g. assume $\mf{c}_1\subseteq\mf{c}_2$, so $x_1,x_2\in\mf{c}_2$ and hence $x_1+x_2\in\mf{c}_2\subseteq\bigcup\mc{C}$. Similarly, $-x_1\in\bigcup\mc{C}$ and $rx_1\in\bigcup\mc{C}$ for all $r\in R$.

Furthermore, $\bigcup\mc{C}$ is proper since if $1\in\bigcup\mc{C}$, then $1\in\mf{c}$ for some $\mf{c}\in\mc{C}$. But then $\mf{c}=R$, a contradiction. Thus $\bigcup\mc{C}\in\mc{A}$, so every chain $\mc{C}$ in $\mc{A}$ has an upper bound $\mc{C}\subseteq\bigcup\mc{C}\in\mc{A}$. By Zorn’s Lemma, $\mc{A}$ has a maximal element $\mf{m}$.<span style="float:right;">$\blacksquare$</span>
