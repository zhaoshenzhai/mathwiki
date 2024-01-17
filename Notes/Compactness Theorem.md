---
mathLink-blocks:
    syntactic-compactness: Syntactic Compactness
---

<div class="topSpace"></div>

Date Created: 15/12/2023 17:41:04
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Theorem #Topic/Logic/Model_Theory/Later

Proved by: <i>Not Applicable</i>
References: [[Completeness Theorem]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Compactness Theorem; Gödel 1930 & Maltsev 1936).

Let $\sigma$ be a signature in $\FOL$. If a $\sigma$-theory $T$ is finitely satisfiable, then it admits a model of cardinality $\leq\max\l\{\l|\sigma\r|,\aleph_0\r\}$.

```

<b>Remark.</b> This theorem actually follows immediately from the Completeness Theorem and <i>syntactic-compactness</i>, which states that $T$ is consistent iff every finite subtheory $T'\subseteq T$ is consistent. With these facts, since $T$ is finitely satisfiable, every finite subtheory of $T$ is consistent and hence the entire theory $T$ is consistent; the Completeness Theorem then gives the desired model. Below, we give a ‘purely semantic’ proof of the Compactness Theorem instead.
* Syntactic compactness from the fact that proofs are finite. Indeed, if $\phi$ witnesses inconsistency for $T$, then there exist finite subtheories $T_0,T_1\subseteq T$ such that $T_0\proves\phi$ and $T_1\proves\lnot\phi$. Their union $T'\coloneqq T_0\cup T_1$ is then an inconsistent finite subtheory of $T$, a contradiction.<span style="float:right;">$\blacklozenge$</span> ^syntactic-compactness

---

<i>Proof.</i> <span style="color:red">TODO</span>
