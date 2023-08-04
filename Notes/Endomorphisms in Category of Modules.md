---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 04/08/2023 15:27:00
Tags: #Type/Example #Topic/Module_Theory

Examples: <i>Not Applicable</i>
Abstractions: [[Endomorphism (Category Theory)]]
Constructions: [[Eigenvalue]], [[Characteristic Polynomial]], [[Minimal Polynomial]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Example
title: Example.

The <b>endomorphism $R$-algebra</b> of an $R$-module $M$ over a commutative ring $R$ is the $R$-algebra $\End_{\catmod[R]}\!\l(M\r)$ under the induced addition, left $R$-action, and composition of maps.

```

<b>Remark.</b> Let $M$ be a fin-gen. free $R$-module. After fixing an isomorphism $M\iso R^n$, every $\alpha\in\End\l(R^n\r)$ is determined uniquely by a square matrix $A\in\Mat_n\!\l(R\r)$, which acts on elements in $R^n$ by left-multiplication.
* We say that two matrices $A_1$ and $A_2$ are <b>similar</b> if they represent the same homomorphism up to a <i>single</i> choice of basis for $M$, which occurs iff there is an invertible matrix $P\in\Mat_n\!\l(R\r)$ such that $A_2=PA_1P^{-1}$. Note that this is distinct from ‘equivalence of matrices’, where <i>two</i> choices of bases $B_1$ and $B_2$ for $M$ are made and we treat $\alpha\in\Hom\l(F^R\!\l(B_1\r),F^R\!\l(B_2\r)\r)$.

We lift this notion and say that two endomorphisms $\alpha_1,\alpha_2\in\End\l(M\r)$ are <b>similar</b> iff there is an automorphism $\pi\in\Aut\l(M\r)$ such that $\alpha_2=\pi\alpha_1\pi^{-1}$; this is precisely the conjugation action of $\GL\l(M\r)$ on $\End\l(M\r)$.<span style="float:right;">$\blacklozenge$</span>
