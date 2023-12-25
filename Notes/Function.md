---
mathLink-blocks:
    category-of-sets: $\catset$
---

<div class="topSpace"></div>

Date Created: 14/01/2022 14:25:20
Tags: #Type/Definition #Topic/Set_Theory

Types: [[Group#^group-homomorphism]], [[Ring#^ring-homomorphism]], [[Module#^module-homomorphism]], [[Topological Space#^continuous-function]], [[Measurable Function]], [[Integral#^integrable-function]]
Examples: <i>Not Applicable</i>
Constructions: [[Image and Preimage]], [[Symmetric Group]], [[Functional Limits]]
Generalizations: [[Category#^morphism]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\Gamma_{\!f}\subseteq X\times Y$ be a binary relation with $\dom\Gamma_{\!f}=X$ and $\ran\Gamma_{\!f}\subseteq Y$. The tuple $f\coloneqq\tpl{\Gamma_{\!f},X,Y}$ is a <b>function</b> if for all $x\in X$, there is a unique $y\in Y$ such that $\tpl{x,y}\in\Gamma_{\!f}$, in which case we write $f:X\to Y$ and $x\mapsto f\l(x\r)\coloneqq y$.
* The <b>composition</b> of functions $g:Y\to Z$ after $f:X\to Y$ is the function $g\circ f:X\to Z$ mapping $x\mapsto g\l(f\l(x\r)\r)$.
* The <b>category of sets</b> is the category $\catset$ whose objects are sets and whose morphisms are functions.

```
^category-of-sets

<b>Remark.</b> A function $f:X\to Y$ is <i>injective</i> if $f\l(x\r)=f\l(x'\r)$ implies $x=x'$ for all $x,x'\in X$, <i>surjective</i> if $\ran f\coloneqq\ran\Gamma_{\!f}=Y$, and <i>bijective</i> if both occurs.
* Bijections are isomorphisms in $\catset$. Indeed, if $f$ is a bijection, then $g:Y\to X$ mapping each $y$ to the unique $x$ such that $f\l(x\r)=y$ is an inverse of $f$. Conversely, if $g$ is an inverse of $f$, then $f\l(x\r)=f\l(x'\r)$ implies $x=x'$ for all $x,x'\in X$ and $y=f\l(g\l(y\r)\r)$ for all $y\in Y$, so $f$ is a bijection.
* The above also shows that left-invertible functions are injective, and right-invertible functions are surjective. The converses also hold. Indeed, if $f$ is injective, let $g:Y\to X$ map each $y\in f\l(X\r)$ to the unique $x$ such that $f\l(x\r)=y$, and map each $y\in Y\comp f\l(X\r)$ to some fixed $x_0\in X$. If $f$ is surjective, we use Choice to pick some $x_y\in\l\{x\in X\st f\l(x\r)=y\r\}$ for each $y\in Y$ and define $g:Y\to X$ by mapping $y\mapsto x_y$.
* Finally, note that injections (resp. surjections) are simply sections (resp. retracts) in $\catset$, so they are also monic (resp. epic). The converses also hold. Indeed, if $f$ is monic, then for each $x_1,x_2\in X$, letting $\alpha_i:\l\{\ast\r\}\to X$ mapping $\ast\mapsto x_i$ gives us $\alpha_1=\alpha_2$ whenever $f\alpha_1=f\alpha_2$; this is precisely injectivity of $f$. If $f$ is epic, consider $\alpha_i:Y\to\l\{0,1\r\}$ defined by $\alpha_1\coloneqq 1$ and $\alpha_2\coloneqq\cchi_{f\l(X\r)}$. Then $\alpha_1f=\alpha_2f$, so $\alpha_1=\alpha_2$ and thus forces $f\l(X\r)=Y$.<span style="float:right;">$\blacklozenge$</span>
