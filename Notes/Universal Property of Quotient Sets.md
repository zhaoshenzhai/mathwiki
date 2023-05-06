---
mathLink: Universal Property of $\pi:X\to X/\!\sim$
---

<div class="topSpace"></div>

Date Created: 03/01/2023 21:56:47
Tags: #Type/Theorem #Topic/Set_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Universal Property of Quotient Sets).

_Let $X$ be a set and let $\sim$ be an equivalence relation on $X$. Then the projection $\pi:X\to X/\!\sim$ is universal among functions that map equivalent elements to the same image. That is, for any set $Z$ and any function $\phi:X\to Z$ such that $\phi\l(x_1\r)=\phi\l(x_2\r)$ for all $x_1\sim x_2$, the following diagram commutes:_
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2023-01-03_220428/image.svg", width=175></center>

```

_Proof_. Take any set $Z$ and any function $\phi:X\to Z$ such that $\phi\l(x_1\r)=\phi\l(x_2\r)$ for all $x_1,x_2\in X$ such that $x_1\sim x_2$. For the diagram to commute, we need to find some $\tilde{\phi}:X/\!\sim\,\to Z$ such that $\phi=\tilde{\phi}\circ\pi$, which forces $\tilde{\phi}\l(\l[x\r]\r)\coloneqq\phi\l(x\r)$ for all $x\in X$. Thus it suffices to show that $\tilde{\phi}$ is well-defined. To do so, take $x_1,x_2\in X$ such that $\l[x_1\r]=\l[x_2\r]$. Then $x_1\sim x_2$, so $\phi\l(x_1\r)=\phi\l(x_2\r)$.<span style="float:right;">$\blacksquare$</span>
