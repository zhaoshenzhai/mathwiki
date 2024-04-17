---
mathLink-blocks:
    structure: Structure
    category-of-structures: $\cathom$
---

<div class="topSpace"></div>

Date Created: 14/12/2023 22:53:59
References: #Ref/Anu23 #Ref/Anu23_318 #Ref/Mar16
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Structure]], [[Theory]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Language of $\FOL$/$\mc{L}_{\kappa,\omega}$).

A <b>(single-sorted) first-order language</b> is a tuple $\mc{L}\coloneqq\tpl{\mc{F},\mc{R},\mf{a}}$ consisting of two disjoint sets $\mc{F}$ and $\mc{R}$ of <b>function</b> and <b>relation</b> symbols, together with an <b>arity</b> function $\mf{a}:\mc{F}\sqcup\mc{R}\to\N$. For each $n\in\N^+$, let $\mc{F}_n\coloneqq\mc{F}\cap\mf{a}^{-1}(n)$ and $\mc{R}_n\coloneqq\mc{R}\cap\mf{a}^{-1}(n)$. The function symbols $\mc{C}\coloneqq\mc{F}_0$ of arity $0$ are called <b>constants</b>.
&emsp;&emsp;Fix an infinite cardinal $\kappa$. The <b>first-order logic</b> $\mc{L}_{\kappa,\omega}$ consists of <b>$\mc{L}$-terms</b> and <b>$\mc{L}_{\kappa,\omega}$-formulas</b> defined inductively using the symbols $=,\lnot,\bigwedge,\fa,\raise{2pt},,(,)$ and an infinite set $(x_\alpha\st\alpha<\kappa)$ of variables, as follows.
* <span style="color:gray">($\mc{L}$-terms).</span> All constants and variables are $\mc{L}$-terms. If $f\in\mc{F}_n$ and $t_1,\dots,t_n$ are $\mc{L}$-terms, then so is $f(t_1,\dots,t_n)$.
* <span style="color:gray">($\mc{L}_{\kappa,\omega}$-formulas).</span> If $t_1,\dots,t_n$ are $\mc{L}$-terms and $R\in\mc{R}_n$, then $(t_1=t_2)$ and $R(t_1,\dots,t_n)$ are <b>atomic</b> $\mc{L}_{\kappa,\omega}$-formulas. If $\phi$ is an $\mc{L}_{\kappa,\omega}$-formula, then so are $\lnot\phi$ and $\fa x_\alpha\phi$. If $X$ is a set of $\mc{L}_{\kappa,\omega}$-formulas with $\l|X\r|<\kappa$, then $\bigwedge_{\phi\in X}\phi$ is an $\mc{L}_{\kappa,\omega}$-formula.

If $\kappa=\aleph_0$, then $\mc{L}_{\omega,\omega}\coloneqq\mc{L}_{\aleph_0,\omega}$ is <b>finitary logic</b>, which allows for only finite conjunctions. We let $\mc{L}_{\infty,\omega}$ denote the logic allowing for arbitrary conjunctions.

```

<b>Remark.</b> Let $\phi$ be an $\mc{L}$-formula. A variable $x$ is said to be <i>quantified</i> in $\phi$ if $\fa x$ appears in $\phi$; otherwise, $x$ is said to be <i>free</i> in $\phi$. We write $\phi(\vec{x})$ for $\phi$ if $\vec{x}$ includes all the free variables of $\phi$ but not any of its quantified variables; abusing notation, we write $\phi(\vec{x})\in\mc{L}$ instead. An <i>$\mc{L}$-sentence</i> is an $\mc{L}$-formula $\sigma$ that does not include any free variables; abusing notation, we write $\sigma\in\mc{L}$ too.
&emsp;&emsp;The <i>quantifier depth</i> of an $\mc{L}$-formula is defined inductively, by setting $\qd\phi\coloneqq0$ if $\phi$ is atomic, $\qd(\fa x\phi)\coloneqq\qd\phi+1$, and $\qd(\bigwedge_{\phi\in X}\phi)\coloneqq\sup_{\phi\in X}\qd\phi$.<span style="float:right;">$\blacklozenge$</span>
