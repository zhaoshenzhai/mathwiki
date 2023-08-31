<div class="topSpace"></div>

Date Created: 14/01/2022 14:25:20
Tags: #Type/Definition #Topic/Set_Theory

Types: [[Group Homomorphism]], [[Ring Homomorphism]], [[Module Homomorphism]], [[Continuous Function]], [[Contractive Function]], [[Riemann Integrable Function]]
Examples: <i>Not Applicable</i>
Constructions: [[Image and Preimage]], [[Functional Limits]], [[Category of Sets]]
Generalizations: [[Category#^morphism]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Injection iff monomorphism (Set Theory)]], [[Surjection iff epimorphism (Set Theory)]]
Justifications: [[Invertible iff bijective]]

``` ad-Definition
title: Definition.

Let $\Gamma_{\!f}\subseteq X\times Y$ be a binary relation with $\dom\Gamma_{\!f}=X$ and $\ran\Gamma_{\!f}\subseteq Y$. The tuple $f\coloneqq\tpl{\Gamma_{\!f},X,Y}$ is a <b>function</b> if for all $x\in X$, there is a unique $y\in Y$ such that $\tpl{x,y}\in\Gamma_{\!f}$, in which case we write $f:X\to Y$ and $x\mapsto f\l(x\r)\coloneqq y$.
* The <b>composition</b> of functions $g:Y\to Z$ after $f:X\to Y$ is the function $g\circ f:X\to Z$ mapping $x\mapsto g\l(f\l(x\r)\r)$.
* A function $f:X\to Y$ is <b>injective</b> if $f\l(x\r)=f\l(x'\r)$ implies $x=x'$ for all $x,x'\in X$, and is <b>surjective</b> if $\ran f\coloneqq\ran\Gamma_{\!f}=Y$.
* A function is <b>bijective</b> if it is both injective and surjective; they are the isomorphisms in $\catset$.

```

<b>Remark.</b> If $f:X\to Y$ is an injection, we write $f:X\into Y$, and if it is a surjection, we write $f:X\onto Y$. Compositions of injections are again injections, and compositions of surjections are again surjections.<span style="float:right;">$\blacklozenge$</span>
