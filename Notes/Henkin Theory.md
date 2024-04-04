---
mathLink-blocks:
    Henkin-theories-calculate-terms: Henkin theories calculate terms
---

<div class="topSpace"></div>

Date Created: 22/12/2023 18:48:42
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: [[Completeness Theorem]], [[Omitting Types Theorem]]
Constructions: [[Henkin Construction]]
Generalizations: <i>Not Applicable</i>

Properties: [[Henkin Theory#^Henkin-theories-calculate-terms]]
Sufficiencies: [[Theory#^consistent]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Proofs#^axioms-of-FOL]], [[Basic provable facts]]

``` ad-Definition
title: Definition (Henkin Theory).

Let $\mc{L}$ be a first order language. An $\mc{L}$-theory $T$ is <b>Henkin</b> if for every $\mc{L}$-formula $\phi(x)$, we have $T\proves\ex x\phi(x)\rightarrow\phi(c)$ for some constant symbol $c\in\mc{L}$.

```

<b>Remark.</b> Henkin theories calculate terms, in the sense that if an $\mc{L}$-term $t$ has no variables and $T$ is an $\mc{L}$-Henkin theory, then $\l(t=c\r)\in T$ for some $c\in\mc{C}\l(\mc{L}\r)$.
&emsp;&emsp;Indeed, consider the $\mc{L}$-formula $\phi(x)\coloneqq(t=x)$, for which proving $T\proves\ex x\phi(x)$ gives the desired. To this end, note that $T\proves(t=t)$ by the <i>equality-is-reflexive</i>, <i>generalization</i>, and <i>instantiation</i> axioms, so $T\proves\phi(t/x)$. We obtain the desired by <i>witness-implies-existence</i>.<span style="float:right;">$\blacklozenge$</span> ^Henkin-theories-calculate-terms
