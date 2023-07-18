<div class="topSpace"></div>

Date Created: 27/10/2022 21:13:52
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Isomorphism Theorems]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Characterizations of normality]]

``` ad-Definition
title: Definition.

Let $G$ and $H$ be groups and consider a homomorphism $\phi:G\to H$. The <b>kernel of $\phi$</b> is the subgroup $\ker\phi\coloneqq\phi^{-1}\!\l(e\r)=\l\{g\in G\st\phi\l(g\r)=e\r\}$ of $G$.

```

<b>Remark.</b> Note that $\ker\phi\nsubgrpeq G$ is normal, and conversely every normal subgroup $N\nsubgrpeq G$ is the kernel of the projection $\pi:G\to G/N$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Kernels in $\catgrp$ satisfy a universal property. Namely, the inclusion $\iota:\ker\phi\into G$ is final in the category of group homomorphisms $\alpha:K\to G$ where $\phi\circ\alpha=e$ is the trivial map.
![[Images/2023-07-18_110145/image.svg|200]]Indeed, if $\phi\circ\alpha=e$, then $\phi\l(\alpha\l(k\r)\r)=e$ for all $k\in K$ and hence $\alpha\l(k\r)\in\ker\phi$. Thus, for a homomorphism $\widetilde{\alpha}:K\to\ker\phi$ to be such that $\alpha=\iota\circ\widetilde{\alpha}$, we need $\widetilde{\alpha}=\alpha$ with restricted target.<span style="float:right;">$\blacklozenge$</span>
