---
mathLink-blocks:
    Henkin-theories-calculate-terms: Henkin theories calculate terms
---

<div class="topSpace"></div>

Date Created: 22/12/2023 18:48:42
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Completeness Theorem]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Axioms of First Order Logic]], [[Basic provable facts]]

``` ad-Definition
title: Definition.

Let $\sigma$ be a signature. For a $\sigma$-theory $H$ and a $\sigma$-formula $\ex v\phi$, we say that $H$ admits a <b>Henkin witness</b> for $\ex v\phi$ if $H\proves\phi(c/v)$ for some $c\in\mc{C}\l(\sigma\r)$.
* A $\sigma$-theory $H$ is <b>Henkin</b> if it is maximally consistent and admits a Henkin witness for every $\sigma$-formula of the form $\ex v\phi$ that it proves.

```

<b>Remark.</b> Henkin theories calculate terms, in the sense that if a $\sigma$-term $t$ has no variables and $H$ is a $\sigma$-Henkin theory, then $\l(t=c\r)\in H$ for some $c\in\mc{C}\l(\sigma\r)$. ^Henkin-theories-calculate-terms
* Indeed, consider the $\sigma$-formula $\phi\l(v\r)\coloneqq\l(t=v\r)$, for which proving $H\proves\ex v\phi$ gives the desired result. To this end, note that $H\proves\l(t=t\r)$ by the <i>equality-is-reflexive</i>, <i>generalization</i>, and <i>instantiation</i> axioms, so $H\proves\phi(t/v)$. We obtain the desired by <i>witness-implies-existence</i>.<span style="float:right;">$\blacklozenge$</span>
