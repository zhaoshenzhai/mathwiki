---
mathLink-blocks:
    Henkin-theories-calculate-terms: Henkin theories calculate terms
---

<div class="topSpace"></div>

Date Created: 22/12/2023 18:48:42
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Henkin Construction]], [[Completeness Theorem]]
Generalizations: <i>Not Applicable</i>

Properties: [[Henkin Theory#^Henkin-theories-calculate-terms]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Proofs#^axioms-of-FOL]], [[Basic provable facts]]

``` ad-Definition
title: Definition (Henkin Theory).

Let $\sigma$ be a signature. We say that a $\sigma$-theory $H$ is <b>Henkin</b> if it is complete, and for every $\phi(x)\in\Form(\sigma)$, we have $H\proves(\ex x\phi(x)\rightarrow\phi(c))$ for some $c\in\mc{C}(\sigma)$.

```

<b>Remark.</b> Henkin theories calculate terms, in the sense that if a $\sigma$-term $t$ has no variables and $H$ is a $\sigma$-Henkin theory, then $\l(t=c\r)\in H$ for some $c\in\mc{C}\l(\sigma\r)$. ^Henkin-theories-calculate-terms
* Indeed, consider the $\sigma$-formula $\phi(x)\coloneqq(t=x)$, for which proving $H\proves\ex x\phi(x)$ gives the desired. To this end, note that $H\proves(t=t)$ by the <i>equality-is-reflexive</i>, <i>generalization</i>, and <i>instantiation</i> axioms, so $H\proves\phi(t/x)$. We obtain the desired by <i>witness-implies-existence</i>.<span style="float:right;">$\blacklozenge$</span>
