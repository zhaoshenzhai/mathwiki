---
mathLink-blocks:
    proofs-in-FOL: Proofs in $\FOL\l(\sigma\r)$
    axioms-of-FOL: Axioms in $\FOL\l(\sigma\r)$
    soundness: Soundness of $\FOL\l(\sigma\r)$
---


<div class="topSpace"></div>

Date Created: 14/12/2023 22:53:59
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Definition #Topic/Logic/Proof_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Hilbert Calculus]], [[Structure]], [[Theory]], [[Proofs and Syntactic Implication]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic provable facts]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Language of First Order Logic).

A <b>signature</b> $\sigma\coloneqq\tpl{\mc{F},\mc{R},\mf{a}}$ consists of two disjoint sets $\mc{F}$ and $\mc{R}$ of <b>function</b> and <b>relation</b> symbols, together with an <b>arity</b> function $\mf{a}:\mc{F}\cup\mc{R}\to\N$. For each $n\in\N^+$, let $\mc{F}_n\subseteq\mc{F}$ and $\mc{R}_n\subseteq\mc{R}$ be the subset of functions/relations of arity $n$. The function symbols $\mc{C}\coloneqq\mc{F}_0$ of arity $0$ are called <b>constants</b>.
* The <b>first-order language</b> $\FOL\l(\sigma\r)$ in the signature $\sigma$ consists of the symbols in $\sigma$, the symbols in $\PL\l(\sigma\r)$, and the symbols $=$ <span style="color:gray">(equality)</span> and $\ex$ <span style="color:gray">(quantifier)</span>.

```
^proofs-in-FOL

<b>Remark.</b> Finite strings of symbols in $\FOL\l(\sigma\r)$ are called <i>$\sigma$-words</i>. We define the set $\Term\l(\sigma\r)$ of <i>$\sigma$-terms</i> as the smallest set of $\sigma$-words containing the constants and the variables such that $f\l(t_1,\dots,t_n\r)\in\Term\l(\sigma\r)$ for each $t_1,\dots,t_n\in\Term\l(\sigma\r)$ and $f\in\mc{F}_n$, and the set of <i>$\sigma$-formulas</i> $\Form\l(\sigma\r)$ as the smallest set of $\sigma$-words such that if $s,t\in\Term\l(\sigma\r)$, then $\l(s=t\r)$ is a $\sigma$-formula; if $t_1,\dots,t_n\in\Term\l(\sigma\r)$ and $R\in\mc{R}_n$, then $R\l(t_1,\dots,t_n\r)$ is a $\sigma$-formula; and if $\phi,\psi\in\Form\l(\sigma\r)$ and $v$ is a variable, then $\lnot\phi$, $\phi\land\psi$, $\phi\lor\psi$, $\phi\rightarrow\psi$, $\ex v\phi$, and $\fa v\phi$ are also $\sigma$-formulas. If a $\sigma$-formula $\phi$ does not contain any free variables, then $\phi\in\Sent\l(\sigma\r)$ is said to be a <i>$\sigma$-sentence</i>.
* For a $\sigma$-term $t$, we write $t(\vec{v})$ for $t$ to indicate that $\vec{v}$ includes all the variable symbols appearing in $t$. Similarly, we write $\phi(\vec{v})$ for a $\sigma$-formula $\phi$ if $\vec{v}$ includes all the free variables of $\phi$ and does not include any quantified variable in $\phi$. For a $\sigma$-formula $\phi(v)$ and a $\sigma$-term $t(\vec{v})$ where no variable in $\vec{v}$ is quantified in $\phi$, the <i>substitution</i> of $t$ into $v$ in $\phi$ is the $\sigma$-formula $\phi\l(t/v\r)$ obtained by replacing each occurrence of $v$ by $t$.

The proof system in $\FOL\l(\sigma\r)$ that we shall employ is the Hilbert calculus whose axioms $\Axioms\l(\sigma\r)$, ranging over each $\sigma$-formula $\phi,\psi,\theta$, each $\sigma$-term $t$, each variable $u,v,x,y,z$, each function symbol $f\in\mc{F}$, each relation symbol $R\in\mc{R}$, and each vector of variables $\vec{x},\vec{y}$ of appropriate arity, are ^axioms-of-FOL
* $\phi\rightarrow\l(\psi\rightarrow\phi\r)$ <span style="color:gray"><i>(if-true-then-implied)</i></span>, $\l(\phi\rightarrow\psi\r)\rightarrow\l[\l(\phi\rightarrow\l(\psi\rightarrow\theta\r)\r)\rightarrow\l(\phi\rightarrow\theta\r)\r]$ <span style="color:gray"><i>(implication-is-transitive)</i></span>, $\l(\lnot\phi\rightarrow\psi\r)\rightarrow\l[\l(\lnot\phi\rightarrow\lnot\psi\r)\rightarrow\phi\r]$ <span style="color:gray"><i>(proof-by-contradiction)</i></span>;
* $\fa v\phi\rightarrow\phi\l(t/v\r)$ whenever $t$ is free for $v$ in $\phi$ <span style="color:gray"><i>(instantiation)</i></span> and $\phi\rightarrow\fa u\phi\l(u/v\r)$ whenever $u$ is free for $v$ in $\phi$ <span style="color:gray"><i>(generalization)</i></span>;
* $x=x$ <span style="color:gray"><i>(equality-is-reflexive)</i></span>, $\l(x=y\r)\rightarrow\l(y=x\r)$ <span style="color:gray"><i>(equality-is-symmetric)</i></span>, and $\l(x=y\r)\rightarrow\l[\l(y=z\r)\rightarrow\l(x=z\r)\r]$ <span style="color:gray"><i>(equality-is-transitive)</i></span>;
* $(\vec{x}=\vec{y})\rightarrow\l(f(\vec{x})=f(\vec{y})\r)$ <span style="color:gray"><i>(functions-preserve-equality)</i></span> and $(\vec{x}=\vec{y})\rightarrow\l(R(\vec{x})\rightarrow R(\vec{y})\r)$ <span style="color:gray"><i>(relations-preserve-equality)</i></span>,

together with a single inference rule of <i>Modus Ponens</i>: $\theta\rightarrow\phi,\theta\infrule_\MP\phi$. Our proof system is <i>sound</i> since if $\phi\in\Axioms\l(\sigma\r)\cup T$, then every model $\mc{A}\models T$ models $\phi$. Otherwise, if $\psi,\theta\infrule_\MP\phi$ for some $\psi=\l(\theta\rightarrow\phi\r)$ and $T\models\psi,\theta$, then any model $\mc{A}\models T$ models both $\theta$ and $\theta\rightarrow\phi$, whence $\mc{A}\models\phi$ too. The converse, that $T\models\phi$ implies $T\proves\phi$, is <i>Gödel’s Completeness Theorem</i>. <span style="float:right;">$\blacklozenge$</span> ^soundness
