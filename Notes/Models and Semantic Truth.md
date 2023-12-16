---
mathLink-blocks:
    category-of-models: $\catmodel{T}$
---

<div class="topSpace"></div>

Date Created: 15/12/2023 01:23:56
Tags: #Type/Definition #Topic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Compactness Theorem]], [[Completeness Theorem#^syntactic-semantic-duality]]
Sufficiencies: [[Completeness Theorem]]
Equivalences: [[Proofs and Syntactic Truth]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Models and Semantic Truth).

Let $T$ be a $\sigma$-theory. A non-empty $\sigma$-structure $\mc{A}$ is said to <b>model</b> $T$, written $\mc{A}\models T$, if $\mc{A}\models\phi$ for every $\phi\in T$.
* (Implication). For a $\sigma$-formula $\phi$, we say that <b>$T$ models/semantically implies $\phi$</b>, written $T\models\phi$, if $\mc{A}\models\phi$ for every model $\mc{A}\models T$.
* (Consistency). A $\sigma$-theory $T$ is <b>satisfiable</b> if it admits a non-empty model, and is <b>finitely satisfiable</b> if every finite subset $T'\subseteq T$ is satisfiable.
* (Completeness). A $\sigma$-theory $T$ is <b>complete</b> if for each $\sigma$-sentence $\phi$, either $T\models\phi$ or $T\models\lnot\phi$.
* (Compactness). A $\sigma$-theory $T$ is <b>compact</b> if whenever $T\models\phi$, there is a finite subtheory $T'\subseteq T$ such that $T'\models\phi$.

```

<b>Remark.</b> The <i>Compactness Theorem</i> implies in particular that every $\sigma$-theory $T$ is compact, for if $T\models\phi$, then $T\cup\l\{\lnot\phi\r\}$ is not satisfiable and hence there is a finite non-satisfiable subtheory $F\subseteq T\cup\l\{\lnot\phi\r\}$. Put $T'\coloneqq F\cap T$, so $T'\cup\l\{\lnot\phi\r\}$ is not satisfiable and hence $T'\models\phi$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The <i>category of $\sigma$-models of $T$</i> is the subcategory $\catmodel{T}$ of $\cathom$ whose objects are models of $T$ and whose morphisms are $\sigma$-preserving maps. For a class $\mc{C}$ of $\sigma$-structures, we say that $T$ is an <i>axiomatization</i> of $\mc{C}$ if $\catmodel{T}=\mc{C}$, and $\mc{C}$ is (resp. <i>finitely</i>) <i>axiomatizable</i> if it admits a (resp. finite) axiomatization. A $\sigma$-theory $F$ is an <i>axiomatization</i> of $T$ if it is an axiomatization of $\catmodel{T}$, and we say that $T$ is <i>finitely axiomatizable</i> if it admits a finite axiomatization. ^category-of-models
* A priori, a finite axiomatization $F$ of $T$ need not lie in $T$, but it is a consequence of the Compactness Theorem that a witness $T'\subseteq T$ to finite axiomatizability can always be found. Indeed, write $F=\l\{\phi_1,\dots,\phi_n\r\}$ for some $\sigma$-sentences $\phi_i$, so $\mc{A}\models T$ iff $\mc{A}\models\phi_i$ for all $1\leq i\leq n$. In particular, we see that $T\models\phi_i$ for each $i$, so Compactness furnishes finite subtheories $T_i\subseteq T$ such that $T_i\models\phi_i$ for each $i$. The finite subtheory $T'\coloneqq\bigcup_{i=1}^nT_i$ of $T$ is as desired.<span style="float:right;">$\blacklozenge$</span>
