<div class="topSpace"></div>

Date Created: 03/01/2023 22:14:39
Tags: #Type/Theorem #Topic/Set_Theory

Proved by: [[Universal Property of Quotient Sets]], [[Terminal objects are isomorphic]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Canonical Decomposition of Functions).

_Let $f:X\to Y$ and let $\sim$ be an equivalence relation on $X$ defined by $x_1\sim x_2$ iff $f\l(x_1\r)=f\l(x_2\r)$. Then the following diagram commutes:_
![[Images/2023-01-03_221630/image.svg|275]]

```

**Remark.** In other words, every function $f:X\to Y$ can be canonically decomposed into $f=\iota\circ\widetilde{f}\circ\pi$ for $\pi$ a surjection, $\widetilde{f}$ a (unique) bijection, and $\iota$ an injection.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. It suffices to show that $f:X\to\im f$ is universal among functions that map equivalent elements to the same image, for then $X/\!\!\sim\,\iso\im f$ via a unique isomorphism. Indeed, take any set $Z$ and any function $\phi:X\to Z$ such that $\phi\l(x_1\r)=\phi\l(x_2\r)$ for all $x_1\sim x_2$. For $f$ to be universal, we need to find some $\widetilde{\phi}:\im f\to Z$ such that $\phi=\widetilde{\phi}\circ f$, which forces $\widetilde{\phi}\l(f\l(x\r)\r)=\phi\l(x\r)$ for all $x\in X$. Thus it suffices to check that $\widetilde{\phi}$ is well-defined, which it is since if $f\l(x_1\r)=f\l(x_2\r)$, then $x_1\sim x_2$ and so $\phi\l(x_1\r)=\phi\l(x_2\r)$.<span style="float:right;">$\blacksquare$</span>
