<div class="topSpace"></div>

Date Created: 11/01/2024 18:22:20
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
title: Definition.

Let $\sigma$ be a propositional signature. A <b>(propositional) proof system</b> is any polynomial time surjection $P:\l\{0,1\r\}^\ast\to\Taut\l(\sigma\r)$.
* A proof system is said to be <b>polynomially bounded</b> if there is some $c\geq1$ such that every $\phi\in\Taut\l(\sigma\r)$ admits a proof $p$ with $\l|p\r|=O\l(\l|x\r|^c\r)$.

```

<b>Remark.</b> For any $\phi\in\Taut\l(\sigma\r)$, elements of the fiber $P^{-1}\!\l(\phi\r)$ are called <i>$P$-proofs</i> of $\phi$. Equivalently, we can define it as any polynomial time algorithm $V\l(p,\phi\r)$ such that for any $\sigma$-formula $\phi$, we have $\phi\in\Taut\l(\sigma\r)$ iff there exists $p\in\l\{0,1\r\}^\ast$ that $V\l(p,\phi\r)$ accepts.
* Indeed, given $P$, let $V\coloneqq\Graph\l(P\r)\subseteq\l\{0,1\r\}^\ast\times\Taut\l(\sigma\r)$ be the algorithm that accepts $V\l(p,\phi\r)$ iff $P\l(p\r)=\phi$. Conversely, given $V$, define $P\l(w\r)\coloneqq\phi$ if $w$ encodes the pair $\tpl{p,\phi}$ and $V\l(p,\phi\r)$ holds, and $P\l(w\r)\coloneqq\top$ otherwise.

These proof systems are both <i>sound</i> and <i>complete</i> by definition, but proofs $p\in P^{-1}\!\l(\phi\r)$ for a general $P$ need not be ‘short’. <i>Polynomially bounded</i> proof systems do guarantee the existence of ‘short’ proofs, but they exist iff $\NP=\coNP$.<span style="float:right;">$\blacklozenge$</span>
