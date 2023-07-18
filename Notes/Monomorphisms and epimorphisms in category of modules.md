---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 18/07/2023 11:32:58
Tags: #Type/Proposition #Topic/Module_Theory

Proved by: [[Injection iff monomorphism (Set Theory)]], [[Surjection iff epimorphism (Set Theory)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\phi:M\to N$ be an $R$-module homomorphism. We have the following equivalences.
* $\phi$ is a monomorphism iff $\ker\phi$ is trivial iff $\phi$ is injective.
* $\phi$ is an epimorphism iff $\coker\phi$ is trivial iff $\phi$ is surjective.

```

<b>Remark.</b> The equivalences for $\phi$ being a monomorphism also holds in $\catgrp$ and $\catring$, but the same for epimorphisms do <i>not</i> hold in either.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> That $\phi$ is injective (resp. surjective) implies that it is a monomorphism (resp. epimorphism) holds in $\catset$, so applying these results to module homomorphisms shows that they hold in $\catmod[R]$ too.
* That $\ker\phi=\l\{0\r\}$ implies that $\phi$ is injective is easy, for if $\phi\l(m_1\r)=\phi\l(m_2\r)$ for $m_1,m_2\in M$, then $\phi\l(m_1-m_2\r)=0$ and hence $m_1-m_2=0$. Thus $m_1=m_2$, as desired. Similarly, if $\coker\phi=N/\im\phi$ is trivial, then $N=\im\phi$ and hence $\phi$ is surjective.

Now, if $\phi$ is a monomorphism/epimorphism, we consider the parallel homomorphisms
![[Images/2023-07-18_113905/image.svg|300]]where $\iota$ is the inclusion map, $\pi$ is the projection map, and $0$ is the trivial map. Then $\phi\circ\iota=\phi\circ0$ is again the trivial map, so $\iota=0$ and hence $\ker\phi=\l\{0\r\}$. Similarly, $\pi\circ\phi=0\circ\phi$ is also the trivial map, so $\pi=0$ and hence $\coker\phi$ is trivial.<span style="float:right;">$\blacksquare$</span>
