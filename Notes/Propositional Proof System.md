<div class="topSpace"></div>

Date Created: 11/01/2024 18:22:20
References: #Ref/NONE
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\sigma$ be a propositional signature. A <b>propositional proof system</b> is any polynomial time surjection $P:\l\{0,1\r\}^\ast\to\Taut\l(\sigma\r)$.
* 

```

<b>Remark.</b> For any $\phi\in\Taut\l(\sigma\r)$, elements of the fiber $P^{-1}\!\l(\phi\r)$ are called <i>$P$-proofs</i> of $\phi$. Equivalently, we can define it as any polynomial time algorithm $V\l(p,\phi\r)$ such that for any $\sigma$-formula $\phi$, we have $\phi\in\Taut\l(\sigma\r)$ iff there exists $p\in\l\{0,1\r\}^\ast$ that $V\l(p,\phi\r)$ accepts.
* Indeed, given $P$, let $V\coloneqq\Graph\l(P\r)\subseteq\l\{0,1\r\}^\ast\times\Taut\l(\sigma\r)$ be the algorithm that accepts $V\l(p,\phi\r)$ iff $P\l(p\r)=\phi$. Conversely, given $V$, define $P\l(w\r)\coloneqq\phi$ if $w$ encodes the pair $\tpl{p,\phi}$ and $V\l(p,\phi\r)$ holds, and $P\l(w\r)\coloneqq\top$ otherwise.<span style="float:right;">$\blacklozenge$</span>
