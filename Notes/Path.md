---
mathLink-blocks:
    path-components: Path-components
---

<div class="topSpace"></div>

Date Created: 17/05/2023 20:04:52
References:
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Path-connected Space]], [[Fundamental Groupoid]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a topological space and fix $x_0,x_1\in X$. A <b>path from $x_0$ to $x_1$</b> is a continuous map $\gamma:\l[0,1\r]\to X$ such that $\gamma\l(0\r)=x_0$ and $\gamma\l(1\r)=x_1$.
* The equivalence relation $x\sim y$ iff there is a path $x\pathto y$ partitions $X$ into its <b>path-components</b> $\pi_0\!\l(X\r)$, and induces a functor $\pi_0:\cattop\to\catset$ by mapping a morphism $f:X\to Y$ to $\pi_0\!\l(f\r):\pi_0\!\l(X\r)\to\pi_0\!\l(Y\r)$ that takes a path-component $C\subseteq X$ to the unique path-component of $Y$ containing $f\l(C\r)$.

```
^path-components

<b>Remark.</b> The functor $\pi_0$ preserves homotopy and hence descends into a functor $\pi_0:\cathtop\to\catset$. It follows then that if $X\htopeq Y$, then $\pi_0\!\l(X\r)\iso\pi_0\!\l(Y\r)$.<span style="float:right;">$\blacklozenge$</span>
