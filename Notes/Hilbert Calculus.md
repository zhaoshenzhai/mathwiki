---
mathLink-blocks:
    Frege-calculus: Frege Calculus
---

<div class="topSpace"></div>

Date Created: 12/01/2024 12:14:37
References: #Ref/Kra19
Tags: #Type/Definition #Topic/Logic/Proof_Theory

Types: <i>Not Applicable</i>
Examples: [[Proofs]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Hilbert Calculus).

Let $\mc{L}$ be a language in either $\PL$ or $\FOL$. An <b>$\mc{L}$-Hilbert calculus</b> is a pair $\mc{H}_\mc{L}\coloneqq\tpl{\mc{A},\mc{R}}$ of axioms $\mc{A}\subseteq\Form\l(\mc{L}\r)$ and inference rules $\mc{R}\subseteq\bigcup_\ell\Form\l(\mc{L}\r)^{\ell+1}$.
* Fix $\ell\in\N$. An <b>$\ell$-ary inference rule</b> $R\in\mc{R}$ is an $(\ell+1)$-tuple of $\mc{L}$-formulas $\phi,\psi_1\dots,\psi_\ell$, written $\psi_1,\dots,\psi_\ell\infrule_R\phi$.
* Let $T$ be an $\mc{L}$-theory and $\phi$ be an $\mc{L}$-formula. A <b>$\mc{H}_\mc{L}$-proof</b> of $\phi$ from $T$ is a sequence $\pi\coloneqq\tpl{\phi_1,\dots,\phi_n}$ of $\mc{L}$-formulas with $\phi_n=\phi$ such that either $\phi_i\in\mc{A}\cup T$ or there is an $\ell$-ary inference rule $R\in\mc{R}$ and $\phi_{j_1},\dots,\phi_{j_\ell}$, with each $j_k<i$, such that $\phi_{j_1},\dots,\phi_{j_\ell}\infrule_R\phi_i$, in which case we write $\pi:T\proves_{\mc{H}_\mc{L}}\phi$.

An $\mc{L}$-Hilbert calculus $\mc{H}_\mc{L}$ is said to be <b>sound</b> if $T\proves_{\mc{H}_\mc{L}}\phi$ implies $T\models\phi$ and <b>complete</b> if $T\models\phi$ implies $T\proves_{\mc{H}_\mc{L}}\phi$.

```

<b>Remark.</b> An <i>$\mc{L}$-Frege calculus</i> is a sound and complete $\mc{L}$-Hilbert system over a propositional language $\mc{L}$ with $\mc{R}$ finite.<span style="float:right;">$\blacklozenge$</span> ^Frege-calculus
