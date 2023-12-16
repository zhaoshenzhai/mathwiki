---
mathLink-blocks:
    soundness: Soundness of $\FOL\l(\sigma\r)$
---

<div class="topSpace"></div>

Date Created: 15/12/2023 19:42:31
Tags: #Type/Definition #Topic/Proof_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Completeness Theorem#^syntactic-semantic-duality]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Models and Semantic Truth]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Proofs and Syntactic Truth).

Let $T$ be a $\sigma$-theory and let $\phi$ be a $\sigma$-formula. A finite sequence $\tpl{\phi_1,\dots,\phi_n}$ is said to be a <b>proof</b> of $\phi$ if $\phi_n=\phi$ and, for each $\phi_i$, either $\phi_i\in\Axioms\l(\sigma\r)\cup T$ or $\phi_i$ is obtained from <b>Modus Ponens</b> from $\phi_j$ and $\phi_k$ for some $j,k<i$ (i.e. $\phi_j=\l(\phi_k\rightarrow\phi_i\r)$, in which case we write $\phi_j,\phi_k\MP\phi_i$).
* (Implication). For a $\sigma$-formula $\phi$, we say that <b>$T$ proves/syntactically implies $\phi$</b>, written $T\proves\phi$, if there exists a proof of $\phi$ from $T$.
* (Consistency). A $\sigma$-theory $T$ is <b>consistent</b> there is no $\sigma$-formula $\phi$ such that $T\proves\phi$ and $T\proves\lnot\phi$.
* (Completeness). A $\sigma$-theory $T$ is <b>complete</b> for each $\sigma$-sentence $\phi$, either $T\proves\phi$ or $T\proves\lnot\phi$.
* (Compactness). A $\sigma$-theory $T$ is <b>compact</b> if whenever $T\proves\phi$, there is a finite subtheory $T'\subseteq T$ such that $T'\proves\phi$.

```

<b>Remark.</b> Our proof system is <i>sound</i>, i.e. $T\proves\phi$ implies $T\models\phi$ for any $\sigma$-sentence $\phi$. Indeed, this follows easily by induction on the length of a proof of $\phi$ from $T$: if $\phi\in\Axioms\l(\sigma\r)\cup T$, then every model $\mc{A}\models T$ models $\phi$. Otherwise, if $\psi,\theta\MP\phi$ for some $\psi=\l(\theta\rightarrow\phi\r)$ and $T\models\psi,\theta$, then any model $\mc{A}\models T$ models both $\theta$ and $\theta\rightarrow\phi$, whence $\mc{A}\models\phi$ too. ^soundness
* While semantic compactness is hard to prove, <i>syntactic</i> compactness $-$ which states that $T$ is consistent iff every finite subtheory $T'\subseteq T$ is consistent $-$ follows immediately from the fact that proofs are finite. Indeed, if $\phi$ witnesses inconsistency for $T$, then there exist finite subtheories $T_0,T_1\subseteq T$ such that $T_0\proves\phi$ and $T_1\proves\lnot\phi$. Their union $T'\coloneqq T_0\cup T_1$ is then an inconsistent finite subtheory of $T$, a contradiction.<span style="float:right;">$\blacklozenge$</span>
