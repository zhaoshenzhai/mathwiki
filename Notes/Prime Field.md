<div class="topSpace"></div>

Date Created: 03/11/2022 19:37:02
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Isomorphism Theorems]], [[Universal Property of Localization]], [[Integers#^invertible-iff-coprime]]

``` ad-Definition
title: Definition.

Let $K$ be a field. The <b>prime field of $K$</b> is the smallest subfield of $K$, which is $\Q\coloneqq\Frac\Z$ if $\ch K=0$ or $\F_p\coloneqq\Z/p\Z$ if $\ch K=p$ for some prime $p$.

```

<b>Remark.</b> Since $\Z$ is initial in $\catring$, there is a unique homomorphism $\lambda:\Z\to K$ whose kernel is $\ker\lambda=n\Z$ where $n\coloneqq\ch K$. By the First Isomorphism Theorem, we have the embedding $\Z/\ker\lambda=\Z/n\Z\into K$. Since $K$ is an integral domain, the ideal $n\Z\nsubgrp\Z$ is prime and hence either $n=0$ or $n=p$ for some prime $p$.
* If $\ch K=0$, then the embedding $\Z\into K$ extends uniquely to an embedding $\Frac\Z=\Q\into K$. Furthermore, $\Q$ is the <i>smallest</i> field that embeds into $K$.
* Otherwise, $\ch K=p$ is prime. Then $\F_p$ is a field, so $\Frac\F_p\iso\F_p\into K$. Again $\F_p$ is the smallest subfield that embeds into $K$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> For $n>1$, the ring $\Z/n\Z$ is a commutative ring with unity, but, unless $n$ is prime, is <i>not</i> an integral domain and hence not a field.
* If $p\coloneqq n$ is prime, take $a\in\F_p\comp\l\{0\r\}$, so $a\perp p$ and hence $a\in F_p^\times$. Thus there is some $b\in F_p^\times$ such that $ab=1=ba$, as desired.
* Otherwise, if $n$ is not prime, then there exist $1<k,l<n$ such that $n=kl$. Then $kl=n=0$ despite $k,l\neq0$, so $\Z/n\Z$ is not an integral domain.<span style="float:right;">$\blacklozenge$</span>
