<div class="topSpace"></div>

Date Created: 15/11/2022 12:56:38
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Isomorphism Theorems]]

``` ad-Definition
title: Definition.

Let $R$ be a ring and consider the unique homomorphism $\lambda:\Z\to R$. The <b>characteristic of $R$</b>, denoted $\ch R$, is the unique $n\in\N$ such that $\ker\lambda=n\Z$.

```

<b>Remark.</b> By the First Isomorphism Theorem, we have the embedding $\Z/\ker\lambda=\Z/n\Z\into R$. If $R$ is an integral domain, then $n\Z\ideal\Z$ is prime and hence either $n=0$, whence $\Z\into R$, or $n=p$, whence $\F_p\into R$. Suppose now that $K\coloneqq R$ is a field.
* If $\ch K=0$, then the embedding $\Z\into K$ extends uniquely to an embedding $\Frac\l(\Z\r)=\Q\into K$. Furthermore, $\Q$ is the <i>smallest</i> field that embeds into $K$.
* Otherwise, if $p\coloneqq\ch K\neq0$ is prime, then $\F_p$ is a field and hence $\Frac\l(\F_p\r)=\F_p\into K$. Again $\F_p$ is the smallest subfield that embeds into $K$.

In any case, $\Q$ or $\F_p$ is the smallest subfield of $K$, called the <b>prime field of $K$</b>.<span style="float:right;">$\blacklozenge$</span>
