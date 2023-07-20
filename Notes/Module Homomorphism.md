<div class="topSpace"></div>

Date Created: 26/01/2023 12:43:49
Tags: #Type/Definition #Topic/Module_Theory

Types: [[Nilpotent Operator]], [[Diagonalizable Operator]], [[Normal Operator]], [[Bounded Linear Map]]
Examples: <i>Not Applicable</i>
Constructions: [[Kernel and Cokernel (Module Theory)]], [[Dual Map]], [[Adjoint Map]], [[Eigenvalue]], [[Characteristic Polynomial]], [[Minimal Polynomial]], [[Cyclic Subspace]]
Generalizations: [[Antilinear Map]], [[Multilinear Map]]

Properties: [[Monomorphisms and epimorphisms in category of modules]], [[Change of basis for linear maps]], [[Schur's Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Action of linear map repr under basis left-multiplication of matrix representation]]
Justifications: [[Isomorphism of objects is an equivalence relation]]

``` ad-Definition
title: Definition.

Let $M$ and $N$ be left $R$-modules. An <b>$R$-module homomorphism/linear map from $M$ to $N$</b> is a function $\phi:M\to N$ such that $\phi\l(rm+n\r)=r\phi\l(m\r)+\phi\l(n\r)$ for all $r\in R$ and $m,n\in M$.
* The <b>category of $R$-modules</b> is the category $\catmod[R]$ whose objects are $R$-modules and whose morphisms are $R$-module homomorphisms.
* An <b>$R$-module isomorphism</b> is an isomorphisms in $\catmod[R]$; equivalently, it is a bijective $R$-module homomorphism.
* Two $R$-modules $M$ and $N$ are said to be <b>isomorphic</b> if there is an $R$-module isomorphism.

```

<b>Remark.</b> Submodules are preserved under images and preimages of $\phi$. In particular, $\ker\phi$ is a submodule of $M$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> As in $\catabgrp$, the morphisms $\Hom_{\catmod[R]}\!\l(M,N\r)$ is an abelian group under the component-wise addition. If furthermore $R$ is commutative, then it is also an $R$-module via the component-wise left $R$-action.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Elements in $\End\l(M\r)$ are sometimes called <b>linear operators</b>, especially in functional analysis.<span style="float:right;">$\blacklozenge$</span>
