<div class="topSpace"></div>

Date Created: 15/12/2023 17:41:04
Tags: #Type/Theorem #In_Progress/Logic

Proved by: <i>Not Applicable</i>
References: [[Proofs and Syntactic Truth#^soundness]], [[Proofs and Syntactic Truth#^syntactic-compactness]], [[Completeness Theorem]]
Justifications: [[Cantor-Schroder-Bernstein Theorem]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Compactness Theorem; Gödel 1930 & Maltsev 1936).

Let $\sigma$ be a signature in $\FOL$. If a $\sigma$-theory $T$ is finitely satisfiable, then it admits a model of cardinality $\leq\max\l\{\l|\sigma\r|,\aleph_0\r\}$.

```

<b>Remark.</b> This theorem actually follows immediately from the Completeness Theorem. Indeed, since $T$ is finitely satisfiable, every finite subtheory of $T$ is consistent and hence, by Syntactic Compactness, the entire theory $T$ is consistent; the Completeness Theorem then gives the desired model. Below, we give a ‘purely semantic’ proof of the Compactness Theorem instead.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> <span style="color:red">TODO</span>

---

<b>Remark.</b> We also have the <i>Weak Upward Löwenheim-Skolem</i> theorem, that if a $\sigma$-theory $T$ admits arbitrarily large finite models, then it admits an infinite model of any cardinality $\kappa\geq\max\l\{\l|\sigma\r|,\aleph_0\r\}$. Indeed, set $\bar{\sigma}\coloneqq\sigma\sqcup\l\{c_\alpha\r\}_{\alpha<\kappa}$, where $c_\alpha\not\in\sigma$ are constant symbols. The $\bar{\sigma}$-theory $\bar{T}\coloneqq T\cup\l\{c_\alpha\neq c_\beta\st\alpha\neq\beta,\alpha,\beta<\kappa\r\}$ is finitely-satisfiable by hypothesis, so it admits a model $\mc{M}$ of cardinality at-most $\kappa$, since $\l|\bar{\sigma}\r|=\kappa\geq\aleph_0$. But $\l|M\r|\geq\kappa$ since $c_\alpha^\mc{M}=c_\beta^\mc{M}$ for all distinct $\alpha,\beta<\kappa$, so $\l|M\r|=\kappa$.<span style="float:right;">$\blacklozenge$</span>
