---
mathLink-blocks:
    consistent: Consistent Theory
    satisfiable: Satisfiable Theory
    maximally-consistent-completion: Consistent theories admit maximal completions
    category-of-models: $\catmodel{T}$
---

<div class="topSpace"></div>

Date Created: 22/12/2023 16:56:45
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: [[Categorical Theory]], [[Stable Theory]], [[Skolem Theory]], [[Henkin Theory]]
Examples: <i>Not Applicable</i>
Constructions: [[Models]], [[Proofs]], [[Type]]
Generalizations: <i>Not Applicable</i>

Properties: [[Completeness Theorem]], [[Basic properties of consistent theories]]
Sufficiencies: [[Compactness Theorem]], [[Categorical Theory#^los-vaught-test]], [[Axiomatization]]
Equivalences: [[Completeness Theorem#^syntactic-semantic-duality]]
Justifications: [[Compactness Theorem#^syntactic-compactness]], [[Zorn's Lemma]]
^satisfiable

``` ad-Definition
title: Definition (First-order Theory).

Let $\mc{L}$ be a first-order language. An <b>$\mc{L}$-theory</b> $T$ is a collection of $\mc{L}$-sentences that is closed under provability, i.e. if $T\proves\phi$, then $\phi\in T$.
* An $\mc{L}$-theory $T$ is said to be <b>consistent</b> if there is no $\mc{L}$-formula such that $T\proves\phi$ and $T\proves\lnot\phi$, and <b>satisfiable</b> if it admits a non-empty model.
* An $\mc{L}$-theory $T$ is said to be <b>syntactically</b> (resp. <b>semantically</b>) <b>complete</b> if for each $\mc{L}$-sentence, either $T\proves\phi$ or $T\proves\lnot\phi$ (resp. $T\models\phi$ or $T\models\lnot\phi$).

Let $\mc{M}$ be an $\mc{L}$-structure. The <b>theory of $\mc{M}$</b> is $\Th\mc{M}\coloneqq\l\{\sigma\in\Sent\mc{L}\st\mc{M}\models\sigma\r\}$, and we say that <b>$\mc{M}$ models $T$</b>, and write $\mc{M}\models T$, if $T\subseteq\Th\mc{M}$.

```
^consistent

<b>Remark.</b> Clearly $\Th\mc{M}$ is semantically complete for any $\mc{L}$-structure $\mc{M}$, so every satisfiable $\mc{L}$-theory $T$ admits a maximally-satisfiable completion $T'\supseteq T$, called its <i>semantic completion</i>. The syntactic version holds too: every consistent $\mc{L}$-theory $T$ admits a maximally-consistent completion $T'\supseteq T$, called its <i>syntactic completion</i>. ^maximally-consistent-completion
>Indeed, by syntactic-compactness, inconsistent theories have inconsistent finite subtheories, and so arbitrary unions of consistent theories are consistent. By Zorn’s Lemma, $T$ admits a $\subseteq$-maximal consistent extension $T'$, so it remains to show that it is syntactically complete. Indeed, for any $\mc{L}$-sentence $\phi$, at least one of $T'\cup\l\{\phi\r\}$ and $T'\cup\l\{\lnot\phi\r\}$ is consistent, so $\subseteq$-maximality of $T'$ shows that either $T'\proves\phi$ or $T'\proves\lnot\phi$, as desired.<span style="float:right;color:white">$\blacklozenge$</span>

---

<b>Remark.</b> The <i>category of $\mc{L}$-models of $T$</i> is the subcategory $\catmodel{T}$ of $\cathom$ whose objects are models of $T$ and whose morphisms are $\mc{L}$-preserving maps.<span style="float:right;">$\blacklozenge$</span> ^category-of-models
