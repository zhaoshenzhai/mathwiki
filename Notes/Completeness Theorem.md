---
mathLink-blocks:
    syntactic-semantic-duality: Syntactic-Semantic Duality
---

<div class="topSpace"></div>

Date Created: 15/12/2023 20:17:29
Tags: #Type/Theorem #In_Progress/Logic

Proved by: <i>Not Applicable</i>
References: [[Proofs and Syntactic Truth#^soundness]], [[Basic provable facts]], [[Basic properties of consistent theories]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Completeness Theorem; Gödel 1929 & Henkin 1949).

Let $\sigma$ be a signature in $\FOL$. If a $\sigma$-theory $T$ is consistent, then it admits a model of cardinality $\leq\max\l\{\l|\sigma\r|,\aleph_0\r\}$.

```

<b>Remark.</b> One of the most important corollary thereof is the <i>Syntactic-Semantic Duality</i>, that is, for a $\sigma$-theory $T$ and a $\sigma$-sentence $\phi$, we have $T\proves\phi$ iff $T\models\phi$. ^syntactic-semantic-duality

![[Images/2023-12-15_205925/image.svg|600]]The forward direction is just Soundness. Conversely, suppose $T\not\proves\phi$. Then $T\not\proves\lnot\lnot\phi$ since $\proves\l(\lnot\lnot\phi\rightarrow\phi\r)$, so $T\cup\l\{\lnot\phi\r\}$ is consistent. By the Completeness Theorem, it admits a model $\mc{A}$, so $T\not\models\phi$ since we have a witness $\mc{A}\not\models\phi$. The other rows of the table are easily obtained.<span style="float:right;">$\blacklozenge$</span>


---

<i>Proof.</i> To motivate the construction, note that for a $\sigma$-structure $\mc{A}$, the $\sigma_A$-theory $H\coloneqq\ElDiag\l(\mc{A}\r)$ is Henkin since $H\proves\ex v\phi$ iff $\ex v\phi\in H$, which occurs iff $\phi\l(c/v\r)\in H$ for some $c\in\mc{C}\l(\sigma\r)$. The main idea is to turn this around, by making $T$ ‘look like’ the elementary diagram of some $\sigma$-structure $\mc{A}$. We do so in several steps.
1. 
