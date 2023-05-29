---
mathLink: Universal Property of $\pi:X\to X/\!\sim$
---

<div class="topSpace"></div>

Date Created: 03/01/2023 21:56:47
Tags: #Type/Theorem #Topic/Set_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Universal Property of Quotient Sets).

Let $X$ be a set and let $\sim$ be an equivalence relation on $X$. Then the projection $\pi:X\to X/\!\sim$ is universal among functions that map equivalent elements to the same image. That is, for any set $Z$ and any function $\phi:X\to Z$ such that $\phi\l(x_1\r)=\phi\l(x_2\r)$ for all $x_1\sim x_2$, the following diagram commutes:
![[Images/2023-01-03_220428/image.svg|175]]

```

<i>Proof.</i> Take any set $Z$ and any function $\phi:X\to Z$ such that $\phi\l(x_1\r)=\phi\l(x_2\r)$ for all $x_1,x_2\in X$ such that $x_1\sim x_2$. For the diagram to commute, we need to find some $\widetilde{\phi}:X/\!\sim\,\to Z$ such that $\phi=\widetilde{\phi}\circ\pi$, which forces $\widetilde{\phi}\l(\l[x\r]\r)\coloneqq\phi\l(x\r)$ for all $x\in X$. Thus it suffices to show that $\widetilde{\phi}$ is well-defined. To do so, take $x_1,x_2\in X$ such that $\l[x_1\r]=\l[x_2\r]$. Then $x_1\sim x_2$, so $\phi\l(x_1\r)=\phi\l(x_2\r)$.<span style="float:right;">$\blacksquare$</span>
