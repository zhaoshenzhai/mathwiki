<div class="topSpace"></div>

Date Created: 26/01/2023 12:43:49
Tags: #Type/Definition #Topic/Module_Theory

Types: [[Nilpotent Operator]], [[Diagonalizable Operator]], [[Normal Operator]], [[Bounded Linear Map]]
Examples: <i>Not Applicable</i>
Constructions: [[Kernel and Cokernel (Module Theory)]], [[General Linear Group]], [[Dual Space]], [[Dual Map]], [[Adjoint Map]], [[Eigenvalue]], [[Characteristic Polynomial]], [[Minimal Polynomial]], [[Cyclic Subspace]]
Generalizations: [[Antilinear Map]], [[Multilinear Map]]

Properties: [[Monomorphisms and epimorphisms in category of modules]], [[Change of basis for linear maps]], [[Schur's Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Isomorphism of objects is an equivalence relation]], [[Invariant Basis Number]]

``` ad-Definition
title: Definition.

Let $M$ and $N$ be left $R$-modules. An <b>$R$-module homomorphism/linear map from $M$ to $N$</b> is a function $\phi:M\to N$ such that $\phi\l(rm+n\r)=r\phi\l(m\r)+\phi\l(n\r)$ for all $r\in R$ and $m,n\in M$.
* The <b>category of $R$-modules</b> is the category $\catmod[R]$ whose objects are $R$-modules and whose morphisms are $R$-module homomorphisms.
* An <b>$R$-module isomorphism</b> is an isomorphisms in $\catmod[R]$; equivalently, it is a bijective $R$-module homomorphism.
* Two $R$-modules $M$ and $N$ are said to be <b>isomorphic</b> if there is an $R$-module isomorphism.

Elements in $\End\l(M\r)$ are called <b>linear operators</b>.

```

<b>Remark.</b> As in $\catabgrp$, the morphisms $\Hom_{\catmod[R]}\!\l(M,N\r)$ is an abelian group under the component-wise addition. If furthermore $R$ is commutative, then it is also an $R$-module via the component-wise left $R$-action.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Let $M$ and $N$ be finitely-generated free $R$-modules, so there are isomorphisms $M\iso R^n$ and $N\iso R^m$ for some $m,n\in\N$. After fixing such isomorphisms, every $R$-module homomorphism $\phi\in\Hom\l(R^n,R^m\r)$ is determined uniquely by an $m\times n$ matrix $A\in\Mat_{m\times n}\!\l(R\r)$, acting on elements in $R^n$ by left-multiplication. This gives us an isomorphism $\Hom\l(R^n,R^m\r)\iso\Mat_{m\times n}\!\l(R\r)$, but is <i>not</i> canonical as it depends on the choice of bases for $M$ and $N$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Submodules are preserved under images and preimages of $\phi$. In particular, $\ker\phi$ is a submodule of $M$.<span style="float:right;">$\blacklozenge$</span>
