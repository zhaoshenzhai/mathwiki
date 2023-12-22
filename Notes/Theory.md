---
mathLink-blocks:
    maximally-consistent-completion: Consistent theories admit maximal completions
    theorems: Theorems
---

<div class="topSpace"></div>

Date Created: 22/12/2023 16:56:45
Tags: #Type/Definition #Topic/Model_Theory

Types: [[Models and Semantic Truth#^semantic-properties-of-theories]], [[Proofs and Syntactic Truth#^syntactic-properties-of-theories]]
Examples: <i>Not Applicable</i>
Constructions: [[Models and Semantic Truth]], [[Proofs and Syntactic Truth]]
Generalizations: <i>Not Applicable</i>

Properties: [[Completeness Theorem]], [[Basic properties of consistent theories]]
Sufficiencies: [[Compactness Theorem]]
Equivalences: [[Completeness Theorem#^syntactic-semantic-duality]]
Justifications: [[Proofs and Syntactic Truth#^syntactic-compactness]], [[Zorn's Lemma]]

``` ad-Definition
title: Definition.

Let $\sigma$ be a signature in $\FOL$. A <b>$\sigma$-theory</b> is a collection of $\sigma$-sentences.
* Given a $\sigma$-structure $\mc{A}$, the <b>theory</b> of $\mc{A}$ is the $\sigma$-theory $\Th\l(\mc{A}\r)$ of all $\sigma$-sentences $\phi$ such that $\mc{A}\models\phi$.
* For a $\sigma$-theory $T$, the <b>$\sigma$-theorems</b> of $T$ is the collection $\Thm_\sigma\!\l(T\r)$ of $\sigma$-sentences $\phi$ such that $T\proves\phi$.

```
^theorems

<b>Remark.</b> A $\sigma$-theory $T$ is said to be <i>maximal</i> if for all $\phi\in\Sent\l(\sigma\r)$, either $\phi\in T$ or $\lnot\phi\in T$. For any $\sigma$-structure $\mc{A}$, clearly $\Th\mc{A}$ is maximally satisfiable, so every satisfiable theory $T$ admits a maximally satisfiable completion $\bar{T}\supseteq T$. Although not as immediate, the same is true for syntactically-complete theories. ^maximally-consistent-completion
* Indeed, since inconsistent theories have inconsistent finite subtheories (this is syntactic-compactness), arbitrary unions of consistent theories are consistent. By Zorn’s Lemma, $T$ admits a $\subseteq$-maximal consistent extension, so it remains to show that it is maximal in the sense above. Indeed, for any $\sigma$-sentence $\phi$, at least one of $\bar{T}\cup\l\{\phi\r\}$ and $\bar{T}\cup\l\{\lnot\phi\r\}$ is consistent, so $\subseteq$-maximality of $\bar{T}$ shows that either $\phi\in\bar{T}$ or $\lnot\phi\in\bar{T}$, as desired.<span style="float:right;">$\blacklozenge$</span>
