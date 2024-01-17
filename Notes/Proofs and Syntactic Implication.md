---
mathLink: auto
mathLink-blocks:
    axioms-of-FOL: Axioms in $\FOL\l(\sigma\r)$
    soundness: Soundness of $\FOL\l(\sigma\r)$
---

<div class="topSpace"></div>

Date Created: 15/12/2023 19:42:31
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Definition #Topic/Logic/Proof_Theory

Types: <i>Not Applicable</i>
Examples: [[Basic provable facts]]
Constructions: [[Theory#^consistent-syntactic-completeness]]
Generalizations: <i>Not Applicable</i>

Properties: [[Completeness Theorem]], [[Completeness Theorem#^syntactic-semantic-duality]]
Sufficiencies: [[Basic provable facts#^deduction-theorem]]
Equivalences: [[Models and Semantic Implication]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Proofs/Syntactic Implication).

Let $T$ be a $\sigma$-theory in $\FOL$ and let $\phi$ be a $\sigma$-formula. The <b>$\FOL\l(\sigma\r)$-proof system</b> is the Hilbert calculus whose axioms, ranging over each $\sigma$-formula $\phi,\psi,\theta$, each $\sigma$-term $t$, each variable $u,v,x,y,z$, each function symbol $f\in\mc{F}$, each relation symbol $R\in\mc{R}$, and each vector of variables $\vec{x},\vec{y}$ of appropriate arity, are ^axioms-of-FOL
* $\phi\rightarrow\l(\psi\rightarrow\phi\r)$ <span style="color:gray">(if-true-then-implied)</span> and $\l(\phi\rightarrow\psi\r)\rightarrow\l[\l(\phi\rightarrow\l(\psi\rightarrow\theta\r)\r)\rightarrow\l(\phi\rightarrow\theta\r)\r]$ <span style="color:gray">(implication-is-transitive)</span>;
* $\l(\lnot\phi\rightarrow\psi\r)\rightarrow\l[\l(\lnot\phi\rightarrow\lnot\psi\r)\rightarrow\phi\r]$ <span style="color:gray">(proof-by-contradiction)</span>;
* $\fa v\phi\rightarrow\phi\l(t/v\r)$ whenever $t$ is free for $v$ in $\phi$ <span style="color:gray">(instantiation)</span> and $\phi\rightarrow\fa u\phi\l(u/v\r)$ whenever $u$ is free for $v$ in $\phi$ <span style="color:gray">(generalization)</span>;
* $x=x$ <span style="color:gray">(equality-is-reflexive)</span>, $\l(x=y\r)\rightarrow\l(y=x\r)$ <span style="color:gray">(equality-is-symmetric)</span>, and $\l(x=y\r)\rightarrow\l[\l(y=z\r)\rightarrow\l(x=z\r)\r]$ <span style="color:gray">(equality-is-transitive)</span>;
* $(\vec{x}=\vec{y})\rightarrow\l(f(\vec{x})=f(\vec{y})\r)$ <span style="color:gray">(functions-preserve-equality)</span> and $(\vec{x}=\vec{y})\rightarrow\l(R(\vec{x})\rightarrow R(\vec{y})\r)$ <span style="color:gray">(relations-preserve-equality)</span>,

together with a single inference rule $\theta\rightarrow\phi,\theta\infrule_\MP\phi$, called <b>Modus Ponens</b>. We write $T\proves\phi$ if there exists a proof of $\phi$ from $T$.

```
^axioms-of-FOL

<b>Remark.</b> Our proof system is <i>sound</i>, i.e. $T\proves\phi$ implies $T\models\phi$ for any $\sigma$-sentence $\phi$. Indeed, this follows easily by induction on the length of a proof of $\phi$ from $T$: if $\phi\in\Axioms\l(\sigma\r)\cup T$, then every model $\mc{A}\models T$ models $\phi$. Otherwise, if $\psi,\theta\infrule_\MP\phi$ for some $\psi=\l(\theta\rightarrow\phi\r)$ and $T\models\psi,\theta$, then any model $\mc{A}\models T$ models both $\theta$ and $\theta\rightarrow\phi$, whence $\mc{A}\models\phi$ too. The converse, that $T\models\phi$ implies $T\proves\phi$, is <i>Gödel’s Completeness Theorem</i>.<span style="float:right;">$\blacklozenge$</span> ^soundness
