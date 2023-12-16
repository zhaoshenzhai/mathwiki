---
mathLink-blocks:
    syntactic-semantic-duality: Syntactic-Semantic Duality
---

<div class="topSpace"></div>

Date Created: 15/12/2023 19:42:31
Tags: #Type/Definition #In_Progress
^syntactic-semantic-duality

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Models and Semantic Truth#^syntactic-semantic-duality]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Proofs and Syntactic Truth).

Let $T$ be a $\sigma$-theory and let $\phi$ be a $\sigma$-formula. A finite sequence $\tpl{\phi_1,\dots,\phi_n}$ is said to be a <b>proof</b> of $\phi$ if $\phi_n=\phi$ and, for each $\phi_i$, either $\phi_i\in\Axioms\l(\sigma\r)\cup T$ or $\phi_i$ is obtained from <b>Modus Ponens</b> from $\phi_j$ and $\phi_k$ for some $j,k<i$ (in which case we have $\phi_j=\l(\phi_k\rightarrow\phi_i\r)$ and write $\phi_j,\phi_k\MP\phi_i$).
* (Implication). For a $\sigma$-formula $\phi$, we say that <b>$T$ proves/syntactically implies $\phi$</b>, written $T\proves\phi$, if there exists a proof of $\phi$ from $T$.
* (Consistency). A $\sigma$-theory $T$ is <b>consistent</b> there is no $\sigma$-formula $\phi$ such that $T\proves\phi$ and $T\proves\lnot\phi$.
* (Completeness). A $\sigma$-theory $T$ is <b>complete</b> for each $\sigma$-sentence $\phi$, either $T\proves\phi$ or $T\proves\lnot\phi$.
* (Compactness). A $\sigma$-theory $T$ is <b>compact</b> if whenever $T\proves\phi$, there is a finite subtheory $T'\subseteq T$ such that $T'\proves\phi$.

```

<b>Remark.</b> If $T\coloneqq\em$, we write $\proves\phi$ for $\em\proves\phi$.
