---
title: Theory
date: 2024-12-15T16:05:04-05:00
references: []
tags: [In_Progress]
---

# Motivation and Definition

{{< env type="definition" >}}

Let $L$ be a first-order language. An *$L$-theory* $T$ is a collection of $L$-sentences. A *deductively-closed* theory is a theory that is closed under provability, i.e., $\phi\in T$ whenever $T\proves\phi$.{{< /env >}}

We say that an $L$-structure $M$ *models* an $L$-theory $T$ if $M\models\phi$ for all $\phi\in T$, in which case we write $M\models T$. Note that $M$ has its own theory $\Th M\coloneqq\l\\{\phi\in L\st M\models\phi\r\\}$, and $M\models T$ iff $T\subseteq\Th M$. Also, we write $T\models\phi$ if $M\models\phi$ for *all* models $M\models T$.

## Consistent and satisfiable theories

<span style="color:red">**TODO**.</span>

## Complete theories

An $L$-theory $T$ is *syntactically-complete* (resp. *semantically-complete*) if for any $L$-sentence $\phi$, either $T\proves\phi$ or $T\proves\lnot\phi$ (resp. either $T\models\phi$ or $T\models\lnot\phi$). By the {{< link file="completeness_theorem.md" display="Completeness Theorem" type="justifications" >}}, the two notions are equivalent.
<br>
&emsp;&emsp;An example of a complete theory is the theory $\Th M$ of an $L$-structure $M$. In fact, theories of this form are *all* the complete theories, in the sense that a deductively-closed theory $T$ is complete iff $T=\Th M$ for any (and hence all) models $M\models T$.

>Indeed, if $T$ is complete and $M\models T$, then for any $\phi\in\Th M$, we have $T\proves\phi$ by completeness of $T$, and hence $\phi\in T$. Conversely, if $\phi$ is an $L$-sentence and $T\not\proves\phi$, then there is a model $M\models T$ such that $M\models\lnot\phi$. Thus $\lnot\phi\in\Th M=T$, so $T\proves\lnot\phi$ as desired.

# The Category of Theories
