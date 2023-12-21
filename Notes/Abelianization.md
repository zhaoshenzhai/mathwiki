---
mathLink-blocks:
    universal-property-of-abelianization: Universal Property of Abelianization
---

<div class="topSpace"></div>

Date Created: 07/05/2023 19:05:56
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Abelianization of product is product of abelianization]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Universal Property of Quotients]]

``` ad-Definition
title: Definition.

Let $G$ be a group. The <b>abelianization of $G$</b> is the quotient group $G^\textrm{ab}\coloneqq G/G'$, where $G'\coloneqq\l[G,G\r]\coloneqq\gen{ghg^{-1}h^{-1}\st g,h\in G}$ is the commutator subgroup of $G$.

```

<b>Remark.</b> The abelianization $\pi:G\to G/G'=G^\textrm{ab}$ is initial in the category of homomorphisms $\phi:G\to H$ into abelian groups. Indeed, observe that $G'\substructeq\ker\phi$, so the result follows by universality of the quotient.<span style="float:right;">$\blacklozenge$</span>  
^universal-property-of-abelianization

---

<b>Remark.</b> This defines a covariant functor $\l(\slot\r)^\textrm{ab}:\catgrp\to\catabgrp$ mapping each morphism $\phi:G\to H$ to the morphism $\phi^\textrm{ab}:G^\textrm{ab}\to H^\textrm{ab}$ defined by $\phi^\textrm{ab}\l(\bar{g}\r)\coloneqq\bar{\phi\l(g\r)}$, where $\bar{g}\coloneqq gG'$. This is well-defined since if $\bar{g_1}=\bar{g_2}$, then $g_1g_2^{-1}\in G'$ and hence $\phi\l(g_1g_2\r)^{-1}\in\phi\l(G'\r)\subseteq H'$.<span style="float:right;">$\blacklozenge$</span>
