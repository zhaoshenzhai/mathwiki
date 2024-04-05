---
mathLink-blocks:
    los-vaught-test: Łoś-Vaught Test
---

<div class="topSpace"></div>

Date Created: 17/01/2024 17:29:41
References: #Ref/Anu23 #Ref/Mar02
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: [[Dense Linear Orders#^without-endpoints]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Categoricity Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Ryll-Nardzewski Theorem]]
Justifications: [[Lowenheim-Skolem Theorem]], [[Basic properties of consistent theories]], [[Completeness Theorem]]

``` ad-Definition
title: Definition (Categorical Theory).

Let $\kappa$ be an infinite cardinal and let $\mc{L}$ be a language in $\FOL$. An $\mc{L}$-theory $T$ is said to be <b>$\kappa$-categorical</b> if it has exactly one model of cardinality $\kappa$.

```

<b>Remark.</b> By the Löwenheim-Skolem Theorems, if $T$ has an infinite model, then it has a model of any infinite cardinality. This uncontrollable behaviour is slightly tamed if $T$ is $\kappa$-categorical. In fact, if $T$ is $\kappa$-categorical for some $\kappa$ and has no finite models, then it is complete.
* (<i>Łoś-Vaught Test</i>). Suppose not, so there is an $\mc{L}$-sentence $\phi$ such that $T\not\proves\phi$ and $T\not\proves\lnot\phi$. Thus both $T\cup\l\{\phi\r\}$ and $T\cup\l\{\lnot\phi\r\}$ are consistent, so they have models $\mc{A}\models T\cup\l\{\phi\r\}$ and $\mc{B}\models T\cup\l\{\lnot\phi\r\}$. They are necessarily infinite, so by the Löwenheim-Skolem Theorems we can assume that $\l|\mc{A}\r|=\l|\mc{B}\r|=\kappa$. But $\mc{A}$ and $\mc{B}$ are not elementarily equivalent since they disagree on $\phi$, so $\mc{A}\not\iso\mc{B}$, contradicting the $\kappa$-categoricity of $T$.<span style="float:right;">$\blacklozenge$</span> ^los-vaught-test
