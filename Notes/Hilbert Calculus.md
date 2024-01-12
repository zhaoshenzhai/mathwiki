---
mathLink-blocks:
    Frege-calculus: Frege Calculus
---

<div class="topSpace"></div>

Date Created: 12/01/2024 12:14:37
References: #Ref/Kra19
Tags: #Type/Definition #Topic/Logic/Proof_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Hilbert Calculus).

Let $\sigma$ be a signature in either $\PL$ or $\FOL$. A <b>$\sigma$-Hilbert calculus</b> is a pair $\mc{H}_\sigma\coloneqq\tpl{\mc{A},\mc{R}}$ of axioms $\mc{A}\subseteq\Form\l(\sigma\r)$ and inference rules $\mc{R}\subseteq\bigcup_\ell\Form\l(\sigma\r)^{\ell+1}$.
* Fix $\ell\in\N$. An <b>$\ell$-ary inference rule</b> $R\in\mc{R}$ is an $(\ell+1)$-tuple of $\sigma$-formulas $\phi,\psi_1\dots,\psi_\ell$, written $\psi_1,\dots,\psi_\ell\infrule_R\phi$.
* Let $T$ be a $\sigma$-theory and $\phi$ be a $\sigma$-formula. A <b>$\mc{H}_\sigma$-proof</b> of $\phi$ from $T$ is a sequence $\pi\coloneqq\tpl{\phi_1,\dots,\phi_n}$ of $\sigma$-formulas with $\phi_n=\phi$ such that either $\phi_i\in\mc{A}\cup T$ or there is some $\ell$-ary inference rule $R\in\mc{R}$ and some $\phi_{j_1},\dots,\phi_{j_\ell}$, with each $j_k<i$, such that $\phi_{j_1},\dots,\phi_{j_\ell}\infrule_R\phi_i$, in which case we write $\pi:T\proves_{\mc{H}_\sigma}\phi$.

A $\sigma$-Hilbert calculus $\mc{H}_\sigma$ is said to be <b>sound</b> if $T\proves_{\mc{H}_\sigma}\phi$ implies $T\models\phi$ and <b>complete</b> if $T\models\phi$ implies $T\proves_{\mc{H}_\sigma}\phi$.

```

<b>Remark.</b> A <i>$\sigma$-Frege calculus</i> is a sound and complete $\sigma$-Hilbert system over a propositional signature $\sigma$ with $\mc{R}$ finite.<span style="float:right;">$\blacklozenge$</span> ^Frege-calculus
