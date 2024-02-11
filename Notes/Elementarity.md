---
mathLink-blocks:
    Tarski-Vaught-test: Tarski-Vaught Test
    embeddings-via-diagrams: $\mc{M}\into_\blob\mc{N}$ $\Leftrightarrow$ $\mc{N}\models\Diag_\blob\!\mc{M}$
---

<div class="topSpace"></div>

Date Created: 21/12/2023 14:38:27
References: #Ref/Anu23 #Ref/Mar02
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Lowenheim-Skolem Theorem]], [[Ehrenfeucht-Fraisse Games]]
Equivalences: [[Tarski-Vaught Test]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Elementarity).

Let $\sigma$ be a signature in $\FOL$. We say that a $\sigma$-structure $\mc{A}$ <b>elementarily embeds</b> in $\mc{B}$, written $\mc{A}\eleminto\mc{B}$, if there is a homomorphism $h:\mc{A}\to\mc{B}$ such that for all $\sigma$-formulas $\phi(\vec{v})$ and $\vec{a}\in A^{|\vec{v}|}$, we have $\mc{A}\models\phi(\vec{a})$ iff $\mc{B}\models\phi(h(\vec{a}))$. Such a homomorphism $h$ is said to be an <b>elementary embedding</b>, written $h:\mc{A}\eleminto\mc{B}$.
* A substructure $\mc{A}\substructeq\mc{B}$ is said to be <b>elementary</b>, written $\mc{A}\elemembed\mc{B}$, if $\iota:\mc{A}\eleminto\mc{B}$. In this case, we also say that $\mc{B}$ is an <b>elementary extension</b> of $\mc{A}$.

```

<b>Remark.</b> In other words, $h:\mc{A}\eleminto\mc{B}$ if $h$ preserves all first-order $\sigma$-formulas. A weaker notion is that of <i>elementary equivalence</i>, written $\mc{A}\elemequiv\mc{B}$, which only requires $\Th\mc{A}=\Th\mc{B}$. Note that $\mc{A}\iso\mc{B}$ implies, by induction on the construction of $\sigma$-sentences, that $\mc{A}\elemequiv\mc{B}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A useful method to determine when $\mc{A}\into\mc{B}$ or $\mc{A}\eleminto\mc{B}$ is the use of <i>diagrams</i>. For a $\sigma$-structure $\mc{A}$, let $\sigma_A\coloneqq\sigma\sqcup\l\{c_a\r\}_{a\in A}$.  The <i>elementary diagram</i> of $\mc{A}$ is the $\sigma_A$-theory $\Diag_\textrm{el}\mc{A}\coloneqq\Th_{\sigma_A}\!\mc{A}$ consisting of all $\sigma_A$-sentences $\phi$. Note that each $\phi\in\Diag_\textrm{el}\mc{A}$ can be written as $\phi=\psi(\vec{c}/\vec{x})$ for some $\sigma$-formula $\psi(\vec{x})$ satisfied in $\mc{A}$, where $\vec{c}\in\sigma_A$ is the tuple of all new $\sigma_A$-constants from $A$ appearing in $\phi$. The <i>atomic diagram</i> $\Diag\mc{A}$ is similar, except that we require $\phi$ to be quantifier-free. ^embeddings-via-diagrams
* If $\mc{B}$ is a $\sigma_A$-structure such that $\mc{B}\models\Diag\mc{A}$, then $\mc{A}\into\mc{B}$ after taking its reduct to a $\sigma$-structure. Indeed, the map $j:A\to B$ sending $a\in A$ to the interpretation of its corresponding $\sigma_A$-constant in $\mc{B}$ is an embedding. Moreover, if $\mc{B}\models\Diag_\textrm{el}\mc{A}$, then $j$ is elementary and hence $\mc{A}\elemembed\mc{B}'$ for some isomorphic copy $\mc{B}'$ of $\mc{B}$.<span style="float:right;">$\blacklozenge$</span>
