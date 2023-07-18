<div class="topSpace"></div>

Date Created: 18/07/2023 18:49:28
Tags: #Type/Theorem #Topic/Module_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Basis Extension Theorem).

Let $X\subseteq M$ be a linearly independent subset of an $R$-module $M$ over a commutative ring. Then $X$ extends to a maximally linearly independent subset $B\subseteq M$.
* If $R$ is a field, then $B$ is a basis for $M$. In particular, every vector space is free.

```

<b>Remark.</b> In general, $B$ may not be a basis for $M$. Consider $B\coloneqq\l\{2\r\}\subseteq\Z\eqqcolon R$, which is a non-generating maximally linearly independent subset of $R$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\mc{L}$ be the collection of all linearly independent subsets of $M$ containing $X$, which is non-empty since $X\in\mc{L}$. Let $\mc{C}\subseteq\mc{L}$ be a chain. We claim that $\bigcup\mc{C}$ is also linearly independent. Indeed, if $\sum r_xx=0$ is a <i>finite</i> linear combination, then every $x\in B$ for which $r_x\neq0$ belongs to some element in $\mc{C}$ far enough into the chain, for which its linear independence forces $r_x=0$ for all $x\in B$. Thus $\mc{C}$ has an upper bound, so Zorn’s lemma furnishes a maximal element $B\in\mc{L}$.
* Suppose now that $R$ is a field. Take $m\in M\comp B$, so $B\cup\l\{m\r\}$ is linearly dependent. Hence there are constants $c_0,c_i\in R$ such that $c_0m+\sum_{b\in B}c_ib_i=0$ with some $c_i\neq0$. Since $B$ is linearly independent, we have $c_0\neq0$. But $R$ is a field, so we can write $m=-\frac{1}{c_0}\sum_{b\in B}c_ib_i\in\gen{B}$, as desired.<span style="float:right;">$\blacksquare$</span>
