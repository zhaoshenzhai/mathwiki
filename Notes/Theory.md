---
mathLink-blocks:
    consistent-syntactic-completeness: Consistency and Syntactic Completeness
    satisfiable-semantic-completeness: Satisfiability and Semantic Completeness
    maximally-consistent-completion: Consistent theories admit maximal completions
    category-of-models: $\catmodel{T}$
---

<div class="topSpace"></div>

Date Created: 22/12/2023 16:56:45
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: [[Henkin Theory]], [[Categorical Theory]]
Examples: <i>Not Applicable</i>
Constructions: [[Models and Semantic Implication]], [[Proofs and Syntactic Implication]]
Generalizations: <i>Not Applicable</i>

Properties: [[Completeness Theorem]], [[Basic properties of consistent theories]]
Sufficiencies: [[Compactness Theorem]], [[Categorical Theory#^los-vaught-test]]
Equivalences: [[Completeness Theorem#^syntactic-semantic-duality]]
Justifications: [[Compactness Theorem#^syntactic-compactness]], [[Zorn's Lemma]]
^satisfiable-semantic-completeness

``` ad-Definition
title: Definition (First Order Theory).

Let $\sigma$ be a signature in $\FOL$. A <b>$\sigma$-theory</b> is a collection of $\sigma$-sentences $T$ that is closed under provability, and an <b>axiomatization</b> of $T$ is a collection $T'$ of $\sigma$-sentences such that $T=\l\{\phi\in\Sent\l(\sigma\r)\st T'\proves\phi\r\}$.
* A $\sigma$-theory $T$ is said to be <b>consistent</b> if there is no $\sigma$-formula such that $T\proves\phi$ and $T\proves\lnot\phi$, and <b>satisfiable</b> if it admits a non-empty model.
* A $\sigma$-theory $T$ is said to be <b>syntactically</b> (resp. <b>semantically</b>) <b>complete</b> if for each $\sigma$-sentence, either $T\proves\phi$ or $T\proves\lnot\phi$ (resp. $T\models\phi$ or $T\models\lnot\phi$).

Let $\mc{A}$ be a $\sigma$-structure. The <b>theory of $A$</b> is $\Th\mc{A}\coloneqq\l\{\phi\in\Sent\l(\sigma\r)\st\mc{A}\models\phi\r\}$, and we say that <b>$A$ models $T$</b>, and write $A\models T$, if $T\subseteq\Th\mc{A}$.

```
^consistent-syntactic-completeness

<b>Remark.</b> Clearly $\Th\mc{A}$ is semantically complete for any $\sigma$-structure $\mc{A}$, so every satisfiable $\sigma$-theory $T$ admits a semantic completion $\bar{T}\supseteq T$. In fact, the syntactic version holds too: every consistent $\sigma$-theory $T$ admits a syntactic completion $\bar{T}\supseteq T$. ^maximally-consistent-completion
* Indeed, since inconsistent theories have inconsistent finite subtheories (this is syntactic-compactness), arbitrary unions of consistent theories are consistent. By Zorn’s Lemma, $T$ admits a $\subseteq$-maximal consistent extension, so it remains to show that it is syntactically complete. Indeed, for any $\sigma$-sentence $\phi$, at least one of $\bar{T}\cup\l\{\phi\r\}$ and $\bar{T}\cup\l\{\lnot\phi\r\}$ is consistent, so $\subseteq$-maximality of $\bar{T}$ shows that either $\bar{T}\proves\phi$ or $\bar{T}\proves\lnot\phi$, as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The <i>category of $\sigma$-models of $T$</i> is the subcategory $\catmodel{T}$ of $\cathom$ whose objects are models of $T$ and whose morphisms are $\sigma$-preserving maps. Using the Completeness Theorem, an axiomatization of $T$ can be redefined as any collection $T'$ of $\sigma$-sentences such that $\mc{A}\models T'$ iff $\mc{A}\in\catmodel{T}$ for every $\sigma$-structure $\mc{A}$. ^category-of-models
* A priori, a finite axiomatization $F$ of $T$ need not lie in $T$, but it is a consequence of the Compactness Theorem that a witness $T'\subseteq T$ to finite axiomatizability can always be found. Indeed, write $F=\l\{\phi_1,\dots,\phi_n\r\}$ for some $\sigma$-sentences $\phi_i$, so $\mc{A}\models T$ iff $\mc{A}\models\phi_i$ for all $1\leq i\leq n$. In particular, we see that $T\models\phi_i$ for each $i$, so Compactness furnishes finite subtheories $T_i\subseteq T$ such that $T_i\models\phi_i$ for each $i$. The finite subtheory $T'\coloneqq\bigcup_{i=1}^nT_i$ of $T$ is as desired.<span style="float:right;">$\blacklozenge$</span>
